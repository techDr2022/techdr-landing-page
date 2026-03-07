"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BANGALORE_GMB_FAQS = [
  {
    q: "What is Google Business Profile management for doctors?",
    a: "Google Business Profile management involves optimising and maintaining your clinic's listing on Google Maps so that patients searching for doctors in Bangalore can easily find your clinic, call you, or book an appointment.",
  },
  {
    q: "Why is Google Maps ranking important for clinics in Bangalore?",
    a: "Most patients search terms like \"doctor near me\" or \"best clinic in Bangalore\". Google shows map results first, and clinics ranking in the top results receive the majority of patient calls and enquiries.",
  },
  {
    q: "What services are included in the ₹6,999 monthly plan?",
    a: "The plan includes Google Business Profile optimisation, weekly Google posts, review response management, service listing optimisation, local SEO improvements, and performance monitoring to improve your clinic's local visibility.",
  },
  {
    q: "Will this help my clinic rank higher on Google Maps?",
    a: "Yes. Our local SEO strategies help improve relevance, visibility, and engagement signals that contribute to better Google Maps rankings for doctor searches in Bangalore.",
  },
  {
    q: "Do you help increase patient reviews on Google?",
    a: "Yes. We guide clinics on ethical strategies to encourage genuine patient reviews and manage responses to build a strong online reputation.",
  },
  {
    q: "How long does it take to see results from Google Business Profile optimisation?",
    a: "Many clinics start seeing improvements in profile visibility and enquiries within a few weeks, while stronger ranking improvements usually develop with consistent optimisation over time.",
  },
  {
    q: "Is this service only for doctors in Bangalore?",
    a: "Yes. This page and pricing plan are specifically designed for doctors and clinics located in Bangalore who want to improve their Google Maps visibility.",
  },
  {
    q: "Do I need to provide access to my Google Business Profile?",
    a: "Yes. Secure manager access is required so our team can optimise your profile, manage posts, and respond to reviews effectively.",
  },
  {
    q: "Can this service work for new clinics that recently opened?",
    a: "Yes. In fact, new clinics benefit greatly from early optimisation because it helps build visibility, reviews, and trust quickly in local search results.",
  },
  {
    q: "How do I get started with TechDr's GMB management service?",
    a: "Simply fill out the consultation form on this page. Our team will review your current Google Business Profile and explain how we can help improve your clinic's visibility and patient enquiries.",
  },
] as const;

function FaqColumn({
  items,
  baseIndex,
}: {
  items: readonly (typeof BANGALORE_GMB_FAQS)[number][];
  baseIndex: number;
}) {
  return (
    <Accordion type="multiple" className="space-y-3">
      {items.map((faq, i) => (
        <AccordionItem
          key={faq.q}
          value={`item-${baseIndex + i}`}
          className="rounded-2xl border border-slate-200/80 bg-white px-5 shadow-sm transition-shadow hover:shadow-md data-[state=open]:border-emerald-200/80 data-[state=open]:ring-2 data-[state=open]:ring-emerald-500/10"
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

const LEFT_FAQS = BANGALORE_GMB_FAQS.slice(0, 5);
const RIGHT_FAQS = BANGALORE_GMB_FAQS.slice(5, 10);

export function BangaloreGmbFaq() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
      <FaqColumn items={LEFT_FAQS} baseIndex={0} />
      <FaqColumn items={RIGHT_FAQS} baseIndex={5} />
    </div>
  );
}
