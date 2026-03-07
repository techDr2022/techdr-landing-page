"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  LineChart,
  MapPin,
  Search,
  MousePointerClick,
  MessageCircle,
  ArrowRight,
  BarChart2,
  ShieldCheck,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function DoctorsDigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Gradient background decoration */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-[-10rem] h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-x-0 top-64 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      </div>

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 pb-20 pt-16 md:px-6 md:pt-20">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-200">
              <Stethoscope className="h-4 w-4" />
              For Doctors, Clinics & Hospitals
            </span>
            <div className="space-y-3">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                Digital Marketing Services for Doctors & Clinics
              </h1>
              <p className="text-lg text-slate-300">
                Grow Your Practice with{" "}
                <span className="font-semibold text-emerald-300">
                  ethical, result-driven healthcare marketing
                </span>
                .
              </p>
            </div>
            <p className="max-w-2xl text-sm text-slate-300">
              Today, patients don’t choose a doctor randomly. They search on
              Google, check Google Maps, read reviews, explore your website,
              and then decide. If your clinic is not visible or does not look
              trustworthy online, patients move on to the next option.
            </p>
            <p className="max-w-2xl text-sm text-slate-300">
              At <span className="font-semibold text-emerald-300">TechDr</span>,
              we specialise exclusively in digital marketing for doctors,
              clinics, and hospitals, helping healthcare professionals attract
              the right patients and grow consistently.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400">
                Book a strategy call
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-emerald-400/60 hover:text-emerald-100">
                Talk to our healthcare marketing expert
              </button>
            </div>
          </motion.div>

          {/* Hero graphic */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.9)] backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
                    <Stethoscope className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">
                      Local Clinic – Google Maps
                    </p>
                    <p className="text-sm font-semibold text-slate-50">
                      +178% patient enquiries
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  TechDr
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-slate-900/80 p-3">
                  <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                    <p>Google Maps Visibility</p>
                    <p>Last 90 days</p>
                  </div>
                  <div className="relative h-24 w-full overflow-hidden rounded-xl bg-slate-950/80">
                    <div className="absolute inset-4 rounded-xl bg-gradient-to-tr from-emerald-500/25 via-emerald-400/5 to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3 flex items-end gap-1">
                      {[18, 26, 30, 40, 52, 70].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-full bg-emerald-500/70"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 text-emerald-300">
                      <ArrowRight className="h-3 w-3" />
                      More calls & directions
                    </span>
                    <span className="text-slate-400">Ranked in top 3</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="space-y-1 rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
                    <div className="flex items-center gap-2 text-emerald-200">
                      <MapPin className="h-3.5 w-3.5" />
                      <span className="font-semibold">Google Maps</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Visibility for &quot;doctor near me&quot;, speciality +
                      location and more.
                    </p>
                  </div>
                  <div className="space-y-1 rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
                    <div className="flex items-center gap-2 text-emerald-200">
                      <Search className="h-3.5 w-3.5" />
                      <span className="font-semibold">SEO + Ads</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Convert searches into booked appointments with tracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Why digital marketing */}
        <motion.section
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.8)] md:p-8"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
                Why Digital Marketing Is Important for Clinics Today
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Most clinics face the same challenges, even when clinical
                outcomes are excellent.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-200">
              <ShieldCheck className="h-4 w-4" />
              <span>Ethical, healthcare-only marketing</span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Low visibility on Google and Google Maps",
              "Fewer patient enquiries despite good treatment outcomes",
              "Dependence only on referrals",
              "Ads running without clear results or tracking",
              "Social media presence without patient conversion",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4"
              >
                <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
                  <BarChart2 className="h-3.5 w-3.5" />
                </div>
                <p className="text-sm text-slate-200">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-300">
            Digital marketing bridges the gap between{" "}
            <span className="font-semibold text-emerald-200">
              good medical care
            </span>{" "}
            and{" "}
            <span className="font-semibold text-emerald-200">
              how patients actually discover and evaluate you online
            </span>
            .
          </p>
        </motion.section>

        {/* Approach */}
        <motion.section
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
              Our Healthcare-Focused Digital Marketing Approach
            </h2>
            <p className="text-sm text-slate-300">
              We don&apos;t believe in random promotions. Our strategy focuses
              on{" "}
              <span className="font-semibold text-emerald-200">
                visibility, trust, and conversion
              </span>
              .
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Be Visible Where Patients Search",
                icon: Search,
              },
              {
                title: "Build Trust Before the First Visit",
                icon: ShieldCheck,
              },
              {
                title: "Convert Searches into Appointments",
                icon: MousePointerClick,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300">
                  We align Google, Google Maps, website, and social media so
                  that every digital touchpoint moves patients closer to
                  booking.
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Google Business Profile */}
        <motion.section
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start"
        >
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
              Google Business Profile (GMB) Optimisation
            </h2>
            <p className="text-sm text-slate-300">
              Google Maps is the first place patients look when searching for a
              nearby doctor or clinic. We optimise and manage your Google
              Business Profile to improve local visibility and patient trust.
            </p>

            <h3 className="text-sm font-semibold text-slate-100">What We Do</h3>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                "Doctor-focused profile optimisation",
                "Correct service categories and keywords",
                "Weekly Google posts and updates",
                "Photo uploads to improve engagement",
                "Patient review growth strategy",
                "Local competitor analysis",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-2 rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-xs text-slate-200"
                >
                  <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h3 className="pt-2 text-sm font-semibold text-slate-100">
              Result
            </h3>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>• Higher Google Maps ranking</li>
              <li>• More direct calls and WhatsApp enquiries</li>
              <li>• Increased local patient footfall</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/70 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.9)]">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-emerald-300" />
                Nearby searches – last 30 days
              </span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                Live metrics
              </span>
            </div>
            <div className="relative h-32 overflow-hidden rounded-2xl bg-slate-950">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/25 via-emerald-500/5 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-end gap-1">
                {[32, 40, 52, 60].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-lg bg-emerald-400/80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-slate-300">
              See how often patients discovered you on Google Maps, requested
              directions, and tapped to call your clinic.
            </p>
          </div>
        </motion.section>

        {/* SEO */}
        <motion.section
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 md:p-8"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
                Search Engine Optimisation (SEO) for Doctors
              </h2>
              <p className="text-sm text-slate-300">
                SEO helps patients find your clinic organically without paying
                for ads every time.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-200">
              <LineChart className="h-4 w-4" />
              <span>Compounding, long-term growth</span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3 text-sm text-slate-300">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Our SEO Services Include
              </h3>
              <ul className="space-y-1.5">
                <li>• Treatment and service-specific pages</li>
                <li>• Location-based SEO for local searches</li>
                <li>• Technical SEO for faster and compliant websites</li>
                <li>• Health education blogs for patient awareness</li>
                <li>• Structured data for better Google understanding</li>
              </ul>
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Result
              </h3>
              <ul className="space-y-1.5">
                <li>• Long-term patient enquiries</li>
                <li>• Strong online authority for the doctor</li>
                <li>• Reduced dependency on paid ads</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Google Ads */}
        <motion.section
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2fr)] md:items-start"
        >
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
              Google Ads for Clinics and Doctors
            </h2>
            <p className="text-sm text-slate-300">
              We run high-intent Google Ads, targeting patients who are
              actively searching for treatment.
            </p>

            <h3 className="text-sm font-semibold text-slate-100">
              How Our Ads Work
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-300">
              <li>• Search-based campaigns only</li>
              <li>• Call, WhatsApp, and booking-focused ads</li>
              <li>• Local targeting around your clinic</li>
              <li>• Keyword filtering to avoid irrelevant traffic</li>
              <li>• Conversion tracking, not just clicks</li>
            </ul>

            <h3 className="pt-2 text-sm font-semibold text-slate-100">
              Result
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-300">
              <li>• Quality patient enquiries</li>
              <li>• Controlled ad spend</li>
              <li>• Measurable return on investment</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Sample campaign dashboard</span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                High intent
              </span>
            </div>
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-3 py-2">
                <div className="flex items-center gap-2 text-slate-200">
                  <Search className="h-3.5 w-3.5 text-emerald-300" />
                  <span>ACL surgeon Hyderabad</span>
                </div>
                <span className="text-emerald-300">Booked</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-3 py-2">
                <div className="flex items-center gap-2 text-slate-200">
                  <Search className="h-3.5 w-3.5 text-emerald-300" />
                  <span>pediatrician near me</span>
                </div>
                <span className="text-emerald-300">Call</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-3 py-2">
                <div className="flex items-center gap-2 text-slate-200">
                  <Search className="h-3.5 w-3.5 text-emerald-300" />
                  <span>root canal dentist</span>
                </div>
                <span className="text-emerald-300">WhatsApp</span>
              </div>
            </div>
            <p className="text-xs text-slate-400">
              We optimise for real-world actions – calls, WhatsApp chats and
              appointment bookings – not just impressions and clicks.
            </p>
          </div>
        </motion.section>

        {/* Social Media */}
        <motion.section
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 md:p-8"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
                Social Media Marketing for Healthcare
              </h2>
              <p className="text-sm text-slate-300">
                Social media is not just for visibility, it builds confidence
                and familiarity.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-200">
              <MessageCircle className="h-4 w-4" />
              <span>Human, patient-friendly content</span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2 text-sm text-slate-300">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                What We Create
              </h3>
              <ul className="space-y-1.5">
                <li>• Patient education posts</li>
                <li>• Health awareness content</li>
                <li>• Doctor branding creatives</li>
                <li>• Short videos and reels explaining conditions</li>
                <li>• Consistent visual identity</li>
              </ul>
            </div>

            <div className="space-y-2 text-sm text-slate-300">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Result
              </h3>
              <ul className="space-y-1.5">
                <li>• Strong doctor branding</li>
                <li>• Better patient confidence</li>
                <li>• Higher enquiry conversion from Google and ads</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Landing pages */}
        <motion.section
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2fr)] md:items-start"
        >
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
              Landing Pages & Enquiry Conversion
            </h2>
            <p className="text-sm text-slate-300">
              A patient may click your ad or Google listing, but conversion
              depends on what they see next.
            </p>

            <h3 className="text-sm font-semibold text-slate-100">
              Our Focus
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-300">
              <li>• Fast-loading landing pages</li>
              <li>• Clear doctor introduction</li>
              <li>• Simple call, WhatsApp, and booking options</li>
              <li>• Mobile-friendly design</li>
            </ul>

            <h3 className="pt-2 text-sm font-semibold text-slate-100">
              Result
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-300">
              <li>• Higher enquiry conversion</li>
              <li>• Reduced patient drop-off</li>
              <li>• Better use of marketing budgets</li>
            </ul>
          </div>

          <div className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-xs text-slate-300">
              <div className="mb-3 flex items-center justify-between text-[11px] text-slate-400">
                <span>Example landing page layout</span>
                <span>Mobile-first</span>
              </div>
              <div className="grid gap-2">
                <div className="h-4 w-32 rounded-full bg-emerald-500/60" />
                <div className="h-3 w-52 rounded-full bg-slate-700/80" />
                <div className="mt-2 h-20 rounded-2xl bg-slate-800/80" />
                <div className="mt-2 flex gap-2">
                  <div className="h-8 flex-1 rounded-full bg-emerald-500/70" />
                  <div className="h-8 flex-1 rounded-full border border-slate-700/80" />
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400">
              We design landing experiences that make it effortless for patients
              to contact you from mobile, desktop, or WhatsApp.
            </p>
          </div>
        </motion.section>

        {/* Reporting */}
        <motion.section
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 md:p-8"
        >
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
              Performance Tracking & Transparent Reporting
            </h2>
            <p className="text-sm text-slate-300">
              We believe in complete transparency. You always know what is
              working and why.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Enquiry and call tracking reports",
              "Google Maps visibility insights",
              "Ad performance summaries",
              "Monthly growth analysis and next steps",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-xs text-slate-200"
              >
                <div className="mt-0.5 h-1 w-6 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Why TechDr & timeline */}
        <motion.section
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2fr)]"
        >
          <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 md:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
              Why Choose TechDr
            </h2>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Healthcare-only digital marketing team</li>
              <li>• Deep understanding of doctor branding and ethics</li>
              <li>• No fake promises or misleading numbers</li>
              <li>• Structured, long-term growth strategy</li>
            </ul>
            <p className="text-sm text-slate-300">
              Our goal is not views or likes, but{" "}
              <span className="font-semibold text-emerald-200">
                real patient growth
              </span>
              .
            </p>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 md:p-8">
            <h2 className="text-base font-semibold tracking-tight text-slate-50">
              Expected Growth Timeline
            </h2>
            <div className="space-y-3 text-sm text-slate-300">
              <div>
                <p className="font-semibold text-slate-100">
                  Month 1: Setup, optimisation, foundation building
                </p>
                <p className="text-xs text-slate-400">
                  Audit, account setup, tracking, and core profiles.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-100">
                  Month 2–3: Enquiry flow stabilisation
                </p>
                <p className="text-xs text-slate-400">
                  Campaign refinement, landing page optimisation, review growth.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-100">
                  Month 3 onwards: Growth optimisation and scaling
                </p>
                <p className="text-xs text-slate-400">
                  Scale high-performing channels while keeping acquisition cost
                  under control.
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400">
              Results vary based on speciality, location, and competition.
            </p>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-cyan-500/10 p-[1px]"
        >
          <div className="h-full w-full rounded-[1.4rem] bg-slate-950/95 px-6 py-8 md:px-10 md:py-10">
            <div className="grid gap-6 md:grid-cols-[minmax(0,2.3fr)_minmax(0,2fr)] md:items-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
                  Ready to Grow Your Practice?
                </h2>
                <p className="text-sm text-slate-200">
                  If you are already providing quality medical care, we ensure
                  patients find you, trust you, and contact you.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400">
                    👉 Book a strategy call today
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-slate-950/80 px-5 py-2.5 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/10">
                    👉 Talk to our healthcare marketing expert
                  </button>
                </div>
              </div>

              <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-xs text-slate-300">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  What we&apos;ll cover on the call
                </p>
                <ul className="space-y-1.5">
                  <li>• Your speciality, location, and target patient profile</li>
                  <li>• Current online presence audit (Google, Maps, website)</li>
                  <li>• Recommended channels and realistic growth roadmap</li>
                  <li>• Budget ranges and expected enquiry volumes</li>
                </ul>
                <p className="pt-1 text-[11px] text-slate-400">
                  No hard selling. The goal is clarity: what it would take to
                  make your clinic the obvious choice for patients in your area.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

