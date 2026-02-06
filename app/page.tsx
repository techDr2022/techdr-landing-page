import Image from "next/image";
import { Suspense } from "react";
import { FaqSection } from "@/components/FaqSection";
import { DoctorsCarousel } from "@/components/DoctorsCarousel";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FormToastHandler } from "@/components/FormToastHandler";
import { DemoButton } from "@/components/DemoButton";
import { doctors } from "@/app/data/doctors";
import {
  Megaphone,
  Search,
  MapPin,
  PlayCircle,
  CalendarClock,
  UserCircle2,
  CheckCircle2,
} from "lucide-react";

type HomeProps = {
  searchParams?: {
    submitted?: string;
  };
};

export default function Home({ searchParams }: HomeProps) {
  const submitted = searchParams?.submitted;
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Suspense fallback={null}>
        <FormToastHandler />
      </Suspense>
      {/* Minimal header - agency style */}
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#" className="flex items-center h-10">
            <Image
              src="/logo.png"
              alt="TechDr"
              width={60}
              height={40}
              className="h-full w-[60px] object-contain"
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
              Booking
            </a>
            <a href="#industries" className="transition hover:text-slate-900">
              Industries
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
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contact"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Talk to Expert
            </a>
            <DemoButton className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:shadow-emerald-500/40">
              Book a Demo
            </DemoButton>
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
                <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
                  Healthcare growth studio
                </p>
                <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Healthcare growth,{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    powered by technology
                  </span>
                </h1>
                <p className="max-w-xl text-lg text-slate-600">
                  Marketing, automation, and AI solutions built for doctors,
                  clinics, hospitals, and healthcare chains. One partner for
                  visibility, trust, and scale.
                </p>
                <p className="max-w-xl text-sm text-slate-500">
                  TechDr helps medical brands attract patients, build trust,
                  automate operations, and grow digitally from search visibility
                  to appointment booking, from branding to automation.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <DemoButton className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:shadow-emerald-500/40">
                    Book a Demo
                    <span className="text-white/80">→</span>
                  </DemoButton>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    Explore Services
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
                100+
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

        {/* Our trusted doctors - auto carousel */}
        <section className="border-b border-slate-200/80 bg-slate-50/50 py-14 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Our trusted doctors
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
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl border border-slate-200/80 bg-slate-100">
                  {/* Photo placeholder - replace with your image */}
                  <div className="flex h-full items-center justify-center text-slate-400">
                    <span className="text-sm">Photo placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* One System - Attract, Convert, Retain */}
        <section
          id="one-system"
          className="border-b border-slate-200/80 bg-slate-50/50 py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-10 text-center">
              <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                One System to{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Attract, Convert &amp; Retain
                </span>{" "}
                Patients
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                  Patient Acquisition
                </h3>
                <ul className="mt-4 space-y-2">
                  {["Google Ads for Clinics", "Local SEO & Google Business Profile optimisation", "Location-based lead campaigns"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-700">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                  Patient Conversion
                </h3>
                <ul className="mt-4 space-y-2">
                  {["High-converting clinic landing pages", "Online appointment booking system", "WhatsApp auto follow-ups"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-700">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:col-span-2 lg:col-span-1">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                  Patient Retention
                </h3>
                <ul className="mt-4 space-y-2">
                  {["Review management", "Reminder messages", "Repeat visit automation"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-700">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
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
                  Complete healthcare digital ecosystem
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
                  One booking system, total control
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Reduce missed appointments, automate patient communication,
                  and track every booking source. Patients book online
                  seamlessly; staff manage schedules faster; doctors stay
                  organised with clean dashboards.
                </p>
                <ul className="mt-6 space-y-2 text-slate-700">
                  {[
                    "Online booking and multi-channel intake",
                    "Reserve with Google (RWG) integration",
                    "WhatsApp automation and reminders",
                    "Multi-doctor and multi-location scheduling",
                    "Reporting dashboard and source tracking",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
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
                    { label: "Today's appointments", value: "28" },
                    { label: "Automated reminders", value: "92%" },
                    { label: "No-show rate", value: "↓ 37%" },
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
              Proof that builds confidence
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

        {/* Get a Free Clinic Growth Plan */}
        <section className="border-b border-slate-200/80 bg-slate-50/50 py-16 md:py-20">
          <div className="mx-auto max-w-xl px-4 md:px-0">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Get a Free{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Clinic Growth Plan
                </span>
              </h2>
            </div>
            <form
              action="/api/clinic-growth"
              method="POST"
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
              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition hover:shadow-emerald-500/40"
              >
                <span>📈 Get Free Consultation</span>
              </button>
              <p className="mt-2 text-center text-xs text-slate-500">
                🔒 Your details are safe. No spam. Only healthcare experts will call.
              </p>
            </form>
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
                href="#"
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
    </div>
  );
}
