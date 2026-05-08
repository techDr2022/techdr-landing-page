import { NextResponse } from "next/server";
import { Resend } from "resend";
import { sendCustomerConfirmation } from "@/lib/email-customer";
import { validateBusinessEmail } from "@/lib/email-validation";

// Resend testing only allows sending to account email. Default: contact@techdr.in. Set RESEND_TO=info@techdr.in when domain is verified.
const DEFAULT_NOTIFY_EMAIL = "contact@techdr.in";

const RECAPTCHA_MIN_SCORE = 0.7;
const DUPLICATE_WINDOW_MS = 24 * 60 * 60 * 1000; // 24h
const leadFingerprintSeenAt = new Map<string, number>();

function normalizePhone(raw: string): string {
  const digits = (raw || "").replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  return digits;
}

function buildLeadFingerprint(email: string, phone: string): string {
  return `${email.trim().toLowerCase()}::${normalizePhone(phone)}`;
}

function isDuplicateLead(email: string, phone: string): boolean {
  const now = Date.now();

  for (const [key, ts] of leadFingerprintSeenAt.entries()) {
    if (now - ts > DUPLICATE_WINDOW_MS) {
      leadFingerprintSeenAt.delete(key);
    }
  }

  const fingerprint = buildLeadFingerprint(email, phone);
  const lastSeenAt = leadFingerprintSeenAt.get(fingerprint);
  if (lastSeenAt && now - lastSeenAt <= DUPLICATE_WINDOW_MS) {
    return true;
  }

  leadFingerprintSeenAt.set(fingerprint, now);
  return false;
}

function isLikelyValidIndianMobile(raw: string): boolean {
  const digits = (raw || "").replace(/\D/g, "");
  if (digits.length === 10) return /^[6-9]\d{9}$/.test(digits);
  if (digits.length === 12 && digits.startsWith("91")) return /^[6-9]\d{9}$/.test(digits.slice(2));
  return false;
}

function redirectError(
  req: Request,
  code:
    | "config"
    | "email_required"
    | "send_failed"
    | "recaptcha_failed"
    | "invalid_email"
    | "name_required"
    | "phone_required"
    | "invalid_phone"
    | "spam_detected"
    | "duplicate_lead"
) {
  const url = new URL("/", req.url);
  url.searchParams.set("submitted", "0");
  url.searchParams.set("error", code);
  return NextResponse.redirect(url, { status: 303 });
}

async function verifyRecaptcha(
  token: string,
  secret: string
): Promise<{ success: boolean; score?: number; errorCodes?: string[] }> {
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });
  const data = (await res.json()) as {
    success: boolean;
    score?: number;
    "error-codes"?: string[];
  };
  const errorCodes = data["error-codes"];
  if (errorCodes?.length) {
    console.error("reCAPTCHA verify error-codes:", errorCodes);
  }
  return {
    success: !!data.success,
    score: data.score,
    errorCodes,
  };
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not set in environment variables");
      return redirectError(req, "config");
    }

    const resend = new Resend(apiKey);
    const formData = await req.formData();

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaToken = (formData.get("g-recaptcha-response") || "") as string;
    if (recaptchaSecret) {
      if (!recaptchaToken?.trim()) {
        console.error("reCAPTCHA token missing");
        return redirectError(req, "recaptcha_failed");
      }
      const { success, score, errorCodes } = await verifyRecaptcha(recaptchaToken, recaptchaSecret);
      console.log("reCAPTCHA clinic-growth score", {
        score,
        minRequired: RECAPTCHA_MIN_SCORE,
      });
      if (!success || (typeof score === "number" && score < RECAPTCHA_MIN_SCORE)) {
        console.error("reCAPTCHA verification failed or low score", {
          success,
          score,
          errorCodes,
        });
        return redirectError(req, "recaptcha_failed");
      }
    }

    const clinicName = (formData.get("clinicName") || "") as string;
    const phone = (formData.get("phone") || "") as string;
    const city = (formData.get("city") || "") as string;
    const speciality = (formData.get("speciality") || "") as string;
    const email = (formData.get("email") || "") as string;
    const clinicType = (formData.get("clinicType") || "") as string;
    const monthlyBudget = (formData.get("monthlyBudget") || "") as string;
    const websiteLink = (formData.get("websiteLink") || "") as string;
    const honeypot = (formData.get("company_website") || "") as string;

    if (honeypot?.trim()) {
      console.warn("Blocked clinic-growth submission by honeypot");
      return redirectError(req, "spam_detected");
    }

    if (!email?.trim()) {
      console.error("Email is required");
      return redirectError(req, "email_required");
    }
    const emailValidation = validateBusinessEmail(email);
    if (!emailValidation.valid) {
      console.error("Business email validation failed", emailValidation.reason);
      return redirectError(req, "invalid_email");
    }
    if (!clinicName?.trim() || clinicName.trim().length < 3) {
      console.error("Clinic/doctor name is required");
      return redirectError(req, "name_required");
    }
    if (!clinicType?.trim()) {
      console.error("Clinic type is required");
      return redirectError(req, "email_required");
    }
    if (!monthlyBudget?.trim()) {
      console.error("Monthly marketing budget is required");
      return redirectError(req, "email_required");
    }
    if (!city?.trim()) {
      console.error("City is required");
      return redirectError(req, "email_required");
    }
    if (!phone?.trim()) {
      console.error("Phone number is required");
      return redirectError(req, "phone_required");
    }
    if (!isLikelyValidIndianMobile(phone)) {
      console.error("Phone number appears invalid");
      return redirectError(req, "invalid_phone");
    }
    if (isDuplicateLead(email, phone)) {
      console.warn("Duplicate clinic-growth lead blocked", {
        email: email.trim().toLowerCase(),
      });
      return redirectError(req, "duplicate_lead");
    }

    const html = `
      <h2>New Clinic Growth Plan Request</h2>
      <p><strong>Doctor / Clinic Name:</strong> ${clinicName || "-"}</p>
      <p><strong>Clinic Type:</strong> ${clinicType || "-"}</p>
      <p><strong>Monthly Marketing Budget:</strong> ${monthlyBudget || "-"}</p>
      <p><strong>City:</strong> ${city || "-"}</p>
      <p><strong>Website / Google Maps Link:</strong> ${websiteLink ? `<a href="${websiteLink}">${websiteLink}</a>` : "-"}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Email:</strong> ${email || "-"}</p>
      <p><strong>Speciality:</strong> ${speciality || "-"}</p>
    `;

    const fromEmail =
      process.env.RESEND_FROM?.trim() && !process.env.RESEND_FROM.includes("resend.dev")
        ? process.env.RESEND_FROM.trim()
        : "TechDr <contact@techdr.in>";
    const toEmail = process.env.RESEND_TO || DEFAULT_NOTIFY_EMAIL;

    console.log("Attempting to send email from:", fromEmail, "to:", toEmail);

    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: "New Free Clinic Growth Plan Request",
      replyTo: email || undefined,
      html,
    });

    if (result.error) {
      console.error("Resend API error:", JSON.stringify(result.error, null, 2));

      // If domain not verified, try with onboarding@resend.dev
      if (fromEmail !== "onboarding@resend.dev" && result.error.message?.includes("domain")) {
        console.log("Retrying with onboarding@resend.dev...");
        const retryResult = await resend.emails.send({
          from: "onboarding@resend.dev",
          to: toEmail,
          subject: "New Free Clinic Growth Plan Request",
          replyTo: email || undefined,
          html,
        });

        if (retryResult.error) {
          console.error("Retry also failed:", JSON.stringify(retryResult.error, null, 2));
          return redirectError(req, "send_failed");
        }

        console.log("Email sent successfully with fallback:", retryResult.data);
        await sendCustomerConfirmation(resend, fromEmail, email, clinicName || "there", "growth");
        return NextResponse.redirect(
          new URL("/thank-you?form_type=clinic_growth", req.url),
          {
            status: 303,
          }
        );
      }

      return redirectError(req, "send_failed");
    }

    console.log("Email sent successfully:", result.data);
    await sendCustomerConfirmation(resend, fromEmail, email, clinicName || "there", "growth");

    return NextResponse.redirect(
      new URL("/thank-you?form_type=clinic_growth", req.url),
      {
          status: 303,
      }
    );
  } catch (error) {
    console.error("Error sending clinic growth email:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return redirectError(req, "send_failed");
  }
}
