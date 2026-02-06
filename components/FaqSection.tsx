"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const SEO_FAQS = [
  {
    q: "Do you work only with healthcare businesses?",
    a: "Yes. TechDr is a healthcare-focused growth studio. We work exclusively with doctors, clinics, hospitals, diagnostic centres, IVF centres, and healthcare chains, not with general businesses.",
  },
  {
    q: "How is TechDr different from a regular digital marketing agency?",
    a: "Unlike generic agencies, TechDr understands healthcare patient behaviour, compliance, local search intent, and conversion psychology. We combine marketing, automation, and technology to deliver real patient enquiries, not just traffic or likes.",
  },
  {
    q: "Can you help us get more patient enquiries from Google?",
    a: "Yes. Our core expertise includes Google Ads for healthcare, Google Business Profile optimisation, and local SEO strategies that drive calls, WhatsApp enquiries, and appointment bookings.",
  },
  {
    q: "Do you provide appointment booking systems?",
    a: "Yes. We provide online appointment booking systems integrated with websites, WhatsApp, and Google, helping clinics automate bookings, reminders, and follow-ups while reducing manual work.",
  },
  {
    q: "Is TechDr suitable for new clinics or only established hospitals?",
    a: "TechDr works with both new clinics and established healthcare brands. We customise the growth strategy based on your stage, speciality, location, and competition.",
  },
  {
    q: "How soon can we expect results?",
    a: "Google Ads and local visibility campaigns can start generating enquiries within weeks. SEO, branding, and automation deliver stronger results over time through consistent optimisation and scaling.",
  },
  {
    q: "Do you guarantee leads or rankings?",
    a: "We focus on structured growth, quality traffic, and conversion optimisation. While no ethical agency guarantees rankings, our healthcare-specific strategies are designed to maximise enquiries and appointment conversions.",
  },
  {
    q: "Will you manage everything or do we need an in-house team?",
    a: "TechDr acts as your complete growth partner. We handle strategy, execution, optimisation, and reporting, so you do not need a separate in-house marketing team.",
  },
  {
    q: "Is this suitable for multi-location clinics or healthcare chains?",
    a: "Yes. We specialise in scaling healthcare brands across multiple locations with centralised marketing, local optimisation, automation, and performance tracking.",
  },
  {
    q: "How do we get started?",
    a: "Simply book a free demo. Our team will analyse your current digital presence and share a clear, actionable growth plan tailored to your healthcare practice.",
  },
] as const;

const LEFT_FAQS = SEO_FAQS.slice(0, 5);
const RIGHT_FAQS = SEO_FAQS.slice(5, 10);

function FaqColumn({ items, className }: { items: typeof SEO_FAQS; className?: string }) {
  return (
    <Accordion type="multiple" className={cn("space-y-3", className)}>
      {items.map((faq, i) => (
        <AccordionItem
          key={faq.q}
          value={`item-${i}`}
          className="rounded-2xl border border-slate-200/80 border-b-slate-200/80 bg-white px-5 shadow-sm transition-shadow hover:shadow-md data-[state=open]:border-emerald-200/80 data-[state=open]:ring-2 data-[state=open]:ring-emerald-500/10"
        >
          <AccordionTrigger className="py-5 text-left text-[15px] font-semibold text-slate-900 hover:no-underline [&[data-state=open]]:text-emerald-700 [&[data-state=open]]:pb-2">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 pt-0 text-slate-600">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SEO_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export function FaqSection() {
  return (
    <section
      id="faq"
      className="border-b border-slate-200/80 bg-slate-50/50 py-16 md:py-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-10">
          <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Common questions about healthcare digital marketing, booking, and how TechDr works.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <FaqColumn items={LEFT_FAQS} />
          <FaqColumn items={RIGHT_FAQS} />
        </div>
      </div>
    </section>
  );
}
