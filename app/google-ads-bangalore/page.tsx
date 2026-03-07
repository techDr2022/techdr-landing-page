import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { GoogleAdsBangaloreForm } from "@/components/GoogleAdsBangaloreForm";
import { GoogleAdsBangaloreFaq } from "@/components/GoogleAdsBangaloreFaq";
import { DoctorsCarousel } from "@/components/DoctorsCarousel";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FormToastHandler } from "@/components/FormToastHandler";
import { doctors } from "@/app/data/doctors";
import {
  CheckCircle2,
  Target,
  FileText,
  MousePointerClick,
  BarChart3,
  Megaphone,
  TrendingUp,
} from "lucide-react";

const siteUrl = "https://growth.techdr.in";

export const metadata = {
  title: "Google Ads for Doctors in Bangalore | TechDr",
  description:
    "Get more patients with Google Ads in Bangalore. Healthcare-focused paid search, keyword targeting & conversion tracking for doctors and clinics.",
  openGraph: {
    title: "Google Ads for Doctors in Bangalore | TechDr",
    description:
      "Reach patients searching for doctors on Google. TechDr runs healthcare-focused Google Ads campaigns for clinics in Bangalore.",
    url: "/google-ads-bangalore",
    siteName: "TechDr",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: `${siteUrl}/google-ads-bangalore`,
  },
};

export default function GoogleAdsBangalorePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Suspense fallback={null}>
        <FormToastHandler />
      </Suspense>
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4 md:px-8">
          <Link href="/" className="flex h-11 items-center md:h-12">
            <Image
              src="/logo.png"
              alt="TechDr"
              width={96}
              height={48}
              className="h-full w-[90px] object-contain md:w-[110px]"
            />
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#why-google-ads" className="transition hover:text-slate-900">
              Why Google Ads
            </a>
            <a href="#what-you-get" className="transition hover:text-slate-900">
              What You Get
            </a>
            <a href="#pricing" className="transition hover:text-slate-900">
              Pricing
            </a>
            <a href="#faq" className="transition hover:text-slate-900">
              FAQ
            </a>
            <a href="#consultation" className="transition hover:text-slate-900">
              Book Consultation
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="tel:+919542218454"
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 md:px-5 md:py-2.5"
            >
              Talk to Expert
            </a>
            <a
              href="#consultation"
              className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:shadow-emerald-500/40 md:px-5 md:py-2.5"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-white">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-200/30 via-teal-100/20 to-cyan-200/30 blur-3xl" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          </div>
          <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Get More Patients with{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Google Ads
                  </span>{" "}
                  in Bangalore
                </h1>
                <p className="max-w-xl text-lg text-slate-600">
                  Reach patients the moment they search for doctors, treatments, or clinics on Google.
                </p>
                <p className="max-w-xl text-base font-semibold text-slate-700">
                  Healthcare-focused <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Google Ads</span> - keyword targeting, ad copy & conversion tracking for doctors
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    Search ads for doctor & treatment keywords
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    Bangalore & local area targeting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    Calls, WhatsApp & form leads
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    Monthly reports & optimisation
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#consultation"
                    className="inline-flex rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:shadow-emerald-500/40"
                  >
                    Book Free Consultation
                  </a>
                  <a
                    href="#consultation"
                    className="inline-flex rounded-full border-2 border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    Get a Custom Quote
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-2xl animate-pulse" />
                <div className="card-3d relative rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Google Ads impact
                    </span>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 animate-pulse">
                      Live
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Search visibility", value: "Top", sub: "Ad positions", delay: 0 },
                      { label: "Lead volume", value: "2.5×", sub: "Calls & forms", delay: 150 },
                      { label: "Cost per lead", value: "-35%", sub: "Optimised over time", delay: 300 },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4"
                      >
                        <p className="text-[11px] font-medium text-slate-500">{item.label}</p>
                        <p className="mt-1 text-xl font-bold text-emerald-600">
                          <AnimatedCounter value={item.value} duration={2000} />
                        </p>
                        <p className="text-[11px] text-slate-500">{item.sub}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-2 text-xs text-slate-600">
                    Bangalore · Doctors · Clinics · Hospitals · Diagnostics · IVF
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted by doctors carousel */}
        <section className="border-b border-slate-200/80 bg-slate-50/50 py-14 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Trusted by{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  200+ Doctors
                </span>{" "}
                Across Specialities
              </h2>
              <p className="mt-2 text-slate-600">
                Healthcare professionals who grow with TechDr
              </p>
            </div>
            <DoctorsCarousel doctors={doctors} />
          </div>
        </section>

        {/* Why Google Ads for Doctors */}
        <section
          id="why-google-ads"
          className="border-b border-slate-200/80 bg-white py-12 sm:py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Why <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Google Ads</span> Works for Doctors in Bangalore
            </h2>
            <p className="mt-5 text-base text-slate-600 sm:mt-6 sm:text-lg max-w-3xl">
              When patients search &ldquo;dermatologist near me&rdquo;, &ldquo;best gynecologist in Bangalore&rdquo;, or &ldquo;orthopedic doctor&rdquo;, they see Google search results first. Organic results take time to rank; <strong>Google Ads</strong> puts your clinic in front of these patients immediately - with healthcare-specific keywords, ad copy, and landing pages that drive calls and bookings.
            </p>
            <p className="mt-4 text-base text-slate-600 sm:text-lg max-w-3xl">
              TechDr runs <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-medium">healthcare-focused Google Ads campaigns</span> for doctors and clinics in Bangalore, with clear tracking of calls, form leads, and cost per enquiry.
            </p>
          </div>
        </section>

        {/* What You Get */}
        <section
          id="what-you-get"
          className="border-b border-slate-200/80 bg-slate-50/50 py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-12 text-center">
              <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                What You Get
              </h2>
              <p className="mt-2 text-slate-600">Complete Google Ads management for healthcare</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Campaign setup & strategy",
                  icon: Megaphone,
                  items: [
                    "Healthcare keyword research",
                    "Bangalore & location targeting",
                    "Search & Performance Max options",
                    "Budget and bid strategy",
                  ],
                },
                {
                  title: "Ad copy & creatives",
                  icon: FileText,
                  items: [
                    "Doctor- and treatment-focused headlines",
                    "Responsive search ads",
                    "Extensions (call, location, sitelinks)",
                    "Compliance with healthcare guidelines",
                  ],
                },
                {
                  title: "Landing pages & conversion",
                  icon: MousePointerClick,
                  items: [
                    "Mobile-friendly landing pages",
                    "Call and WhatsApp buttons",
                    "Form capture for enquiries",
                    "Conversion tracking setup",
                  ],
                },
                {
                  title: "Keyword & audience targeting",
                  icon: Target,
                  items: [
                    "Doctor, speciality & treatment keywords",
                    "Location-based targeting",
                    "Audience refinement",
                    "Negative keywords to reduce waste",
                  ],
                },
                {
                  title: "Tracking & reporting",
                  icon: BarChart3,
                  items: [
                    "Calls, form leads & WhatsApp tracking",
                    "Cost per lead reporting",
                    "Monthly performance reports",
                    "Optimisation recommendations",
                  ],
                },
                {
                  title: "Ongoing optimisation",
                  icon: TrendingUp,
                  items: [
                    "Bid and budget adjustments",
                    "Ad copy testing",
                    "Keyword expansion",
                    "Quality score improvement",
                  ],
                },
              ].map(({ title, icon: Icon, items }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                  <ul className="mt-4 space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Doctors Choose TechDr */}
        <section className="border-b border-slate-200/80 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-10 text-center">
              <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Why Doctors Choose TechDr
              </h2>
            </div>
            <p className="mx-auto max-w-2xl text-center text-slate-600">
              TechDr is a healthcare-focused digital growth partner. We work exclusively with:
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {[
                "Doctors",
                "Clinics",
                "Hospitals",
                "Diagnostic centres",
                "IVF centres",
                "Healthcare brands",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-8 mx-auto max-w-2xl text-center text-slate-600">
              Our Google Ads strategies are built for healthcare search behaviour and patient intent - not generic lead gen. We focus on quality enquiries, call tracking, and transparent reporting.
            </p>
          </div>
        </section>

        {/* Results */}
        <section className="relative overflow-hidden border-b border-slate-200/80 py-16 md:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/40" />
          <div className="relative mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                What to expect
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Results</span> Doctors Typically See
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-600">
                With consistent optimisation, clinics often see:
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {[
                { label: "More patient calls and WhatsApp enquiries", icon: BarChart3, accent: "teal" },
                { label: "Higher visibility for key treatment searches", icon: Target, accent: "emerald" },
                { label: "Measurable cost per lead", icon: TrendingUp, accent: "emerald" },
                { label: "Faster new-patient acquisition", icon: CheckCircle2, accent: "teal" },
                { label: "Better ROI with healthcare-specific targeting", icon: Megaphone, accent: "amber" },
              ].map(({ label, icon: Icon, accent }) => (
                <div
                  key={label}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition hover:border-emerald-200 hover:shadow-md hover:shadow-emerald-500/5"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      accent === "amber"
                        ? "bg-amber-100 text-amber-600"
                        : accent === "teal"
                          ? "bg-teal-100 text-teal-600"
                          : "bg-emerald-100 text-emerald-600"
                    } transition group-hover:scale-105`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="pt-1.5 text-sm font-medium leading-snug text-slate-800">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who This Service Is For */}
        <section className="border-b border-slate-200/80 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-10 text-center">
              <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Who This Service Is For
              </h2>
            </div>
            <p className="mx-auto max-w-2xl text-center text-slate-600 mb-8">
              Google Ads is ideal for:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Doctors and clinics in Bangalore",
                "New practices needing quick visibility",
                "Clinics wanting more calls and bookings",
                "Specialities with high search volume",
                "Healthcare brands with a defined ad budget",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing – custom quote */}
        <section
          id="pricing"
          className="border-b border-slate-200/80 bg-slate-50/50 py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-10 text-center">
              <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Transparent, Custom Pricing
              </h2>
              <p className="mt-2 text-slate-600 max-w-xl mx-auto">
                Google Ads budgets vary by speciality and goals. We offer a management fee + your ad spend, with clear reporting on every rupee.
              </p>
            </div>
            <div className="mx-auto max-w-2xl rounded-2xl border-2 border-emerald-200/80 bg-white p-8 shadow-lg shadow-emerald-500/10">
              <h3 className="text-xl font-bold text-slate-900">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Google Ads</span> Management for Doctors
              </h3>
              <p className="mt-3 text-slate-600">
                Custom plan based on your budget and goals. Includes campaign setup, keyword strategy, ad copy, conversion tracking, and monthly optimisation.
              </p>
              <ul className="mt-5 space-y-2 text-slate-600">
                {[
                  "Healthcare keyword research & targeting",
                  "Ad copy & extensions",
                  "Landing page & conversion setup",
                  "Call, form & WhatsApp tracking",
                  "Monthly reports & optimisation",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-slate-500">
                No long-term lock-in. Get a custom quote after a free strategy call.
              </p>
              <a
                href="#consultation"
                className="mt-6 inline-flex rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:shadow-emerald-500/40"
              >
                Book Free Consultation & Get Quote
              </a>
            </div>
          </div>
        </section>

        {/* Book Free Consultation */}
        <section
          id="consultation"
          className="border-b border-slate-200/80 bg-white py-16 md:py-20"
        >
          <div className="mx-auto max-w-xl px-4 md:px-8">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Book Free Consultation
              </h2>
              <p className="mt-4 text-slate-600">
                Want to run Google Ads for your clinic in Bangalore? Start with a free strategy call and custom quote.
              </p>
            </div>
            <GoogleAdsBangaloreForm />
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="border-b border-slate-200/80 bg-slate-50/50 py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-10 text-center">
              <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                FAQ
              </h2>
            </div>
            <GoogleAdsBangaloreFaq />
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.15),transparent)]" />
          <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Get More Patients with Google Ads in Bangalore?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Book a free strategy call and get a custom plan for your clinic.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                Book a Free Consultation with TechDr
                <span>→</span>
              </a>
              <a
                href="tel:+919542218454"
                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-500 bg-transparent px-8 py-4 text-base font-semibold text-white transition hover:border-slate-400 hover:bg-white/5"
              >
                Speak to our team
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 pt-5 pb-16 text-center text-xs text-slate-600 md:px-8 md:py-5 md:pb-8">
          <div className="space-y-1">
            <p>
              <Link href="/" className="font-semibold text-slate-700 hover:text-slate-900">
                TechDr
              </Link>{" "}
              – <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Google Ads</span> for Doctors in Bangalore
            </p>
            <p className="text-sm text-slate-700 md:text-xs">
              <a href="tel:+919542218454" className="font-medium hover:text-slate-900">
                +91 95422 18454
              </a>{" "}
              ·{" "}
              <a href="mailto:info@techdr.in" className="font-medium hover:text-slate-900">
                info@techdr.in
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
