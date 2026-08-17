"use client";

import { motion } from "motion/react";
import { useSafeReducedMotion } from "./use-safe-reduced-motion";

const charVariants = {
  hidden: { y: "100%" },
  visible: { y: "0%" },
};

type AnimatedMetricProps = {
  value: string;
  className?: string;
};

/** Masked per-character digit roll, triggered once on scroll into view. */
export function AnimatedMetric({ value, className = "" }: AnimatedMetricProps) {
  const reduce = useSafeReducedMotion();
  const characters = value.split("");

  return (
    <motion.span
      className={`inline-flex ${className}`}
      initial="hidden"
      whileInView={reduce ? undefined : "visible"}
      animate={reduce ? "visible" : undefined}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ staggerChildren: 0.03, delayChildren: 0.05 }}
    >
      {characters.map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={charVariants}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {char === " " ? " " : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
