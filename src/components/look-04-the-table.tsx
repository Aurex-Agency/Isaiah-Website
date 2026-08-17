import Image from "next/image";
import { ParallaxImage } from "./motion/parallax-image";
import { ParallaxText } from "./motion/parallax-text";
import { RevealTitle } from "./motion/reveal-title";

const OPPORTUNITIES = [
  "Styled Shoots",
  "Events",
  "Hospitality Partnerships",
  "Lifestyle Campaigns",
];

export function Look04TheTable() {
  return (
    <section
      id="look-04"
      data-look-number="04"
      className="bg-ink relative -mt-6 overflow-hidden py-20 sm:-mt-10 sm:py-0"
    >
      <div className="grid gap-10 px-5 sm:min-h-screen sm:grid-cols-12 sm:items-center sm:gap-8 sm:px-8 sm:py-24">
        <div className="relative sm:col-span-6">
          <ParallaxText
            range={44}
            className="pointer-events-none absolute -top-6 -left-2 select-none sm:-top-10"
          >
            <span className="font-display text-paper/10 text-[6rem] leading-none sm:text-[12rem]">
              04
            </span>
          </ParallaxText>

          <ParallaxText range={-28} className="relative">
            <p className="text-paper/55 mb-4 font-sans text-xs tracking-[0.15em] uppercase sm:text-sm">
              The Table
            </p>
            <h2 className="font-display text-paper text-5xl leading-[0.95] sm:text-7xl">
              <RevealTitle>Hospitality</RevealTitle>
              <RevealTitle delay={0.1} className="text-paper/60">
                + Experiences
              </RevealTitle>
            </h2>

            <ul className="border-line mt-8 max-w-xs border-t pt-6 sm:mt-10">
              {OPPORTUNITIES.map((item) => (
                <li
                  key={item}
                  className="border-line text-paper/80 border-b py-3 font-sans sm:text-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </ParallaxText>
        </div>

        <div className="sm:col-span-6">
          <ParallaxImage strength={6} className="aspect-[3/4] sm:aspect-[4/5]">
            <Image
              src="/images/looks/04-the-table/01-hero-vintage-table.jpg"
              alt="Isaiah Ball seated at a vintage garden table styled with glassware and dried florals, wearing a blazer"
              fill
              sizes="(min-width: 640px) 45vw, 100vw"
              className="object-cover"
            />
          </ParallaxImage>
        </div>
      </div>
    </section>
  );
}
