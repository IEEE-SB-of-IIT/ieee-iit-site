'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollReveal = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    document.documentElement.classList.add('reveal-ready');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = Array.from(document.querySelectorAll('[data-reveal]')) as HTMLElement[];

    if (reducedMotion) {
      elements.forEach((el) => el.classList.add('reveal-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add('reveal-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach((el) => {
      el.classList.remove('reveal-visible');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

export default ScrollReveal;
