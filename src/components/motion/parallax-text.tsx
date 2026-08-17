"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { useSafeReducedMotion } from "./use-safe-reduced-motion";

type ParallaxTextProps = {
  children: ReactNode;
  range?: number;
  className?: string;
};

export function ParallaxText({
  children,
  range = 56,
  className = "",
}: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useSafeReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [range / 2, -range / 2]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: reduce ? 0 : y }}>{children}</motion.div>
    </div>
  );
}
