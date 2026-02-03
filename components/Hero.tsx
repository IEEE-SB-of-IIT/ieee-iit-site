"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Container from "./ui/Container";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen pt-24 pb-20 flex items-center overflow-hidden bg-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-ieee-blue/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-ieee-medium/20 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-ieee-light/15 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">

          {/* Left Content - Bold Typography */}
          <div className="lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="font-display font-bold leading-[0.9] tracking-tighter text-ieee-dark">
                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  IEEE <span className="text-ieee-blue">Student</span>
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  Branch
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-ieee-dark/60 tracking-tight">
                of Informatics Institute of Technology
              </p>
            </div>

            {/* Subtitle */}
            <div className="mt-8 lg:mt-10 max-w-lg">
              <p className="text-ieee-dark/70 text-lg lg:text-xl font-medium leading-relaxed">
                Innovating for the future, one project at a time. Join the global community of technology leaders at IIT.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="#about">
                <button className="group flex items-center gap-3 px-8 py-4 bg-ieee-dark text-white font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-ieee-blue">
                  EXPLORE US
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </button>
              </Link>

              <Link href="#contact">
                <button className="group flex items-center gap-2 px-8 py-4 text-ieee-dark font-semibold uppercase tracking-wider border-b-2 border-ieee-blue hover:text-ieee-blue transition-colors">
                  GET IN TOUCH
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                </button>
              </Link>
            </div>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-3 mt-10">
              {["INNOVATE", "COLLABORATE", "LEAD", "INSPIRE"].map((tag, i) => (
                <div key={i} className="px-5 py-2 rounded-full border border-ieee-dark/20 bg-ieee-lightest hover:bg-ieee-light/30 transition-colors text-xs font-semibold tracking-wider text-ieee-dark/80">
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:w-[45%] relative flex justify-center items-center">
            {/* Glowing Ring Behind Globe */}
            <div className="absolute w-[90%] aspect-square rounded-full border border-ieee-blue/20 animate-pulse" />
            <div className="absolute w-[80%] aspect-square rounded-full border border-ieee-blue/10" />

            {/* Globe Image */}
            <div className="relative z-10 w-[85%] max-w-[550px] aspect-square animate-float-slow">
              <img
                src="/images/logos/SB_globe.png"
                alt="IEEE Student Branch Globe"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
