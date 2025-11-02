"use client";

import { useRef, useEffect } from "react";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { counterItems } from "../constants";

import { ParticleCard, BentoProps } from "./MagicBento";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<HTMLDivElement[]>([]);

  const bentoProps: BentoProps = {
    textAutoHide: true,
    enableStars: true,
    enableSpotlight: true,
    enableBorderGlow: true,
    disableAnimations: false,
    spotlightRadius: 300,
    particleCount: 120,
    enableTilt: false,
    glowColor: "132, 0, 255",
    clickEffect: true,
    enableMagnetism: false,
  };

  useEffect(() => {
    countersRef.current.forEach((counter, index) => {
      gsap.fromTo(
        counter,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <style>
        {`
          .counter-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${bentoProps.glowColor};
            --border-color: #392e4e;
            --background-dark: #060010;
            --white: hsl(0, 0%, 100%);
            --purple-primary: rgba(132, 0, 255, 1);
            --purple-glow: rgba(132, 0, 255, 0.2);
            --purple-border: rgba(132, 0, 255, 0.8);
          }

          .counter-card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${bentoProps.glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(${bentoProps.glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: subtract;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1;
          }

          .counter-card--border-glow:hover::after {
            opacity: 1;
          }

          .counter-card--border-glow:hover {
            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${bentoProps.glowColor}, 0.2);
          }
        `}
      </style>
      <div
        id="counter"
        ref={counterRef}
        className="counter-section max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:mt-0"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {counterItems.map((item, index) => {
            const baseClassName = `counter-card flex flex-col justify-center relative min-h-[120px] w-full max-w-full p-5 rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ${
              bentoProps.enableBorderGlow ? "counter-card--border-glow" : ""
            }`;

            const cardStyle = {
              backgroundColor: "var(--background-dark)",
              borderColor: "var(--border-color)",
              color: "var(--white)",
              "--glow-x": "50%",
              "--glow-y": "50%",
              "--glow-intensity": "0",
              "--glow-radius": "200px",
            } as React.CSSProperties;

            return (
              // <ParticleCard
              //   key={index}
              //   className={baseClassName}
              //   style={cardStyle}
              //   disableAnimations={bentoProps.disableAnimations}
              //   particleCount={bentoProps.particleCount}
              //   glowColor={bentoProps.glowColor}
              //   enableTilt={bentoProps.enableTilt}
              //   clickEffect={bentoProps.clickEffect}
              //   enableMagnetism={bentoProps.enableMagnetism}
              // >
              <div className="flex flex-col items-center text-center relative text-white bg-white/10 backdrop-blur-lg border border-white/20 px-10 py-5 rounded-lg">
                <div className="counter-number text-4xl sm:text-4xl font-bold mb-2">
                  <CountUp
                    end={item.value}
                    suffix={item.suffix}
                    duration={2.5}
                    scrollSpyOnce
                    enableScrollSpy
                  />
                </div>
                <div className="text-base sm:text-md opacity-90">
                  {item.label}
                </div>
              </div>
              // </ParticleCard>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AnimatedCounter;
