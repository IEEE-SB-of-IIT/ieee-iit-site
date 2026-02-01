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
        "glass-bento p-2 group",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BentoCard;
