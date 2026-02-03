'use client'
import React, { useState, useEffect } from 'react'
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from './ui/Container';
import { projectsData } from '@/constants';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = projectsData;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [projects.length]);

  // Calculate positions for the 3D carousel effect
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff + projects.length) % projects.length);
    const adjustedDiff = normalizedDiff > projects.length / 2 ? normalizedDiff - projects.length : normalizedDiff;

    // Center card
    if (adjustedDiff === 0) {
      return {
        transform: 'translateX(0) scale(1) rotateY(0deg)',
        zIndex: 50,
        opacity: 1,
        filter: 'grayscale(0%)',
      };
    }

    // Cards to the left - reduced spacing from 180 to 120
    if (adjustedDiff < 0) {
      const offset = Math.abs(adjustedDiff);
      return {
        transform: `translateX(${-250 * offset}px) scale(${1 - offset * 0.12}) rotateY(12deg)`,
        zIndex: 50 - offset * 10,
        opacity: offset > 2 ? 0 : 0.7 - offset * 0.15,
        filter: 'grayscale(100%)',
      };
    }

    // Cards to the right - reduced spacing from 180 to 120
    const offset = adjustedDiff;
    return {
      transform: `translateX(${250 * offset}px) scale(${1 - offset * 0.12}) rotateY(-12deg)`,
      zIndex: 50 - offset * 10,
      opacity: offset > 2 ? 0 : 0.7 - offset * 0.15,
      filter: 'grayscale(100%)',
    };
  };

  return (
    <section id="projects" className="relative py-24 bg-white text-ieee-dark overflow-hidden" data-reveal>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ieee-blue/20 rounded-full blur-[150px] pointer-events-none" />

      <Container>
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            our <span className="text-ieee-blue">flagship</span><br />
            <span className="text-ieee-blue">projects</span> speak
          </h2>
        </div>

        {/* 3D Carousel */}
        <div className="relative h-[500px] flex items-center justify-center perspective-[1200px]">
          {/* Carousel Container */}
          <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
            {projects.map((project, index) => {
              const style = getCardStyle(index);
              const isActive = index === activeIndex;

              return (
                <div
                  key={project.id}
                  className={cn(
                    "absolute w-[320px] h-[480px] rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 ease-out",
                    isActive ? "shadow-2xl shadow-ieee-blue/40" : "shadow-xl"
                  )}
                  style={{
                    ...style,
                    transformStyle: 'preserve-3d',
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Card Background - Solid Color */}
                  <div className={cn(
                    "absolute inset-0 transition-all duration-500",
                    isActive ? "bg-ieee-blue" : "bg-gray-800"
                  )} />

                  {/* Inset Image Container */}
                  <div className="absolute top-4 left-4 right-4 h-[200px] rounded-2xl overflow-hidden">
                    <img
                      src={`/images/flagships/${project.image}`}
                      alt={project.title}
                      className={cn(
                        "w-full h-full object-cover transition-all duration-500",
                        isActive ? "grayscale-0" : "grayscale"
                      )}
                    />
                    {/* Image overlay for inactive */}
                    <div className={cn(
                      "absolute inset-0 bg-black/30 transition-opacity duration-500",
                      isActive ? "opacity-0" : "opacity-50"
                    )} />
                  </div>

                  {/* Content Below Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 pt-4 z-10">
                    {/* Title - Large Bold */}
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className={cn(
                      "text-sm font-medium text-white/80 mb-3 transition-all duration-500",
                      isActive ? "opacity-100" : "opacity-70"
                    )}>
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className={cn(
                      "text-xs leading-relaxed text-white/70 mb-6 transition-all duration-500 line-clamp-2",
                      isActive ? "opacity-100" : "opacity-0"
                    )}>
                      {project.description}
                    </p>

                    {/* Arrow Button - Bottom Left */}
                    <button
                      className={cn(
                        "w-14 h-14 rounded-full bg-white flex items-center justify-center transition-all duration-500 hover:scale-110 shadow-lg",
                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      )}
                    >
                      <ArrowUpRight className="text-ieee-dark" size={22} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-ieee-dark/10 backdrop-blur-sm border border-ieee-dark/20 flex items-center justify-center hover:bg-ieee-dark/20 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-ieee-dark/10 backdrop-blur-sm border border-ieee-dark/20 flex items-center justify-center hover:bg-ieee-dark/20 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "bg-ieee-blue w-8"
                  : "bg-ieee-dark/30 hover:bg-ieee-dark/50"
              )}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <button className="group flex items-center gap-2 text-lg font-semibold text-ieee-dark border-b border-ieee-blue pb-1 hover:text-ieee-blue transition-colors">
            EXPLORE ALL PROJECTS
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Projects
