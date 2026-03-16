"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const SOCIETY_META: Record<string, { label: string; color: string }> = {
  CS: { label: "Computer Society", color: "#FAA41B" },
  RAS: { label: "Robotics & Automation", color: "#990A2C" },
  WIE: { label: "Women in Engineering", color: "#742380" },
  CIS: { label: "Computational Intelligence", color: "#00AEEF" },
  EMBS: { label: "Medicine & Biology", color: "#7A2A82" },
  SB: { label: "Student Branch", color: "#00629B" },
};

interface ProjectCardProps {
  project: {
    slug: string;
    name: string;
    description: string;
    date: string;
    society?: string;
    coverImage: string;
  };
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const society = SOCIETY_META[project.society ?? "SB"] ?? SOCIETY_META.SB;

  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,98,155,0.25)]">
        {/* Card inner container */}
        <div className="relative h-[340px] overflow-hidden">
          {/* Image */}
          <Image
            src={project.coverImage || "/images/image.png"}
            alt={project.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
          />

          {/* Mesh gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#00629B]/20 via-transparent to-[#2e5e99]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Animated top border glow */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00a1ff] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_15px_rgba(0,161,255,0.5)]" />

          {/* Society chip */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/30 backdrop-blur-xl px-3 py-1.5 rounded-full text-[11px] font-semibold border border-white/10">
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: society.color, boxShadow: `0 0 6px ${society.color}80` }}
            />
            <span className="text-white/90">{society.label}</span>
          </div>

          {/* View chip - appears on hover */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/10 backdrop-blur-xl text-white/80 px-3 py-1.5 rounded-full text-xs font-semibold border border-white/10 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight size={12} className="text-[#5cc8ff]" />
            View
          </div>

          {/* Content positioned at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
            {/* Event name */}
            <h3 className="text-2xl font-bold text-white leading-tight tracking-tight group-hover:text-[#7dd3fc] transition-colors duration-300">
              {project.name}
            </h3>

            {/* Description - appears on hover */}
            <p className="text-sm text-white/60 leading-relaxed line-clamp-2 max-h-0 group-hover:max-h-16 overflow-hidden transition-all duration-500 ease-out">
              {project.description}
            </p>

            {/* View event link */}
            <div className="flex items-center gap-2 text-[#5cc8ff] text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-100">
              <span>View Event</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00629B] via-[#5cc8ff] to-[#00629B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </Link>
  );
};

export default React.memo(ProjectCard);