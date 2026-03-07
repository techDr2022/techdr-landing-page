import { NextResponse } from "next/server";
import { Resend } from "resend";
import { sendCustomerConfirmation } from "@/lib/email-customer";

const DEFAULT_NOTIFY_EMAIL = "contact@techdr.in";

const RECAPTCHA_MIN_SCORE = 0.5;

function redirectError(
  req: Request,
  basePath: string,
  code: "config" | "send_failed" | "recaptcha_failed"
) {
  const url = new URL(basePath, req.url);
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
  const basePath = "/google-ads-bangalore";

  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not set in environment variables");
      return redirectError(req, basePath, "config");
    }

    const resend = new Resend(apiKey);
    const formData = await req.formData();

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaToken = (formData.get("g-recaptcha-response") || "") as string;
    if (recaptchaSecret) {
      if (!recaptchaToken?.trim()) {
        console.error("reCAPTCHA token missing");
        return redirectError(req, basePath, "recaptcha_failed");
      }
      const { success, score } = await verifyRecaptcha(recaptchaToken, recaptchaSecret);
      if (!success || (typeof score === "number" && score < RECAPTCHA_MIN_SCORE)) {
        console.error("reCAPTCHA verification failed or low score", { success, score });
        return redirectError(req, basePath, "recaptcha_failed");
      }
    }

    const doctorName = (formData.get("doctorName") || "") as string;
    const clinicName = (formData.get("clinicName") || "") as string;
    const speciality = (formData.get("speciality") || "") as string;
    const locationBangalore = (formData.get("locationBangalore") || "") as string;
    const phone = (formData.get("phone") || "") as string;
    const email = (formData.get("email") || "") as string;
    const adBudget = (formData.get("adBudget") || "") as string;

    const html = `
      <h2>Google Ads Bangalore – New Lead</h2>
      <p><strong>Doctor Name:</strong> ${doctorName || "-"}</p>
      <p><strong>Clinic Name:</strong> ${clinicName || "-"}</p>
      <p><strong>Speciality:</strong> ${speciality || "-"}</p>
      <p><strong>Location in Bangalore:</strong> ${locationBangalore || "-"}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Email:</strong> ${email || "-"}</p>
      <p><strong>Monthly ad budget (optional):</strong> ${adBudget || "-"}</p>
    `;

    const fromEmail =
      process.env.RESEND_FROM?.trim() && !process.env.RESEND_FROM.includes("resend.dev")
        ? process.env.RESEND_FROM.trim()
        : "TechDr <contact@techdr.in>";
    const toEmail = process.env.RESEND_TO || DEFAULT_NOTIFY_EMAIL;

    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: "Google Ads Bangalore – New Lead",
      replyTo: email?.trim() || undefined,
      html,
    });

    if (result.error) {
      console.error("Resend API error:", JSON.stringify(result.error, null, 2));
      if (fromEmail !== "onboarding@resend.dev" && result.error.message?.includes("domain")) {
        const retryResult = await resend.emails.send({
          from: "onboarding@resend.dev",
          to: toEmail,
          subject: "Google Ads Bangalore – New Lead",
          replyTo: email?.trim() || undefined,
          html,
        });
        if (retryResult.error) {
          return redirectError(req, basePath, "send_failed");
        }
        if (email?.trim()) {
          await sendCustomerConfirmation(
            resend,
            fromEmail,
            email.trim(),
            doctorName?.trim() || clinicName?.trim() || "there",
            "growth"
          );
        }
        return NextResponse.redirect(new URL(`${basePath}?submitted=1`, req.url), {
          status: 303,
        });
      }
      return redirectError(req, basePath, "send_failed");
    }

    if (email?.trim()) {
      await sendCustomerConfirmation(
        resend,
        fromEmail,
        email.trim(),
        doctorName?.trim() || clinicName?.trim() || "there",
        "growth"
      );
    }

    return NextResponse.redirect(new URL(`${basePath}?submitted=1`, req.url), {
      status: 303,
    });
  } catch (error) {
    console.error("Error sending Google Ads Bangalore lead email:", error);
    return redirectError(req, basePath, "send_failed");
  }
}
