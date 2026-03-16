"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowUpRight, Zap } from "lucide-react";
import type { Project } from "@/lib/types";

interface UpcomingEventCardProps {
  event: Project;
  daysUntil: number;
  isLatest?: boolean;
}

const UpcomingEventCard = ({ event, daysUntil, isLatest = false }: UpcomingEventCardProps) => {
  const getCountdownText = () => {
    if (isLatest) return "Recent";
    if (daysUntil <= 0) return "Happening Now!";
    if (daysUntil === 1) return "Tomorrow";
    if (daysUntil <= 7) return `In ${daysUntil} days`;
    if (daysUntil <= 30) return `In ${Math.ceil(daysUntil / 7)} weeks`;
    return `In ${Math.ceil(daysUntil / 30)} months`;
  };

  const isHappeningNow = !isLatest && daysUntil <= 0;
  const isSoon = !isLatest && daysUntil > 0 && daysUntil <= 7;

  return (
    <Link href={`/projects/${event.slug}`} className="block">
      <div className="group relative w-[300px] md:w-[380px] h-[240px] md:h-[260px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,98,155,0.3)]">
        {/* Background image */}
        <Image
          src={event.coverImage || "/images/image.png"}
          alt={event.name}
          fill
          sizes="400px"
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-[#0a1628]/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#00629B]/30 via-transparent to-[#2e5e99]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#5cc8ff] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(92,200,255,0.5)]" />

        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border backdrop-blur-xl ${
              isHappeningNow
                ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-300"
                : isSoon
                ? "bg-amber-500/20 border-amber-400/30 text-amber-300"
                : isLatest
                ? "bg-white/10 border-white/20 text-white/80"
                : "bg-[#5cc8ff]/20 border-[#5cc8ff]/30 text-[#5cc8ff]"
            }`}
          >
            {!isLatest && (
              <span className="relative flex h-2 w-2">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    isHappeningNow ? "bg-emerald-400" : isSoon ? "bg-amber-400" : "bg-[#5cc8ff]"
                  }`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    isHappeningNow
                      ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"
                      : isSoon
                      ? "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]"
                      : "bg-[#5cc8ff] shadow-[0_0_8px_rgba(92,200,255,0.6)]"
                  }`}
                />
              </span>
            )}
            {isLatest ? "LATEST" : "UPCOMING"}
          </div>
        </div>

        {/* Date chip */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/10 backdrop-blur-xl text-white/90 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10">
          <Calendar size={11} className="text-[#5cc8ff]" />
          {event.date}
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          {/* Countdown */}
          <div className="flex items-center gap-2 mb-2">
            <Zap
              size={14}
              className={
                isHappeningNow ? "text-emerald-400" : isSoon ? "text-amber-400" : "text-[#5cc8ff]"
              }
            />
            <span
              className={`text-sm font-semibold ${
                isHappeningNow ? "text-emerald-400" : isSoon ? "text-amber-400" : "text-[#5cc8ff]"
              }`}
            >
              {getCountdownText()}
            </span>
          </div>

          {/* Event name */}
          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight tracking-tight group-hover:text-[#7dd3fc] transition-colors duration-300 mb-1">
            {event.name}
          </h3>

          {/* View link */}
          <div className="flex items-center gap-1.5 text-[#5cc8ff] text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 mt-2">
            <span>View Event</span>
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00629B] via-[#5cc8ff] to-[#00629B] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </Link>
  );
};

export default React.memo(UpcomingEventCard);
