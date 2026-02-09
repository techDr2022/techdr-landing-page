import { NextResponse } from "next/server";
import { Resend } from "resend";
import { sendCustomerConfirmation } from "@/lib/email-customer";

// Resend testing only allows sending to account email. Default: contact@techdr.in. Set RESEND_TO=info@techdr.in when domain is verified.
const DEFAULT_NOTIFY_EMAIL = "contact@techdr.in";

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
    const body = await req.json();

    const { email, name, whatsapp } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const html = `
      <h2>New Demo Request</h2>
      <p><strong>Name:</strong> ${name || "-"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>WhatsApp:</strong> ${whatsapp || "-"}</p>
    `;

    const fromEmail =
      process.env.RESEND_FROM?.trim() && !process.env.RESEND_FROM.includes("resend.dev")
        ? process.env.RESEND_FROM.trim()
        : "TechDr <contact@techdr.in>";
    const toEmail = process.env.RESEND_TO || DEFAULT_NOTIFY_EMAIL;

    console.log("Attempting to send demo request email from:", fromEmail, "to:", toEmail);

    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: "New Demo Request",
      replyTo: email || undefined,
      html,
    });

    if (result.error) {
      const errMsg = result.error.message || "Unknown Resend error";
      console.error("Resend API error:", JSON.stringify(result.error, null, 2));

      // If domain not verified, try with onboarding@resend.dev
      if (fromEmail !== "onboarding@resend.dev" && errMsg.toLowerCase().includes("domain")) {
        console.log("Retrying with onboarding@resend.dev...");
        const retryResult = await resend.emails.send({
          from: "onboarding@resend.dev",
          to: toEmail,
          subject: "New Demo Request",
          replyTo: email || undefined,
          html,
        });

        if (retryResult.error) {
          console.error("Retry also failed:", JSON.stringify(retryResult.error, null, 2));
          const retryMsg = retryResult.error.message || "Send failed";
          return NextResponse.json(
            { error: `Failed to send email: ${retryMsg}` },
            { status: 500 }
          );
        }

        console.log("Email sent successfully with fallback:", retryResult.data);
        await sendCustomerConfirmation(resend, fromEmail, email, name || "there", "demo");
        return NextResponse.json({ success: true });
      }

      return NextResponse.json(
        { error: `Failed to send email: ${errMsg}` },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", result.data);
    await sendCustomerConfirmation(resend, fromEmail, email, name || "there", "demo");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending demo request email:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
