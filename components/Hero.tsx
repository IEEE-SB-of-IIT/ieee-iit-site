"use client";

import Button from "./ui/button";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Background Image" />
      </div>

      <div className="hero-layout mt-50">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <span className="text-white-50 md:text-3xl text-xl">
                IEEE Student Branch of IIT
              </span>
              <div className="mt-5">
                <h1>Advancing Technology</h1>
                <h1> for Humanity</h1>
              </div>
            </div>
            {/* <Button
              text="Our Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            /> */}
          </div>
        </header>
      </div>

      <AnimatedCounter />
    </section>
  );
}
