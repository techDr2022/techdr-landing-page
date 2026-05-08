"use client";

import { LeadCaptureFormV2 } from "@/components/LeadCaptureFormV2";

export function BangaloreGmbForm() {
  return (
    <LeadCaptureFormV2
      title="Get More Patients from Google (Bangalore)"
      compact
      submitLabel="Book Free Consultation"
      endpoint="/api/gmb-bangalore-lead"
      recaptchaAction="gmb_bangalore_lead"
      fields={[
        {
          kind: "text",
          name: "doctorName",
          label: "Doctor name",
          placeholder: "e.g. Dr. Rajesh Kumar",
          required: true,
          autoComplete: "name",
        },
        {
          kind: "text",
          name: "clinicName",
          label: "Clinic name",
          placeholder: "e.g. City Skin Clinic",
          required: true,
          autoComplete: "organization",
        },
        {
          kind: "text",
          name: "speciality",
          label: "Speciality",
          placeholder: "e.g. Dermatology, Gynecology, Orthopedics",
          required: true,
        },
        {
          kind: "text",
          name: "locationBangalore",
          label: "Area in Bangalore",
          placeholder: "e.g. Koramangala, Indiranagar, Whitefield",
          required: true,
          autoComplete: "address-level2",
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
