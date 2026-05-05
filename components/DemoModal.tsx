"use client";

import { useEffect } from "react";
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
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative mx-auto my-8 w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl sm:p-6">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 sm:right-4 sm:top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">
          Get a Free Consultation
        </h2>
        <p className="mb-4 text-xs text-slate-600 sm:mb-6 sm:text-sm">
          Share your clinic details and our healthcare growth team will connect with you.
        </p>
        <ClinicGrowthForm variant="modal" />
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
