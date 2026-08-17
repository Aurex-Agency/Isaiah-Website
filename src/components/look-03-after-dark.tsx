import Image from "next/image";
import { LookNumber } from "./look-number";

export function Look03AfterDark() {
  return (
    <section
      id="look-03"
      data-look-number="03"
      className="border-line bg-ink border-b py-16 sm:py-24"
    >
      <div className="px-5 sm:px-8">
        <LookNumber number="03" title="After Dark" className="mb-8 sm:mb-12" />
      </div>

      {/* Mobile: varied-height vertical sequence, not four uniform crops */}
      <div className="bg-line flex flex-col gap-px sm:hidden">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src="/images/looks/03-after-dark/01-hero-columns-standing.jpg"
            alt="Isaiah Ball standing beneath a row of illuminated concrete columns at night"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-px">
          <div className="relative aspect-square">
            <Image
              src="/images/looks/03-after-dark/02-columns-walking.jpg"
              alt="Isaiah Ball walking through the same lit column venue at night"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/images/looks/03-after-dark/03-plaza-bench.jpg"
              alt="Isaiah Ball seated on a bench in a lit plaza at night, string lights overhead"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative aspect-[16/10] w-full">
          <Image
            src="/images/looks/03-after-dark/04-garden-path.jpg"
            alt="Isaiah Ball walking a lit brick garden path at night"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Desktop: asymmetric spread with varied scale and an edge-bleeding fourth image */}
      <div className="hidden sm:block">
        <div className="bg-line grid grid-cols-12 gap-px pl-8">
          <div className="relative col-span-7 aspect-[4/5]">
            <Image
              src="/images/looks/03-after-dark/01-hero-columns-standing.jpg"
              alt="Isaiah Ball standing beneath a row of illuminated concrete columns at night"
              fill
              sizes="58vw"
              className="object-cover"
            />
          </div>
          <div className="col-span-5 flex flex-col gap-px">
            <div className="relative aspect-square">
              <Image
                src="/images/looks/03-after-dark/02-columns-walking.jpg"
                alt="Isaiah Ball walking through the same lit column venue at night"
                fill
                sizes="35vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] flex-1">
              <Image
                src="/images/looks/03-after-dark/03-plaza-bench.jpg"
                alt="Isaiah Ball seated on a bench in a lit plaza at night, string lights overhead"
                fill
                sizes="35vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="relative mt-px aspect-[21/9] w-[92%] sm:mr-[-6vw] lg:mr-[-8vw]">
          <Image
            src="/images/looks/03-after-dark/04-garden-path.jpg"
            alt="Isaiah Ball walking a lit brick garden path at night"
            fill
            sizes="92vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
