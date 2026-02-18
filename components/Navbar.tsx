"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["about", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Detect when section is in upper-mid viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Special case for top of page (Home)
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Contact", href: "/#contact", id: "contact" },
    { name: "Team", href: "/our-team" },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 py-4 transition-opacity duration-300">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col gap-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3 md:gap-4">
              <img
                src="/images/logos/SB.png"
                alt="SB Logo"
                className="h-6 md:h-9 w-auto"
              />
            </div>

            <div className="opacity-90 hover:opacity-100 transition-opacity">
              <Link href="https://www.ieee.org/" className="hover:cursor-pointer">
                <img
                  src="/images/logos/IEEE.png"
                  alt="IEEE Logo"
                  className="h-6 md:h-9 w-auto"
                />
              </Link>
            </div>
          </div>

          <div className="md:hidden flex justify-end">
            <button
              className="p-2 text-ieee-dark hover:bg-black/5 rounded-full transition-colors flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <nav
        className={cn(
          "fixed left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ease-in-out",
          isScrolled
            ? "top-4 w-[90%] max-w-xl rounded-full bg-ieee-lightest/50 backdrop-blur-xl shadow-lg border border-white/40 py-2 opacity-100 pointer-events-auto"
            : isMobileMenuOpen
            ? "top-32 w-full opacity-100 pointer-events-auto bg-transparent border-none shadow-none"
            : "top-20 w-[95%] max-w-3xl rounded-2xl bg-ieee-lightest/30 backdrop-blur-sm border border-white/20 py-3 md:opacity-100 opacity-0 pointer-events-none md:pointer-events-auto"
        )}
      >
        <div className={cn(
          "px-6 flex justify-between md:justify-center items-center relative",
          !isScrolled && isMobileMenuOpen && "hidden md:flex"
        )}>
          <div className="md:hidden flex items-center">
            <img
              src="/images/logos/SB.png"
              alt="SB Logo"
              className="h-6 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.id && pathname === "/"
                  ? activeSection === link.id
                  : pathname === link.href && activeSection === "";

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                    isActive
                      ? "text-white"
                      : "text-ieee-dark hover:text-ieee-medium"
                  }`}
                >
                  <span
                    className={`absolute inset-0 bg-ieee-blue rounded-full shadow-md -z-10 transition-all duration-300 ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  ></span>

                  {!isActive && (
                    <span className="absolute inset-0 bg-ieee-blue/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></span>
                  )}

                  {link.name}
                </Link>
              );
            })}
          </div>

          <button
            className="md:hidden p-2 text-ieee-dark hover:bg-white/20 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          className={`md:hidden absolute top-full left-0 w-full mt-2 overflow-hidden transition-all duration-300 ease-in-out origin-top ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-95"
          }`}
        >
          <div className="bg-ieee-lightest/95 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-xl p-2 mx-2 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.id && pathname === "/"
                  ? activeSection === link.id
                  : pathname === link.href && activeSection === "";

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl font-medium text-center transition-all ${
                    isActive
                      ? "bg-ieee-blue text-white shadow-md"
                      : "text-ieee-dark hover:bg-white/50 active:scale-95"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
