"use client";

import { useEffect, useState, useRef } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon",
};
const words = ["evolves", "adapts", "transforms", "innovates"];

function BlurWord({ word, trigger }: { word: string; trigger: number }) {
  const letters = word.split("");
  const STAGGER = 45;
  const DURATION = 500;
  const GRADIENT_HOLD = STAGGER * letters.length + DURATION + 200;

  const [letterStates, setLetterStates] = useState<
    { opacity: number; blur: number }[]
  >(letters.map(() => ({ opacity: 0, blur: 20 })));
  const [showGradient, setShowGradient] = useState(true);
  const framesRef = useRef<number[]>([]);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    framesRef.current.forEach(cancelAnimationFrame);
    timersRef.current.forEach(clearTimeout);
    framesRef.current = [];
    timersRef.current = [];

    setLetterStates(letters.map(() => ({ opacity: 0, blur: 20 })));
    setShowGradient(true);

    letters.forEach((_, i) => {
      const t = setTimeout(() => {
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setLetterStates((prev) => {
            const next = [...prev];
            next[i] = { opacity: eased, blur: 20 * (1 - eased) };
            return next;
          });
          if (progress < 1) {
            const id = requestAnimationFrame(tick);
            framesRef.current.push(id);
          }
        };
        const id = requestAnimationFrame(tick);
        framesRef.current.push(id);
      }, i * STAGGER);
      timersRef.current.push(t);
    });

    const gt = setTimeout(() => setShowGradient(false), GRADIENT_HOLD);
    timersRef.current.push(gt);

    return () => {
      framesRef.current.forEach(cancelAnimationFrame);
      timersRef.current.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  // Gold gradient colors
  const gradientColors = [
    "#D4AF37",
    "#F5D76E",
    "#D4AF37",
    "#B8860B",
    "#D4AF37",
  ];

  return (
    <>
      {letters.map((char, i) => {
        const colorIndex =
          (i / Math.max(letters.length - 1, 1)) * (gradientColors.length - 1);
        const lower = Math.floor(colorIndex);
        const upper = Math.min(lower + 1, gradientColors.length - 1);
        const t = colorIndex - lower;

        const hex2rgb = (hex: string) => {
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          return [r, g, b];
        };
        const [r1, g1, b1] = hex2rgb(gradientColors[lower]);
        const [r2, g2, b2] = hex2rgb(gradientColors[upper]);
        const r = Math.round(r1 + (r2 - r1) * t);
        const g = Math.round(g1 + (g2 - g1) * t);
        const b = Math.round(b1 + (b2 - b1) * t);

        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity: letterStates[i]?.opacity ?? 0,
              filter: `blur(${letterStates[i]?.blur ?? 20}px)`,
              color: showGradient ? `rgb(${r},${g},${b})` : "#D4AF37",
              transition: "color 0.4s ease",
            }}
          >
            {char}
          </span>
        );
      })}
    </>
  );
}

export default function ComingSoonPage() {
  const [isVisible, setIsVisible] = useState(false);

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-start items-start overflow-hidden bg-black">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-80"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4"
            type="video/mp4"
          />
        </video> */}

        <img
          className="w-full h-full object-cover object-[75%_center] md:object-center opacity-80"
          src="/images/coming-soon/hero_image.png"
          alt="hero-image"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-white/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}

        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-white/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-16 lg:pt-20 pb-32 sm:pb-24">
        <div className="lg:max-w-[55%]">
          <div
            className={`mb-8 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {/* <span className="inline-flex items-center gap-3 text-sm font-mono text-white/60">
              <span className="w-8 h-px bg-white/30" />
              Autonomous AI agents for distributed computing
            </span> */}
          </div>

          <div className="mb-12">
            <h1
              className={`text-left text-[clamp(2rem,6vw,7rem)] font-display leading-[1.1] tracking-tight text-white transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="mb-8">
                <h1
                  className={`text-left text-[clamp(1.5rem,4vw,3rem)] font-display leading-[1.4] tracking-[0.15em] uppercase text-white/80 transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <span className="block">In a world that</span>
                  <span className="block">
                    <span className="relative inline-block">
                      <BlurWord word={words[wordIndex]} trigger={wordIndex} />
                    </span>{" "}
                    rapidly,
                  </span>
                  <span className="block mt-2">standing still is</span>
                </h1>

                {/* Extinction text - Gothic style */}
                <div
                  className={`transition-all duration-1000 delay-300 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <span
                    className="font-display text-[clamp(3rem,8vw,8rem)] leading-none"
                    style={{
                      color: "#D4AF37",
                      textShadow:
                        "0 0 40px rgba(212, 175, 55, 0.3), 0 0 80px rgba(212, 175, 55, 0.15)",
                    }}
                  >
                    Extinction
                  </span>
                  <span
                    className="text-[clamp(3rem,10vw,8rem)]"
                    style={{ color: "#D4AF37" }}
                  >
                    .
                  </span>
                </div>
              </div>

              {/* <span className="block whitespace-nowrap text-6xl">
                In a word that
              </span>

              <span className="block whitespace-nowrap text-6xl">
                evolves rapidly,
              </span>

              <span className="block whitespace-nowrap text-6xl">
                standing still is
              </span>
              <span className="block whitespace-nowrap">Extinction</span> */}
              {/* <span className="block whitespace-nowrap">
                agents that{" "}
                <span className="relative inline-block">
                  <BlurWord word={words[wordIndex]} trigger={wordIndex} />
                </span>
              </span> */}
            </h1>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div
        className={`absolute bottom-6 sm:bottom-12 left-0 right-0 px-4 sm:px-6 lg:px-12 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
          <a
            href="#partner"
            className="group relative px-7 py-3 rounded-full border border-[#D4AF37]/40 text-sm font-medium text-[#D4AF37] tracking-wide uppercase text-center transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
          >
            <span className="relative z-10">Partner with Us</span>
          </a>
          <a
            href="#join-team"
            className="group relative px-7 py-3 rounded-full border border-white/20 text-sm font-medium text-white/80 tracking-wide uppercase text-center transition-all duration-300 hover:border-white/50 hover:text-white hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
          >
            <span className="relative z-10">Join Our Team</span>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeokkO4i2yXB7IMHhsApmw0_4FrGWeoklr1bi_d5zFgO0C96w/viewform?usp=dialog"
            className="group relative px-7 py-3 rounded-full border border-[#D4AF37]/40 text-sm font-medium text-[#D4AF37] tracking-wide uppercase text-center transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
            style={{ backgroundPosition: "left center" }}
          >
            <span className="relative z-10">Join the Waitlist</span>
          </a>
        </div>
      </div>
    </section>
  );
}
