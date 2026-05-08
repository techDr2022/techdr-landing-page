"use client";

import { useState, useEffect } from "react";

const SEARCH_QUERIES = ["Gynecologist near me", "Best gynecologist in Bangalore"];

const TYPING_SPEED_MS = 80;
const PAUSE_AFTER_TYPING_MS = 600;
const RESULTS_VISIBLE_MS = 2800;
const PAUSE_BETWEEN_CYCLES_MS = 1200;

export function SearchAnimationDemo() {
  const [queryIndex, setQueryIndex] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [phase, setPhase] = useState<"typing" | "results" | "reset">("typing");
  const [key, setKey] = useState(0);

  const currentQuery = SEARCH_QUERIES[queryIndex];

  // Typing effect: reveal one character at a time
  useEffect(() => {
    if (phase !== "typing") return;

    if (typedLength >= currentQuery.length) {
      const t = setTimeout(() => setPhase("results"), PAUSE_AFTER_TYPING_MS);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setTypedLength((prev) => prev + 1);
    }, TYPING_SPEED_MS);
    return () => clearTimeout(t);
  }, [phase, typedLength, currentQuery.length]);

  // Show results for a while, then reset and go to next query
  useEffect(() => {
    if (phase !== "results") return;

    const t = setTimeout(() => {
      setPhase("reset");
      setTypedLength(0);
      setQueryIndex((prev) => (prev + 1) % SEARCH_QUERIES.length);
      setKey((k) => k + 1);
    }, RESULTS_VISIBLE_MS);
    return () => clearTimeout(t);
  }, [phase]);

  // Short reset delay before starting to type again
  useEffect(() => {
    if (phase !== "reset") return;

    const t = setTimeout(() => setPhase("typing"), PAUSE_BETWEEN_CYCLES_MS);
    return () => clearTimeout(t);
  }, [phase, key]);

  return (
    <div className="w-full min-w-0 max-w-2xl">
      <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/50 sm:rounded-2xl sm:shadow-xl">
        {/* Browser chrome */}
        <div className="flex min-w-0 items-center gap-2 border-b border-slate-200/80 bg-slate-50/80 px-3 py-2.5 sm:px-4 sm:py-3">
          <div className="flex shrink-0 gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-300 sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-amber-300 sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-emerald-300 sm:h-2.5 sm:w-2.5" />
          </div>
          <div className="ml-2 flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5 sm:ml-3 sm:px-3 sm:py-2">
            <svg className="h-3.5 w-3.5 shrink-0 text-slate-400 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="truncate text-xs text-slate-400 sm:text-sm">google.com/search</span>
          </div>
        </div>

        {/* Search bar + results area */}
        <div className="p-3 sm:p-4 md:p-6">
          {/* Search input mock */}
          <div className="flex min-w-0 items-center rounded-lg border-2 border-slate-200 bg-slate-50/50 px-3 py-2.5 transition-colors focus-within:border-emerald-400 focus-within:bg-white sm:rounded-xl sm:px-4 sm:py-3">
            <svg className="mr-2 h-4 w-4 shrink-0 text-slate-400 sm:mr-3 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="min-h-[1.25rem] truncate text-sm text-slate-800 sm:min-h-[1.5rem] sm:text-base">
              {currentQuery.slice(0, typedLength)}
              {phase === "typing" && (
                <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-emerald-500 align-middle" />
              )}
            </span>
          </div>

          {/* Maps results area */}
          <div
            className={`mt-3 overflow-hidden transition-all duration-500 sm:mt-4 ${
              phase === "results" ? "max-h-[360px] opacity-100 sm:max-h-[420px]" : "max-h-0 opacity-0"
            }`}
          >
            <div className="rounded-lg border border-slate-200/80 bg-slate-50/50 p-2.5 sm:rounded-xl sm:p-3">
              <p className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:mb-3 sm:text-xs">
                <span className="flex h-6 w-6 items-center justify-center rounded bg-emerald-100 text-emerald-600">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </span>
                Google Maps local rankings
              </p>

              <div className="grid gap-2 sm:gap-3 md:grid-cols-[1.12fr_1fr]">
                <div className="relative min-h-[170px] overflow-hidden rounded-lg border border-slate-300/80 bg-[#f4f7f8] p-2.5 shadow-inner sm:min-h-[190px] sm:rounded-xl">
                  <div className="absolute inset-0 opacity-100">
                    <div className="absolute left-3 top-4 h-14 w-24 rounded-2xl border border-emerald-200/80 bg-emerald-100/80" />
                    <div className="absolute right-5 top-5 h-10 w-20 rounded-2xl border border-blue-200/80 bg-blue-100/80" />
                    <div className="absolute bottom-5 left-8 h-12 w-28 rounded-2xl border border-emerald-200/80 bg-emerald-100/80" />

                    <div className="absolute -left-8 top-[42%] h-2.5 w-60 -rotate-12 bg-white" />
                    <div className="absolute right-0 top-[30%] h-2.5 w-48 -rotate-6 bg-white" />
                    <div className="absolute left-8 bottom-8 h-2.5 w-40 rotate-12 bg-white" />

                    <div className="absolute -left-2 top-[55%] h-1.5 w-44 rotate-[5deg] bg-slate-300/90" />
                    <div className="absolute right-5 top-[47%] h-1.5 w-32 -rotate-[11deg] bg-slate-300/90" />
                    <div className="absolute left-10 top-[24%] h-1.5 w-28 rotate-[18deg] bg-slate-300/90" />
                  </div>
                  {[1, 2, 3].map((i) => (
                    <span
                      key={`pin-${i}`}
                      className={`absolute z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white shadow-lg ${
                        i === 1
                          ? "left-6 top-8 bg-red-500"
                          : i === 2
                            ? "right-8 top-10 bg-blue-600"
                            : "left-1/2 bottom-8 -translate-x-1/2 bg-blue-600"
                      }`}
                      style={{
                        animation:
                          phase === "results"
                            ? `searchDemoSlideIn 0.35s ease-out ${i * 0.12}s both`
                            : undefined,
                      }}
                    >
                      {i}
                    </span>
                  ))}
                  <span className="absolute left-4 top-2 z-10 rounded bg-white/95 px-1.5 py-0.5 text-[8px] font-medium text-slate-600 shadow-sm">
                    12th Main Rd
                  </span>
                  <span className="absolute right-6 top-16 z-10 rounded bg-white/95 px-1.5 py-0.5 text-[8px] font-medium text-slate-600 shadow-sm">
                    24th Cross
                  </span>
                  <span className="absolute left-12 bottom-4 z-10 rounded bg-white/95 px-1.5 py-0.5 text-[8px] font-medium text-slate-600 shadow-sm">
                    HSR Layout
                  </span>
                  <span className="absolute bottom-2 right-2 z-10 rounded-full bg-white px-2 py-0.5 text-[9px] font-semibold text-slate-700 shadow-sm">
                    Bangalore map view
                  </span>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white p-2 shadow-sm sm:gap-3 sm:p-3"
                      style={{
                        animation:
                          phase === "results"
                            ? `searchDemoSlideIn 0.4s ease-out ${i * 0.12}s both`
                            : undefined,
                      }}
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 sm:h-10 sm:w-10">
                        <span className="text-[10px] font-bold sm:text-xs">{i}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-semibold text-slate-800 sm:text-sm">
                          {i === 1
                            ? "TechDr Women Care, Bangalore"
                            : i === 2
                              ? "City Gyne Clinic, HSR Layout"
                              : "Aster Women Wellness, JP Nagar"}{" "}
                          · {i === 3 ? "4.7" : "4.8"} ★
                        </p>
                        <p className="truncate text-[10px] text-slate-500 sm:text-xs">
                          Rank #{i} in local pack for gynecologist search
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-emerald-100 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-700 sm:px-2 sm:text-[10px]">
                        {i <= 2 ? "Call Now" : "Directions"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-2 text-center text-[10px] font-medium text-emerald-700 sm:mt-3 sm:text-[11px]">
                ↑ Top 3 Google Maps rankings drive most patient calls
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
