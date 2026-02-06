import { NextResponse } from "next/server";
import { Resend } from "resend";

const NOTIFY_EMAIL = "info@techdr.in";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not set in environment variables");
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const formData = await req.formData();

    const clinicName = (formData.get("clinicName") || "") as string;
    const phone = (formData.get("phone") || "") as string;
    const city = (formData.get("city") || "") as string;
    const speciality = (formData.get("speciality") || "") as string;
    const email = (formData.get("email") || "") as string;

    if (!email) {
      console.error("Email is required");
      return NextResponse.redirect(new URL("/?submitted=0", req.url), {
        status: 303,
      });
    }

    const html = `
      <h2>New Clinic Growth Plan Request</h2>
      <p><strong>Doctor / Clinic Name:</strong> ${clinicName || "-"}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Email:</strong> ${email || "-"}</p>
      <p><strong>City:</strong> ${city || "-"}</p>
      <p><strong>Speciality:</strong> ${speciality || "-"}</p>
    `;

    // Use onboarding@resend.dev if custom domain not verified, otherwise use configured email
    const fromEmail = process.env.RESEND_FROM || `onboarding@resend.dev`;

    console.log("Attempting to send email from:", fromEmail);
    console.log("To:", NOTIFY_EMAIL);

    const result = await resend.emails.send({
      from: fromEmail,
      to: NOTIFY_EMAIL,
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
          to: NOTIFY_EMAIL,
          subject: "New Free Clinic Growth Plan Request",
          replyTo: email || undefined,
          html,
        });
        
        if (retryResult.error) {
          console.error("Retry also failed:", JSON.stringify(retryResult.error, null, 2));
          return NextResponse.redirect(new URL("/?submitted=0", req.url), {
            status: 303,
          });
        }
        
        console.log("Email sent successfully with fallback:", retryResult.data);
        return NextResponse.redirect(new URL("/?submitted=1", req.url), {
          status: 303,
        });
      }
      
      return NextResponse.redirect(new URL("/?submitted=0", req.url), {
        status: 303,
      });
    }

    console.log("Email sent successfully:", result.data);

    return NextResponse.redirect(new URL("/?submitted=1", req.url), {
      status: 303,
    });
  } catch (error) {
    console.error("Error sending clinic growth email:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return NextResponse.redirect(new URL("/?submitted=0", req.url), {
      status: 303,
    });
  }
}
