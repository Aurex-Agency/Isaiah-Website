import Image from "next/image";
import { ParallaxImage } from "./motion/parallax-image";
import { RevealImage } from "./motion/reveal-image";
import { RevealTitle } from "./motion/reveal-title";

export function Look03AfterDark() {
  return (
    <section
      id="look-03"
      data-look-number="03"
      className="bg-ink py-16 sm:py-24"
    >
      <div className="mb-8 flex items-end gap-4 px-5 sm:mb-14 sm:px-8">
        <RevealTitle className="font-display text-paper/25 text-[5.5rem] leading-none sm:text-[9rem]">
          03
        </RevealTitle>
        <RevealTitle
          delay={0.1}
          className="font-display text-paper pb-2 text-2xl sm:pb-5 sm:text-4xl"
        >
          After Dark
        </RevealTitle>
      </div>

      {/* Mobile: varied-height vertical sequence, not four uniform crops */}
      <div className="bg-line flex flex-col gap-px sm:hidden">
        <RevealImage className="aspect-[2/3] w-full">
          <Image
            src="/images/looks/03-after-dark/01-hero-columns-standing.jpg"
            alt="Isaiah Ball standing beneath a row of illuminated concrete columns at night"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </RevealImage>
        <div className="grid grid-cols-2 gap-px">
          <RevealImage delay={0.1} className="aspect-[3/4]">
            <Image
              src="/images/looks/03-after-dark/02-columns-walking.jpg"
              alt="Isaiah Ball walking through the same lit column venue at night"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </RevealImage>
          <RevealImage delay={0.18} className="aspect-[3/4]">
            <Image
              src="/images/looks/03-after-dark/03-plaza-bench.jpg"
              alt="Isaiah Ball seated on a bench in a lit plaza at night, string lights overhead"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </RevealImage>
        </div>
        <RevealImage delay={0.1} className="aspect-[3/4] w-full">
          <Image
            src="/images/looks/03-after-dark/04-garden-path.jpg"
            alt="Isaiah Ball walking a lit brick garden path at night"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </RevealImage>
      </div>

      {/* Desktop: asymmetric spread with varied scale and an edge-bleeding fourth image */}
      <div className="hidden sm:block">
        <div className="bg-line grid grid-cols-12 gap-px pl-8">
          <ParallaxImage strength={5} className="col-span-7 aspect-[2/3]">
            <Image
              src="/images/looks/03-after-dark/01-hero-columns-standing.jpg"
              alt="Isaiah Ball standing beneath a row of illuminated concrete columns at night"
              fill
              sizes="58vw"
              className="object-cover"
            />
          </ParallaxImage>
          <div className="col-span-5 flex flex-col gap-px">
            <RevealImage delay={0.1} className="aspect-[3/4]">
              <Image
                src="/images/looks/03-after-dark/02-columns-walking.jpg"
                alt="Isaiah Ball walking through the same lit column venue at night"
                fill
                sizes="35vw"
                className="object-cover"
              />
            </RevealImage>
            <RevealImage delay={0.2} className="aspect-[3/4] flex-1">
              <Image
                src="/images/looks/03-after-dark/03-plaza-bench.jpg"
                alt="Isaiah Ball seated on a bench in a lit plaza at night, string lights overhead"
                fill
                sizes="35vw"
                className="object-cover"
              />
            </RevealImage>
          </div>
        </div>
        <RevealImage
          delay={0.15}
          className="mt-px ml-auto aspect-[3/4] w-[46%] sm:mr-[-6vw] lg:mr-[-8vw]"
        >
          <Image
            src="/images/looks/03-after-dark/04-garden-path.jpg"
            alt="Isaiah Ball walking a lit brick garden path at night"
            fill
            sizes="46vw"
            className="object-cover"
          />
        </RevealImage>
      </div>
    </section>
  );
}
