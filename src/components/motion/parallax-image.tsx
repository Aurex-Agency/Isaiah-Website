"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { useSafeReducedMotion } from "./use-safe-reduced-motion";

type ParallaxImageProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

export function ParallaxImage({
  children,
  strength = 6,
  className = "",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useSafeReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${strength}%`, `${strength}%`],
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-x-0"
        style={{
          top: `-${strength}%`,
          height: `${100 + strength * 2}%`,
          y: reduce ? 0 : y,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
