"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

type ThankYouTrackingProps = {
  formType: "clinic_growth" | "gmb_bangalore" | "google_ads_bangalore";
};

export function ThankYouTracking({ formType }: ThankYouTrackingProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "techdr_thank_you_view",
      form_type: formType,
      page_type: "thank_you",
    });

    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        form_type: formType,
        page_type: "thank_you",
      });
    }
  }, [formType]);

  return null;
}

