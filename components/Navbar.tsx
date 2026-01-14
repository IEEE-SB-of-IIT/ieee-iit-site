'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Events', 'Projects', 'About', 'Contact'];


  return (
   <>
      <header className="absolute top-0 left-0 w-full z-50 py-4 transition-opacity duration-300">
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
          
          <div className="flex items-center gap-3 md:gap-4">
             <div className="flex flex-col justify-center">
               <img src="/images/logos/SB.png" alt="SB Logo" className="h-6 md:h-9 w-auto"/>
             </div>
          </div>

          <div className="opacity-90 hover:opacity-100 transition-opacity">
            <Link href="https://www.ieee.org/" className='hover:cursor-pointer'>
            <img 
              src="/images/logos/IEEE.png" 
              alt="IEEE Logo" 
              className="h-6 md:h-9 w-auto"
            />
            </Link>
          </div>

        </div>
      </header>

      <nav
        className={`fixed left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'top-4 w-[90%] max-w-xl rounded-full bg-ieee-lightest/50 backdrop-blur-xl shadow-lg border border-white/40 py-2'
            : 'top-24 w-[95%] max-w-4xl rounded-2xl bg-ieee-lightest/50 backdrop-blur-sm border border-white/20 py-3'
        }`}
      >
        <div className="px-6 flex justify-between md:justify-center items-center relative">
          
          <span className={`md:hidden font-medium text-ieee-dark text-sm ${isScrolled ? 'opacity-100' : 'opacity-80'}`}>
            Menu
          </span>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={link === 'Home' ? '/' : `#${link.toLowerCase()}`}
                onClick={(e) => {
                  if (link === 'Home') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    window.history.pushState(null, '', '/');
                  }
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                  link === 'Home' 
                    ? 'text-white' 
                    : 'text-ieee-dark hover:text-ieee-medium'
                }`}
              >
                {link === 'Home' && (
                  <span className="absolute inset-0 bg-ieee-blue rounded-full shadow-md -z-10"></span>
                )}
                
                {link !== 'Home' && (
                  <span className="absolute inset-0 bg-ieee-blue/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></span>
                )}
                
                {link}
              </a>
            ))}
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
             isMobileMenuOpen ? 'max-h-96 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
           }`}
        >
          <div className="bg-ieee-lightest/95 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-xl p-2 mx-2 flex flex-col gap-1">
             {navLinks.map((link) => (
                <a
                  key={link}
                  href={link === 'Home' ? '/' : `#${link.toLowerCase()}`}
                  className="block px-4 py-3 rounded-xl text-ieee-dark font-medium text-center hover:bg-white/50 active:scale-95 transition-all"
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    if (link === 'Home') {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      window.history.pushState(null, '', '/');
                    }
                  }}
                >
                  {link}
                </a>
              ))}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar