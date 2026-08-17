import { RevealTitle } from "./motion/reveal-title";

const CAPABILITIES = [
  {
    number: "01",
    title: "Brand Content",
    description:
      "Fashion, lifestyle and product-focused content for social campaigns.",
  },
  {
    number: "02",
    title: "Modeling",
    description: "Editorial, campaign, ecommerce and promotional modeling.",
  },
  {
    number: "03",
    title: "UGC",
    description:
      "Natural short-form content designed for brands to use across their own channels.",
  },
  {
    number: "04",
    title: "Creative Collaborations",
    description:
      "Campaign concepts, shoots, events and select creative partnerships.",
  },
];

export function WhatIsaiahCreates() {
  return (
    <section className="bg-ink px-5 py-24 sm:px-8 sm:py-36">
      <p className="text-paper/50 mb-10 font-sans text-sm tracking-[0.2em] uppercase sm:mb-16">
        What Isaiah Creates
      </p>

      <div className="divide-line flex flex-col divide-y">
        {CAPABILITIES.map((item, i) => (
          <div
            key={item.number}
            className={`grid grid-cols-1 gap-2 py-8 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-10 ${
              i % 2 === 1 ? "sm:pl-[8%]" : ""
            }`}
          >
            <span className="font-display text-denim-light text-4xl sm:col-span-2 sm:text-5xl">
              {item.number}
            </span>
            <RevealTitle className="font-display text-paper text-2xl sm:col-span-4 sm:text-3xl">
              {item.title}
            </RevealTitle>
            <p className="text-paper/60 max-w-sm font-sans sm:col-span-6 sm:text-lg">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
