/**
 * Business email validation: block disposable domains, short/random local parts, fake patterns.
 * Allows e.g. clinicname@gmail.com; blocks abc@gmail.com, test123@gmail.com, tempmail addresses.
 */

const MIN_LOCAL_PART_LENGTH = 4;

const FAKE_LOCAL_PREFIXES = [
  "test",
  "admin",
  "demo",
  "temp",
  "fake",
  "noreply",
  "no.reply",
  "sample",
  "example",
  "asdf",
  "qwer",
  "user",
  "mail",
  "noone",
  "null",
  "trash",
  "spam",
  "throwaway",
];

// Well-known disposable/temp email domains (curated subset; extend as needed)
const DISPOSABLE_DOMAINS = new Set(
  [
    "10minutemail.com",
    "10minutemail.net",
    "guerrillamail.com",
    "guerrillamail.net",
    "guerrillamail.org",
    "mailinator.com",
    "tempmail.com",
    "tempmail.net",
    "throwaway.email",
    "temp-mail.org",
    "fakeinbox.com",
    "trashmail.com",
    "yopmail.com",
    "getnada.com",
    "maildrop.cc",
    "sharklasers.com",
    "guerrillamail.info",
    "guerrillamail.biz",
    "guerrillamail.de",
    "dispostable.com",
    "discard.email",
    "discardmail.com",
    "disposable.com",
    "disposemail.com",
    "emailondeck.com",
    "mailnesia.com",
    "mintemail.com",
    "mohmal.com",
    "mytemp.email",
    "tempail.com",
    "tempinbox.com",
    "tempmailo.com",
    "tmpmail.org",
    "inboxkitten.com",
    "minuteinbox.com",
    "33mail.com",
    "mailinator2.com",
    "spamgourmet.com",
    "mailcatch.com",
    "mytempemail.com",
    "tempinbox.co",
    "fake-box.com",
    "disposablemail.xyz",
    "emailfake.com",
    "emltmp.com",
    "getairmail.com",
    "inboxbear.com",
    "mytempmail.com",
    "temp-mail.live",
    "tempmail.plus",
    "anonymousemail.me",
    "burnermail.io",
    "hidemail.net",
    "hidemyass.com",
    "incognitomail.com",
    "jetable.org",
    "mailnesia.com",
    "mytemp.email",
    "nospamfor.us",
    "spam4.me",
    "spamfree24.org",
    "throwawaymail.com",
    "tmpeml.com",
    "yapped.net",
  ].map((d) => d.toLowerCase())
);

function getLocalPart(email: string): string {
  const at = email.indexOf("@");
  return at === -1 ? "" : email.slice(0, at).trim();
}

function getDomain(email: string): string {
  const at = email.indexOf("@");
  return at === -1 ? "" : email.slice(at + 1).trim().toLowerCase();
}

function isAllDigitsOrDots(s: string): boolean {
  return /^[\d.]+$/.test(s);
}

export function validateBusinessEmail(email: string): { valid: boolean; reason?: string } {
  const trimmed = (email || "").trim();
  if (!trimmed) return { valid: false, reason: "empty" };

  const at = trimmed.indexOf("@");
  if (at === -1 || at === 0 || at === trimmed.length - 1)
    return { valid: false, reason: "invalid_format" };

  const local = getLocalPart(trimmed);
  const domain = getDomain(trimmed);

  if (local.length < MIN_LOCAL_PART_LENGTH)
    return { valid: false, reason: "local_too_short" };

  if (isAllDigitsOrDots(local))
    return { valid: false, reason: "fake_pattern" };

  const localLower = local.toLowerCase();
  for (const prefix of FAKE_LOCAL_PREFIXES) {
    if (localLower === prefix || localLower.startsWith(prefix + ".") || localLower.startsWith(prefix + "_") || localLower.startsWith(prefix + "-"))
      return { valid: false, reason: "fake_pattern" };
  }

  if (DISPOSABLE_DOMAINS.has(domain))
    return { valid: false, reason: "disposable" };

  return { valid: true };
}
