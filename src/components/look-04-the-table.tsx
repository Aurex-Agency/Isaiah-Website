import Image from "next/image";
import { ParallaxText } from "./motion/parallax-text";
import { RevealImage } from "./motion/reveal-image";
import { RevealTitle } from "./motion/reveal-title";

export function Look04TheTable() {
  return (
    <section
      id="look-04"
      data-look-number="04"
      className="bg-ink relative -mt-6 overflow-hidden pt-4 pb-20 sm:-mt-10 sm:pt-6 sm:pb-28"
    >
      <ParallaxText range={48}>
        <RevealTitle className="font-display text-paper/25 px-5 text-[5.5rem] leading-none select-none sm:px-8 sm:text-[9rem]">
          04
        </RevealTitle>
      </ParallaxText>

      <div className="relative -mt-6 flex justify-end sm:-mt-10">
        <div className="hidden max-w-xs px-8 sm:absolute sm:inset-y-0 sm:left-0 sm:flex sm:flex-col sm:justify-center">
          <p className="text-paper/55 font-sans text-xs tracking-[0.15em] uppercase sm:text-sm">
            Hospitality + Experiences
          </p>
          <p className="font-display text-paper mt-4 text-xl leading-snug sm:text-2xl">
            Available for styled shoots, local partnerships and
            hospitality-focused content.
          </p>
        </div>

        <RevealImage
          emphasis
          className="aspect-[3/4] w-[62%] sm:w-[34%] lg:w-[30%]"
        >
          <Image
            src="/images/looks/04-the-table/01-hero-vintage-table.jpg"
            alt="Isaiah Ball seated at a vintage garden table styled with glassware and dried florals, wearing a blazer"
            fill
            sizes="(min-width: 640px) 34vw, 62vw"
            className="object-cover"
          />
        </RevealImage>
      </div>

      <div className="mt-6 px-5 sm:hidden">
        <p className="text-paper/55 font-sans text-xs tracking-[0.15em] uppercase">
          Hospitality + Experiences
        </p>
        <p className="font-display text-paper mt-3 text-xl leading-snug">
          Available for styled shoots, local partnerships and
          hospitality-focused content.
        </p>
      </div>

      <div className="mt-6 px-5 sm:mt-10 sm:px-8">
        <RevealTitle
          delay={0.15}
          className="font-display text-paper text-2xl sm:text-3xl"
        >
          The Table
        </RevealTitle>
      </div>
    </section>
  );
}
