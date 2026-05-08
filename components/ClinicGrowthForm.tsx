"use client";

import { validateBusinessEmail } from "@/lib/email-validation";
import { LeadCaptureFormV2 } from "@/components/LeadCaptureFormV2";

type ClinicGrowthFormProps = {
  variant?: "page" | "modal";
};

export function ClinicGrowthForm({ variant = "page" }: ClinicGrowthFormProps) {
  return (
    <LeadCaptureFormV2
      title="Clinic Growth Plan"
      subtitle="Answer a few questions — we’ll share a growth roadmap tailored to your clinic."
      compact
      submitLabel="Get Free Consultation"
      endpoint="/api/clinic-growth"
      recaptchaAction="clinic_growth_submit"
      variant={variant}
      validate={(form) => {
        const clinicName = (form.querySelector('input[name="clinicName"]') as HTMLInputElement)?.value?.trim();
        if (!clinicName || clinicName.length < 3) {
          return { ok: false, message: "Please enter doctor/clinic name." };
        }

        const clinicType = (form.querySelector('input[name="clinicType"]') as HTMLInputElement)?.value?.trim();
        if (!clinicType) return { ok: false, message: "Please select clinic type." };

        const monthlyBudget = (form.querySelector('input[name="monthlyBudget"]') as HTMLInputElement)?.value?.trim();
        if (!monthlyBudget) return { ok: false, message: "Please select monthly marketing budget." };

        const email = (form.querySelector('input[name="email"]') as HTMLInputElement)?.value?.trim();
        if (email) {
          const emailCheck = validateBusinessEmail(email);
          if (!emailCheck.valid) {
            return {
              ok: false,
              message:
                "Please use a business or professional email (e.g. clinicname@gmail.com). We don’t accept disposable emails, test addresses, or very short names.",
            };
          }
        }

        // Ensure required fields exist even in compact mode.
        if (!email) return { ok: false, message: "Please enter your email." };

        const city = (form.querySelector('input[name="city"]') as HTMLInputElement)?.value?.trim();
        if (!city) return { ok: false, message: "Please enter your city." };

        const phoneRaw = (form.querySelector('input[name="phone"]') as HTMLInputElement)?.value?.trim();
        const digitsOnly = (phoneRaw || "").replace(/\D/g, "");
        if (digitsOnly.length !== 10) {
          return { ok: false, message: "Please enter a valid 10-digit mobile number." };
        }

        return { ok: true };
      }}
      onSuccess={() => {
        if (typeof window === "undefined") return;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "techdr_lead_success" });
      }}
      fields={[
        {
          kind: "text",
          name: "clinicName",
          label: "Doctor / Clinic name",
          placeholder: "e.g. Dr. Sharma Dental Care",
          required: true,
          autoComplete: "organization",
        },
        {
          kind: "segmented",
          name: "clinicType",
          label: "Clinic type",
          required: true,
          options: [
            { value: "Doctor", label: "Doctor" },
            { value: "Clinic", label: "Clinic" },
            { value: "Hospital", label: "Hospital" },
            { value: "IVF Centre", label: "IVF Centre" },
            { value: "Diagnostic Centre", label: "Diagnostic Centre" },
            { value: "Other", label: "Other" },
          ],
        },
        {
          kind: "segmented",
          name: "monthlyBudget",
          label: "Monthly marketing budget",
          required: true,
          options: [
            { value: "Under ₹20,000", label: "Under ₹20,000" },
            { value: "₹20,000–₹50,000", label: "₹20,000–₹50,000" },
            { value: "₹50,000–₹1L", label: "₹50,000–₹1L" },
            { value: "₹1L+", label: "₹1L+" },
          ],
        },
        {
          kind: "text",
          name: "city",
          label: "City",
          placeholder: "e.g. Hyderabad",
          required: true,
          autoComplete: "address-level2",
        },
        {
          kind: "email",
          name: "email",
          label: "Email",
          placeholder: "e.g. doctor@clinic.com",
          required: true,
          autoComplete: "email",
          inputMode: "email",
        },
        {
          kind: "tel",
          name: "phone",
          label: "WhatsApp / mobile number",
          placeholder: "Enter number",
          required: true,
          autoComplete: "tel",
          inputMode: "tel",
        },
      ]}
    />
  );
}

