"use client";

import { useState } from "react";
import { DemoModal } from "./DemoModal";

type DemoButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function DemoButton({ children, className = "" }: DemoButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
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
