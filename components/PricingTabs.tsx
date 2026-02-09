"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DemoButton } from "@/components/DemoButton";
import { CheckCircle2 } from "lucide-react";

const tableRow = "flex items-center gap-4 border-b border-slate-100 py-3 text-sm last:border-0";
const cellFeature = "flex-1 text-slate-700";
const cellPkg = "w-[140px] shrink-0 text-right text-slate-600";
const cellCheck = "w-[140px] shrink-0 text-right text-emerald-600";
const cellPkgRight = "w-[140px] shrink-0 text-right text-slate-600";

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
          </div>
          <div className="px-5 py-4 md:px-6">
            {/* Package headers */}
            <div className={`${tableRow} bg-slate-50/80 font-medium text-slate-500`}>
              <div className={cellFeature}>Feature</div>
              <div className={cellPkg}>Doctor Starter · ₹15K/mo</div>
              <div className={cellPkg}>Doctor Growth · ₹20K/mo</div>
            </div>
            {[
              { f: "GMB & Local SEO", s: "Setup + regular updates", g: "Daily updates" },
              { f: "Social (IG, FB, YouTube)", s: "IG + FB", g: "IG + FB + YouTube" },
              { f: "Content", s: "10 posts/mo", g: "12 posts + 4 reels (video shoot)" },
              { f: "GMB Review Management", s: "check", g: "check" },
              { f: "Landing page & WhatsApp", s: "check", g: "check" },
              { f: "Google Ads", s: "—", g: "check" },
              { f: "Review & reputation", s: "—", g: "check" },
              { f: "Booking & Telehealth", s: "—", g: "check" },
            ].map((row) => (
              <div key={row.f} className={tableRow}>
                <div className={cellFeature}>{row.f}</div>
                <div className={cellPkg}>
                  {row.s === "check" ? <CheckCircle2 className="ml-auto inline h-4 w-4" /> : row.s}
                </div>
                <div className={row.g === "check" ? cellCheck : cellPkgRight}>
                  {row.g === "check" ? <CheckCircle2 className="ml-auto inline h-4 w-4" /> : row.g}
                </div>
              </div>
            ))}
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
          </div>
          <div className="px-5 py-4 md:px-6">
            <div className={`${tableRow} bg-slate-50/80 font-medium text-slate-500`}>
              <div className={cellFeature}>Feature</div>
              <div className={cellPkg}>Clinic Growth · ₹20K/mo</div>
              <div className={cellPkg}>Clinic Scale · ₹25K/mo</div>
            </div>
            {[
              { f: "SEO, Maps & landing pages", s: "check", g: "check" },
              { f: "Social (IG, FB, YouTube)", s: "check", g: "check" },
              { f: "GMB Review Management", s: "check", g: "check" },
              { f: "Meta & Google campaigns", s: "Lead campaigns", g: "Full-funnel" },
              { f: "Booking & Telehealth", s: "check", g: "check" },
              { f: "WhatsApp automations & dashboard", s: "Basic tracking", g: "check" },
            ].map((row) => (
              <div key={row.f} className={tableRow}>
                <div className={cellFeature}>{row.f}</div>
                <div className={row.s === "check" ? cellCheck : cellPkg}>
                  {row.s === "check" ? <CheckCircle2 className="ml-auto inline h-4 w-4" /> : row.s}
                </div>
                <div className={row.g === "check" ? cellCheck : cellPkgRight}>
                  {row.g === "check" ? <CheckCircle2 className="ml-auto inline h-4 w-4" /> : row.g}
                </div>
              </div>
            ))}
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
          </div>
          <div className="px-5 py-4 md:px-6">
            <div className={`${tableRow} bg-slate-50/80 font-medium text-slate-500`}>
              <div className={cellFeature}>Feature</div>
              <div className={cellPkg}>Hospital Growth · ₹30K/mo</div>
              <div className={cellPkg}>Hospital Enterprise · Custom</div>
            </div>
            {[
              { f: "Multi-dept SEO & campaigns", s: "check", g: "check" },
              { f: "Social (IG, FB, YouTube)", s: "check", g: "check" },
              { f: "GMB Review Management", s: "check", g: "check" },
              { f: "Website, Booking & Telehealth", s: "check", g: "check" },
              { f: "Multi-location, SaaS, dedicated team", s: "Centralised reporting", g: "check" },
            ].map((row) => (
              <div key={row.f} className={tableRow}>
                <div className={cellFeature}>{row.f}</div>
                <div className={row.s === "check" ? cellCheck : cellPkg}>
                  {row.s === "check" ? <CheckCircle2 className="ml-auto inline h-4 w-4" /> : row.s}
                </div>
                <div className={row.g === "check" ? cellCheck : cellPkgRight}>
                  {row.g === "check" ? <CheckCircle2 className="ml-auto inline h-4 w-4" /> : row.g}
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
