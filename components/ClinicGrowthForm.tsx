"use client";

import { FormEvent, useState, useCallback } from "react";
import { validateBusinessEmail } from "@/lib/email-validation";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_ACTION = "clinic_growth_submit";

export function ClinicGrowthForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const getRecaptchaToken = useCallback((): Promise<string | null> => {
    if (!siteKey || typeof window === "undefined" || !window.grecaptcha) return Promise.resolve(null);
    return new Promise((resolve) => {
      window.grecaptcha!.ready(() => {
        window.grecaptcha!.execute(siteKey, { action: RECAPTCHA_ACTION }).then(resolve);
      });
    });
  }, [siteKey]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const email = (form.querySelector('input[name="email"]') as HTMLInputElement)?.value?.trim();
    if (email) {
      const emailCheck = validateBusinessEmail(email);
      if (!emailCheck.valid) {
        setError("Please use a business or professional email (e.g. clinicname@gmail.com). We don’t accept disposable emails, test addresses, or very short names.");
        return;
      }
    }

    setError(null);
    setIsSubmitting(true);

    try {
      const formData = new FormData(form);

      const token = await getRecaptchaToken();
      if (token) formData.set("g-recaptcha-response", token);

      const response = await fetch("/api/clinic-growth", {
        method: "POST",
        body: formData,
      });

      const finalUrl = response.url
        ? new URL(response.url)
        : new URL(window.location.href);
      const isSuccess = finalUrl.searchParams.get("submitted") === "1";

      if (isSuccess) {
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "techdr_lead_success",
          });
        }
      }

      if (response.redirected) {
        window.location.href = response.url;
      } else if (isSuccess) {
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
          Doctor / Clinic Name
        </label>
        <input
          type="text"
          name="clinicName"
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/0 transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
          placeholder="e.g. Dr Sharma Multi-Speciality Clinic"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Clinic Type <span className="text-red-500">*</span>
        </label>
        <select
          name="clinicType"
          required
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/0 transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
        >
          <option value="">Select clinic type</option>
          <option value="Doctor">Doctor</option>
          <option value="Clinic">Clinic</option>
          <option value="Hospital">Hospital</option>
          <option value="IVF Centre">IVF Centre</option>
          <option value="Diagnostic Centre">Diagnostic Centre</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Monthly Marketing Budget <span className="text-red-500">*</span>
        </label>
        <select
          name="monthlyBudget"
          required
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/0 transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
        >
          <option value="">Select budget range</option>
          <option value="Under ₹20,000">Under ₹20,000</option>
          <option value="₹20,000–₹50,000">₹20,000–₹50,000</option>
          <option value="₹50,000–₹1L">₹50,000–₹1L</option>
          <option value="₹1L+">₹1L+</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          City <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="city"
          required
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/0 transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
          placeholder="e.g. Hyderabad"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Website / Google Maps Link
        </label>
        <input
          type="url"
          name="websiteLink"
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/0 transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
          placeholder="e.g. https://g.page/your-clinic or your website URL"
        />
        <p className="mt-0.5 text-xs text-slate-500">Optional but recommended</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/0 transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
          placeholder="Enter your WhatsApp / mobile number"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/0 transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
          placeholder="e.g. doctor@clinic.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">
          Speciality
        </label>
        <input
          type="text"
          name="speciality"
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/0 transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
          placeholder="e.g. Orthopedics, IVF, Dental"
        />
      </div>

      {error && (
        <p className="text-xs text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition hover:shadow-emerald-500/40 disabled:opacity-70"
      >
        <span>{isSubmitting ? "Submitting..." : "📈 Get Free Consultation"}</span>
      </button>
      <p className="mt-2 text-center text-xs text-slate-500">
        🔒 Your details are safe. No spam. Only healthcare experts will call.
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

