"use client";

import { FormEvent, useState, useCallback } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_ACTION = "gmb_bangalore_lead";

export function BangaloreGmbForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const getRecaptchaToken = useCallback((): Promise<string | null> => {
    if (!siteKey || typeof window === "undefined") return Promise.resolve(null);
    return new Promise((resolve) => {
      const run = () => {
        if (!window.grecaptcha) {
          resolve(null);
          return;
        }
        window.grecaptcha.ready(() => {
          window.grecaptcha!.execute(siteKey, { action: RECAPTCHA_ACTION }).then(resolve).catch(() => resolve(null));
        });
      };
      if (window.grecaptcha) {
        run();
      } else {
        const deadline = Date.now() + 8000;
        const check = () => {
          if (window.grecaptcha) {
            run();
            return;
          }
          if (Date.now() < deadline) {
            setTimeout(check, 200);
          } else {
            resolve(null);
          }
        };
        setTimeout(check, 100);
      }
    });
  }, [siteKey]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setError(null);
    setIsSubmitting(true);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

      const token = await getRecaptchaToken();
      if (token) {
        formData.set("g-recaptcha-response", token);
      } else if (siteKey) {
        setError("Security check is still loading. Please wait a moment and try again.");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch("/api/gmb-bangalore-lead", {
        method: "POST",
        body: formData,
      });

      if (response.redirected) {
        window.location.href = response.url;
      } else {
        const url = new URL(window.location.href);
        url.searchParams.set("submitted", "1");
        window.location.href = url.toString();
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
    >
      <div>
        <label className="block text-sm font-medium text-slate-700">
          Doctor Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="doctorName"
          required
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/0 transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
          placeholder="e.g. Dr. Rajesh Kumar"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Clinic Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="clinicName"
          required
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/0 transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
          placeholder="e.g. City Skin Clinic"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Speciality <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="speciality"
          required
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/0 transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
          placeholder="e.g. Dermatology, Gynecology, Orthopedics"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Location in Bangalore <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="locationBangalore"
          required
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/0 transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
          placeholder="e.g. Koramangala, Indiranagar, Whitefield"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          required
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/0 transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
          placeholder="WhatsApp / mobile number"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Email</label>
        <input
          type="email"
          name="email"
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/0 transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
          placeholder="Optional – for confirmation"
        />
      </div>

      {error && <p className="text-xs text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition hover:shadow-emerald-500/40 disabled:opacity-70"
      >
        <span>{isSubmitting ? "Submitting..." : "Book Free Consultation"}</span>
      </button>
      <p className="mt-2 text-center text-xs text-slate-500">
        Your details are safe. No spam. Only healthcare experts will call.
      </p>
      {siteKey && (
        <p className="mt-1 text-center text-[10px] text-slate-400">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy" className="underline hover:text-slate-600" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          {" "}and{" "}
          <a href="https://policies.google.com/terms" className="underline hover:text-slate-600" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
        </p>
      )}
    </form>
  );
}
