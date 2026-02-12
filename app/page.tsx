import Image from "next/image";
import { Suspense } from "react";
import { FaqSection } from "@/components/FaqSection";
import { ClinicGrowthForm } from "@/components/ClinicGrowthForm";
import { DoctorsCarousel } from "@/components/DoctorsCarousel";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FormToastHandler } from "@/components/FormToastHandler";
import { DemoButton } from "@/components/DemoButton";
import { PricingTabs } from "@/components/PricingTabs";
import { doctors } from "@/app/data/doctors";
import { WHATSAPP_NUMBER, WHATSAPP_PREFILL } from "@/lib/config";
import {
  Megaphone,
  Search,
  MapPin,
  PlayCircle,
  CalendarClock,
  UserCircle2,
  CheckCircle2,
  Target,
  Zap,
  RefreshCw,
} from "lucide-react";

type HomeProps = {
  searchParams?: Promise<{ submitted?: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const submitted = params?.submitted;
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_PREFILL,
  )}`;
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Suspense fallback={null}>
        <FormToastHandler />
      </Suspense>
      {/* Minimal header - agency style, sticky on mobile and desktop */}
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4 md:px-8">
          <a href="#" className="flex items-center h-11 md:h-12">
            <Image
              src="/logo.png"
              alt="TechDr"
              width={96}
              height={48}
              className="h-full w-[90px] object-contain md:w-[110px]"
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#why-techdr" className="transition hover:text-slate-900">
              Why TechDr
            </a>
            <a href="#services" className="transition hover:text-slate-900">
              Services
            </a>
            <a href="#booking-system" className="transition hover:text-slate-900">
              Booking system
            </a>
            <a href="#pricing" className="transition hover:text-slate-900">
              Pricing
            </a>
            <a href="#proof" className="transition hover:text-slate-900">
              Proof
            </a>
            <a href="#faq" className="transition hover:text-slate-900">
              FAQ
            </a>
            <a href="#contact" className="transition hover:text-slate-900">
              Contact
            </a>
          </nav>
          {/* Desktop actions – primary CTA goes to same form (same friction) */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+919542218454"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Talk to Expert
            </a>
            <a
              href="#growth-form"
              className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:shadow-emerald-500/40"
            >
              Get Free Consultation
            </a>
          </div>
          {/* Mobile action – same form friction */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#growth-form"
              className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-500/30 transition hover:shadow-emerald-500/40"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
        {/* Mobile nav stripe with section links - inside header so it sticks together */}
        <div className="border-t border-slate-200/80 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4 py-2 text-xs font-medium text-slate-600">
            <a href="#why-techdr" className="whitespace-nowrap transition hover:text-slate-900">
              Why TechDr
            </a>
            <a href="#services" className="whitespace-nowrap transition hover:text-slate-900">
              Services
            </a>
            <a href="#booking-system" className="whitespace-nowrap transition hover:text-slate-900">
              Booking
            </a>
            <a href="#pricing" className="whitespace-nowrap transition hover:text-slate-900">
              Pricing
            </a>
            <a href="#proof" className="whitespace-nowrap transition hover:text-slate-900">
              Proof
            </a>
            <a href="#faq" className="whitespace-nowrap transition hover:text-slate-900">
              FAQ
            </a>
            <a href="#contact" className="whitespace-nowrap transition hover:text-slate-900">
              Contact
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero - full impact */}
        <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-white">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-200/30 via-teal-100/20 to-cyan-200/30 blur-3xl" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          </div>
          <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
              <div className="space-y-8">
                <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Get More{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Patient Enquiries
                  </span>{" "}
                  for Your Clinic Predictably
                </h1>
                <p className="max-w-xl text-lg text-slate-600">
                  Healthcare marketing, Google visibility, and automated booking
                  systems built exclusively for doctors, clinics, and hospitals.
                </p>
                <p className="max-w-xl text-sm font-medium text-slate-500">
                  200+ healthcare clients · Hyderabad-based · Reserve with
                  Google Partner
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <DemoButton className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 transition hover:shadow-emerald-500/40">
                    Book Free Strategy Call
                  </DemoButton>
                  <a
                    href="#one-system"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    See How It Works →
                  </a>
                </div>
              </div>

              {/* Hero visual - premium card */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-2xl animate-pulse" />
                <div className="card-3d relative rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 animate-[fadeInUp_0.7s_ease-out]">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Growth snapshot
                    </span>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 animate-pulse">
                      Live
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Local visibility", value: "+178%", sub: "Maps & search", delay: 0 },
                      { label: "Enquiries", value: "3.2×", sub: "Calls & WhatsApp", delay: 150 },
                      { label: "Automation", value: "60%+", sub: "Bookings auto", delay: 300 },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 animate-[fadeInUp_0.5s_ease-out]"
                        style={{
                          animationDelay: `${item.delay}ms`,
                          animationFillMode: "both",
                        }}
                      >
                        <p className="text-[11px] font-medium text-slate-500">
                          {item.label}
                        </p>
                        <p className="mt-1 text-xl font-bold text-emerald-600">
                          <AnimatedCounter value={item.value} duration={2000} />
                        </p>
                        <p className="text-[11px] text-slate-500">{item.sub}</p>
                      </div>
                    ))}
                  </div>
                  <p
                    className="mt-4 rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-2 text-xs text-slate-600 animate-[fadeIn_0.7s_ease-out]"
                    style={{
                      animationDelay: "500ms",
                      animationFillMode: "both",
                    }}
                  >
                    Doctors · Clinics · Hospitals · IVF · Diagnostics ·
                    Medical tourism · Telehealth · Chains
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar - agency proof */}
        <section className="border-b border-slate-200/80 bg-slate-900 py-12 text-white">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-12 px-4 md:px-8 md:gap-16">
            <div className="text-center">
              <p className="text-3xl font-bold tracking-tight md:text-4xl">
                200+
              </p>
              <p className="mt-1 text-sm font-medium text-slate-400">
                Healthcare clients
              </p>
            </div>
            <div className="h-12 w-px bg-slate-600" />
            <div className="text-center">
              <p className="text-3xl font-bold tracking-tight md:text-4xl">
                India-first
              </p>
              <p className="mt-1 text-sm font-medium text-slate-400">
                Globally scalable
              </p>
            </div>
            <div className="hidden h-12 w-px bg-slate-600 md:block" />
            <div className="text-center">
              <p className="text-3xl font-bold tracking-tight md:text-4xl">
                In-house
              </p>
              <p className="mt-1 text-sm font-medium text-slate-400">
                Tech & marketing team
              </p>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="border-b border-slate-200/80 bg-white py-6">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 text-sm text-slate-600 md:px-8">
            <span className="font-semibold text-slate-800">
              Trusted by healthcare teams across Hyderabad and beyond
            </span>
            <span className="hidden text-slate-300 md:inline">·</span>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Doctors",
                "Clinics",
                "Hospitals",
                "IVF Centres",
                "Diagnostics",
                "Medical Tourism",
                "Telehealth",
                "Healthcare Chains",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted by 200+ Doctors Across Specialities - auto carousel */}
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
                These are our clients — healthcare professionals who grow with TechDr
              </p>
            </div>
            <DoctorsCarousel doctors={doctors} />
          </div>
        </section>

        {/* Why most clinics don't get enough enquiries */}
        <section
          id="pain-points"
          className="border-b border-slate-200/80 bg-white py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Why Most Clinics Don&apos;t{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Get Enough Patient Enquiries Online
                  </span>
                </h2>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Pain Points — Short, Scannable
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    { text: "Google Ads running ", highlight: "but no calls" },
                    { text: "Google Business Profile ", highlight: "not ranking in top 3" },
                    { text: "Instagram reels getting views ", highlight: "but no conversions" },
                    { text: "Website exists but patients ", highlight: "don't book" },
                    { text: "Depending only on ", highlight: "walk-ins or referrals" },
                  ].map((item) => (
                    <li key={item.text + item.highlight} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                      <span className="text-base leading-relaxed text-slate-700">
                        {item.text}
                        <span className="curly-underline font-medium text-slate-800">
                          {item.highlight}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 shadow-sm">
                <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Enquiry breakdown
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  What actually blocks online patient enquiries
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Most clinics don&apos;t have a traffic problem they have a{" "}
                  <span className="font-semibold text-emerald-700">conversion and follow-up problem.</span>
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2 text-[11px]">
                  <div className="rounded-xl border border-emerald-100 bg-white px-3 py-2 text-center">
                    <p className="font-semibold text-emerald-700">Traffic</p>
                    <p className="mt-0.5 text-slate-500">People who see you</p>
                  </div>
                  <div className="rounded-xl border border-amber-100 bg-white px-3 py-2 text-center">
                    <p className="font-semibold text-amber-700">Interest</p>
                    <p className="mt-0.5 text-slate-500">People who click</p>
                  </div>
                  <div className="rounded-xl border border-rose-100 bg-white px-3 py-2 text-center">
                    <p className="font-semibold text-rose-700">Enquiries</p>
                    <p className="mt-0.5 text-slate-500">People who contact</p>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    {
                      stage: "Seen but not searched",
                      detail:
                        "People notice your brand offline or on social, but your Google / Maps presence is weak or inconsistent.",
                    },
                    {
                      stage: "Searched but not clicked",
                      detail:
                        "You appear on search or Maps, but reviews, photos, or profile content don&apos;t convince patients to tap.",
                    },
                    {
                      stage: "Clicked but not contacted",
                      detail:
                        "Website or landing page feels generic, slow, or doesn&apos;t show clear doctor trust and simple call / WhatsApp options.",
                    },
                    {
                      stage: "Contacted but not booked",
                      detail:
                        "Reception or WhatsApp replies are delayed, there&apos;s no reminders, and patients quietly choose another clinic.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={item.stage}
                      className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3 text-sm"
                    >
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-700">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{item.stage}</p>
                        <p className="text-xs text-slate-600">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-slate-500">
                  TechDr fixes these specific breakpoints so that a higher percentage of your visibility
                  turns into real, trackable patient enquiries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* One System - Attract, Convert, Retain */}
        <section
          id="one-system"
          className="border-b border-slate-200/80 bg-gradient-to-b from-slate-50/80 to-white py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-14 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                The complete journey
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                One System to{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Attract, Convert &amp; Retain
                </span>{" "}
                Patients
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                From first click to repeat visits — one integrated approach
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {/* Attract */}
              <div className="card-3d group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-lg hover:shadow-emerald-500/5 md:p-8">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-emerald-100/60 blur-2xl transition group-hover:bg-emerald-100/80" />
                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25">
                    <Target className="h-6 w-6" />
                  </div>
                  <span className="mb-1 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    Step 1
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Attract
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Patient Acquisition
                  </p>
                  <ul className="mt-6 space-y-3">
                    {["Google Ads for Clinics", "Local SEO & Google Business Profile optimisation", "Location-based lead campaigns"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Convert */}
              <div className="card-3d group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-lg hover:shadow-teal-500/5 md:p-8">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-teal-100/60 blur-2xl transition group-hover:bg-teal-100/80" />
                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-lg shadow-teal-500/25">
                    <Zap className="h-6 w-6" />
                  </div>
                  <span className="mb-1 inline-block rounded-full bg-teal-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal-700">
                    Step 2
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Convert
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Patient Conversion
                  </p>
                  <ul className="mt-6 space-y-3">
                    {["High-converting clinic landing pages", "Online appointment booking system", "WhatsApp auto follow-ups"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Retain - spans full width on tablet, same as others on desktop */}
              <div className="card-3d group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-lg hover:shadow-cyan-500/5 sm:col-span-2 md:p-8 lg:col-span-1">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-cyan-100/60 blur-2xl transition group-hover:bg-cyan-100/80" />
                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 text-white shadow-lg shadow-cyan-500/25">
                    <RefreshCw className="h-6 w-6" />
                  </div>
                  <span className="mb-1 inline-block rounded-full bg-cyan-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-700">
                    Step 3
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Retain
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Patient Retention
                  </p>
                  <ul className="mt-6 space-y-3">
                    {["Review management", "Reminder messages", "Repeat visit automation"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do for Doctors */}
        <section
          id="what-we-do"
          className="border-b border-slate-200/80 bg-white py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-10 text-center">
              <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                What We Do for{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Doctors
                </span>
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Performance marketing and systems designed only for healthcare.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Google Ads for Clinics & Hospitals",
                  Icon: Megaphone,
                },
                {
                  title: "Healthcare SEO & Local SEO",
                  Icon: Search,
                },
                {
                  title: "Google Business Profile Growth",
                  Icon: MapPin,
                },
                {
                  title: "Instagram Reels & Content for Doctors",
                  Icon: PlayCircle,
                },
                {
                  title: "Appointment Booking System (Website + WhatsApp)",
                  Icon: CalendarClock,
                },
                {
                  title: "Doctor Personal Branding",
                  Icon: UserCircle2,
                },
              ].map(({ title, Icon }) => (
                <div
                  key={title}
                  className="card-3d flex flex-col rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 text-left shadow-sm transition hover:bg-white"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why TechDr */}
        <section
          id="why-techdr"
          className="border-b border-slate-200/80 bg-white py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-12">
              <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Why Doctors Choose{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  TechDr
                </span>
              </h2>
              <p className="mt-3 max-w-2xl text-lg text-slate-600">
                A specialist healthcare growth partner combining marketing and technology for
                real, trackable patient enquiries.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "100% healthcare-focused agency",
                "Worked with clinics, hospitals, fertility centres, diagnostic labs",
                "Marketing + technology under one roof",
                "Real patient leads, not vanity metrics",
                "Transparent reporting and dedicated support",
              ].map((item) => (
                <div
                  key={item}
                  className="card-3d flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 text-slate-800"
                >
                  <span className="mt-0.5 text-emerald-500">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border-2 border-emerald-200 bg-emerald-50/50 px-6 py-4 text-center">
              <p className="text-sm font-semibold text-emerald-900">
                We don&apos;t promise &ldquo;likes&rdquo;. We focus on{" "}
                <span className="text-emerald-700">patient enquiries</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="border-b border-slate-200/80 bg-slate-50/50 py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Complete healthcare{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    digital ecosystem
                  </span>
                </h2>
                <p className="mt-3 max-w-2xl text-lg text-slate-600">
                  One integrated system across marketing, branding, websites,
                  and automation.
                </p>
              </div>
              <a
                href="#contact"
                className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Get a tailored plan →
              </a>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Healthcare digital marketing",
                  desc: "Local SEO, Google Business Profile, ads on Google and Meta, social content and reels, reputation and reviews, competitor tracking, analytics.",
                },
                {
                  title: "Doctor branding and authority",
                  desc: "Personal branding, messaging and positioning, trust assets, educational content and video strategy, patient-first storytelling.",
                },
                {
                  title: "Medical websites and landing pages",
                  desc: "High-conversion sites, performance builds, SEO and schema, service and doctor profile pages, multi-location setups, fast load and clean UI.",
                },
                {
                  title: "Appointment booking and automation",
                  desc: "Online booking, Reserve with Google, WhatsApp reminders and confirmations, receptionist workflows, cancellation management, source tracking.",
                },
                {
                  title: "Healthcare SaaS and custom tools",
                  desc: "Custom dashboards, CRM workflows, automation tools, reporting, marketing ops, integrations with WhatsApp, email, and analytics.",
                  wide: true,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`card-3d rounded-2xl border border-slate-200/80 bg-white p-6 ${
                    item.wide ? "sm:col-span-2" : ""
                  }`}
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking system */}
        <section
          id="booking-system"
          className="border-b border-slate-200/80 bg-white py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Stop Losing Patients
                  </span>{" "}
                  Due to Manual Booking
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Patients today expect a smooth, digital experience.
                </p>
                <ul className="mt-6 space-y-3 text-slate-700">
                  {[
                    "Instant online booking",
                    "WhatsApp confirmations",
                    "Automated reminder messages",
                    "Easy rescheduling and cancellation",
                    "Post-visit feedback reminders",
                    "Telehealth / online consultation options",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-slate-600">
                  If your system cannot deliver this, patients quietly move to
                  another clinic.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  See booking system demo →
                </a>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 shadow-lg">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Snapshot
                </p>
                <div className="space-y-3">
                  {[
                    { label: "This week’s bookings", value: "146" },
                    { label: "Confirmed via WhatsApp", value: "78%" },
                    { label: "Average wait time", value: "09 min" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm"
                    >
                      <span className="text-sm text-slate-700">
                        {item.label}
                      </span>
                      <span className="font-bold text-emerald-600">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section
          id="industries"
          className="border-b border-slate-200/80 bg-slate-50/50 py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-8">
              <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Built for every healthcare model
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                From individual doctors to multi-location hospitals. Our
                systems and marketing scale with your growth stage.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Individual doctors",
                "Clinics",
                "Multi-speciality hospitals",
                "IVF and fertility centres",
                "Diagnostics",
                "Trauma centres",
                "Medical tourism providers",
                "Telehealth platforms",
                "Corporate chains",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section
          id="proof"
          className="border-b border-slate-200/80 bg-white py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Proof that builds{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                confidence
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Growth is not a promise it's a system. Here's what TechDr
              delivers.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {[
                "Improved local visibility across search and maps",
                "Consistent, qualified patient enquiries",
                "Higher-conversion landing pages and journeys",
                "Automated appointment flow across channels",
                "Stronger brand trust and patient confidence",
                "Measurable reporting and ROI tracking",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-slate-700"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700"
            >
              View results and case studies →
            </a>
          </div>
        </section>

        {/* If You Don't Fix / If You Fix With TechDr */}
        <section className="border-b border-slate-200/80 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-200/50">
              <div className="grid md:grid-cols-2">
                <div className="border-b border-slate-200/80 bg-red-50/80 p-6 md:border-b-0 md:border-r md:p-8">
                  <h3 className="text-base font-bold text-slate-800 md:text-lg">
                    If you don&apos;t fix your digital system now
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {[
                      "Competitors will outrank you",
                      "Patients will book elsewhere",
                      "Google Maps top 3 will stay locked",
                      "Your ad budget will leak",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-slate-400">×</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50/80 p-6 md:p-8">
                  <h3 className="text-base font-bold text-slate-900 md:text-lg">
                    If you fix it with TechDr
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {[
                      "Higher enquiry rate",
                      "Automated booking",
                      "Better patient trust",
                      "Trackable ROI",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing - tabs */}
        <section
          id="pricing"
          className="border-b border-slate-200/80 bg-slate-50/50 py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-10 text-center">
              <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Pricing for{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  doctors, clinics &amp; hospitals
                </span>
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Starting monthly retainers · One-time onboarding fee · Ad spend billed separately · GST extra
              </p>
            </div>
            <PricingTabs />
          </div>
        </section>

        {/* Get a Free Clinic Growth Plan */}
        <section id="growth-form" className="border-b border-slate-200/80 bg-slate-50/50 py-16 md:py-20">
          <div className="mx-auto max-w-xl px-4 md:px-0">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Get a Free{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Clinic Growth Plan
                </span>
              </h2>
              <p className="mt-4 inline-block rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-900">
                Free 10-minute strategy call. No sales pitch. Just clarity.
              </p>
            </div>
            <ClinicGrowthForm />
          </div>
        </section>

        {/* FAQ - 10 SEO FAQs, 5 left / 5 right, accordion */}
        <FaqSection />

        {/* Final CTA */}
        <section
          id="contact"
          className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white md:py-24"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.15),transparent)]" />
          <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to scale your healthcare brand?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              More patients, better systems, stronger medical branding TechDr
              is built to take your healthcare growth seriously.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <DemoButton className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400">
                Schedule a demo
                <span>→</span>
              </DemoButton>
              <a
                href="tel:+919542218454"
                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-500 bg-transparent px-8 py-4 text-base font-semibold text-white transition hover:border-slate-400 hover:bg-white/5"
              >
                Speak to our team
              </a>
            </div>
            <p className="mt-10 text-sm text-slate-500">
              Based in Hyderabad · Serving healthcare brands across India and
              global markets
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 pt-5 pb-16 text-center text-xs text-slate-600 md:flex-row md:px-8 md:py-5 md:pb-8">
          <div className="space-y-1">
            <p>
              TechDr is a{" "}
              <span className="font-semibold text-slate-700">
                Reserve with Google partner
              </span>
              .
            </p>
            <p className="text-sm text-slate-700 md:text-xs">
              <a href="tel:+919542218454" className="font-medium hover:text-slate-900">
                +91 95422 18454
              </a>{" "}
              ·{" "}
              <a
                href="mailto:info@techdr.in"
                className="font-medium hover:text-slate-900"
              >
                info@techdr.in
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/doctors/doctors%20photos%20-%20techdr-1/RWG%20Logo.png"
              alt="Reserve with Google Partner"
              width={140}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
