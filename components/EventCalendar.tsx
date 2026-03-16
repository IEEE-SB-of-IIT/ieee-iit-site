"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  ArrowUpRight,
} from "lucide-react";
import type { Project } from "@/lib/types";
import { parseEventDate } from "@/lib/utils";

interface EventCalendarProps {
  events: Project[];
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const EventCalendar = ({ events }: EventCalendarProps) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [hoveredDay, setHoveredDay] = useState<{
    events: Project[];
    x: number;
    y: number;
  } | null>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout>>();

  // Build a map of "YYYY-M-D" -> Project[] for the current month
  const eventMap = useMemo(() => {
    const map = new Map<string, Project[]>();
    for (const event of events) {
      const d = parseEventDate(event.date);
      if (d.getFullYear() === currentYear && d.getMonth() === currentMonth) {
        const key = `${d.getDate()}`;
        if (!map.has(key)) map.set(key, []);
        map.get(key)!.push(event);
      }
    }
    return map;
  }, [events, currentMonth, currentYear]);

  const monthEventCount = useMemo(() => {
    let count = 0;
    eventMap.forEach((v) => (count += v.length));
    return count;
  }, [eventMap]);

  // Min/max year bounds from event data
  const { minYear, maxYear } = useMemo(() => {
    let min = today.getFullYear();
    let max = today.getFullYear();
    for (const event of events) {
      const y = parseEventDate(event.date).getFullYear();
      if (y < min) min = y;
      if (y > max) max = y;
    }
    return { minYear: min, maxYear: max };
  }, [events, today]);

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      if (currentYear > minYear) { setCurrentMonth(11); setCurrentYear(currentYear - 1); }
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      if (currentYear < maxYear) { setCurrentMonth(0); setCurrentYear(currentYear + 1); }
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const goToToday = () => {
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
  };

  const isToday = (day: number) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  const isPast = (day: number) =>
    new Date(currentYear, currentMonth, day) <
    new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const handleDayHover = (day: number, e: React.MouseEvent<HTMLButtonElement>) => {
    const dayEvents = eventMap.get(`${day}`);
    if (!dayEvents || dayEvents.length === 0) return;

    clearTimeout(hoverTimeout.current);
    const rect = e.currentTarget.getBoundingClientRect();
    const calRect = calendarRef.current?.getBoundingClientRect();
    if (calRect) {
      setHoveredDay({
        events: dayEvents,
        x: rect.left - calRect.left + rect.width / 2,
        y: rect.top - calRect.top,
      });
    }
  };

  const handleDayLeave = () => {
    hoverTimeout.current = setTimeout(() => setHoveredDay(null), 150);
  };

  const handlePopupEnter = () => clearTimeout(hoverTimeout.current);
  const handlePopupLeave = () => setHoveredDay(null);

  // Close popup on outside scroll
  useEffect(() => {
    const onScroll = () => setHoveredDay(null);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Build calendar grid
  const cells: React.ReactNode[] = [];
  for (let i = 0; i < firstDay; i++) {
    cells.push(<div key={`empty-${i}`} className="aspect-square" />);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const dayEvents = eventMap.get(`${day}`);
    const hasEvents = dayEvents && dayEvents.length > 0;
    const todayCell = isToday(day);
    const past = isPast(day);

    cells.push(
      <button
        key={`d-${day}`}
        className={`relative aspect-square rounded-xl flex flex-col items-center justify-center text-sm font-medium transition-all duration-200
          ${todayCell
            ? "bg-ieee-blue text-white shadow-[0_0_20px_rgba(0,98,155,0.4)] font-bold"
            : hasEvents
            ? "bg-white/60 text-ieee-dark hover:bg-white/90 hover:shadow-md cursor-pointer hover:scale-105"
            : past
            ? "text-ieee-dark/25"
            : "text-ieee-dark/50"
          }`}
        onMouseEnter={(e) => handleDayHover(day, e)}
        onMouseLeave={handleDayLeave}
      >
        <span>{day}</span>
        {hasEvents && (
          <div className="flex items-center gap-0.5 mt-0.5">
            {dayEvents.slice(0, 3).map((_, idx) => (
              <span
                key={idx}
                className={`w-1 h-1 rounded-full ${todayCell ? "bg-white/80" : "bg-[#5cc8ff] shadow-[0_0_4px_rgba(92,200,255,0.5)]"}`}
              />
            ))}
            {dayEvents.length > 3 && (
              <span className={`text-[8px] font-bold ${todayCell ? "text-white/70" : "text-[#5cc8ff]"}`}>
                +{dayEvents.length - 3}
              </span>
            )}
          </div>
        )}
        {hasEvents && !todayCell && (
          <div className="absolute inset-0 rounded-xl ring-1 ring-[#5cc8ff]/30" />
        )}
      </button>
    );
  }

  return (
    <div className="mb-12">
      {/* Section title */}
      <div className="flex items-center gap-2 mb-6">
        <Calendar size={20} className="text-[#5cc8ff]" />
        <h3 className="text-xl md:text-2xl font-bold text-ieee-dark">Event Calendar</h3>
      </div>

      <div
        ref={calendarRef}
        className="relative bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl p-4 md:p-6 shadow-lg"
      >
        {/* Header: month/year + nav */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <motion.h4
              key={`${currentYear}-${currentMonth}`}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-lg md:text-xl font-bold text-ieee-dark"
            >
              {MONTH_NAMES[currentMonth]} {currentYear}
            </motion.h4>
            {monthEventCount > 0 && (
              <motion.span
                key={`cnt-${currentYear}-${currentMonth}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-2.5 py-0.5 rounded-full bg-[#5cc8ff]/15 text-[#00629B] text-xs font-bold"
              >
                {monthEventCount} {monthEventCount === 1 ? "event" : "events"}
              </motion.span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={goToToday}
              className="hidden md:block px-3 py-1.5 rounded-full text-xs font-semibold text-ieee-blue bg-ieee-blue/10 hover:bg-ieee-blue/20 transition-colors duration-200 cursor-pointer"
            >
              Today
            </button>
            <button onClick={goToPrevMonth} className="p-1.5 rounded-full hover:bg-white/50 text-ieee-dark/60 hover:text-ieee-dark transition-all duration-200 cursor-pointer">
              <ChevronLeft size={18} />
            </button>
            <button onClick={goToNextMonth} className="p-1.5 rounded-full hover:bg-white/50 text-ieee-dark/60 hover:text-ieee-dark transition-all duration-200 cursor-pointer">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Day name headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAY_NAMES.map((name) => (
            <div key={name} className="text-center text-xs font-semibold text-ieee-dark/40 py-1">
              {name}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <motion.div
          key={`${currentYear}-${currentMonth}`}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-7 gap-1"
        >
          {cells}
        </motion.div>

        {/* Legend */}
        <div className="flex items-center gap-4 mt-4 pt-3 border-t border-white/30">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-ieee-blue shadow-[0_0_6px_rgba(0,98,155,0.5)]" />
            <span className="text-xs text-ieee-dark/50">Today</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#5cc8ff] shadow-[0_0_4px_rgba(92,200,255,0.5)]" />
            <span className="text-xs text-ieee-dark/50">Has Event</span>
          </div>
        </div>

        {/* Hover popup */}
        <AnimatePresence>
          {hoveredDay && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.95 }}
              transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute z-50"
              style={{
                left: `${Math.min(Math.max(hoveredDay.x - 150, 8), (calendarRef.current?.offsetWidth ?? 400) - 308)}px`,
                top: `${hoveredDay.y - 8}px`,
                transform: "translateY(-100%)",
              }}
              onMouseEnter={handlePopupEnter}
              onMouseLeave={handlePopupLeave}
            >
              <div className="w-[300px] bg-[#0d2440]/95 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                {/* Top glow */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-[#5cc8ff] to-transparent opacity-60" />

                {hoveredDay.events.map((event) => (
                  <Link
                    key={event.slug}
                    href={`/projects/${event.slug}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="group/item flex gap-3 p-3 hover:bg-white/5 transition-colors duration-150 cursor-pointer border-b border-white/5 last:border-b-0">
                      {/* Thumbnail */}
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={event.coverImage || "/images/image.png"}
                          alt={event.name}
                          fill
                          sizes="64px"
                          className="object-cover group-hover/item:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2440]/50 to-transparent" />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm font-bold text-white truncate group-hover/item:text-[#7dd3fc] transition-colors duration-200">
                          {event.name}
                        </h5>
                        <div className="flex items-center gap-1.5 text-white/40 text-xs mt-0.5">
                          <Calendar size={9} className="text-[#5cc8ff]" />
                          {event.date}
                        </div>
                        <p className="text-[11px] text-white/30 line-clamp-1 mt-1">
                          {event.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <ArrowUpRight
                        size={14}
                        className="text-[#5cc8ff]/50 group-hover/item:text-[#5cc8ff] flex-shrink-0 mt-1 transition-colors duration-200"
                      />
                    </div>
                  </Link>
                ))}
              </div>

              {/* Arrow pointer */}
              <div className="flex justify-center">
                <div className="w-2.5 h-2.5 bg-[#0d2440]/95 border-r border-b border-white/10 rotate-45 -mt-1.5" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default React.memo(EventCalendar);
