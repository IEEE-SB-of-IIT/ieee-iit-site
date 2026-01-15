'use client';

import React, { useState, useLayoutEffect, useRef } from 'react';
import { Member } from '@/lib/types';
import { Mail, Linkedin } from 'lucide-react';

type Props = {
  member: Member;
};

const TeamMemberCard: React.FC<Props> = ({ member }) => {
  const [fontSize, setFontSize] = useState(20); // Base text-xl is 20px
  const nameRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const updateScale = () => {
      if (nameRef.current && containerRef.current) {
        // Reset to base size to measure true scrollWidth
        nameRef.current.style.fontSize = '20px';
        const containerWidth = containerRef.current.clientWidth - 64; // p-8 is 32px on each side
        const nameWidth = nameRef.current.scrollWidth;
        
        if (nameWidth > containerWidth && nameWidth > 0) {
          const newSize = Math.max(12, 20 * (containerWidth / nameWidth));
          setFontSize(newSize);
        } else {
          setFontSize(20);
        }
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [member.name]);

  return (
    <div className="group relative w-full aspect-[3/4.5] mx-auto rounded-[32px] overflow-hidden shadow-lg border-3 border-white/80">
      {/* 1. Full Background Image */}
      <img
        src={member.image}
        alt={member.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
      />

      {/* 2. Dark Liquid Glass (Smoke Theme) */}
      <div 
        className="absolute inset-0 top-[20%] bg-black/30 backdrop-blur-[80px] backdrop-saturate-[1.8] border-t border-black/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]
                   before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/10 before:to-transparent before:opacity-50 before:pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to top, black 0%, black 25%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, black 25%, transparent 100%)'
        }}
      >
        {/* Grain Overlay for Realism */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Specular Edge Highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/40 to-transparent" />
      </div>

      {/* 3. Floating Social Pill (Top Right) */}
      <div className="absolute top-6 right-6 z-30 flex flex-col gap-2">
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="p-2.5 bg-black/50 opacity-80 hover:opacity-100 hover:bg-black/40 text-white rounded-xl border border-white/20 backdrop-blur-2xl transition-all duration-300 shadow-xl"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" strokeWidth={2} />
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-black/50 opacity-80 hover:opacity-100 hover:bg-black/40 text-white rounded-xl border border-white/20 backdrop-blur-2xl transition-all duration-300 shadow-xl"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" strokeWidth={2} />
          </a>
        )}
      </div>

      {/* 4. Text and Details Content Layer */}
      <div ref={containerRef} className="absolute bottom-0 left-0 right-0 p-8 z-20">
        <div className="flex flex-col gap-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-white/80 uppercase tracking-widest truncate">
              {member.role}
            </p>
            <div className="min-h-[1.75rem] flex items-center">
              <h3 
                ref={nameRef}
                className="font-bold text-white leading-tight tracking-tight drop-shadow-md whitespace-nowrap"
                style={{ fontSize: `${fontSize}px` }}
              >
                {member.name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;