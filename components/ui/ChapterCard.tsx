import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { Chapters } from '@/lib/types';

interface ChapterCardProps {
  chapter: Chapters;
}

const ChapterCard = ({ chapter }: ChapterCardProps) => {
  return (
    <div
      className="group relative flex flex-col items-center p-4 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
    >
      <div className="w-full h-32 flex items-center justify-center mb-4 bg-white/50 rounded-2xl p-4 transition-transform duration-500 group-hover:scale-105">
        <img
          src={`/images/logos/${chapter.icon}`}
          alt={chapter.name}
          className="w-full h-full object-contain transition-all duration-500"
        />
      </div>

      <div className="flex flex-col items-center justify-center h-20 w-full px-2">
        <h4 className="text-sm font-bold text-ieee-dark text-center leading-tight group-hover:text-ieee-medium transition-colors duration-300">
          {chapter.name}
        </h4>
        
        <div className="mt-3 w-8 h-1 bg-ieee-medium/20 rounded-full group-hover:w-16 group-hover:bg-ieee-medium transition-all duration-500"></div>
      </div>

      {/* Social Media Links */}
      <div className="flex gap-4 mt-2 transition-all duration-500">
        <a 
          href={chapter.instagram} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-ieee-lightest text-ieee-medium hover:bg-ieee-medium hover:text-white transition-all duration-300 shadow-sm"
        >
          <Instagram size={14} />
        </a>
        <a 
          href={chapter.facebook} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-ieee-lightest text-ieee-medium hover:bg-ieee-medium hover:text-white transition-all duration-300 shadow-sm"
        >
          <Facebook size={14} />
        </a>
      </div>

      {/* Hover highlight effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default ChapterCard;
