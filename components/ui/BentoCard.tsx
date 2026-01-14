import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: ReactNode;
  className?: string; // To handle col-span, row-span, bg colors etc.
}

const BentoCard = ({ children, className }: BentoCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-3xl overflow-hidden group shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BentoCard;
