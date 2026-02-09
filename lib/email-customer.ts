import { Resend } from "resend";

export type ConfirmationType = "growth" | "demo";

const REPLY_TO = process.env.RESEND_REPLY_TO || "contact@techdr.in";

function getCustomerConfirmationContent(recipientName: string, type: ConfirmationType) {
  const isGrowth = type === "growth";
  const title = isGrowth
    ? "We received your request for a Free Clinic Growth Plan"
    : "We received your demo request";
  const nextStep = isGrowth
    ? "Our healthcare growth team will review your details and get in touch within 1–2 business days with a tailored plan and next steps."
    : "Our team will reach out within 1–2 business days to schedule a time that works for you.";
  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;font-family:system-ui,-apple-system,sans-serif;background:#f8fafc;padding:24px;">
  <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:16px;border:1px solid #e2e8f0;overflow:hidden;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
    <div style="background:linear-gradient(135deg,#059669 0%,#0d9488 100%);padding:28px 24px;text-align:center;">
      <p style="margin:0;font-size:14px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;color:rgba(255,255,255,0.9);">TechDr</p>
      <h1 style="margin:12px 0 0;font-size:22px;font-weight:700;color:#fff;">Thank you for reaching out</h1>
    </div>
    <div style="padding:28px 24px;color:#334155;line-height:1.6;">
      <p style="margin:0 0 16px;font-size:16px;">Hi ${recipientName},</p>
      <p style="margin:0 0 16px;font-size:15px;">${title}.</p>
      <p style="margin:0 0 20px;font-size:15px;">${nextStep}</p>
      <p style="margin:0 0 8px;font-size:15px;">If you have any questions in the meantime, just reply to this email.</p>
      <p style="margin:24px 0 0;font-size:15px;">Best regards,<br><strong>The TechDr Team</strong></p>
    </div>
    <div style="padding:16px 24px;background:#f1f5f9;font-size:12px;color:#64748b;text-align:center;">
      Healthcare growth · Marketing, automation &amp; booking for doctors &amp; clinics
    </div>
  </div>
</body>
</html>`;
  const text = `Hi ${recipientName},\n\n${title}.\n\n${nextStep}\n\nIf you have any questions, just reply to this email.\n\nBest regards,\nThe TechDr Team\n\n—\nTechDr · Healthcare growth for doctors & clinics`;
  return { html, text };
}

export async function sendCustomerConfirmation(
  resend: Resend,
  fromEmail: string,
  customerEmail: string,
  recipientName: string,
  type: ConfirmationType
) {
  const to = customerEmail?.trim();
  if (!to) {
    console.error("Customer confirmation skipped: no customer email");
    return;
  }
  // Customer emails must use verified domain; onboarding@resend.dev can only send to your own address
  const verifiedFrom = "TechDr <contact@techdr.in>";
  const from =
    process.env.RESEND_FROM?.trim() && !process.env.RESEND_FROM.includes("resend.dev")
      ? process.env.RESEND_FROM.trim()
      : fromEmail.includes("resend.dev")
        ? verifiedFrom
        : fromEmail;
  const subject =
    type === "growth"
      ? "We received your Clinic Growth Plan request – TechDr"
      : "We received your demo request – TechDr";
  const { html, text } = getCustomerConfirmationContent(recipientName, type);
  console.log("Sending customer confirmation to:", to, "from:", from);
  const r = await resend.emails.send({
    from: from,
    to: [to],
    replyTo: REPLY_TO,
    subject,
    html,
    text,
  });
  if (r.error) {
    console.error("Customer confirmation FAILED for", to, ":", JSON.stringify(r.error, null, 2));
  } else {
    console.log("Customer confirmation sent to:", to, "id:", r.data?.id);
  }
}
