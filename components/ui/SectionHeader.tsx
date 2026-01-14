import React from "react";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

const SectionHeader = ({ title, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`text-center mb-16 mt-35 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-ieee-dark uppercase tracking-wider">
        {title}
      </h2>
      <div className="w-20 h-1 bg-ieee-medium mx-auto mt-4 rounded-full"></div>
    </div>
  );
};

export default SectionHeader;
