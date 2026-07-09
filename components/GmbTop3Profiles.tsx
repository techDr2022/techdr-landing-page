"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MapPin, Star, TrendingUp } from "lucide-react";

const DOCTORS_FOLDER = "doctors photos - techdr-1";

function doctorImagePath(filename: string): string {
  return `/doctors/${encodeURIComponent(DOCTORS_FOLDER)}/${encodeURIComponent(filename)}`;
}

const CARD_HEIGHT = 74;
const CARD_GAP = 8;
const SLOT_STEP = CARD_HEIGHT + CARD_GAP;

const competitors = [
  {
    id: "comp-1",
    name: "City Gyne Clinic",
    category: "Gynecologist · HSR Layout",
    rating: 4.8,
    reviews: 210,
  },
  {
    id: "comp-2",
    name: "Aster Women Wellness",
    category: "Gynecologist · JP Nagar",
    rating: 4.7,
    reviews: 164,
  },
  {
    id: "comp-3",
    name: "Prime Health Clinic",
    category: "Women's health · Koramangala",
    rating: 4.6,
    reviews: 98,
  },
] as const;

const yourClinic = {
  id: "your-clinic",
  name: "Your Clinic, Bangalore",
  category: "Doctor · Clinic",
  rating: 4.9,
  reviews: 42,
  image: doctorImagePath("Dr. Sai Manasa Darla - gynecology, fertility expert.webp"),
};

const rankSequence = [8, 6, 4, 3, 2, 1] as const;

type Rank = (typeof rankSequence)[number];

type ListItem = {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  rank: number;
  slot: number;
  isYours: boolean;
  image?: string;
  faded?: boolean;
};

function getYourSlot(rank: Rank): number {
  if (rank >= 8) return 3.15;
  if (rank >= 6) return 2.85;
  if (rank >= 4) return 2.55;
  if (rank === 3) return 2;
  if (rank === 2) return 1;
  return 0;
}

function buildList(rank: Rank): ListItem[] {
  const [c1, c2, c3] = competitors;
  const yourSlot = getYourSlot(rank);

  if (rank >= 4) {
    return [
      { ...c1, rank: 1, slot: 0, isYours: false },
      { ...c2, rank: 2, slot: 1, isYours: false },
      { ...c3, rank: 3, slot: 2, isYours: false },
      { ...yourClinic, rank, slot: yourSlot, isYours: true, image: yourClinic.image },
    ];
  }

  if (rank === 3) {
    return [
      { ...c1, rank: 1, slot: 0, isYours: false },
      { ...c2, rank: 2, slot: 1, isYours: false },
      { ...yourClinic, rank: 3, slot: 2, isYours: true, image: yourClinic.image },
      { ...c3, rank: 4, slot: 3, isYours: false, faded: true },
    ];
  }

  if (rank === 2) {
    return [
      { ...c1, rank: 1, slot: 0, isYours: false },
      { ...yourClinic, rank: 2, slot: 1, isYours: true, image: yourClinic.image },
      { ...c2, rank: 3, slot: 2, isYours: false },
      { ...c3, rank: 4, slot: 3, isYours: false, faded: true },
    ];
  }

  return [
    { ...yourClinic, rank: 1, slot: 0, isYours: true, image: yourClinic.image },
    { ...c1, rank: 2, slot: 1, isYours: false },
    { ...c2, rank: 3, slot: 2, isYours: false },
    { ...c3, rank: 4, slot: 3, isYours: false, faded: true },
  ];
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}

function ProfileCard({ item }: { item: ListItem }) {
  const isTop = item.isYours && item.rank === 1;

  return (
    <div
      className={`absolute left-0 right-0 rounded-xl border px-3 py-2.5 transition-all duration-700 ease-in-out sm:px-3.5 ${
        item.isYours
          ? isTop
            ? "z-20 border-emerald-400 bg-gradient-to-r from-emerald-50 via-white to-teal-50 shadow-lg shadow-emerald-200/50 ring-2 ring-emerald-400/30"
            : "z-10 border-emerald-300 bg-emerald-50/90 shadow-md shadow-emerald-100/80"
          : item.faded
            ? "z-0 border-slate-200/60 bg-white/70 opacity-40"
            : "z-0 border-slate-200/80 bg-white shadow-sm"
      }`}
      style={{
        height: CARD_HEIGHT,
        transform: `translateY(${item.slot * SLOT_STEP}px)`,
      }}
    >
      {isTop && (
        <span className="absolute -top-2.5 left-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white shadow-sm">
          Top 3
        </span>
      )}

      <div className="flex h-full items-center gap-2.5 sm:gap-3">
        <div
          className={`relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg sm:h-12 sm:w-12 ${
            item.isYours ? "bg-emerald-100" : "bg-slate-100"
          }`}
        >
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover object-top"
              sizes="48px"
            />
          ) : (
            <span
              className={`text-xs font-bold ${item.isYours ? "text-emerald-700" : "text-slate-500"}`}
            >
              #{item.rank}
            </span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p
              className={`truncate text-xs font-semibold sm:text-sm ${
                item.isYours ? "text-emerald-900" : "text-slate-800"
              }`}
            >
              {item.name}
            </p>
            <span
              className={`shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                item.isYours
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              #{item.rank}
            </span>
          </div>
          <p className="truncate text-[10px] text-slate-500 sm:text-[11px]">{item.category}</p>
          <div className="mt-0.5 flex items-center gap-1.5 text-[10px] sm:text-[11px]">
            <span className="inline-flex items-center gap-0.5 font-semibold text-amber-600">
              {item.rating}
              <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
            </span>
            <span className="text-slate-400">({item.reviews})</span>
            {item.isYours && item.rank > 3 && (
              <span className="font-medium text-amber-700">· Low visibility</span>
            )}
            {item.isYours && item.rank <= 3 && (
              <span className="font-medium text-emerald-700">· Moving up</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function GmbTop3Profiles() {
  const [step, setStep] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const currentRank = rankSequence[step];
  const items = buildList(currentRank);
  const isTop = currentRank === 1;

  useEffect(() => {
    if (prefersReducedMotion) return;

    const delay = currentRank === 1 ? 2800 : currentRank >= 4 ? 1800 : 1200;
    const timer = setTimeout(() => {
      setStep((prev) => (prev + 1) % rankSequence.length);
    }, delay);

    return () => clearTimeout(timer);
  }, [step, currentRank, prefersReducedMotion]);

  return (
    <div className="w-full min-w-0">
      <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/50">
        <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50/80 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
              <MapPin className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">Google Maps · Local rankings</p>
              <p className="text-xs text-slate-500">Watch your clinic move into the top 3</p>
            </div>
          </div>
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide transition-colors ${
              isTop
                ? "bg-emerald-600 text-white"
                : "bg-amber-100 text-amber-800"
            }`}
          >
            <TrendingUp className="h-3 w-3" />
            {isTop ? "Top 3" : `Rank #${currentRank}`}
          </span>
        </div>

        <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[160px] border-b border-slate-200/80 bg-[#f4f7f8] md:min-h-[340px] md:border-b-0 md:border-r">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-4 top-5 h-14 w-24 rounded-2xl border border-emerald-200/80 bg-emerald-100/80" />
              <div className="absolute right-6 top-8 h-10 w-20 rounded-2xl border border-blue-200/80 bg-blue-100/80" />
              <div className="absolute bottom-10 left-10 h-12 w-28 rounded-2xl border border-emerald-200/80 bg-emerald-100/80" />
              <div className="absolute left-0 top-[42%] h-2.5 w-[85%] max-w-[12rem] -rotate-12 bg-white" />
              <div className="absolute right-0 top-[30%] h-2.5 w-[70%] max-w-[10rem] -rotate-6 bg-white" />
            </div>

            {[1, 2, 3].map((pin) => (
              <span
                key={pin}
                className={`absolute z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white shadow-lg transition-colors duration-700 ${
                  pin === 1
                    ? `left-7 top-9 bg-red-500 ${isTop ? "gmb-rank-pin-pulse" : ""}`
                    : pin === 2
                      ? "right-9 top-11 bg-blue-600"
                      : "bottom-10 left-1/2 -translate-x-1/2 bg-blue-600"
                }`}
              >
                {pin}
              </span>
            ))}

            <span
              className={`absolute bottom-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-semibold shadow-sm transition-colors ${
                isTop ? "bg-emerald-600 text-white" : "bg-white text-slate-700"
              }`}
            >
              {isTop ? "Now in top 3" : `Currently #${currentRank}`}
            </span>
          </div>

          <div className="p-3 sm:p-4">
            <div
              className="relative overflow-hidden"
              style={{ height: SLOT_STEP * 3 + CARD_HEIGHT * 0.35 }}
            >
              {items.map((item) => (
                <ProfileCard key={item.id} item={item} />
              ))}
            </div>

            <p className="mt-2 text-center text-[11px] font-medium text-slate-600 sm:text-xs">
              {isTop ? (
                <span className="text-emerald-700">
                  Your clinic reached the top 3 — where most patients click
                </span>
              ) : currentRank > 3 ? (
                <span>
                  Starting at <strong>#{currentRank}</strong> — optimisation moves you into the local pack
                </span>
              ) : (
                <span className="text-emerald-700">
                  Climbing to <strong>#{currentRank}</strong> in Google Maps results
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
