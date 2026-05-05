"use client";

import { Play, Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type InstagramReelsSliderProps = {
  videos: { src: string; title: string }[];
};

export function InstagramReelsSlider({ videos }: InstagramReelsSliderProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [autoSlideIndex, setAutoSlideIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef(0);
  const dragScrollLeftRef = useRef(0);

  if (!videos.length) return null;

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.25 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || playingIndex !== null || videos.length <= 1) return undefined;

    const intervalId = window.setInterval(() => {
      setAutoSlideIndex((prev) => {
        const next = (prev + 1) % videos.length;
        const track = trackRef.current;
        const target = cardRefs.current[next];
        if (track && target) {
          track.scrollTo({
            left: target.offsetLeft - track.offsetLeft,
            behavior: "smooth",
          });
        }
        return next;
      });
    }, 3000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isInView, playingIndex, videos.length]);

  const handleTogglePlay = (index: number) => {
    const current = videoRefs.current[index];
    if (!current) return;
    setAutoSlideIndex(index);

    if (!current.paused) {
      current.pause();
      setPlayingIndex(null);
      return;
    }

    videoRefs.current.forEach((video, idx) => {
      if (!video || idx === index) return;
      video.pause();
      video.currentTime = 0;
    });

    current.play().catch(() => null);
    setPlayingIndex(index);
  };

  const scrollToIndex = (index: number) => {
    const safeIndex = (index + videos.length) % videos.length;
    setAutoSlideIndex(safeIndex);
    const track = trackRef.current;
    const target = cardRefs.current[safeIndex];
    if (track && target) {
      track.scrollTo({
        left: target.offsetLeft - track.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    scrollToIndex(autoSlideIndex - 1);
  };

  const handleNext = () => {
    scrollToIndex(autoSlideIndex + 1);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    dragScrollLeftRef.current = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const track = trackRef.current;
    if (!track) return;
    const delta = e.clientX - dragStartXRef.current;
    track.scrollLeft = dragScrollLeftRef.current - delta;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(false);
    if (track.hasPointerCapture(e.pointerId)) {
      track.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div ref={sectionRef} className="relative">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-white to-transparent md:w-14" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-white to-transparent md:w-14" />
      <div className="mb-3 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={handlePrev}
          className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
          aria-label="Previous reel"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
          aria-label="Next reel"
        >
          Next
        </button>
      </div>
      <div
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {videos.map((video, idx) => (
          <div
            key={video.src}
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
            className="group relative w-[210px] shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md sm:w-[230px] md:w-[250px]"
          >
            <video
              ref={(el) => {
                videoRefs.current[idx] = el;
              }}
              src={video.src}
              onClick={() => handleTogglePlay(idx)}
              onPause={() => {
                if (playingIndex === idx) setPlayingIndex(null);
              }}
              onEnded={() => {
                if (playingIndex === idx) setPlayingIndex(null);
              }}
              preload="metadata"
              playsInline
              className="aspect-[9/16] w-full cursor-pointer bg-black object-cover"
            />
            <button
              type="button"
              onClick={() => handleTogglePlay(idx)}
              className="absolute inset-0 flex items-center justify-center"
              aria-label={playingIndex === idx ? `Pause reel ${idx + 1}` : `Play reel ${idx + 1}`}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition group-hover:scale-105">
                {playingIndex === idx ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="ml-0.5 h-5 w-5" />
                )}
              </span>
            </button>
          </div>
        ))}
      </div>
      <div className="mt-2 text-center text-xs text-slate-500">
        Drag to slide • Tap any card to play or pause
      </div>
    </div>
  );
}
