"use client";

import { useState } from "react";
import { DemoModal } from "./DemoModal";
import { trackCtaClick } from "@/lib/analytics";

type DemoButtonProps = {
  children: React.ReactNode;
  className?: string;
  ctaLabel?: string;
  ctaLocation?: string;
};

export function DemoButton({
  children,
  className = "",
  ctaLabel = "Demo Button",
  ctaLocation = "unknown",
}: DemoButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          trackCtaClick(ctaLabel, ctaLocation);
          setIsOpen(true);
        }}
        className={className}
      >
        {children}
      </button>
      <DemoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
