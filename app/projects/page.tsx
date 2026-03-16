"use client";

import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
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

        {/* Unified toolbar: year filters + calendar CTA */}
        <YearFilterBar
          years={years}
          activeYear={activeYear}
          onYearChange={handleYearChange}
          scrollActiveYear={scrollActiveYear}
          upcomingCount={upcomingCount}
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
