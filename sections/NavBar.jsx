"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const logoRef = useRef(null);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "power2.out" },
    });

    if (scrolled) {
      tl.to(
        logoRef.current,
        { opacity: 1, y: 0, x: 0, pointerEvents: "auto" },
        0
      ).to(
        buttonRef.current,
        { opacity: 1, y: 0, x: 0, pointerEvents: "auto" },
        0
      );
    } else {
      tl.to(
        logoRef.current,
        { opacity: 0, y: -10, x: -20, pointerEvents: "none" },
        0
      ).to(
        buttonRef.current,
        { opacity: 0, y: -10, x: 20, pointerEvents: "none" },
        0
      );
    }

    gsap.to(containerRef.current, {
      maxWidth: scrolled ? "80rem" : "36rem",
      minWidth: "36rem",
      duration: 0.8,
      ease: "power3.inOut",
    });
  }, [scrolled]);

  return (
    <header
      className={`navbar ${
        scrolled ? "scrolled" : "not-scrolled"
      } bg-transparent`}
    >
      <div
        ref={containerRef}
        className={`inner relative mx-auto px-6 flex items-center h-16 bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg`}
      >
        {/* Logo (hidden when not scrolled) */}
        <div ref={logoRef} className="flex-shrink-0 opacity-0 -translate-y-2">
          <img
            src="images/logos/SB.png"
            alt=""
            className="h-10 w-auto filter invert brightness-0"
          />
        </div>

        {/* Navigation (absolute centered) */}
        {/* Navigation (absolute centered) */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="inline-flex space-x-8 text-white font-medium whitespace-nowrap">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group relative">
                <a
                  href={link}
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  {name}
                  <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-indigo-400 transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Join Us Button (hidden when not scrolled) */}
        <div
          ref={buttonRef}
          className="ml-auto flex-shrink-0 opacity-0 -translate-y-2"
        >
          <a
            href="#contact"
            className="contact-btn group bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-blue-400 hover:text-white transition-colors duration-300"
          >
            Join Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
