"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import UpcomingEventCard from "@/components/UpcomingEventCard";
import type { Project } from "@/lib/types";
import { getDaysUntil, getLatestEvents } from "@/lib/utils";

interface UpcomingEventsStripProps {
  upcomingEvents: Project[];
  allEvents: Project[];
}

const UpcomingEventsStrip = ({ upcomingEvents, allEvents }: UpcomingEventsStripProps) => {
  const hasUpcoming = upcomingEvents.length > 0;
  const displayEvents = hasUpcoming ? upcomingEvents : getLatestEvents(allEvents, 5);
  const title = hasUpcoming ? "Upcoming Events" : "Latest Events";

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1, containScroll: "trimSnaps" },
    [Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  if (displayEvents.length === 0) return null;

  return (
    <div className="mb-10">
      {/* Section title */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-[#5cc8ff]" />
            <h3 className="text-xl md:text-2xl font-bold text-ieee-dark">{title}</h3>
          </div>
          {hasUpcoming && (
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5cc8ff]/10 border border-[#5cc8ff]/20 text-xs font-semibold text-[#00629B]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5cc8ff] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#5cc8ff]" />
              </span>
              {upcomingEvents.length} upcoming
            </span>
          )}
        </div>

        {displayEvents.length > 1 && (
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/40 text-ieee-dark/60 hover:text-ieee-dark hover:bg-white/70 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="p-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/40 text-ieee-dark/60 hover:text-ieee-dark hover:bg-white/70 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {displayEvents.map((event) => (
            <div key={event.slug} className="flex-shrink-0 pr-4 md:pr-6">
              <UpcomingEventCard
                event={event}
                daysUntil={getDaysUntil(event.date)}
                isLatest={!hasUpcoming}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      {scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-2 mt-5">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === selectedIndex
                  ? "w-8 bg-ieee-blue shadow-[0_0_10px_rgba(0,98,155,0.4)]"
                  : "w-2 bg-ieee-dark/15 hover:bg-ieee-dark/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(UpcomingEventsStrip);
