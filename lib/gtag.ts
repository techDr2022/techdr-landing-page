declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: unknown[];
  }
}

export {};

const GOOGLE_ADS_ID = "AW-11117817231";
const GOOGLE_CONVERSION_SEND_TO = "AW-11117817231/U18mCPSf2_YbEI_bsbUp";

let conversionFired = false;

export function trackGoogleAdsConversionOnce() {
  if (typeof window === "undefined") return;
  if (conversionFired) return;

  window.gtag?.("event", "conversion", {
    send_to: GOOGLE_CONVERSION_SEND_TO,
  });

  conversionFired = true;
}

export function getGoogleAdsId() {
  return GOOGLE_ADS_ID;
}

