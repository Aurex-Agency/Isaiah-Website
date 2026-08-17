import Image from "next/image";
import { ParallaxImage } from "./motion/parallax-image";
import { RevealImage } from "./motion/reveal-image";
import { RevealTitle } from "./motion/reveal-title";

export function Look06Away() {
  return (
    <section
      id="look-06"
      data-look-number="06"
      className="bg-ink -mt-4 pt-16 pb-16 sm:-mt-8 sm:pt-24 sm:pb-24"
    >
      <div className="px-5 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-12 sm:items-start sm:gap-10">
          <div className="relative sm:col-span-5">
            <ParallaxImage
              strength={5}
              className="aspect-[3/4] sm:aspect-[9/16]"
            >
              <Image
                src="/images/looks/06-away/01-hero-boston.jpg"
                alt="Isaiah Ball standing in a brick square in Boston, wearing a knit polo and cap, surrounded by trees and historic architecture"
                fill
                sizes="(min-width: 640px) 42vw, 100vw"
                className="object-cover object-[center_20%] sm:object-center"
              />
            </ParallaxImage>
            <div className="from-ink/70 pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
              <span className="text-paper/70 block font-sans text-sm tabular-nums">
                06
              </span>
              <RevealTitle className="font-display text-paper text-3xl sm:text-4xl">
                Away
              </RevealTitle>
            </div>
          </div>

          {/* Supporting images: asymmetric, airy, not a tight cluster */}
          <div className="flex flex-col gap-10 sm:col-span-6 sm:col-start-7 sm:gap-16 sm:pt-10">
            <div className="grid grid-cols-2 gap-5 sm:gap-8">
              <RevealImage delay={0.08} className="aspect-[3/4]">
                <Image
                  src="/images/looks/06-away/02-nyc-mailbox.jpg"
                  alt="Isaiah Ball beside a historic red mailbox on a New York City street"
                  fill
                  sizes="(min-width: 640px) 24vw, 45vw"
                  className="object-cover"
                />
              </RevealImage>
              <RevealImage delay={0.16} className="mt-8 aspect-[3/4] sm:mt-14">
                <Image
                  src="/images/looks/06-away/03-graffiti-wall.jpg"
                  alt="Isaiah Ball walking past a colorful graffiti-covered brick wall"
                  fill
                  sizes="(min-width: 640px) 24vw, 45vw"
                  className="object-cover"
                />
              </RevealImage>
            </div>
            <RevealImage
              delay={0.22}
              className="aspect-[3/4] w-[62%] self-end sm:w-[52%]"
            >
              <Image
                src="/images/looks/06-away/04-ivy-garden-film.jpg"
                alt="Isaiah Ball in front of an ivy-covered building, shot on film"
                fill
                sizes="(min-width: 640px) 22vw, 62vw"
                className="object-cover"
              />
            </RevealImage>
          </div>
        </div>
      </div>
    </section>
  );
}
