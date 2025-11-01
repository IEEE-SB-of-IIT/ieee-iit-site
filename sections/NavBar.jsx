"use client";

import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${
        scrolled ? "scrolled" : "not-scrolled"
      } bg-transparent`}
    >
      <div className="inner relative max-w-7xl mx-auto px-6 flex items-center h-16 bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg">
        {/* Logo (left) */}
        <div className="flex-shrink-0">
          <img
            src="images/BlueSBLogo.png"
            alt=""
            className="h-10 w-auto filter invert brightness-0"
          />
        </div>

        {/* Navigation (absolute centered) */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="inline-flex space-x-8 text-white font-medium">
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

        {/* Join Us button (right) */}
        <div className="ml-auto flex-shrink-0">
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
