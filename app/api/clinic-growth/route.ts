import { NextResponse } from "next/server";
import { Resend } from "resend";
import { sendCustomerConfirmation } from "@/lib/email-customer";

// Resend testing only allows sending to account email. Default: contact@techdr.in. Set RESEND_TO=info@techdr.in when domain is verified.
const DEFAULT_NOTIFY_EMAIL = "contact@techdr.in";

function redirectError(req: Request, code: "config" | "email_required" | "send_failed") {
  const url = new URL("/", req.url);
  url.searchParams.set("submitted", "0");
  url.searchParams.set("error", code);
  return NextResponse.redirect(url, { status: 303 });
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

    const clinicName = (formData.get("clinicName") || "") as string;
    const phone = (formData.get("phone") || "") as string;
    const city = (formData.get("city") || "") as string;
    const speciality = (formData.get("speciality") || "") as string;
    const email = (formData.get("email") || "") as string;

    if (!email?.trim()) {
      console.error("Email is required");
      return redirectError(req, "email_required");
    }

    const html = `
      <h2>New Clinic Growth Plan Request</h2>
      <p><strong>Doctor / Clinic Name:</strong> ${clinicName || "-"}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Email:</strong> ${email || "-"}</p>
      <p><strong>City:</strong> ${city || "-"}</p>
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
        return NextResponse.redirect(new URL("/?submitted=1", req.url), {
          status: 303,
        });
      }

      return redirectError(req, "send_failed");
    }

    console.log("Email sent successfully:", result.data);
    await sendCustomerConfirmation(resend, fromEmail, email, clinicName || "there", "growth");

    return NextResponse.redirect(new URL("/?submitted=1", req.url), {
      status: 303,
    });
  } catch (error) {
    console.error("Error sending clinic growth email:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return redirectError(req, "send_failed");
  }
}
