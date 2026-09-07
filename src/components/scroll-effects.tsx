import { type ReactNode } from "react";
import { useScrollReveal, useScrollProgress } from "@/hooks/use-scroll-animations";

export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cyan via-primary to-violet shadow-[0_0_10px_var(--cyan)] transition-[width] duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale" | "fade";
  delay?: number;
};

export function ScrollReveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal();
  const variantClass = {
    up: "reveal-up",
    left: "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale",
    fade: "reveal-fade",
  }[variant];

  return (
    <div
      ref={ref}
      className={`reveal ${variantClass} ${isVisible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function ParallaxOrbs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
    </div>
  );
}

export function FloatingParticles() {
  const particles = Array.from({ length: 24 }, (_, i) => i);
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${(i * 37 + 13) % 100}%`,
            top: `${(i * 53 + 29) % 100}%`,
            animationDelay: `${(i * 0.35) % 4}s`,
            animationDuration: `${8 + (i % 6)}s`,
          }}
        />
      ))}
    </div>
  );
}
