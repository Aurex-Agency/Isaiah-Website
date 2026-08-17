import Image from "next/image";
import { LookNumber } from "./look-number";

export function Look06Away() {
  return (
    <section
      id="look-06"
      data-look-number="06"
      className="border-line bg-ink border-b py-16 sm:py-24"
    >
      <div className="px-5 sm:px-8">
        <LookNumber number="06" title="Away" className="mb-8 sm:mb-12" />
      </div>

      <div className="relative aspect-[4/5] w-full sm:aspect-[16/9]">
        <Image
          src="/images/looks/06-away/01-hero-boston.jpg"
          alt="Isaiah Ball standing in a brick square in Boston, wearing a knit polo and cap"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Mobile: swipe strip */}
      <div
        className="snap-row mt-4 flex gap-4 overflow-x-auto px-5 sm:hidden"
        tabIndex={0}
        role="group"
        aria-label="More photos from Away, scroll to view"
      >
        <div className="relative aspect-[3/4] w-[65%] shrink-0">
          <Image
            src="/images/looks/06-away/02-nyc-mailbox.jpg"
            alt="Isaiah Ball beside a historic red mailbox on a New York City street"
            fill
            sizes="65vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[3/4] w-[65%] shrink-0">
          <Image
            src="/images/looks/06-away/03-graffiti-wall.jpg"
            alt="Isaiah Ball walking past a colorful graffiti-covered brick wall"
            fill
            sizes="65vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[3/4] w-[65%] shrink-0">
          <Image
            src="/images/looks/06-away/04-ivy-garden-film.jpg"
            alt="Isaiah Ball in front of an ivy-covered building, shot on film"
            fill
            sizes="65vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Desktop: loose asymmetric cluster, subtle offset */}
      <div className="hidden gap-6 px-8 pt-8 sm:grid sm:grid-cols-12">
        <div className="relative col-span-3 col-start-2 aspect-[3/4] sm:-rotate-1">
          <Image
            src="/images/looks/06-away/02-nyc-mailbox.jpg"
            alt="Isaiah Ball beside a historic red mailbox on a New York City street"
            fill
            sizes="24vw"
            className="object-cover"
          />
        </div>
        <div className="relative col-span-3 col-start-6 mt-10 aspect-[3/4] sm:rotate-1">
          <Image
            src="/images/looks/06-away/03-graffiti-wall.jpg"
            alt="Isaiah Ball walking past a colorful graffiti-covered brick wall"
            fill
            sizes="24vw"
            className="object-cover"
          />
        </div>
        <div className="relative col-span-3 col-start-10 aspect-[3/4]">
          <Image
            src="/images/looks/06-away/04-ivy-garden-film.jpg"
            alt="Isaiah Ball in front of an ivy-covered building, shot on film"
            fill
            sizes="24vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
