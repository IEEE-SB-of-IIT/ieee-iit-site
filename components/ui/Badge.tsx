import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <div className={cn(
      "inline-block px-4 py-1.5 rounded-full",
      "bg-white/10 backdrop-blur-md border border-white/20",
      "text-ieee-medium font-semibold text-sm tracking-wider uppercase",
      "shadow-sm",
      className
    )}>
      {children}
    </div>
  );
};

export default Badge;
