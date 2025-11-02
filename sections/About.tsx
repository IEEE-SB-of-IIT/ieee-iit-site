"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TitleHeader from "@/components/TitleHeader";
import ChapterCard from "@/components/ChapterCard";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".float-card", {
        y: "+=8",
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.18,
      });
      gsap.from(".fade-up", {
        y: 36,
        opacity: 0,
        duration: 1.05,
        ease: "power3.out",
        stagger: 0.12,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full py-28 px-8 flex justify-center overflow-hidden"
    >
      {/* background */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#071028,_#02050a_85%)]" />
      <div className="absolute top-28 right-32 w-72 h-72 bg-purple-600/12 blur-[120px] rounded-full" />
      <div className="absolute bottom-8 left-16 w-80 h-80 bg-blue-500/12 blur-[140px] rounded-full" /> */}

      <div className="relative max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT */}
        <div className="fade-up space-y-8">
          <h1 className="font-semibold md:text-3xl text-2xl">
            Our Mission and Impact
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-[35px] max-w-xl text-justify">
            The IEEE Student Branch at the Informatics Institute of Technology
            (IIT), founded in 2015, aims to develop future tech leaders through
            practical learning and industry engagement. We organize expert-led
            sessions, workshops, and collaborative projects that provide
            students with essential skills, hands-on experience, and valuable
            exposure. Our focus is on fostering innovation, leadership, and a
            strong connection between academia and industry, empowering students
            to contribute effectively to Sri Lanka's rapidly growing tech
            sector.
          </p>
          {/* <p className="text-white/70 max-w-lg italic">
            “Empowering the next generation of tech leaders.”
          </p> */}
        </div>

        {/* RIGHT – 2x2 grid, equal gaps */}
        <div className="fade-up">
          <div
            className="grid grid-cols-2 gap-6 justify-items-center"
            role="list"
          >
            {/* CS – yellow, slightly wider logo needs a touch less scale */}
            <div className="float-card" role="listitem">
              <ChapterCard
                name="Computer Society"
                image="CS.png"
                instagram="https://instagram.com/ieee_cs_iit"
                facebook="https://facebook.com/ieee_cs_iit"
                linkedin="https://linkedin.com/company/ieee-cs-iit"
                accent="rgba(255,200,20,0.06)" // yellow glow
                logoScale={0.8}
              />
            </div>

            {/* RAS – red */}
            <div className="float-card" role="listitem">
              <ChapterCard
                name="Robotics & Automation"
                image="RAS.png"
                instagram="https://instagram.com/ieee_ras_iit"
                facebook="https://facebook.com/ieee_ras_iit"
                linkedin="https://linkedin.com/company/ieee-ras-iit"
                accent="rgba(244,63,94,0.05)" // red glow
                logoScale={1.1}
              />
            </div>

            {/* WIE – pink (wide wordmark; give it more scale) */}
            <div className="float-card" role="listitem">
              <ChapterCard
                name="Women in Engineering"
                image="WIE.png"
                instagram="https://instagram.com/ieee_wie_iit"
                facebook="https://facebook.com/ieee_wie_iit"
                linkedin="https://linkedin.com/company/ieee-wie-iit"
                accent="rgba(212,70,255,0.05)" // pink/purple glow
                logoScale={1.2}
              />
            </div>

            {/* CIS / Power & Energy – light blue/cyan */}
            <div className="float-card" role="listitem">
              <ChapterCard
                name="Power & Energy"
                image="CIS.png"
                instagram="https://instagram.com/ieee_pes_iit"
                facebook="https://facebook.com/ieee_pes_iit"
                linkedin="https://linkedin.com/company/ieee-pes-iit"
                accent="rgba(56,189,248,0.05)" // light blue
                logoScale={1.08}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
