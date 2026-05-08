import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { ThankYouTracking } from "@/components/ThankYouTracking";

type ThankYouPageProps = {
  searchParams?: Promise<{ form_type?: string }>;
};

const FORM_LABELS: Record<string, string> = {
  clinic_growth: "Clinic Growth Plan",
  gmb_bangalore: "Google Business Profile Consultation",
  google_ads_bangalore: "Google Ads Consultation",
};

function toTrackedFormType(
  value: string | undefined
): "clinic_growth" | "gmb_bangalore" | "google_ads_bangalore" {
  if (value === "gmb_bangalore" || value === "google_ads_bangalore") {
    return value;
  }
  return "clinic_growth";
}

export const metadata: Metadata = {
  title: "Thank You | TechDr",
  description: "Thank you for contacting TechDr. Our team will reach out shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const params = await searchParams;
  const formType = toTrackedFormType(params?.form_type);
  const formLabel = FORM_LABELS[formType] ?? "Consultation";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <ThankYouTracking formType={formType} />

      <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-4 py-12 text-center">
        <div className="w-full rounded-3xl border border-emerald-200/70 bg-gradient-to-b from-emerald-50/70 to-white p-6 shadow-sm sm:p-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
            <CheckCircle2 className="h-8 w-8 text-emerald-700" />
          </div>
          <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Thank you - request received
          </h1>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            We received your {formLabel.toLowerCase()} request. Our team will reach out shortly.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/25 transition hover:shadow-emerald-500/35 sm:w-auto"
            >
              Back to home
            </Link>
            <a
              href="tel:+919542218454"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
            >
              Speak to our team
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

