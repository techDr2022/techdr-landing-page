"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { XCircle } from "lucide-react";

const ERROR_MESSAGES: Record<string, string> = {
  config: "Service is temporarily unavailable. Please try again later or contact us.",
  email_required: "Please enter your email address.",
  send_failed: "Something went wrong. Please try again in a moment.",
};

export function FormToastHandler() {
  const searchParams = useSearchParams();
  const submitted = searchParams?.get("submitted");
  const errorCode = searchParams?.get("error");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (submitted === "1") {
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "techdr_lead_success",
        });
      }
      setShowSuccess(true);
    } else if (submitted === "0") {
      setShowError(true);
      setErrorMessage(
        errorCode && ERROR_MESSAGES[errorCode]
          ? ERROR_MESSAGES[errorCode]
          : "Something went wrong. Please try again in a moment."
      );
    }
  }, [submitted, errorCode]);

  return (
    <>
      {showSuccess && (
        <div
          className={`fixed top-4 right-4 z-50 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-white p-4 shadow-xl shadow-emerald-500/20 transition-all duration-300 animate-[fadeInUp_0.3s_ease-out]`}
          style={{ maxWidth: "400px" }}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
            <svg
              className="h-5 w-5 text-emerald-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-900">Success!</p>
            <p className="mt-0.5 text-xs text-slate-600">
              Thank you! Our team will reach out with a tailored growth plan.
            </p>
          </div>
          <button
            onClick={() => setShowSuccess(false)}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
      {showError && (
        <div
          className={`fixed top-4 right-4 z-50 flex items-center gap-3 rounded-2xl border border-red-200 bg-white p-4 shadow-xl shadow-red-500/20 transition-all duration-300 animate-[fadeInUp_0.3s_ease-out]`}
          style={{ maxWidth: "400px" }}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100">
            <XCircle className="h-5 w-5 text-red-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-900">Error</p>
            <p className="mt-0.5 text-xs text-slate-600">
              {errorMessage}
            </p>
          </div>
          <button
            onClick={() => setShowError(false)}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
