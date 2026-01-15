import React from 'react';
import { Member } from '@/lib/types';
import Image from 'next/image';
import { CheckCircle2, Plus, User, Layers } from 'lucide-react';

type Props = {
  member: Member;
};

const TeamMemberCard: React.FC<Props> = ({ member }) => {
  return (
    // Container: Reduced shadow, thick white border, rounded corners
    <div className="group relative w-full max-w-[320px] aspect-[9/15.5] mx-auto rounded-[40px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] border-[8px] border-white bg-gray-100">
      
      {/* 1. Full Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 2. Seamless Glass Content Area */}
      {/* We position this at the bottom, but let the gradient stretch upwards */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        
        {/* The Glass Pane:
            - bg-gradient-to-t: Creates the fade from opaque bottom to transparent top.
            - from-slate-100/90 to-transparent: The color gradient.
            - backdrop-blur-xl: Applies the frosted effect.
            - pt-12: Added top padding so the text starts deeper in the faded area.
        */}
        <div className="flex flex-col gap-4 px-6 pb-8 pt-16 bg-gradient-to-t from-slate-100/95 via-slate-100/50 to-transparent backdrop-blur-xl">
          
          {/* Name & Badge */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-[22px] font-extrabold text-gray-900 leading-tight">
                {member.name}
              </h3>
              {/* Using fill-current so the checkmark inherits the text color, and text-green-600 for the outer circle */}
              <CheckCircle2 className="w-5 h-5 text-green-500 fill-current" />
            </div>
            
            {/* Role / Description */}
            <p className="text-[15px] font-medium text-gray-600 leading-snug pr-4">
              {member.role || "Product Designer who focuses on simplicity & usability."}
            </p>
          </div>

          {/* Bottom Row: Stats & Action Button */}
          <div className="flex items-end justify-between pt-2">
            
            {/* Stats */}
            <div className="flex items-center gap-5 text-gray-700 mb-1">
              <div className="flex items-center gap-1.5">
                <User className="w-[18px] h-[18px] opacity-70" />
                <span className="text-[15px] font-bold">312</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers className="w-[18px] h-[18px] opacity-70" />
                <span className="text-[15px] font-bold">48</span>
              </div>
            </div>

            {/* Follow Button - Exact style from image */}
            <button className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#f8f8f8] text-gray-900 rounded-[20px] shadow-sm hover:shadow-md transition-all duration-200 active:scale-95">
              <span className="text-[15px] font-extrabold">Follow</span>
              <Plus className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;