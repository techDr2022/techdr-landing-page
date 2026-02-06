# TechDr Proposal Page

A premium, single-page proposal for TechDr (Hyderabad) targeting doctors, clinics and hospitals. Covers digital marketing (SEO, Google Ads, GMB, social) and smart appointment booking (online booking, RWG, WhatsApp, dashboard).

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn-style UI** (Card, Tabs, Accordion, Badge, Button, Input, Select)
- **framer-motion** for scroll and entrance animations
- **lucide-react** for icons

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000/proposal](http://localhost:3000/proposal).

## Build

```bash
npm run build
npm run start
```

## Where to edit

### WhatsApp and PDF

- **File:** `lib/config.ts`
- **WhatsApp number:** Set `WHATSAPP_NUMBER` (country code + number, no spaces or `+`, e.g. `919876543210`).
- **Prefill message:** Set `WHATSAPP_PREFILL` for the default message when opening WhatsApp.
- **Proposal PDF:** Set `PROPOSAL_PDF_LINK` to your PDF URL when ready (currently a placeholder `#`).

### Pricing and plans

- **File:** `components/proposal/Pricing.tsx`
- Edit the `plans` array (name, description, price, features, CTA).
- Edit the `comparisonFeatures` array for the feature comparison table.

### Copy and sections

- **Hero:** `components/proposal/Hero.tsx`
- **Problems:** `components/proposal/Problems.tsx`
- **Solution tabs:** `components/proposal/SolutionTabs.tsx`
- **Timeline:** `components/proposal/Timeline.tsx`
- **Case study:** `components/proposal/CaseStudy.tsx`
- **FAQ:** `components/proposal/FAQ.tsx`
- **CTA form:** `components/proposal/CTAForm.tsx`

### SEO and metadata

- **Root metadata:** `app/layout.tsx`
- **Proposal page metadata:** `app/proposal/page.tsx` (title, description, keywords, openGraph).

## Page structure

1. **Sticky header** – Get Proposal PDF, WhatsApp
2. **Hero** – Headline, subheadline, CTAs, trust cards
3. **Client problems** – 6 pain-point cards
4. **Proposed solution** – Tabs: Digital Marketing | Appointment Booking
5. **Deliverables timeline** – Week 1–4
6. **Packages / pricing** – Starter, Growth (recommended), Premium + comparison table
7. **Case study style** – Example metrics + disclaimer
8. **FAQ** – 8 accordion items
9. **Final CTA** – WhatsApp, Schedule a Call, quick enquiry form
10. **Floating WhatsApp** – Bottom-right

Form behaviour: client-side validation; on submit, opens WhatsApp with prefilled message (name, phone, clinic, service). “Get Proposal PDF” and “Download Proposal PDF” use the link from `lib/config.ts` (placeholder until you add a real PDF).
