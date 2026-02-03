"use client";

import React, { useRef, useLayoutEffect } from "react";
import Container from "./ui/Container";
import { aboutData } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    const horizontal = horizontalRef.current;

    if (!section || !trigger || !horizontal) return;

    // Calculate how far to scroll horizontally (adding extra padding for last card visibility)
    const scrollWidth = horizontal.scrollWidth - trigger.offsetWidth + 100;

    const pin = gsap.fromTo(horizontal,
      { x: 0 },
      {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      }
    );

    return () => {
      pin.scrollTrigger?.kill();
      pin.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative bg-white text-ieee-dark">
      {/* Pinned Wrapper */}
      <div ref={triggerRef} className="relative h-screen flex items-center overflow-hidden">

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ieee-blue/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ieee-medium/20 rounded-full blur-[100px] pointer-events-none" />

        <Container className="h-full">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center h-full">

            {/* Left Side: Huge Typography (Static) */}
            <div className="lg:w-[40%] flex flex-col justify-center relative z-10 shrink-0">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
                visions that <br />
                <span className="text-ieee-blue">shape</span> <br />
                our future
              </h2>

              <div className="flex flex-wrap gap-4 mt-4">
                {["INNOVATION", "COMMUNITY", "EXCELLENCE"].map((tag, i) => (
                  <div key={i} className="px-6 py-2 rounded-full border border-ieee-dark/20 hover:bg-ieee-dark/10 transition-colors text-sm font-semibold tracking-wider">
                    {tag}
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <button className="group flex items-center gap-2 text-lg font-semibold border-b border-ieee-blue pb-1 hover:text-ieee-blue transition-colors">
                  LEARN MORE ABOUT US
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Side: Horizontal Scrolling Cards */}
            <div className="lg:w-[60%] relative z-10 h-full flex items-center overflow-hidden">
              <div ref={horizontalRef} className="flex gap-8 w-max pl-8 pr-[50vw]">
                {aboutData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-ieee-dark text-white p-10 rounded-[2.5rem] shadow-xl w-[400px] md:w-[450px] flex-shrink-0 hover:-translate-y-2 transition-transform duration-500 group"
                  >
                    <h3 className="text-3xl font-bold mb-6 group-hover:text-ieee-blue transition-colors">{item.title}</h3>
                    <p className="text-white/70 text-lg leading-relaxed font-medium">
                      {item.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="w-full h-1 bg-white/10 mt-8 relative overflow-hidden rounded-full">
                      <div className="absolute left-0 top-0 h-full w-0 bg-ieee-blue group-hover:w-full transition-all duration-700 ease-out" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
};

export default About;
