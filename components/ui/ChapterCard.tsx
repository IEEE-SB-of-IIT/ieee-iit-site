import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { Chapters } from '@/lib/types';

interface ChapterCardProps {
  chapter: Chapters;
}

const ChapterCard = ({ chapter }: ChapterCardProps) => {
  return (
    <div
      className="group relative flex flex-col items-center p-2 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
      style={{ '--hover-color': chapter.color } as React.CSSProperties}
    >
      <div className="my-2 w-full h-24 flex items-center justify-center mb-4 rounded-2xl p-3 transition-transform duration-500 scale-105 group-hover:scale-110">
        <img
          src={`/images/logos/${chapter.icon}`}
          alt={chapter.name}
          className="w-full h-full object-contain transition-all duration-500"
        />
      </div>

      <div className="flex flex-col items-center w-full px-2">
        <div className="h-10 flex items-center justify-center w-full mb-3">
          <h4 className="text-sm font-bold text-ieee-gray text-center leading-tight group-hover:text-[var(--hover-color)] transition-colors duration-300">
            {chapter.name}
          </h4>
        </div>
        
        <div className="w-8 h-1 bg-ieee-gray/20 rounded-full group-hover:w-16 group-hover:bg-[var(--hover-color)] transition-all duration-500"></div>
      </div>

      {/* Social Media Links */}
      <div className="flex gap-4 py-2 pt-3 transition-all duration-500">
        <a 
          href={chapter.instagram} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-ieee-lightest text-ieee-blue hover:bg-[var(--hover-color)] hover:text-white transition-all duration-300 shadow-sm"
        >
          <Instagram size={14} />
        </a>
        <a 
          href={chapter.facebook} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-ieee-lightest text-ieee-blue hover:bg-[var(--hover-color)] hover:text-white transition-all duration-300 shadow-sm"
        >
          <Facebook size={14} />
        </a>
        <a 
          href={chapter.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-ieee-lightest text-ieee-blue hover:bg-[var(--hover-color)] hover:text-white transition-all duration-300 shadow-sm"
        >
          <Linkedin size={14} />
        </a>
      </div>

      {/* Hover highlight effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default ChapterCard;
