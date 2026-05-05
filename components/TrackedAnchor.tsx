"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackCtaClick } from "@/lib/analytics";

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  ctaLabel: string;
  ctaLocation: string;
};

export function TrackedAnchor({
  children,
  ctaLabel,
  ctaLocation,
  onClick,
  ...props
}: TrackedAnchorProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackCtaClick(ctaLabel, ctaLocation);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
