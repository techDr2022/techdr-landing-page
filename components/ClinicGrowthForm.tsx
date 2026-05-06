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

type ClinicGrowthFormProps = {
  variant?: "page" | "modal";
};

export function ClinicGrowthForm({ variant = "page" }: ClinicGrowthFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [clinicType, setClinicType] = useState("");
  const [monthlyBudget, setMonthlyBudget] = useState("");

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

    const form = event.currentTarget;
    if (!clinicType) {
      setError("Please select clinic type.");
      return;
    }
    if (!monthlyBudget) {
      setError("Please select monthly marketing budget.");
      return;
    }

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
      formData.set("clinicType", clinicType);
      formData.set("monthlyBudget", monthlyBudget);

      const token = await getRecaptchaToken();
      if (token) {
        formData.set("g-recaptcha-response", token);
      } else if (siteKey) {
        setError("Security check is still loading. Please wait a moment and try again.");
        setIsSubmitting(false);
        return;
      }

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

  const isModal = variant === "modal";
  const formClassName = isModal
    ? "space-y-4"
    : "space-y-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm";
  const fieldClassName =
    "mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-emerald-500/0 transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20";
  const labelClassName = "block text-sm font-medium text-slate-700";
  const chipClass = (active: boolean) =>
    `rounded-full border px-3 py-1.5 text-xs font-medium transition ${
      active
        ? "border-emerald-500 bg-emerald-50 text-emerald-700"
        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
    }`;

  return (
    <form onSubmit={handleSubmit} className={formClassName}>
      <div>
        <label className={labelClassName}>
          Doctor / Clinic Name
        </label>
        <input
          type="text"
          name="clinicName"
          className={fieldClassName}
          placeholder="e.g. Dr Sharma Multi-Speciality Clinic"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClassName}>
            Clinic Type <span className="text-red-500">*</span>
          </label>
          <input type="hidden" name="clinicType" value={clinicType} />
          <div className="mt-2 flex flex-wrap gap-2">
            {["Doctor", "Clinic", "Hospital", "IVF Centre", "Diagnostic Centre", "Other"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setClinicType(option)}
                className={chipClass(clinicType === option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className={labelClassName}>
            Monthly Marketing Budget <span className="text-red-500">*</span>
          </label>
          <input type="hidden" name="monthlyBudget" value={monthlyBudget} />
          <div className="mt-2 flex flex-wrap gap-2">
            {["Under ₹20,000", "₹20,000–₹50,000", "₹50,000–₹1L", "₹1L+"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setMonthlyBudget(option)}
                className={chipClass(monthlyBudget === option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label className={labelClassName}>
          City <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="city"
          required
          className={fieldClassName}
          placeholder="e.g. Hyderabad"
        />
      </div>

      <div>
        <label className={labelClassName}>
          Website / Google Maps Link
        </label>
        <input
          type="url"
          name="websiteLink"
          className={fieldClassName}
          placeholder="e.g. https://g.page/your-clinic or your website URL"
        />
        <p className="mt-0.5 text-xs text-slate-500">Optional but recommended</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClassName}>
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            className={fieldClassName}
            placeholder="Enter your WhatsApp / mobile number"
          />
        </div>
        <div>
          <label className={labelClassName}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className={fieldClassName}
            placeholder="e.g. doctor@clinic.com"
          />
        </div>
      </div>
      <div>
        <label className={labelClassName}>
          Speciality
        </label>
        <input
          type="text"
          name="speciality"
          className={fieldClassName}
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
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition hover:shadow-emerald-500/40 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span>{isSubmitting ? "Submitting..." : "📈 Get Free Consultation"}</span>
      </button>
      <p className="mt-2 text-center text-xs text-slate-500">
        🔒 Your details are safe. No spam, no fake calls, no fake leads.
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

