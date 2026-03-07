"use client";

import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/constants/projectinto";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[15%] -left-[10%] w-[50vw] h-[50vw] bg-blue-500/15 rounded-full mix-blend-multiply filter blur-[140px] opacity-50 animate-pulse" />
        <div className="absolute top-[30%] -right-[15%] w-[45vw] h-[45vw] bg-indigo-400/10 rounded-full mix-blend-multiply filter blur-[140px] opacity-50 animate-pulse" />
        <div className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] bg-sky-400/10 rounded-full mix-blend-multiply filter blur-[140px] opacity-40 animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-6">
        {/* Header */}
        <SectionHeader title="Our Events" className="mt-40 md:mt-45" />

        {/* Subtitle / description */}
        <p className="text-center text-[#2e5e99] text-base md:text-lg max-w-2xl mx-auto -mt-8 mb-16 leading-relaxed">
          From hackathons and robotics competitions to workshops and community
          gatherings — explore the events that shape our IEEE journey.
        </p>

        {/* Flat events grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {projects.map((item, index) => (
            <ProjectCard key={index} project={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
