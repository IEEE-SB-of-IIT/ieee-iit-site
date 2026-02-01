import React from "react";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

const SectionHeader = ({ title, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`text-center mb-16 mt-35 ${className}`}>
      <div className="mx-auto mb-4 h-[3px] w-28 rounded-full bg-gradient-to-r from-transparent via-ieee-medium to-transparent"></div>
      <h2 className="text-3xl md:text-5xl font-semibold uppercase tracking-[0.08em] text-gradient">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-px w-40 bg-gradient-to-r from-transparent via-ieee-blue/60 to-transparent"></div>
    </div>
  );
};

export default SectionHeader;
