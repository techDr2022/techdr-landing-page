"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GOOGLE_ADS_FAQS = [
  {
    q: "What is Google Ads for doctors?",
    a: "Google Ads (paid search) shows your clinic's ads when patients search for doctors, treatments, or clinics on Google. You pay per click or per conversion, and your ads appear above or alongside organic results - so you reach high-intent patients immediately.",
  },
  {
    q: "Why should doctors in Bangalore use Google Ads?",
    a: "Patients in Bangalore actively search for 'best dermatologist in Bangalore', 'gynecologist near me', 'orthopedic doctor', etc. Google Ads lets you appear for these searches right away, while organic SEO takes time. It's ideal for new clinics or those wanting faster patient acquisition.",
  },
  {
    q: "What does TechDr's Google Ads service include?",
    a: "We handle campaign setup, healthcare keyword research, ad copy and extensions, landing pages, conversion tracking (calls, forms, WhatsApp), and monthly optimisation and reporting. You get a dedicated strategy aligned with your speciality and location.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing is custom: it depends on your monthly ad budget and goals. We charge a management fee plus you pay Google for clicks (ad spend). We'll give you a clear quote after a free strategy call based on your speciality and target patient volume.",
  },
  {
    q: "How long until I see results?",
    a: "Ads can go live within days of approval. You typically start seeing calls and form leads within the first few weeks. We optimise continuously to improve cost per lead and volume over time.",
  },
  {
    q: "Do you track calls and WhatsApp from ads?",
    a: "Yes. We set up call tracking and, where possible, WhatsApp click tracking so you can see which leads came from Google Ads. Monthly reports include leads, cost per lead, and recommendations.",
  },
  {
    q: "Is this only for Bangalore?",
    a: "This page is focused on doctors and clinics in Bangalore. We can discuss campaigns for other cities in a strategy call.",
  },
  {
    q: "Do I need a website to run Google Ads?",
    a: "A dedicated landing page (or website) is recommended for best results and compliance. We can help with simple landing pages that drive calls and form submissions if you don't have one.",
  },
  {
    q: "Can I run Google Ads and GMB (Google Business Profile) together?",
    a: "Yes. Many doctors use both: GMB for local organic visibility and Google Ads for immediate paid visibility. We offer both services and can align strategy across them.",
  },
  {
    q: "How do I get started?",
    a: "Fill out the consultation form on this page. Our team will call you to understand your goals and budget, then share a custom Google Ads plan and quote.",
  },
] as const;

function FaqColumn({
  items,
  baseIndex,
}: {
  items: readonly (typeof GOOGLE_ADS_FAQS)[number][];
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

const LEFT_FAQS = GOOGLE_ADS_FAQS.slice(0, 5);
const RIGHT_FAQS = GOOGLE_ADS_FAQS.slice(5, 10);

export function GoogleAdsBangaloreFaq() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
      <FaqColumn items={LEFT_FAQS} baseIndex={0} />
      <FaqColumn items={RIGHT_FAQS} baseIndex={5} />
    </div>
  );
}
