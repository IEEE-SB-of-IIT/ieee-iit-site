"use client";

import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { CalendarRange, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import YearFilterBar from "@/components/YearFilterBar";
import YearSection from "@/components/YearSection";
import { projects } from "@/constants/projectinto";
import { parseEventDate, getDaysUntil } from "@/lib/utils";

const ProjectsPage = () => {
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [scrollActiveYear, setScrollActiveYear] = useState<number | null>(null);
  const yearSectionsRef = useRef<HTMLDivElement>(null);

  // Group events by year, sorted newest first
  const eventsByYear = useMemo(() => {
    const grouped = new Map<number, typeof projects>();
    for (const event of projects) {
      const year = parseEventDate(event.date).getFullYear();
      if (!grouped.has(year)) grouped.set(year, []);
      grouped.get(year)!.push(event);
    }
    return new Map(
      [...grouped.entries()].sort(([a], [b]) => b - a)
    );
  }, []);

  const years = useMemo(() => [...eventsByYear.keys()], [eventsByYear]);

  // Count upcoming events for badge
  const upcomingCount = useMemo(() => {
    return projects.filter((e) => getDaysUntil(e.date) >= 0).length;
  }, []);

  // Filtered entries when a specific year is selected
  const visibleYears = useMemo(() => {
    if (activeYear !== null) return [activeYear];
    return years;
  }, [activeYear, years]);

  // Scroll-spy: track which year section is in view
  const handleScroll = useCallback(() => {
    if (activeYear !== null || !yearSectionsRef.current) return;
    const sections =
      yearSectionsRef.current.querySelectorAll<HTMLElement>("[data-year]");
    let closest: number | null = null;
    let closestDist = Infinity;
    const offset = 160;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const dist = Math.abs(rect.top - offset);
      if (dist < closestDist) {
        closestDist = dist;
        closest = parseInt(section.dataset.year!, 10);
      }
    });

    setScrollActiveYear(closest);
  }, [activeYear]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // When clicking a year pill, scroll to that section
  const handleYearChange = (year: number | null) => {
    setActiveYear(year);
    if (year !== null) {
      const el = document.getElementById(`year-${year}`);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[15%] -left-[10%] w-[50vw] h-[50vw] bg-blue-500/15 rounded-full mix-blend-multiply filter blur-[140px] opacity-50" />
        <div className="absolute top-[30%] -right-[15%] w-[45vw] h-[45vw] bg-indigo-400/10 rounded-full mix-blend-multiply filter blur-[140px] opacity-50" />
        <div className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] bg-sky-400/10 rounded-full mix-blend-multiply filter blur-[140px] opacity-40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-6">
        {/* Header */}
        <AnimatedSection>
          <SectionHeader title="Our Events" className="mt-40 md:mt-45" />
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection delay={0.1}>
          <p className="text-center text-[#2e5e99] text-base md:text-lg max-w-2xl mx-auto -mt-8 mb-12 leading-relaxed">
            From hackathons and robotics competitions to workshops and community
            gatherings — explore the events that shape our IEEE journey.
          </p>
        </AnimatedSection>

        {/* Event Calendar CTA */}
        <AnimatedSection delay={0.15}>
          <div className="flex justify-center mb-14">
            <Link href="/events/calendar">
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                {/* Animated border gradient */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00629B] via-[#5cc8ff] to-[#00629B] rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" />

                {/* Inner content */}
                <div className="relative flex items-center gap-4 px-7 py-4 md:px-10 md:py-5 bg-[#0d2440]/95 backdrop-blur-2xl rounded-2xl">
                  {/* Calendar icon with glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#5cc8ff]/30 rounded-xl blur-lg group-hover:bg-[#5cc8ff]/50 transition-all duration-500" />
                    <div className="relative p-2.5 bg-gradient-to-br from-[#00629B] to-[#5cc8ff] rounded-xl shadow-[0_0_20px_rgba(92,200,255,0.3)] group-hover:shadow-[0_0_30px_rgba(92,200,255,0.5)] transition-shadow duration-500">
                      <CalendarRange size={22} className="text-white" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col">
                    <span className="text-white/50 text-xs font-medium tracking-wider uppercase">
                      Explore
                    </span>
                    <span className="text-white text-lg md:text-xl font-bold tracking-tight">
                      Event Calendar
                    </span>
                  </div>

                  {/* Upcoming badge + arrow */}
                  <div className="flex items-center gap-3 ml-2">
                    {upcomingCount > 0 && (
                      <span className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5cc8ff]/15 border border-[#5cc8ff]/25 text-xs font-bold text-[#5cc8ff]">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5cc8ff] opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#5cc8ff]" />
                        </span>
                        {upcomingCount} live
                      </span>
                    )}
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                      <ArrowRight
                        size={18}
                        className="text-[#5cc8ff] group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Hover scanline effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                </div>
              </motion.div>
            </Link>
          </div>
        </AnimatedSection>

        {/* Year Filter Bar */}
        <YearFilterBar
          years={years}
          activeYear={activeYear}
          onYearChange={handleYearChange}
          scrollActiveYear={scrollActiveYear}
        />

        {/* Year-separated event sections */}
        <div ref={yearSectionsRef}>
          {visibleYears.map((year, idx) => {
            const yearEvents = eventsByYear.get(year);
            if (!yearEvents || yearEvents.length === 0) return null;
            return (
              <div key={year} data-year={year}>
                <YearSection
                  year={year}
                  events={yearEvents}
                  index={idx}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom spacer */}
        <div className="h-20" />
      </div>
    </div>
  );
};

export default ProjectsPage;
