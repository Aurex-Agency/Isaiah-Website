import Image from "next/image";
import { LookNumber } from "./look-number";
import { RevealImage } from "./motion/reveal-image";

export function Look02AroundTown() {
  return (
    <section
      id="look-02"
      data-look-number="02"
      className="pt-10 pb-16 sm:pt-14 sm:pb-24"
    >
      <div className="px-5 sm:px-8">
        <LookNumber number="02" title="Around Town" className="mb-6 sm:mb-10" />
      </div>

      {/* Mobile: hero full-bleed, then a swipeable pair */}
      <div className="sm:hidden">
        <RevealImage className="aspect-[3/4] w-full">
          <Image
            src="/images/looks/02-around-town/01-hero-quarry-front.jpg"
            alt="Isaiah Ball standing at a rocky quarry in Nashville, facing the camera"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </RevealImage>
        <div
          className="snap-row bg-line mt-px flex gap-px overflow-x-auto"
          tabIndex={0}
          role="group"
          aria-label="More photos from Around Town, scroll to view"
        >
          <div className="bg-ink relative aspect-[3/4] w-[78%] shrink-0">
            <Image
              src="/images/looks/02-around-town/02-quarry-walking.jpg"
              alt="Isaiah Ball walking along the same quarry, side profile"
              fill
              sizes="78vw"
              className="object-cover"
            />
          </div>
          <div className="bg-ink relative aspect-[3/4] w-[78%] shrink-0">
            <Image
              src="/images/looks/02-around-town/03-mural-wall.jpg"
              alt="Isaiah Ball seated in front of a colorful painted mural wall in Nashville"
              fill
              sizes="78vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Desktop: asymmetric column break, large hero left, stacked pair right */}
      <div className="bg-line hidden gap-px sm:grid sm:grid-cols-[1.4fr_1fr]">
        <RevealImage className="aspect-[3/4]">
          <Image
            src="/images/looks/02-around-town/01-hero-quarry-front.jpg"
            alt="Isaiah Ball standing at a rocky quarry in Nashville, facing the camera"
            fill
            sizes="60vw"
            className="object-cover"
          />
        </RevealImage>
        <div className="flex flex-col gap-px">
          <RevealImage delay={0.1} className="aspect-[3/4] flex-1">
            <Image
              src="/images/looks/02-around-town/02-quarry-walking.jpg"
              alt="Isaiah Ball walking along the same quarry, side profile"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </RevealImage>
          <RevealImage delay={0.2} className="aspect-[3/4] flex-1">
            <Image
              src="/images/looks/02-around-town/03-mural-wall.jpg"
              alt="Isaiah Ball seated in front of a colorful painted mural wall in Nashville"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </RevealImage>
        </div>
      </div>
    </section>
  );
}
