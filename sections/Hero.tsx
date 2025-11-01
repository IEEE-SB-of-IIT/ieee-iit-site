"use client";

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
    <section className="relative mt-[240px] mb-10 flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial opacity-30 animate-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-lg border border-white/20 text-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Advancing Technology for Humanity
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
            {/* <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 gap-2 group"
            >
              Get started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
