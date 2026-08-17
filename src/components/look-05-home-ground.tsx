import Image from "next/image";
import { RevealImage } from "./motion/reveal-image";
import { RevealTitle } from "./motion/reveal-title";

export function Look05HomeGround() {
  return (
    <section
      id="look-05"
      data-look-number="05"
      className="bg-ink py-16 sm:py-24"
    >
      <div className="mb-8 px-5 sm:mb-14 sm:px-8">
        <span className="text-denim-light font-sans text-sm tabular-nums">
          05
        </span>
        <RevealTitle className="font-display text-paper text-3xl sm:text-5xl">
          Home Ground
        </RevealTitle>
        <p className="text-paper/55 mt-4 font-sans text-xs tracking-[0.15em] uppercase sm:text-sm">
          Style With Range
        </p>
        <p className="text-paper/60 mt-3 max-w-md font-sans sm:text-lg">
          Comfortable across a range of aesthetics, from editorial to everyday.
        </p>
      </div>

      {/* Mobile: horizontal swipe carousel, hero receives the mat treatment */}
      <div
        className="snap-row flex items-end gap-5 overflow-x-auto px-5 sm:hidden"
        tabIndex={0}
        role="group"
        aria-label="Photos from Home Ground, scroll to view"
      >
        <RevealImage
          emphasis
          className="bg-paper aspect-[4/5] w-[72%] shrink-0 p-2.5"
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/looks/05-home-ground/01-hero-cabin-door.jpg"
              alt="Isaiah Ball standing in a cabin doorway wearing a quilted vest"
              fill
              sizes="72vw"
              className="object-cover"
            />
          </div>
        </RevealImage>
        <RevealImage delay={0.1} className="aspect-[3/4] w-[52%] shrink-0">
          <Image
            src="/images/looks/05-home-ground/02-cabin-door-alt.jpg"
            alt="Isaiah Ball in the same cabin doorway wearing a cream sweater"
            fill
            sizes="52vw"
            className="object-cover"
          />
        </RevealImage>
        <RevealImage delay={0.18} className="aspect-[3/4] w-[52%] shrink-0">
          <Image
            src="/images/looks/05-home-ground/03-picket-fence.jpg"
            alt="Isaiah Ball leaning on a white picket fence in a garden, wearing a white shirt"
            fill
            sizes="52vw"
            className="object-cover"
          />
        </RevealImage>
      </div>

      {/* Desktop: one image gets the print/mat treatment at larger scale, two supporting images stay small and unframed */}
      <div className="hidden px-8 sm:grid sm:grid-cols-12 sm:items-end sm:gap-6">
        <RevealImage emphasis className="bg-paper col-span-5 aspect-[4/5] p-3">
          <div className="relative h-full w-full">
            <Image
              src="/images/looks/05-home-ground/01-hero-cabin-door.jpg"
              alt="Isaiah Ball standing in a cabin doorway wearing a quilted vest"
              fill
              sizes="35vw"
              className="object-cover"
            />
          </div>
        </RevealImage>
        <RevealImage
          delay={0.12}
          className="col-span-3 col-start-7 mb-6 aspect-[3/4]"
        >
          <Image
            src="/images/looks/05-home-ground/02-cabin-door-alt.jpg"
            alt="Isaiah Ball in the same cabin doorway wearing a cream sweater"
            fill
            sizes="22vw"
            className="object-cover"
          />
        </RevealImage>
        <RevealImage
          delay={0.2}
          className="col-span-3 col-start-10 aspect-[3/4]"
        >
          <Image
            src="/images/looks/05-home-ground/03-picket-fence.jpg"
            alt="Isaiah Ball leaning on a white picket fence in a garden, wearing a white shirt"
            fill
            sizes="22vw"
            className="object-cover"
          />
        </RevealImage>
      </div>
    </section>
  );
}
