"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  CalendarRange,
  Grid3X3,
  CalendarDays,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import EventCalendar from "@/components/EventCalendar";
import WeeklyCalendar from "@/components/WeeklyCalendar";
import UpcomingEventsStrip from "@/components/UpcomingEventsStrip";
import { getDaysUntil } from "@/lib/utils";
import type { Project } from "@/lib/types";

export default function CalendarPageClient({ events }: { events: Project[] }) {
  const [viewMode, setViewMode] = useState<"month" | "week">("week");

  const upcomingEvents = useMemo(() => {
    return events
      .filter((e) => getDaysUntil(e.date) >= 0)
      .sort((a, b) => getDaysUntil(a.date) - getDaysUntil(b.date));
  }, [events]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[15%] w-[55vw] h-[55vw] bg-[#5cc8ff]/10 rounded-full mix-blend-multiply filter blur-[160px] opacity-60" />
        <div className="absolute top-[40%] -left-[15%] w-[50vw] h-[50vw] bg-blue-500/10 rounded-full mix-blend-multiply filter blur-[140px] opacity-50" />
        <div className="absolute bottom-[5%] right-[10%] w-[45vw] h-[45vw] bg-indigo-400/8 rounded-full mix-blend-multiply filter blur-[160px] opacity-40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-6">
        <AnimatedSection>
          <div className="mt-32 md:mt-36 mb-6">
            <Link href="/projects">
              <motion.span
                whileHover={{ x: -3 }}
                className="inline-flex items-center gap-2 text-sm font-medium text-ieee-dark/50 hover:text-ieee-blue transition-colors duration-200 cursor-pointer"
              >
                <ArrowLeft size={16} />
                Back to Events
              </motion.span>
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-[#00629B] to-[#5cc8ff] rounded-2xl shadow-[0_0_30px_rgba(92,200,255,0.3)]">
                <CalendarRange size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ieee-dark tracking-tight">
                  Event Calendar
                </h1>
                <p className="text-ieee-dark/40 text-sm md:text-base mt-1">
                  Stay updated with all our events at a glance
                </p>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center bg-white rounded-xl border border-gray-200 p-1 shadow-sm">
              <button
                onClick={() => setViewMode("week")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  viewMode === "week"
                    ? "bg-[#00629B] text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <CalendarDays size={16} />
                Week
              </button>
              <button
                onClick={() => setViewMode("month")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  viewMode === "month"
                    ? "bg-[#00629B] text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Grid3X3 size={16} />
                Month
              </button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-1 mb-12 bg-gradient-to-r from-[#00629B] via-[#5cc8ff] to-transparent rounded-full shadow-[0_0_12px_rgba(92,200,255,0.3)]"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <UpcomingEventsStrip upcomingEvents={upcomingEvents} allEvents={events} />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {viewMode === "month" ? (
            <EventCalendar events={events} />
          ) : (
            <WeeklyCalendar events={events} />
          )}
        </AnimatedSection>

        <div className="h-20" />
      </div>
    </div>
  );
}
