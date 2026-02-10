"use client";

import { useState } from "react";
import { User } from "lucide-react";
import type { Doctor } from "@/app/data/doctors";

const CARD_WIDTH = 240;

export function DoctorsCarousel({ doctors }: { doctors: Doctor[] }) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-slate-50/95 to-transparent md:w-24" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-slate-50/95 to-transparent md:w-24" />
      <div className="doctors-marquee flex w-max gap-5 py-2">
        {[...doctors, ...doctors].map((doc, i) => (
          <DoctorCard key={`${doc.name}-${i}`} doc={doc} />
        ))}
      </div>
    </div>
  );
}

function DoctorCard({ doc }: { doc: Doctor }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="doctor-card flex shrink-0 flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
      style={{ width: CARD_WIDTH }}
    >
      {/* Only the image is sized by its natural aspect ratio */}
      <div className="relative mx-auto flex min-h-[160px] w-full items-center justify-center overflow-hidden rounded-xl bg-slate-100">
        {imgError ? (
          <div className="flex h-[160px] w-full flex-col items-center justify-center gap-2 rounded-xl bg-slate-200/80 text-slate-400">
            <User className="h-12 w-12" />
            <span className="text-xs font-medium">Photo</span>
          </div>
        ) : (
          <img
            src={doc.imagePath}
            alt={doc.name}
            className="mx-auto block h-auto max-h-[220px] w-auto max-w-full object-contain"
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      {/* Order: photo → name → specialization → testimonial (with quotes, 2–3 lines) */}
      <div className="mt-3 w-full min-w-0 px-1 text-center">
        <p className="text-sm font-semibold leading-tight text-slate-900">
          {doc.name}
        </p>
        {doc.specialization ? (
          <p className="mt-0.5 line-clamp-2 text-[10px] font-normal leading-snug text-slate-500">
            {doc.specialization}
          </p>
        ) : null}
        <p className="mt-2 line-clamp-3 border-l-2 border-emerald-200/80 pl-2 text-xs italic leading-snug text-slate-600">
          &ldquo;{doc.testimonial}&rdquo;
        </p>
      </div>
    </div>
  );
}
