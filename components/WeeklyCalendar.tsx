"use client";

import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
} from "lucide-react";
import {
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  addWeeks,
  subWeeks,
  isSameDay,
  isToday,
} from "date-fns";
import type { Project } from "@/lib/types";
import { parseEventDate } from "@/lib/utils";

interface WeeklyCalendarProps {
  events: Project[];
}

const SOCIETY_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  CS: { bg: "bg-amber-100", border: "border-amber-300", text: "text-amber-800" },
  RAS: { bg: "bg-red-100", border: "border-red-300", text: "text-red-800" },
  WIE: { bg: "bg-purple-100", border: "border-purple-300", text: "text-purple-800" },
  CIS: { bg: "bg-cyan-100", border: "border-cyan-300", text: "text-cyan-800" },
  EMBS: { bg: "bg-violet-100", border: "border-violet-300", text: "text-violet-800" },
  SB: { bg: "bg-blue-100", border: "border-blue-300", text: "text-blue-800" },
};

const HOURS = Array.from({ length: 13 }, (_, i) => i + 8); // 8 AM to 8 PM

export default function WeeklyCalendar({ events }: WeeklyCalendarProps) {
  const [currentWeekStart, setCurrentWeekStart] = useState(() =>
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );

  const weekEnd = endOfWeek(currentWeekStart, { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: currentWeekStart, end: weekEnd });

  const eventsByDay = useMemo(() => {
    const map = new Map<string, Project[]>();
    for (const event of events) {
      const eventDate = parseEventDate(event.date);
      const key = format(eventDate, "yyyy-MM-dd");
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(event);
    }
    return map;
  }, [events]);

  const goToPrevWeek = () => setCurrentWeekStart(subWeeks(currentWeekStart, 1));
  const goToNextWeek = () => setCurrentWeekStart(addWeeks(currentWeekStart, 1));
  const goToToday = () => setCurrentWeekStart(startOfWeek(new Date(), { weekStartsOn: 1 }));

  const weekLabel = `${format(currentWeekStart, "MMM d")} – ${format(weekEnd, "MMM d, yyyy")}`;

  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Calendar size={20} className="text-[#5cc8ff]" />
        <h3 className="text-xl md:text-2xl font-bold text-ieee-dark">
          Weekly View
        </h3>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-gray-100">
          <h4 className="text-lg md:text-xl font-bold text-gray-900">
            {weekLabel}
          </h4>
          <div className="flex items-center gap-2">
            <button
              onClick={goToToday}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-500 hover:text-[#00629B] hover:bg-[#00629B]/5 transition-colors cursor-pointer"
            >
              Today
            </button>
            <button
              onClick={goToPrevWeek}
              className="p-2 rounded-lg hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={goToNextWeek}
              className="p-2 rounded-lg hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Day Headers */}
        <div className="grid grid-cols-8 border-b border-gray-100">
          <div className="p-2 md:p-3" /> {/* Time column spacer */}
          {days.map((day) => {
            const dayEvents = eventsByDay.get(format(day, "yyyy-MM-dd")) || [];
            const hasEvents = dayEvents.length > 0;
            const today = isToday(day);

            return (
              <div
                key={day.toISOString()}
                className={`p-2 md:p-3 text-center border-l border-gray-100 ${
                  today ? "bg-[#00629B]/5" : ""
                }`}
              >
                <p className="text-xs font-medium text-gray-400 uppercase">
                  {format(day, "EEE")}
                </p>
                <p
                  className={`text-lg md:text-xl font-bold mt-0.5 ${
                    today
                      ? "text-[#00629B]"
                      : hasEvents
                      ? "text-gray-900"
                      : "text-gray-400"
                  }`}
                >
                  {format(day, "d")}
                </p>
              </div>
            );
          })}
        </div>

        {/* All-Day Events Row */}
        <div className="grid grid-cols-8 border-b border-gray-200 bg-gray-50/50">
          <div className="p-2 md:p-3 text-xs font-medium text-gray-400 text-right pr-3">
            All Day
          </div>
          {days.map((day) => {
            const dayEvents = eventsByDay.get(format(day, "yyyy-MM-dd")) || [];
            const today = isToday(day);

            return (
              <div
                key={`allday-${day.toISOString()}`}
                className={`p-1.5 border-l border-gray-100 min-h-[60px] ${
                  today ? "bg-[#00629B]/5" : ""
                }`}
              >
                <div className="space-y-1">
                  {dayEvents.slice(0, 3).map((event) => {
                    const colors = SOCIETY_COLORS[event.society] || SOCIETY_COLORS.SB;
                    return (
                      <Link key={event.slug} href={`/projects/${event.slug}`}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className={`${colors.bg} ${colors.border} border rounded-md px-1.5 py-1 cursor-pointer transition-shadow hover:shadow-sm`}
                        >
                          <p
                            className={`text-[10px] md:text-xs font-semibold ${colors.text} truncate`}
                          >
                            {event.name}
                          </p>
                        </motion.div>
                      </Link>
                    );
                  })}
                  {dayEvents.length > 3 && (
                    <p className="text-[10px] text-gray-400 font-medium px-1">
                      +{dayEvents.length - 3} more
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Time Grid */}
        <div className="relative overflow-x-auto">
          <div className="grid grid-cols-8 min-w-[600px]">
            {/* Time Labels Column */}
            <div>
              {HOURS.map((hour) => (
                <div
                  key={hour}
                  className="h-14 md:h-16 border-b border-gray-50 flex items-start justify-end pr-3 pt-0"
                >
                  <span className="text-[10px] md:text-xs text-gray-400 font-medium -translate-y-2">
                    {hour === 12 ? "12 PM" : hour > 12 ? `${hour - 12} PM` : `${hour} AM`}
                  </span>
                </div>
              ))}
            </div>

            {/* Day Columns */}
            {days.map((day) => {
              const today = isToday(day);
              return (
                <div
                  key={`col-${day.toISOString()}`}
                  className={`border-l border-gray-100 ${today ? "bg-[#00629B]/[0.02]" : ""}`}
                >
                  {HOURS.map((hour) => (
                    <div
                      key={`${day.toISOString()}-${hour}`}
                      className="h-14 md:h-16 border-b border-gray-50 relative"
                    />
                  ))}
                </div>
              );
            })}
          </div>

          {/* Current time indicator */}
          {days.some((d) => isToday(d)) && (
            <CurrentTimeIndicator days={days} />
          )}
        </div>

        {/* Legend */}
        <div className="px-4 md:px-6 py-3 border-t border-gray-100 bg-gray-50/50">
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {Object.entries(SOCIETY_COLORS).map(([key, colors]) => (
              <div key={key} className="flex items-center gap-1.5">
                <span
                  className={`w-3 h-3 rounded ${colors.bg} ${colors.border} border`}
                />
                <span className="text-xs text-gray-500">{key}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CurrentTimeIndicator({ days }: { days: Date[] }) {
  const [now, setNow] = useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const todayIndex = days.findIndex((d) => isToday(d));
  if (todayIndex === -1) return null;

  const hour = now.getHours();
  const minute = now.getMinutes();

  if (hour < 8 || hour >= 20) return null;

  const topOffset = (hour - 8) * 64 + (minute / 60) * 64; // 64px per hour (h-16 = 64px)
  const leftPercent = ((todayIndex + 1) / 8) * 100;

  return (
    <div
      className="absolute pointer-events-none z-10"
      style={{
        top: `${topOffset}px`,
        left: `${leftPercent}%`,
        right: 0,
      }}
    >
      <div className="flex items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500 -ml-1.5 shadow-sm" />
        <div className="flex-1 h-0.5 bg-red-500/70" />
      </div>
    </div>
  );
}
