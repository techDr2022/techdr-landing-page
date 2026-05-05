export type CtaClickEvent = {
  event: "techdr_cta_click";
  cta_label: string;
  cta_location: string;
};

export function trackCtaClick(cta_label: string, cta_location: string) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "techdr_cta_click",
    cta_label,
    cta_location,
  } satisfies CtaClickEvent);
}
