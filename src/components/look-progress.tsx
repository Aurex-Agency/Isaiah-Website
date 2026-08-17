"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const LOOK_IDS = [
  "look-01",
  "look-02",
  "look-03",
  "look-04",
  "look-05",
  "look-06",
];

export function LookProgress() {
  const [active, setActive] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = LOOK_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActive(visible.target.getAttribute("data-look-number"));
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  if (!active) return null;

  return (
    <div
      className="pointer-events-none fixed bottom-6 left-6 z-40 hidden sm:block"
      aria-hidden="true"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={active}
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="font-display text-paper/50 text-sm tabular-nums"
        >
          {active}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
