"use client";

import React from "react";
import { motion } from "motion/react";

interface YearFilterBarProps {
  years: number[];
  activeYear: number | null;
  onYearChange: (year: number | null) => void;
  scrollActiveYear: number | null;
}

const YearFilterBar = ({
  years,
  activeYear,
  onYearChange,
  scrollActiveYear,
}: YearFilterBarProps) => {
  const displayActive = activeYear ?? scrollActiveYear;

  return (
    <div className="sticky top-14 md:top-16 z-30 -mx-4 md:-mx-10 lg:-mx-6 px-4 md:px-10 lg:px-6 py-3 bg-ieee-lightest/80 backdrop-blur-xl border-b border-white/30 mb-10">
      <div className="flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide">
        {/* All Years pill */}
        <button
          onClick={() => onYearChange(null)}
          className="relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer"
        >
          {activeYear === null && (
            <motion.div
              layoutId="activeYearPill"
              className="absolute inset-0 bg-ieee-blue rounded-full shadow-[0_0_20px_rgba(0,98,155,0.3)]"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className={`relative z-10 ${activeYear === null ? "text-white" : "text-ieee-dark/60 hover:text-ieee-dark"}`}>
            All Years
          </span>
        </button>

        {years.map((year) => {
          const isActive = displayActive === year;
          return (
            <button
              key={year}
              onClick={() => onYearChange(year)}
              className="relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              {activeYear === year && (
                <motion.div
                  layoutId="activeYearPill"
                  className="absolute inset-0 bg-ieee-blue rounded-full shadow-[0_0_20px_rgba(0,98,155,0.3)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {activeYear === null && isActive && (
                <motion.div
                  layoutId="scrollYearRing"
                  className="absolute inset-0 rounded-full ring-2 ring-ieee-blue/40"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  activeYear === year
                    ? "text-white"
                    : isActive && activeYear === null
                    ? "text-ieee-blue"
                    : "text-ieee-dark/60 hover:text-ieee-dark"
                }`}
              >
                {year}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(YearFilterBar);
