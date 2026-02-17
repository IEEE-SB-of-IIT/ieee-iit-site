import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Badge from "./Badge";

interface SocialIconProps {
  href: string;
  icon: React.ElementType | React.ReactNode;
  ariaLabel: string;
  className?: string;
  iconClassName?: string;
  style?: React.CSSProperties;
}

const SocialIcon = ({
  href,
  icon: Icon,
  ariaLabel,
  className,
  iconClassName,
  style,
}: SocialIconProps) => {
  return (
    <Badge
      style={style}
      className={cn(
        "border border-white rounded-2xl flex items-center justify-center transition-all duration-300 group/social cursor-pointer",
        "hover:bg-[var(--hover-bg)] hover:shadow-[var(--hover-shadow)]",
        className
      )}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="w-full h-full flex items-center justify-center"
      >
        {typeof Icon === "function" ? (
          <Icon
            className={cn(
              "scale-175 text-ieee-blue group-hover/social:text-[var(--hover-color)] transition-colors",
              iconClassName
            )}
          />
        ) : (
          Icon
        )}
      </Link>
    </Badge>
  );
};

export default SocialIcon;
