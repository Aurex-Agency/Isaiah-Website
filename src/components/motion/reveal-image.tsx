"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useSafeReducedMotion } from "./use-safe-reduced-motion";

type RevealImageProps = {
  children: ReactNode;
  delay?: number;
  emphasis?: boolean;
  className?: string;
};

export function RevealImage({
  children,
  delay = 0,
  emphasis = false,
  className = "",
}: RevealImageProps) {
  const reduce = useSafeReducedMotion();

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 28, scale: emphasis ? 1.03 : 1 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
      animate={reduce ? { opacity: 1, y: 0, scale: 1 } : undefined}
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
