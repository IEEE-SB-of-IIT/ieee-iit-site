import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div
      id={id}
      className={cn("container mx-auto px-6 max-w-7xl", className)}
    >
      {children}
    </div>
  );
};

export default Container;
