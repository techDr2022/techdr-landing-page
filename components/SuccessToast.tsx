"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";

type SuccessToastProps = {
  show: boolean;
  onClose: () => void;
  message?: string;
};

export function SuccessToast({
  show,
  onClose,
  message = "Thank you! Our team will reach out with a tailored growth plan.",
}: SuccessToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show && !isVisible) return null;

  return (
    <div
      className={`fixed top-4 right-4 z-50 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-white p-4 shadow-xl shadow-emerald-500/20 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
      }`}
      style={{ maxWidth: "400px" }}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-slate-900">Success!</p>
        <p className="mt-0.5 text-xs text-slate-600">{message}</p>
      </div>
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(onClose, 300);
        }}
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
