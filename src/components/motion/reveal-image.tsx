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
  className = "",
}: RevealImageProps) {
  const reduce = useSafeReducedMotion();
  const offset = OFFSETS[direction];

  return (
    <motion.div
      className={`relative ${className}`}
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
      {children}
    </motion.div>
  );
}
