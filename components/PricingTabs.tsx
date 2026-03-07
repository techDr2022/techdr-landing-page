"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DemoButton } from "@/components/DemoButton";
import { CheckCircle2 } from "lucide-react";

type Plan = {
  name: string;
  tag?: string;
  price: string;
  summary: string;
  features: string[];
  highlight?: boolean;
};

const doctorPlans: Plan[] = [
  {
    name: "Doctor Starter",
    price: "from ₹15K/mo + 18% GST",
    summary: "For individual doctors testing digital seriously.",
    features: [
      "GMB & local SEO setup",
      "IG + FB content",
      "10 posts/month",
      "Landing page + WhatsApp",
      "Weekly reporting",
    ],
  },
  {
    name: "Doctor Growth",
    tag: "Most chosen",
    price: "from ₹20K/mo + 18% GST",
    summary: "For doctors who want predictable enquiry flow.",
    features: [
      "Everything in Starter",
      "SEO + GMB review engine",
      "12 posts + 4 reels/month",
      "Google Ads campaigns",
      "Booking & telehealth flow",
    ],
    highlight: true,
  },
];

const clinicPlans: Plan[] = [
  {
    name: "Clinic Growth",
    price: "from ₹20K/mo + 18% GST",
    summary: "For single / multi-speciality clinics.",
    features: [
      "SEO, Maps & landing pages",
      "Meta & Google lead campaigns",
      "Review management",
      "Booking & telehealth",
      "Basic WhatsApp automations",
    ],
  },
  {
    name: "Clinic Scale",
    tag: "For aggressive growth",
    price: "from ₹25K/mo + 18% GST",
    summary: "For clinics ready to dominate their locality.",
    features: [
      "Everything in Growth",
      "Full-funnel ad strategy",
      "Advanced dashboards",
      "Content + video engine",
      "WhatsApp automations & CRM",
    ],
    highlight: true,
  },
];

const hospitalPlans: Plan[] = [
  {
    name: "Hospital Growth",
    price: "from ₹30K/mo + 18% GST",
    summary: "For multi-department hospitals building a digital engine.",
    features: [
      "Multi-dept SEO & campaigns",
      "GMB review & reputation",
      "Website, booking & telehealth",
      "Centralised reporting",
      "Social for key departments",
    ],
  },
  {
    name: "Hospital Enterprise",
    tag: "Custom",
    price: "Custom + 18% GST",
    summary: "For healthcare chains and complex, multi-location setups.",
    features: [
      "Custom growth roadmap",
      "Dedicated pod (marketing + tech)",
      "SaaS, dashboards & integrations",
      "Multi-location performance stack",
      "Quarterly strategy & training",
    ],
    highlight: true,
  },
];

function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 ${
        plan.highlight ? "border-emerald-300/80 ring-1 ring-emerald-300/70" : ""
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="text-base font-semibold text-slate-900">{plan.name}</h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-emerald-700">
            {plan.price}
          </p>
        </div>
        {plan.tag ? (
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
            {plan.tag}
          </span>
        ) : null}
      </div>
      <p className="mb-3 text-xs text-slate-500">{plan.summary}</p>
      <div className="mt-1 space-y-2 text-sm text-slate-700">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-500" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PricingTabs() {
  return (
    <Tabs defaultValue="doctors" className="w-full">
      <TabsList className="mb-6 flex w-full rounded-2xl border border-slate-200/80 bg-slate-100/60 p-1.5">
        <TabsTrigger
          value="doctors"
          className="flex-1 rounded-xl py-2.5 text-sm font-semibold text-slate-600 transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:shadow-emerald-500/25"
        >
          Doctors
        </TabsTrigger>
        <TabsTrigger
          value="clinics"
          className="flex-1 rounded-xl py-2.5 text-sm font-semibold text-slate-600 transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:shadow-emerald-500/25"
        >
          Clinics
        </TabsTrigger>
        <TabsTrigger
          value="hospitals"
          className="flex-1 rounded-xl py-2.5 text-sm font-semibold text-slate-600 transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:shadow-emerald-500/25"
        >
          Hospitals
        </TabsTrigger>
      </TabsList>

      <TabsContent value="doctors" className="mt-0">
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/40">
          <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-5 py-4 md:px-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-500">Individual doctors &amp; small practices</p>
              <DemoButton className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition hover:shadow-emerald-500/40">
                Discuss pricing
              </DemoButton>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              One-time onboarding fee · Ad spend billed separately · GST extra
            </p>
          </div>
          <div className="px-5 py-4 md:px-6">
            <div className="grid gap-4 md:grid-cols-2">
              {doctorPlans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="clinics" className="mt-0">
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/40">
          <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-5 py-4 md:px-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-500">Single or multi-speciality clinics</p>
              <DemoButton className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition hover:shadow-emerald-500/40">
                Discuss pricing
              </DemoButton>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              One-time onboarding fee · Ad spend billed separately · GST extra
            </p>
          </div>
          <div className="px-5 py-4 md:px-6">
            <div className="grid gap-4 md:grid-cols-2">
              {clinicPlans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="hospitals" className="mt-0">
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/40">
          <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-5 py-4 md:px-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-500">Hospitals &amp; healthcare chains</p>
              <DemoButton className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition hover:shadow-emerald-500/40">
                Discuss pricing
              </DemoButton>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              One-time onboarding fee · Ad spend billed separately · GST extra
            </p>
          </div>
          <div className="px-5 py-4 md:px-6">
            <div className="grid gap-4 md:grid-cols-2">
              {hospitalPlans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
