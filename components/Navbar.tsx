'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sections = ['about', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about', id: 'about' },
    { name: 'Projects', href: '/#projects', id: 'projects' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
    { name: 'Team', href: '/our-team' }
  ];

  return (
    <>
      {/* Top Header with Logos */}
      <header className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "py-2 bg-ieee-dark/95 backdrop-blur-xl shadow-lg"
          : "py-4 bg-white/80 backdrop-blur-md shadow-sm"
      )}>
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">

          {/* Left Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logos/SB.png"
              alt="IEEE SB IIT Logo"
              className={cn(
                "transition-all duration-300",
                isScrolled ? "h-8 brightness-0 invert" : "h-10"
              )}
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = (link.id && pathname === '/')
                ? activeSection === link.id
                : (pathname === link.href && activeSection === '');

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-300 relative",
                    isActive
                      ? "text-ieee-blue"
                      : isScrolled
                        ? "text-white/80 hover:text-white"
                        : "text-ieee-dark/80 hover:text-ieee-dark"
                  )}
                >
                  {link.name}
                  {/* Active indicator line */}
                  <span className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-ieee-blue transition-all duration-300",
                    isActive ? "w-full" : "w-0"
                  )} />
                </Link>
              );
            })}
          </nav>

          {/* Right Side - IEEE Logo & CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.ieee.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src="/images/logos/IEEE.png"
                alt="IEEE Logo"
                className={cn(
                  "transition-all duration-300",
                  isScrolled ? "h-7 brightness-0 invert" : "h-9"
                )}
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                "md:hidden p-2 rounded-lg transition-colors",
                isScrolled
                  ? "text-white hover:bg-white/10"
                  : "text-ieee-dark hover:bg-ieee-dark/10"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-out",
            isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-ieee-dark/98 backdrop-blur-xl border-t border-white/10 p-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = (link.id && pathname === '/')
                  ? activeSection === link.id
                  : (pathname === link.href && activeSection === '');

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "px-4 py-3 rounded-xl font-semibold uppercase tracking-wider text-sm transition-all",
                      isActive
                        ? "bg-ieee-blue text-white"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
