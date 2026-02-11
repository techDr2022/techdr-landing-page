"use client";

import { FormEvent, useState } from "react";

export function ClinicGrowthForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

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
          Email
        </label>
        <input
          type="email"
          name="email"
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/0 transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
          placeholder="e.g. doctor@clinic.com"
          required
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700">
            City
          </label>
          <input
            type="text"
            name="city"
            className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/0 transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
            placeholder="e.g. Hyderabad"
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
    </form>
  );
}

