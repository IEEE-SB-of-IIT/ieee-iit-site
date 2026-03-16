"use client";

import React from "react";
import { motion } from "motion/react";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Project } from "@/lib/types";

interface YearSectionProps {
  year: number;
  events: Project[];
  index: number;
}

const YearSection = ({ year, events, index }: YearSectionProps) => {
  return (
    <section id={`year-${year}`} className="relative mb-14 md:mb-20 scroll-mt-28 overflow-hidden">
      {/* Year header */}
      <AnimatedSection delay={index * 0.1}>
        <div className="relative mb-8 md:mb-10">
          {/* Giant watermark year */}
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden md:block absolute -top-10 -left-3 text-[140px] font-black text-ieee-blue/[0.04] select-none pointer-events-none leading-none"
          >
            {year}
          </motion.span>

          {/* Year label + count */}
          <div className="relative flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-ieee-dark tracking-tight">
              {year}
            </h2>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ieee-blue/10 text-ieee-blue text-sm font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-ieee-blue" />
              {events.length} {events.length === 1 ? "event" : "events"}
            </span>
          </div>

          {/* Gradient accent line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-1 mt-4 bg-gradient-to-r from-[#00629B] via-[#5cc8ff] to-transparent rounded-full shadow-[0_0_12px_rgba(92,200,255,0.3)]"
          />
        </div>
      </AnimatedSection>

      {/* Events grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-w-0">
        {events.map((event, idx) => (
          <AnimatedSection
            key={event.slug}
            delay={0.05 + (idx % 3) * 0.08}
            direction="up"
          >
            <ProjectCard project={event} index={idx} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default React.memo(YearSection);
