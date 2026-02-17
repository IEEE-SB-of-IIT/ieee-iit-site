import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
}

const BentoCard = ({ children, className }: BentoCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-3xl overflow-hidden group shadow-lg bg-white/10 backdrop-blur-md border border-white/30 p-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BentoCard;
