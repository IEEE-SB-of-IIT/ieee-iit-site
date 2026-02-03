import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  className?: string;
  dark?: boolean;
}

const SectionHeader = ({ title, className = "", dark = false }: SectionHeaderProps) => {
  return (
    <div className={cn("text-center mb-16 mt-35", className)}>
      <div className={cn(
        "mx-auto mb-4 h-[3px] w-28 rounded-full bg-gradient-to-r from-transparent to-transparent",
        dark ? "via-ieee-blue" : "via-ieee-medium"
      )}></div>
      <h2 className={cn(
        "text-3xl md:text-5xl font-semibold uppercase tracking-[0.08em]",
        dark ? "text-white" : "text-gradient"
      )}>
        {title}
      </h2>
      <div className={cn(
        "mx-auto mt-4 h-px w-40 bg-gradient-to-r from-transparent to-transparent",
        dark ? "via-white/40" : "via-ieee-blue/60"
      )}></div>
    </div>
  );
};

export default SectionHeader;
