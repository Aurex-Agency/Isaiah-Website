"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useSafeReducedMotion } from "./motion/use-safe-reduced-motion";

const CAPABILITIES = [
  {
    number: "01",
    title: "Brand Content",
    description:
      "Fashion, lifestyle and product-focused content for social campaigns.",
    image: "/images/looks/02-around-town/01-hero-quarry-front.jpg",
    alt: "Isaiah Ball in Nashville streetwear for lifestyle content",
  },
  {
    number: "02",
    title: "Modeling",
    description: "Editorial, campaign, ecommerce and promotional modeling.",
    image: "/images/looks/01-studio/03-standing-front.jpg",
    alt: "Isaiah Ball modeling in a studio setting",
  },
  {
    number: "03",
    title: "UGC",
    description:
      "Natural short-form content designed for brands to use across their own channels.",
    image: "/images/looks/06-away/02-nyc-mailbox.jpg",
    alt: "Isaiah Ball creating casual short-form content on location",
  },
  {
    number: "04",
    title: "Creative Collaborations",
    description:
      "Campaign concepts, shoots, events and select creative partnerships.",
    image: "/images/looks/04-the-table/01-hero-vintage-table.jpg",
    alt: "Isaiah Ball on a styled creative collaboration shoot",
  },
];

const SEGMENT = 1 / CAPABILITIES.length;

export function WhatIsaiahCreates() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useSafeReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      CAPABILITIES.length - 1,
      Math.floor(latest * CAPABILITIES.length),
    );
    setActive(index);
  });

  const railScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="bg-paper relative sm:h-[350vh]">
      <div className="flex flex-col sm:sticky sm:top-0 sm:h-screen sm:flex-row sm:items-stretch">
        <div className="flex flex-col justify-center px-5 py-16 sm:w-1/2 sm:px-12 sm:py-0 lg:px-20">
          <p className="text-ink/70 mb-8 font-sans text-sm tracking-[0.2em] uppercase sm:mb-14">
            What Isaiah Creates
          </p>

          <div className="relative flex flex-col gap-1 sm:gap-2">
            <div
              className="bg-ink/15 absolute top-0 -left-5 hidden w-px sm:block"
              style={{ height: "100%" }}
            >
              <motion.div
                className="bg-ink w-px origin-top"
                style={{
                  height: "100%",
                  scaleY: reduce ? undefined : railScale,
                }}
              />
            </div>

            {CAPABILITIES.map((item, i) => {
              const isActive = i === active;
              return (
                <div
                  key={item.number}
                  className="flex items-baseline gap-4 py-3 sm:py-4"
                >
                  <span
                    className={`font-display tabular-nums transition-all duration-500 ${
                      isActive
                        ? "text-denim text-2xl sm:text-3xl"
                        : "text-ink/70 text-lg sm:text-xl"
                    }`}
                  >
                    {item.number}
                  </span>
                  <span
                    className={`font-display text-ink transition-all duration-500 ${
                      isActive ? "text-3xl sm:text-5xl" : "text-xl sm:text-2xl"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="text-ink/70 mt-8 max-w-sm font-sans sm:mt-10 sm:text-lg">
            {CAPABILITIES[active].description}
          </p>
        </div>

        <div className="relative h-[70vh] overflow-hidden sm:h-auto sm:w-1/2">
          {CAPABILITIES.map((item, i) => (
            <CapabilityImage
              key={item.number}
              image={item.image}
              alt={item.alt}
              index={i}
              scrollYProgress={scrollYProgress}
              reduce={reduce}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityImage({
  image,
  alt,
  index,
  scrollYProgress,
  reduce,
}: {
  image: string;
  alt: string;
  index: number;
  scrollYProgress: MotionValue<number>;
  reduce: boolean;
}) {
  const entryStart = Math.max(0, index * SEGMENT - SEGMENT * 0.35);
  const entryEnd = index * SEGMENT + SEGMENT * 0.1;
  const animatedClipPath = useTransform(
    scrollYProgress,
    [entryStart, entryEnd],
    [`inset(0 0 0 100%)`, `inset(0 0 0 0%)`],
  );

  // Reduced motion: same scroll position drives this, but as a hard step
  // (no interpolation) instead of an eased wipe — stays perfectly in sync
  // with the scroll-derived "active" state used by the text panel, since
  // both read directly from scrollYProgress rather than through React state.
  const steppedClipPath = useTransform(scrollYProgress, (latest) => {
    const activeIndex = Math.min(
      CAPABILITIES.length - 1,
      Math.floor(latest * CAPABILITIES.length),
    );
    return `inset(0 0 0 ${index <= activeIndex ? "0%" : "100%"})`;
  });

  const clipPath = reduce ? steppedClipPath : animatedClipPath;

  return (
    <motion.div
      className="absolute inset-0"
      style={{ clipPath, zIndex: index }}
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
    </motion.div>
  );
}
