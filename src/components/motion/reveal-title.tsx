"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useSafeReducedMotion } from "./use-safe-reduced-motion";

type RevealTitleProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const variants = {
  hidden: { y: "100%" },
  visible: { y: "0%" },
};

export function RevealTitle({
  children,
  className = "",
  delay = 0,
}: RevealTitleProps) {
  const reduce = useSafeReducedMotion();

  return (
    <motion.span
      className={`block overflow-hidden ${className}`}
      initial="hidden"
      whileInView={reduce ? undefined : "visible"}
      animate={reduce ? "visible" : undefined}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: reduce ? 0 : 0.6,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.span className="block" variants={variants}>
        {children}
      </motion.span>
    </motion.span>
  );
}
