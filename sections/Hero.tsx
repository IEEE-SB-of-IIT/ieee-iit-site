"use client";

import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section className="relative pt-[260px] mb-10 flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial opacity-30 animate-glow" />
      {/* Replace the heroBackground <img> with this custom gradient div */}
      <div className="absolute -top-[60%] left-1/2 w-[150%] h-[120%] -translate-x-1/2 overflow-hidden pointer-events-none">
        {/* Half-circle blue gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-gradient-to-b from-[#00629B]/70 to-transparent blur-[180px]" />

        {/* Subtle concentric rings */}
        <svg
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[700px]"
          viewBox="0 0 1400 700"
        >
          <circle
            cx="700"
            cy="350"
            r="250"
            stroke="#00629B"
            strokeOpacity="0.2"
            fill="none"
            strokeWidth="1.5"
          />
          <circle
            cx="700"
            cy="350"
            r="400"
            stroke="#00629B"
            strokeOpacity="0.15"
            fill="none"
            strokeWidth="1"
          />
          <circle
            cx="700"
            cy="350"
            r="550"
            stroke="#00629B"
            strokeOpacity="0.1"
            fill="none"
            strokeWidth="1"
          />

          <circle
            cx="700"
            cy="350"
            r="700"
            stroke="#00629B"
            strokeOpacity="0.1"
            fill="none"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-lg border border-white/20 text-sm">
            <img
              src="images/logos/SB.png"
              alt=""
              className="h-10 w-auto filter invert brightness-0"
            />
          </div>

          <h3 className="text-6xl md:text-7xl lg:text-6xl font-bold leading-tight animate-slide-up">
            IEEE Student Branch of IIT
          </h3>

          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Empowering students to lead innovation through technology, research,
            and collaboration that drives real-world impact.
          </p>

          <div
            className="flex items-center justify-center gap-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button
              size="lg"
              className="hover:cursor-pointer contact-btn group bg-white text-black px- py-2 rounded-md font-semibold hover:bg-blue-400 hover:text-white transition-colors duration-300"
            >
              Become an IEEE Innovator
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
