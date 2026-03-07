import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { BangaloreGmbForm } from "@/components/BangaloreGmbForm";
import { BangaloreGmbFaq } from "@/components/BangaloreGmbFaq";
import { SearchAnimationDemo } from "@/components/SearchAnimationDemo";
import { DoctorsCarousel } from "@/components/DoctorsCarousel";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FormToastHandler } from "@/components/FormToastHandler";
import { doctors } from "@/app/data/doctors";
import { CheckCircle2, MapPin, FileText, Star, TrendingUp, BarChart3 } from "lucide-react";

const siteUrl = "https://growth.techdr.in";

export const metadata = {
  title: "Google Business Profile Management for Doctors in Bangalore | TechDr",
  description:
    "Professional Google Business Profile management + Local SEO for doctors in Bangalore from ₹6,999/month.",
  openGraph: {
    title: "Google Business Profile Management for Doctors in Bangalore | TechDr",
    description:
      "Get your clinic discovered on Google Maps in Bangalore. TechDr offers GBP management, review growth, weekly posts & local SEO for doctors.",
    url: "/gmb-bangalore",
    siteName: "TechDr",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: `${siteUrl}/gmb-bangalore`,
  },
};

export default function GmbBangalorePage() {
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
            <a href="#why-gbp" className="transition hover:text-slate-900">
              Why GBP
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
        {/* Hero - left content, right counter card */}
        <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-white">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-200/30 via-teal-100/20 to-cyan-200/30 blur-3xl" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          </div>
          <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Rank Your Clinic on{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Google Maps
                  </span>{" "}
                  in Bangalore
                </h1>
                <p className="max-w-xl text-lg text-slate-600">
                  Get your clinic discovered by patients searching on Google Maps and local search.
                </p>
                <p className="max-w-xl text-base font-semibold text-slate-700">
                  Professional <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Google Business Profile</span> Management + Local SEO for Doctors
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  Only <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">₹6,999</span> / month
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    Google Maps ranking improvement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    Review growth & reputation management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    Weekly Google posts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    Local SEO optimisation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    Monthly reports
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
                    Get My Clinic Ranked
                  </a>
                </div>
              </div>

              {/* Right side - counter / snapshot card */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-2xl animate-pulse" />
                <div className="card-3d relative rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      GBP impact snapshot
                    </span>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 animate-pulse">
                      Live
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Maps visibility", value: "+156%", sub: "Local search", delay: 0 },
                      { label: "Patient enquiries", value: "2.8×", sub: "Calls & WhatsApp", delay: 150 },
                      { label: "Review growth", value: "45%+", sub: "More ratings", delay: 300 },
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

        {/* Why Google Business Profile is Critical - left content, right animation */}
        <section
          id="why-gbp"
          className="border-b border-slate-200/80 bg-white py-12 sm:py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12 xl:gap-16">
              {/* Left: content (first on mobile) */}
              <div className="min-w-0">
                <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                  Why <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Google Business Profile</span> is Critical for Doctors
                </h2>
                <p className="mt-5 text-base text-slate-600 sm:mt-6 sm:text-lg">
                  When patients search on Google — &ldquo;Dermatologist near me&rdquo;, &ldquo;Best gynecologist in Bangalore&rdquo;, &ldquo;Orthopedic doctor near me&rdquo; — Google shows Google Maps results first.
                </p>
                <p className="mt-4 text-base text-slate-600 sm:text-lg">
                  Clinics <strong>ranking in the top 3 map results</strong> receive the majority of patient calls and enquiries. Without proper optimisation, your clinic may not appear where patients are searching.
                </p>
                <p className="mt-4 text-base font-medium text-slate-700 sm:text-lg">
                  TechDr helps doctors improve visibility, credibility, and patient enquiries through structured <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Google Business Profile</span> management.
                </p>
              </div>
              {/* Right: animation (second on mobile, full width) */}
              <div className="flex w-full justify-center lg:justify-end">
                <div className="w-full min-w-0 max-w-full lg:max-w-xl">
                  <SearchAnimationDemo />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get for ₹6,999 per Month */}
        <section
          id="what-you-get"
          className="border-b border-slate-200/80 bg-slate-50/50 py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-12 text-center">
              <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                What You Get for <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">₹6,999</span> per Month
              </h2>
              <p className="mt-2 text-slate-600">Complete <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Google Business Profile</span> Management</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Profile Optimisation",
                  icon: MapPin,
                  items: [
                    "Business category optimisation",
                    "Services & treatment listing",
                    "Keyword optimisation",
                    "Location SEO targeting",
                  ],
                },
                {
                  title: "Weekly Google Posts",
                  icon: FileText,
                  items: [
                    "Health awareness posts",
                    "Service promotion posts",
                    "Patient education content",
                    "Event & update posts",
                  ],
                },
                {
                  title: "Review Management",
                  icon: Star,
                  items: [
                    "Review response optimisation",
                    "Strategy to increase patient reviews",
                    "Reputation monitoring",
                  ],
                },
                {
                  title: "Local SEO Improvements",
                  icon: TrendingUp,
                  items: [
                    "Keyword optimisation for Bangalore searches",
                    "Competitor analysis",
                    "Maps ranking improvements",
                    "Local relevance signals",
                  ],
                },
                {
                  title: "Performance Monitoring",
                  icon: BarChart3,
                  items: [
                    "Visibility tracking",
                    "Search insights analysis",
                    "Monthly reports",
                    "Improvement recommendations",
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
              Our strategies are designed specifically for healthcare search behaviour. Instead of
              generic marketing, we focus on local patient discovery and enquiry generation.
            </p>
          </div>
        </section>

        {/* Results Doctors Typically See – outcome cards style */}
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
                After consistent optimisation, clinics often experience:
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {[
                {
                  label: "Increased Google Maps visibility",
                  icon: MapPin,
                  accent: "emerald",
                },
                {
                  label: "More patient calls and WhatsApp enquiries",
                  icon: BarChart3,
                  accent: "teal",
                },
                {
                  label: "Higher review count and rating credibility",
                  icon: Star,
                  accent: "amber",
                },
                {
                  label: "Improved local search rankings",
                  icon: TrendingUp,
                  accent: "emerald",
                },
                {
                  label: "Better patient trust online",
                  icon: CheckCircle2,
                  accent: "teal",
                },
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
                  <p className="pt-1.5 text-sm font-medium leading-snug text-slate-800">
                    {label}
                  </p>
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
              This service is ideal for:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "New clinics in Bangalore",
                "Doctors struggling to rank on Google Maps",
                "Clinics with few reviews",
                "Clinics wanting more local patient enquiries",
                "Healthcare brands expanding to new locations",
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

        {/* Simple Monthly Pricing – one section */}
        <section
          id="pricing"
          className="border-b border-slate-200/80 bg-slate-50/50 py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-10 text-center">
              <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Simple Monthly Pricing
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 sm:gap-8 lg:grid-cols-2 lg:max-w-5xl">
              {/* Monthly plan */}
              <div className="rounded-2xl border-2 border-slate-200/80 bg-white p-6 shadow-lg sm:p-8">
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Google Business Profile</span> Management
                </h3>
                <p className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">₹6,999</span> / month
                </p>
                <ul className="mt-5 space-y-2 text-slate-600 sm:mt-6">
                  {[
                    "Google profile optimisation",
                    "Weekly posts",
                    "Review management",
                    "Local SEO improvements",
                    "Daily SEO-based content updates (500–1,200 characters)",
                    "Monthly reports",
                    "Monthly performance review",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm font-medium text-slate-500 sm:mt-6">
                  No long-term contracts.
                </p>
              </div>

              {/* Yearly plan – 10% discount */}
              <div className="relative rounded-2xl border-2 border-emerald-200/80 bg-white p-6 shadow-lg shadow-emerald-500/10 sm:p-8">
                <span className="absolute right-4 top-4 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white sm:right-6 sm:top-6">
                  Save 10%
                </span>
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Google Business Profile</span> Management
                </h3>
                <p className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">₹75,589</span> / year
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  ₹6,299/month when billed annually
                </p>
                <ul className="mt-5 space-y-2 text-slate-600 sm:mt-6">
                  {[
                    "Google profile optimisation",
                    "Weekly posts",
                    "Review management",
                    "Local SEO improvements",
                    "Daily SEO-based content updates (500–1,200 characters)",
                    "Monthly reports",
                    "Monthly performance review",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm font-medium text-slate-500 sm:mt-6">
                  Billed annually. Save 10% vs monthly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Book Free Consultation – separate section below */}
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
                Want your clinic to rank on Google Maps in Bangalore? Start with a free strategy call.
              </p>
            </div>
            <BangaloreGmbForm />
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
            <BangaloreGmbFaq />
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.15),transparent)]" />
          <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Want Your Clinic to Rank on Google Maps in Bangalore?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Start improving your Google visibility and attract more local patients.
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
              – <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Google Business Profile</span> Management for Doctors in Bangalore
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
