"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { CalendarRange, ArrowRight } from "lucide-react";

interface YearFilterBarProps {
  years: number[];
  activeYear: number | null;
  onYearChange: (year: number | null) => void;
  scrollActiveYear: number | null;
  upcomingCount?: number;
}

const YearFilterBar = ({
  years,
  activeYear,
  onYearChange,
  scrollActiveYear,
  upcomingCount = 0,
}: YearFilterBarProps) => {
  const displayActive = activeYear ?? scrollActiveYear;

  return (
    <div className="sticky top-16 md:top-18 z-30 flex justify-center py-4 mb-10">
      <div className="inline-flex items-center gap-1 px-1.5 py-1.5 rounded-full bg-white/50 backdrop-blur-2xl border border-white/60 shadow-[0_4px_24px_rgba(0,98,155,0.08)]">
        {/* Year pills */}
        <button
          onClick={() => onYearChange(null)}
          className="relative px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer"
        >
          {activeYear === null && (
            <motion.div
              layoutId="activeYearPill"
              className="absolute inset-0 bg-ieee-blue rounded-full shadow-[0_2px_12px_rgba(0,98,155,0.35)]"
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
            />
          )}
          <span
            className={`relative z-10 text-xs md:text-sm ${
              activeYear === null
                ? "text-white"
                : "text-ieee-dark/50 hover:text-ieee-dark"
            }`}
          >
            All
          </span>
        </button>

        {years.map((year) => {
          const isActive = displayActive === year;
          return (
            <button
              key={year}
              onClick={() => onYearChange(year)}
              className="relative px-3.5 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              {activeYear === year && (
                <motion.div
                  layoutId="activeYearPill"
                  className="absolute inset-0 bg-ieee-blue rounded-full shadow-[0_2px_12px_rgba(0,98,155,0.35)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {activeYear === null && isActive && (
                <motion.div
                  layoutId="scrollYearRing"
                  className="absolute inset-0 rounded-full bg-ieee-blue/8 ring-1 ring-ieee-blue/30"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span
                className={`relative z-10 text-xs md:text-sm ${
                  activeYear === year
                    ? "text-white"
                    : isActive && activeYear === null
                    ? "text-ieee-blue font-bold"
                    : "text-ieee-dark/50 hover:text-ieee-dark"
                }`}
              >
                {year}
              </span>
            </button>
          );
        })}

        {/* Divider */}
        <div className="w-px h-5 bg-ieee-dark/10 mx-0.5" />

        {/* Calendar CTA */}
        <Link href="/events/calendar">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group flex items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#00629B] to-[#0080c9] cursor-pointer shadow-[0_2px_12px_rgba(0,98,155,0.3)] hover:shadow-[0_4px_16px_rgba(0,98,155,0.4)] transition-shadow duration-300"
          >
            <div className="p-1 bg-white/20 rounded-full">
              <CalendarRange size={12} className="text-white" />
            </div>
            <span className="text-[11px] md:text-xs font-semibold text-white whitespace-nowrap">
              Calendar
            </span>
            {upcomingCount > 0 && (
              <span className="hidden sm:flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-white/15 text-[10px] font-bold text-white/90">
                <span className="relative flex h-1 w-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-1 w-1 bg-white" />
                </span>
                {upcomingCount}
              </span>
            )}
            <ArrowRight
              size={12}
              className="text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200"
            />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(YearFilterBar);
