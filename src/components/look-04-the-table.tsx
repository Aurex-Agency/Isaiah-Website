import Image from "next/image";
import { RevealImage } from "./motion/reveal-image";
import { RevealTitle } from "./motion/reveal-title";

export function Look04TheTable() {
  return (
    <section
      id="look-04"
      data-look-number="04"
      className="bg-ink relative -mt-6 overflow-hidden pt-4 pb-20 sm:-mt-10 sm:pt-6 sm:pb-28"
    >
      <RevealTitle className="font-display text-paper/25 px-5 text-[5.5rem] leading-none select-none sm:px-8 sm:text-[9rem]">
        04
      </RevealTitle>

      <div className="-mt-6 flex justify-end sm:-mt-10">
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
