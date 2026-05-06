const DOCTORS_FOLDER = "doctors photos - techdr-1";

function doctorImagePath(filename: string): string {
  return `/doctors/${encodeURIComponent(DOCTORS_FOLDER)}/${encodeURIComponent(filename)}`;
}

function parseFilename(filename: string): { name: string; specialization: string } {
  const base = filename.replace(/\.(png|webp|jpg|jpeg)$/i, "");
  const parts = base.split(" - ");
  if (parts.length === 1) return { name: base, specialization: "" };
  if (parts.length === 2) return { name: parts[0].trim(), specialization: parts[1].trim() };
  // "Name - Spec - Clinic" -> show name and spec (skip clinic in main line or add as subtitle)
  const last = parts[parts.length - 1];
  const isClinic = /clinic|hospital|apollo|vedica|jade|continental|regen|susheela|avila|onedors|tooth studio|neumed|jade|kindle|uno|techdr/i.test(last);
  if (isClinic && parts.length >= 3) {
    return {
      name: parts[0].trim(),
      specialization: parts.slice(1, -1).join(" · "),
    };
  }
  return {
    name: parts[0].trim(),
    specialization: parts.slice(1).join(" · "),
  };
}

const DOCTOR_FILES = [
  "Dr Aman Chandra - Urologist.png",
  "Dr Anupama - Gastroenterologist.png",
  "Dr Anvesh Reddy General &  Laparoscopic Surgeon.png",
  "DR avani reddy - Gynecologist.png",
  "Dr Deepa Reddy  Radiologist.png",
  "DR divya  - Dermatologist.png",
  "Dr Harinath Reddy  General Physician.png",
  "Dr jagdish pusa - orthopedic surgeon - UNO Clinic.png",
  "Dr keerthana urologist - Susheela Hospitals.png",
  "Dr Kiran jogu - Gastroenterologist.png",
  "Dr Kotha Sruthi Reddy  Gynecologist, Fertility Specialist & Laparoscopic Surgeon.png",
  "Dr M Raga Sirisha - Gynecologist.png",
  "Dr Madhuri - Dermatologist.png",
  "Dr Meer Misbahuddin - Interventional Pain and Regenerative Medicine Specialist - Regen Cure Hospital.png",
  "Dr Nikhila reddy - Gynecologist - jj hospital gynecologist.png",
  "Dr Prithvi perum - Gynecologist.png",
  "DR sameera - General, Laser & Laparoscopic Surgeon - Susheela Hospital.png",
  "Dr Shashank Gupta K  Pediatrician.png",
  "Dr Shashi Vardhan - Orthopedic - S&S Clinic.png",
  "Dr Sk Gupta - Hematologist.png",
  "Dr Sourabh Reddy - Urologist.png",
  "Dr Sravya Buggana - Gynecologist.png",
  "Dr Swathi Sreerangam - Gynecologist.png",
  "Dr Vinay Kumar Orthopedician, Trauma & Joint Replacement Expert.png",
  "Dr Aazadh - Surgical Oncologist.png",
  "Dr. ALDI BHAVANA  Physician & Diabetologist.png",
  "Dr. A.Rama Krishnudu - Cardiologist.webp",
  "Dr. Bhamini Guttikonda - Dermatologist.webp",
  "Dr. Dheemanth Reddy -Neurologist - Neumed clinics.png",
  "Dr. Divya Bandari - Orthopedic Surgeon.webp",
  "Dr. Divya Banswada - Dermatologist - SKINNU Clinic.webp",
  "Dr. Guduru Ashwini - Pediatrician & Newborn Specialist. - Avila Clinic.png",
  "Dr. M Sravani Reddy -  Gynecologist - Vedica Clinic.png",
  "Dr. MD Sabir Pasha - General Surgeon .webp",
  "Dr. Pallavi Reddy Mekala  Obstetrician & Gynecologist - ONEDORS Clinic.png",
  "Dr. Pampana Priyadarshini - Gynecologist - Avila clinic.png",
  "Dr. Pavan Kumar Golla- orthopedic surgeon.webp",
  "Dr. Ranjith G MD, DM (Neurology), FSIN.webp",
  "Dr. Sai Manasa Darla - gynecology, fertility expert.webp",
  "DR. SRUTHI REDDY CHADA - Neurologist - Jade Clinic.png",
  "Dr. T Rajashekar Reddy - Pediatrics.png",
  "Dr. Venu Bhargava Surgical gastroenterology  - Apollo Hospital.png",
  "Dr.ANUSHA MALLARAPU Gynecologist - Jade Clinic.png",
  "Dr.G. Stitha Pragna - Hemato-Oncologist Bone Marrow Transplant Physician - Continental Hospital.png",
  "Dr. Srikanth - Urologist.png",
];

function normalizeSpecializationLabel(specialization: string): string {
  return specialization
    .replace(/\s+/g, " ")
    .replace(/\s*[-|/]\s*/g, " ")
    .replace(/\s*,\s*/g, ", ")
    .trim();
}

function pickVariantIndex(seed: string, size: number): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) % 2147483647;
  }
  return Math.abs(hash) % size;
}

function createTestimonial(name: string, specialization: string): string {
  const label = normalizeSpecializationLabel(specialization);
  if (!label) {
    return `${name} shared that TechDr improved clinic visibility and brought more genuine patient enquiries month after month.`;
  }

  const spec = label.toLowerCase();
  const variants = [
    `${name} says TechDr helped our ${spec} practice rank better on Google and convert searches into booked appointments.`,
    `For ${name}, TechDr made patient acquisition smoother by improving local visibility and enquiry quality for ${spec} services.`,
    `${name} noticed stronger trust online after TechDr optimized branding, reviews, and lead flow for ${spec} consultations.`,
    `${name} credits TechDr for building a reliable digital pipeline that keeps ${spec} appointment requests consistent.`,
    `According to ${name}, TechDr turned digital traffic into real walk-ins by refining messaging and booking journeys for ${spec}.`,
    `${name} found that TechDr's healthcare marketing system improved discoverability and follow-ups for ${spec} patients.`,
    `With TechDr, ${name} saw better Google presence, cleaner patient communication, and higher conversion for ${spec} enquiries.`,
    `${name} says TechDr helped scale ${spec} growth with stronger local SEO, trust signals, and streamlined booking.`,
  ];

  return variants[pickVariantIndex(`${name}|${spec}`, variants.length)];
}

export type Doctor = {
  name: string;
  specialization: string;
  testimonial: string;
  imagePath: string;
};

export const doctors: Doctor[] = DOCTOR_FILES.map((file) => {
  const { name, specialization } = parseFilename(file);
  return {
    name,
    specialization,
    testimonial: createTestimonial(name, specialization),
    imagePath: doctorImagePath(file),
  };
});
