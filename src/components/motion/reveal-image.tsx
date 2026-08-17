"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useSafeReducedMotion } from "./use-safe-reduced-motion";

type RevealImageProps = {
  children: ReactNode;
  delay?: number;
  emphasis?: boolean;
  /** "up" (default) enters from below; "left"/"right" slide in from a
   * viewport edge instead — use sparingly, on selected supporting images. */
  direction?: "up" | "left" | "right";
  /** Subtle hover zoom on desktop pointer devices. Disabled for images
   * that already carry their own framing (e.g. the Look 05 mat treatment). */
  hover?: boolean;
  className?: string;
};

const OFFSETS = {
  up: { y: 28, x: 0 },
  left: { y: 0, x: -56 },
  right: { y: 0, x: 56 },
};

export function RevealImage({
  children,
  delay = 0,
  emphasis = false,
  direction = "up",
  hover = true,
  className = "",
}: RevealImageProps) {
  const reduce = useSafeReducedMotion();
  const offset = OFFSETS[direction];

  return (
    // Stable outer box: never transformed, so its own overflow-hidden
    // reliably clips the animated inner layer regardless of how far it
    // translates (a left/right edge-reveal offset on the SAME element as
    // overflow-hidden would move the clip boundary along with it, causing
    // real page-level horizontal overflow — confirmed as a live bug on
    // Look 06's edge-reveal images before this was split into two layers).
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={{
          opacity: 0,
          y: offset.y,
          x: offset.x,
          scale: emphasis ? 1.03 : 1,
        }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0, x: 0, scale: 1 }}
        animate={reduce ? { opacity: 1, y: 0, x: 0, scale: 1 } : undefined}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: reduce ? 0 : emphasis ? 0.65 : 0.5,
          delay: reduce ? 0 : delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {hover ? (
          <motion.div
            className="relative h-full w-full"
            whileHover={reduce ? undefined : { scale: 1.035 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        ) : (
          children
        )}
      </motion.div>
    </div>
  );
}
