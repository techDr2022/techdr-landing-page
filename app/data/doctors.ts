const DOCTORS_FOLDER = "doctors photos - techdr-1";

function doctorImagePath(filename: string): string {
  return `/doctors/${encodeURIComponent(DOCTORS_FOLDER)}/${encodeURIComponent(filename)}`;
}

function parseFilename(filename: string): { name: string; specialization: string } {
  const base = filename.replace(/\.png$/i, "");
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
  "Dr Anupama Swarna - Specialist in Gastroenterology, Hepatology & Therapeutic Endoscopy - Jade Clinic.png",
  "Dr Anvesh Reddy General &  Laparoscopic Surgeon.png",
  "DR avani reddy - Gynecologist.png",
  "Dr Deepa Reddy  Radiologist.png",
  "DR divya  - Dermatologist.png",
  "Dr Harinath Reddy  General Physician.png",
  "Dr jagdish pusa - orthopedic surgeon - UNO Clinic.png",
  "DR JASMIN RATH Obstetrician & Gynecologist  - Apollo Cradle.png",
  "Dr keerthana urologist - Susheela Hospitals.png",
  "Dr Kiran jogu - Gastroenterologist.png",
  "dr kiran reddy - othopedic - Kindle clinic.png",
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
  "Dr. AAZADH CHANDRA SEKHAR - Surgical Oncologist - Renova Hospitals.png",
  "Dr. ALDI BHAVANA  Physician & Diabetologist.png",
  "Dr. Dheemanth Reddy -Neurologist - Neumed clinics.png",
  "Dr. Guduru Ashwini - Pediatrician & Newborn Specialist. - Avila Clinic.png",
  "Dr. M Sravani Reddy -  Gynecologist - Vedica Clinic.png",
  "Dr. Pallavi Reddy Mekala  Obstetrician & Gynecologist - ONEDORS Clinic.png",
  "Dr. Pampana Priyadarshini - Gynecologist - Avila clinic.png",
  "DR. SRUTHI REDDY CHADA - Neurologist - Jade Clinic.png",
  "Dr. T Rajashekar Reddy - Pediatrics.png",
  "Dr. Venu Bhargava Surgical gastroenterology  - Apollo Hospital.png",
  "Dr.ANUSHA MALLARAPU Gynecologist - Jade Clinic.png",
  "Dr.G. Stitha Pragna - Hemato-Oncologist Bone Marrow Transplant Physician - Continental Hospital.png",
  "Srikanth - Urologist.png",
];

/** SEO-focused testimonials: TechDr, healthcare growth, visibility, bookings, trust */
const TESTIMONIALS: string[] = [
  "TechDr boosted my urology practice visibility. More patients find me on Google and book online.",
  "Our gastroenterology practice saw real growth with TechDr — better local SEO and patient enquiries.",
  "TechDr’s digital marketing and booking system helped my surgical practice reach more patients.",
  "As a gynecologist, TechDr improved my online presence and made appointment booking seamless.",
  "TechDr helped our radiology centre with visibility and a professional, trustworthy online brand.",
  "My dermatology practice gets more enquiries thanks to TechDr’s healthcare-focused marketing.",
  "TechDr’s approach to doctor branding and local visibility brought more patients to my clinic.",
  "Orthopedic practice growth with TechDr — strong local visibility and online booking for patients.",
  "TechDr supported our obstetric & gynecology brand with SEO and patient-first digital presence.",
  "TechDr’s healthcare marketing and booking automation helped our urology practice scale.",
  "As a gastroenterologist, I trust TechDr for ethical growth and measurable patient enquiries.",
  "TechDr improved our orthopedic clinic’s Google visibility and online appointment flow.",
  "TechDr helped my fertility and gynecology practice with branding and patient trust online.",
  "TechDr’s healthcare digital marketing increased my gynecology practice’s local visibility.",
  "My dermatology clinic grew with TechDr — better SEO, branding, and patient enquiries.",
  "TechDr supported our pain and regenerative medicine practice with visibility and bookings.",
  "TechDr’s doctor branding and booking system helped my gynecology practice attract more patients.",
  "As a gynecologist, TechDr improved my online presence and automated appointment reminders.",
  "TechDr’s marketing and tech stack helped our surgical practice with visibility and bookings.",
  "Pediatric practice growth with TechDr — parents find us easily and book online with confidence.",
  "TechDr boosted our orthopedic clinic’s local SEO and patient enquiry quality.",
  "My hematology practice benefits from TechDr’s healthcare-focused digital growth strategy.",
  "TechDr helped my urology practice with Google visibility and seamless online booking.",
  "TechDr’s gynecology practice marketing improved our brand trust and patient enquiries.",
  "As a gynecologist, TechDr delivered better local visibility and appointment automation.",
  "TechDr supported our orthopedic and joint replacement practice with strong online presence.",
  "TechDr’s healthcare growth approach helped our surgical oncology practice reach more patients.",
  "As a physician and diabetologist, TechDr improved my clinic’s visibility and patient flow.",
  "TechDr helped our neurology clinic with digital branding and patient-friendly booking.",
  "TechDr’s pediatric and newborn practice marketing increased our visibility and trust.",
  "TechDr improved my gynecology practice’s local SEO and online appointment experience.",
  "Our obstetrics and gynecology practice grew with TechDr’s branding and booking automation.",
  "TechDr’s healthcare marketing helped my gynecology practice attract more local patients.",
  "TechDr supported our neurology clinic with better visibility and patient enquiry quality.",
  "Pediatrics practice growth with TechDr — parents find us on Google and book easily.",
  "TechDr helped our surgical gastroenterology practice with visibility and patient trust.",
  "As a gynecologist, TechDr improved our clinic’s online presence and appointment flow.",
  "TechDr’s hemato-oncology practice marketing brought measurable growth and patient reach.",
  "TechDr improved our urology practice’s local visibility and online patient experience.",
];

export type Doctor = {
  name: string;
  specialization: string;
  testimonial: string;
  imagePath: string;
};

export const doctors: Doctor[] = DOCTOR_FILES.map((file, i) => {
  const { name, specialization } = parseFilename(file);
  return {
    name,
    specialization,
    testimonial: TESTIMONIALS[i] ?? "TechDr helped our practice with healthcare digital growth and patient visibility.",
    imagePath: doctorImagePath(file),
  };
});
