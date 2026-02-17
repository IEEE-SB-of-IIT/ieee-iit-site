import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Badge = ({ children, className, style }: BadgeProps) => {
  return (
    <div
      className={cn(
        "inline-block px-4 py-1.5 rounded-full",
        "bg-white/20 backdrop-blur-xs border border-white/20",
        "text-ieee-medium font-semibold text-sm tracking-wider",
        "shadow-sm transition-all duration-300",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Badge;
