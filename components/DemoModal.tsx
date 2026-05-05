"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { ClinicGrowthForm } from "./ClinicGrowthForm";

type DemoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("demo-modal-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("demo-modal-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("demo-modal-open");
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center sm:items-center sm:p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative mx-auto h-[92dvh] w-full max-w-2xl rounded-t-3xl bg-white shadow-2xl sm:my-8 sm:h-auto sm:rounded-2xl">
        <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-slate-200 sm:hidden" />
        <div className="sticky top-0 z-10 border-b border-slate-100 bg-white px-4 pb-3 pt-3 sm:px-6">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 sm:right-4"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="pr-10 text-xl font-bold text-slate-900 sm:text-2xl">
          Get a Free Consultation
        </h2>
        <p className="mt-1 pr-10 text-xs text-slate-600 sm:text-sm">
          Share your clinic details and our healthcare growth team will connect with you.
        </p>
        </div>
        <div className="h-[calc(92dvh-78px)] overflow-y-auto px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 sm:h-auto sm:max-h-[75vh] sm:px-6 sm:pb-6">
        <ClinicGrowthForm variant="modal" />
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
