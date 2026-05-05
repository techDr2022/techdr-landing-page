"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

type InstagramReelsSliderProps = {
  links: string[];
};

export function InstagramReelsSlider({ links }: InstagramReelsSliderProps) {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(script);
    }
    // Ensure embeds are processed after mount.
    window.instgrm?.Embeds?.process?.();
  }, []);

  return (
    <div className="relative">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
        {links.map((link, idx) => (
          <div
            key={link}
            className="w-[300px] shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm sm:w-[340px]"
          >
            <blockquote
              className="instagram-media !m-0 !w-full !min-w-0 !max-w-none"
              data-instgrm-permalink={link}
              data-instgrm-version="14"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                View this post on Instagram
              </a>
            </blockquote>
              <p className="px-2 pb-2 pt-3 text-center text-xs font-medium text-slate-600">
                Reel {idx + 1}
              </p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-center text-xs text-slate-500">
        Swipe to explore more reels
      </p>
    </div>
  );
}
