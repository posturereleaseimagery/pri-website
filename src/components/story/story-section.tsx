"use client";

import { useScrollReveal } from "./use-scroll-reveal";

interface StorySectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "default" | "warm" | "muted";
}

export function StorySection({ children, className = "", bg = "default" }: StorySectionProps) {
  const { ref, isVisible } = useScrollReveal(0.12);

  const bgClass =
    bg === "warm"
      ? "bg-gradient-to-b from-warm/5 to-transparent"
      : bg === "muted"
      ? "bg-secondary/30"
      : "";

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${bgClass} ${className}`}
    >
      {children}
    </div>
  );
}
