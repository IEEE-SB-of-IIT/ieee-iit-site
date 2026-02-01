import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Badge = ({ children, className, style }: BadgeProps) => {
  return (
    <div 
      className={cn(
        "glass-pill",
        className
      )}
      style={style}
    >
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

export default Badge;
