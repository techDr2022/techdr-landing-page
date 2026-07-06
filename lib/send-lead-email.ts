import type { Resend } from "resend";

const DEFAULT_NOTIFY_EMAIL = "contact@techdr.in";
const SANDBOX_FROM = "onboarding@resend.dev";

export type LeadEmailPayload = {
  subject: string;
  html: string;
  replyTo?: string;
};

function formatFromAddress(address: string): string {
  const trimmed = address.trim();
  if (!trimmed) return "TechDr <contact@techdr.in>";
  if (trimmed.includes("<")) return trimmed;
  return `TechDr <${trimmed}>`;
}

function getPreferredFrom(): string {
  const configured = process.env.RESEND_FROM?.trim();
  if (configured && !configured.includes("resend.dev")) {
    return formatFromAddress(configured);
  }
  return formatFromAddress(DEFAULT_NOTIFY_EMAIL);
}

function getRecipientCandidates(): string[] {
  const configured = process.env.RESEND_TO?.trim();
  const account = process.env.RESEND_ACCOUNT_EMAIL?.trim() || DEFAULT_NOTIFY_EMAIL;
  return [...new Set([configured, account, DEFAULT_NOTIFY_EMAIL].filter((e): e is string => Boolean(e)))];
}

function isDomainVerificationError(message?: string): boolean {
  const normalized = (message || "").toLowerCase();
  return normalized.includes("domain") || normalized.includes("not verified");
}

function isSandboxRecipientError(message?: string): boolean {
  const normalized = (message || "").toLowerCase();
  return (
    normalized.includes("only send") ||
    normalized.includes("testing emails") ||
    normalized.includes("your own email")
  );
}

export async function sendLeadEmail(
  resend: Resend,
  payload: LeadEmailPayload
): Promise<{ ok: true; id?: string } | { ok: false; error: string }> {
  const recipients = getRecipientCandidates();
  const preferredFrom = getPreferredFrom();

  const send = (from: string, to: string) =>
    resend.emails.send({
      from,
      to,
      subject: payload.subject,
      replyTo: payload.replyTo,
      html: payload.html,
    });

  const primaryTo = recipients[0] || DEFAULT_NOTIFY_EMAIL;
  const primary = await send(preferredFrom, primaryTo);

  if (!primary.error) {
    console.log("Lead email sent:", { from: preferredFrom, to: primaryTo, id: primary.data?.id });
    return { ok: true, id: primary.data?.id };
  }

  console.error("Resend primary send failed:", {
    from: preferredFrom,
    to: primaryTo,
    error: primary.error,
  });

  const needsSandbox =
    isDomainVerificationError(primary.error.message) ||
    preferredFrom.includes("resend.dev");

  if (!needsSandbox && !isSandboxRecipientError(primary.error.message)) {
    return { ok: false, error: primary.error.message || "Failed to send email" };
  }

  console.log("Retrying lead email with Resend sandbox sender...");

  for (const to of recipients) {
    const result = await send(SANDBOX_FROM, to);
    if (!result.error) {
      console.log("Lead email sent via sandbox:", { to, id: result.data?.id });
      return { ok: true, id: result.data?.id };
    }

    console.error("Resend sandbox send failed:", { to, error: result.error });
  }

  return {
    ok: false,
    error:
      "Could not deliver lead email. Verify techdr.in in Resend or set RESEND_ACCOUNT_EMAIL to your Resend account email.",
  };
}
