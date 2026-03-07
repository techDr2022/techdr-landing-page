"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calendar } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_PREFILL } from "@/lib/config";

const serviceOptions = [
  "Digital Marketing",
  "Appointment Booking",
  "Both (Marketing + Booking)",
  "Not sure yet",
];

function buildWhatsAppMessage(
  name: string,
  phone: string,
  clinic: string,
  service: string,
) {
  const text = [
    WHATSAPP_PREFILL,
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Clinic/Practice: ${clinic}`,
    `Service interested in: ${service}`,
  ].join("\n");
  return encodeURIComponent(text);
}

export function CTAForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [clinic, setClinic] = useState("");
  const [service, setService] = useState("");
  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    clinic: false,
    service: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const errors = {
    name: !name.trim() && touched.name ? "Name is required" : "",
    phone: !phone.trim() && touched.phone ? "Phone is required" : "",
    clinic: !clinic.trim() && touched.clinic ? "Clinic name is required" : "",
    service: !service && touched.service ? "Please select a service" : "",
  };

  const isValid =
    !!name.trim() && !!phone.trim() && !!clinic.trim() && !!service;

  function handleBlur(field: keyof typeof touched) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, phone: true, clinic: true, service: true });
    if (!isValid) return;

    setSubmitting(true);
    const message = buildWhatsAppMessage(name, phone, clinic, service);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setSubmitting(false);
  }

  return (
    <section
      id="cta-form"
      className="border-t border-slate-200 bg-white py-20 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Ready to grow your practice with TechDr?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600">
              Share your details and we will get back with next steps.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="flex flex-col items-start justify-center gap-8 lg:flex-row">
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition hover:bg-teal-500"
              >
                <MessageCircle size={20} />
                WhatsApp Now
              </a>
              <a
                href="#cta-form"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-600 px-6 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50"
              >
                <Calendar size={20} />
                Schedule a Call
              </a>
            </div>

            <div className="w-full max-w-md flex-1 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 px-6 py-4">
                <h3 className="text-base font-semibold text-slate-900">
                  Quick enquiry
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  We will use this to reach out and send the proposal if needed.
                </p>
              </div>
              <div className="px-6 py-5">
                {submitted ? (
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-600">
                    Thank you. We have opened WhatsApp with your details. Send
                    the message to start the conversation.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-800"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => handleBlur("name")}
                        className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm text-slate-900 outline-none transition focus:ring-2 focus:ring-emerald-500/20 ${
                          errors.name
                            ? "border-red-500"
                            : "border-slate-200 bg-slate-50 focus:border-emerald-500 focus:bg-white"
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-800"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        onBlur={() => handleBlur("phone")}
                        className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm text-slate-900 outline-none transition focus:ring-2 focus:ring-emerald-500/20 ${
                          errors.phone
                            ? "border-red-500"
                            : "border-slate-200 bg-slate-50 focus:border-emerald-500 focus:bg-white"
                        }`}
                        placeholder="Your phone number"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="clinic"
                        className="block text-sm font-medium text-slate-800"
                      >
                        Clinic / Practice name
                      </label>
                      <input
                        id="clinic"
                        type="text"
                        value={clinic}
                        onChange={(e) => setClinic(e.target.value)}
                        onBlur={() => handleBlur("clinic")}
                        className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm text-slate-900 outline-none transition focus:ring-2 focus:ring-emerald-500/20 ${
                          errors.clinic
                            ? "border-red-500"
                            : "border-slate-200 bg-slate-50 focus:border-emerald-500 focus:bg-white"
                        }`}
                        placeholder="Clinic or hospital name"
                      />
                      {errors.clinic && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.clinic}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-slate-800"
                      >
                        Service interested in
                      </label>
                      <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        onBlur={() => handleBlur("service")}
                        className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm text-slate-900 outline-none transition focus:ring-2 focus:ring-emerald-500/20 ${
                          errors.service
                            ? "border-red-500"
                            : "border-slate-200 bg-slate-50 focus:border-emerald-500 focus:bg-white"
                        }`}
                      >
                        <option value="">Select...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.service}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition hover:bg-teal-500 disabled:opacity-70"
                    >
                      {submitting ? "Opening WhatsApp..." : "Send via WhatsApp"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
