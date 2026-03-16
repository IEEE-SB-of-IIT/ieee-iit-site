"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowLeft,
  CalendarRange,
  Clock,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import EventCalendar from "@/components/EventCalendar";
import UpcomingEventsStrip from "@/components/UpcomingEventsStrip";
import { projects } from "@/constants/projectinto";
import { parseEventDate, getDaysUntil } from "@/lib/utils";
import type { Project } from "@/lib/types";

// Timeline event item
const TimelineEvent = ({
  event,
  daysUntil,
  index,
}: {
  event: Project;
  daysUntil: number;
  index: number;
}) => {
  const isHappeningNow = daysUntil <= 0 && daysUntil >= -1;
  const isSoon = daysUntil > 0 && daysUntil <= 7;
  const isFuture = daysUntil > 7;

  const statusColor = isHappeningNow
    ? "emerald"
    : isSoon
    ? "amber"
    : "cyan";

  const statusText = isHappeningNow
    ? "Happening Now"
    : daysUntil === 1
    ? "Tomorrow"
    : daysUntil <= 7
    ? `In ${daysUntil} days`
    : daysUntil <= 30
    ? `In ${Math.ceil(daysUntil / 7)} weeks`
    : `In ${Math.ceil(daysUntil / 30)} months`;

  return (
    <AnimatedSection delay={0.05 * index} direction="up">
      <Link href={`/projects/${event.slug}`}>
        <motion.div
          whileHover={{ scale: 1.01, x: 4 }}
          className="group relative flex gap-4 md:gap-6 p-4 md:p-5 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/50 hover:bg-white/60 hover:shadow-lg hover:shadow-ieee-blue/5 transition-all duration-300 cursor-pointer"
        >
          {/* Timeline dot */}
          <div className="flex flex-col items-center gap-1 pt-1">
            <div
              className={`relative w-3 h-3 rounded-full ${
                isHappeningNow
                  ? "bg-emerald-500"
                  : isSoon
                  ? "bg-amber-500"
                  : "bg-[#5cc8ff]"
              }`}
            >
              {(isHappeningNow || isSoon) && (
                <span
                  className={`animate-ping absolute inset-0 rounded-full opacity-75 ${
                    isHappeningNow ? "bg-emerald-400" : "bg-amber-400"
                  }`}
                />
              )}
            </div>
            <div className="w-px flex-1 bg-gradient-to-b from-ieee-blue/20 to-transparent" />
          </div>

          {/* Thumbnail */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src={event.coverImage || "/images/image.png"}
              alt={event.name}
              fill
              sizes="96px"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2440]/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                  isHappeningNow
                    ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
                    : isSoon
                    ? "bg-amber-500/10 text-amber-600 border border-amber-500/20"
                    : "bg-[#5cc8ff]/10 text-[#00629B] border border-[#5cc8ff]/20"
                }`}
              >
                <Zap size={10} />
                {statusText}
              </span>
            </div>
            <h4 className="text-base md:text-lg font-bold text-ieee-dark truncate group-hover:text-ieee-blue transition-colors duration-200">
              {event.name}
            </h4>
            <div className="flex items-center gap-1.5 text-ieee-dark/40 text-xs mt-1">
              <Clock size={11} />
              {event.date}
            </div>
            <p className="text-xs text-ieee-dark/40 line-clamp-1 mt-1 hidden md:block">
              {event.description}
            </p>
          </div>

          {/* Arrow */}
          <div className="flex items-center">
            <ArrowUpRight
              size={16}
              className="text-ieee-dark/20 group-hover:text-ieee-blue transition-colors duration-200"
            />
          </div>
        </motion.div>
      </Link>
    </AnimatedSection>
  );
};

const EventsCalendarPage = () => {
  // Get upcoming events (today or future)
  const upcomingEvents = useMemo(() => {
    return projects
      .filter((e) => getDaysUntil(e.date) >= 0)
      .sort((a, b) => getDaysUntil(a.date) - getDaysUntil(b.date));
  }, []);

  // Separate ongoing (today) vs future
  const ongoingEvents = useMemo(
    () => upcomingEvents.filter((e) => getDaysUntil(e.date) <= 0),
    [upcomingEvents]
  );
  const futureEvents = useMemo(
    () => upcomingEvents.filter((e) => getDaysUntil(e.date) > 0),
    [upcomingEvents]
  );

  const hasUpcoming = upcomingEvents.length > 0;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[15%] w-[55vw] h-[55vw] bg-[#5cc8ff]/10 rounded-full mix-blend-multiply filter blur-[160px] opacity-60" />
        <div className="absolute top-[40%] -left-[15%] w-[50vw] h-[50vw] bg-blue-500/10 rounded-full mix-blend-multiply filter blur-[140px] opacity-50" />
        <div className="absolute bottom-[5%] right-[10%] w-[45vw] h-[45vw] bg-indigo-400/8 rounded-full mix-blend-multiply filter blur-[160px] opacity-40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-6">
        {/* Back to Events button */}
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

        {/* Header */}
        <AnimatedSection delay={0.05}>
          <div className="flex items-center gap-4 mb-3">
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
        </AnimatedSection>

        {/* Accent line */}
        <AnimatedSection delay={0.1}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-1 mb-12 bg-gradient-to-r from-[#00629B] via-[#5cc8ff] to-transparent rounded-full shadow-[0_0_12px_rgba(92,200,255,0.3)]"
          />
        </AnimatedSection>

        {/* Upcoming / Latest Events Carousel */}
        <AnimatedSection delay={0.15}>
          <UpcomingEventsStrip
            upcomingEvents={upcomingEvents}
            allEvents={projects}
          />
        </AnimatedSection>

        {/* Calendar Widget */}
        <AnimatedSection delay={0.2}>
          <EventCalendar events={projects} />
        </AnimatedSection>

        {/* Upcoming Events Timeline */}
        {hasUpcoming && (
          <div className="mt-14">
            <AnimatedSection delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-2">
                  <Zap size={20} className="text-[#5cc8ff]" />
                  <h3 className="text-xl md:text-2xl font-bold text-ieee-dark">
                    {ongoingEvents.length > 0 ? "Ongoing & " : ""}Upcoming Timeline
                  </h3>
                </div>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5cc8ff]/10 border border-[#5cc8ff]/20 text-xs font-semibold text-[#00629B]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5cc8ff] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#5cc8ff]" />
                  </span>
                  {upcomingEvents.length} total
                </span>
              </div>
            </AnimatedSection>

            <div className="flex flex-col gap-3">
              {upcomingEvents.map((event, idx) => (
                <TimelineEvent
                  key={event.slug}
                  event={event}
                  daysUntil={getDaysUntil(event.date)}
                  index={idx}
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty state if no upcoming */}
        {!hasUpcoming && (
          <AnimatedSection delay={0.25}>
            <div className="mt-14 text-center py-16 rounded-3xl bg-white/30 backdrop-blur-sm border border-white/40">
              <div className="p-4 bg-ieee-blue/10 rounded-2xl w-fit mx-auto mb-4">
                <CalendarRange size={32} className="text-ieee-blue/50" />
              </div>
              <h3 className="text-xl font-bold text-ieee-dark/60 mb-2">
                No Upcoming Events
              </h3>
              <p className="text-ieee-dark/40 text-sm max-w-md mx-auto">
                Check back soon! Our team is always cooking up something exciting.
                Browse our past events using the calendar above.
              </p>
            </div>
          </AnimatedSection>
        )}

        {/* Bottom spacer */}
        <div className="h-20" />
      </div>
    </div>
  );
};

export default EventsCalendarPage;
