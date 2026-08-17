import Image from "next/image";
import { LookNumber } from "./look-number";

export function Look05HomeGround() {
  return (
    <section
      id="look-05"
      data-look-number="05"
      className="border-line border-b py-16 sm:py-24"
    >
      <div className="px-5 sm:px-8">
        <LookNumber number="05" title="Home Ground" className="mb-8 sm:mb-12" />
      </div>

      {/* Mobile: horizontal swipe carousel */}
      <div
        className="snap-row flex gap-4 overflow-x-auto px-5 sm:hidden"
        tabIndex={0}
        role="group"
        aria-label="Photos from Home Ground, scroll to view"
      >
        <div className="relative aspect-[3/4] w-[70%] shrink-0">
          <Image
            src="/images/looks/05-home-ground/01-hero-cabin-door.jpg"
            alt="Isaiah Ball standing in a cabin doorway wearing a quilted vest"
            fill
            sizes="70vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[3/4] w-[70%] shrink-0">
          <Image
            src="/images/looks/05-home-ground/02-cabin-door-alt.jpg"
            alt="Isaiah Ball in the same cabin doorway wearing a cream sweater"
            fill
            sizes="70vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[3/4] w-[70%] shrink-0">
          <Image
            src="/images/looks/05-home-ground/03-picket-fence.jpg"
            alt="Isaiah Ball leaning on a white picket fence in a garden, wearing a white shirt"
            fill
            sizes="70vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Desktop: staggered triptych, varied offset and crop */}
      <div className="hidden px-8 sm:grid sm:grid-cols-12 sm:gap-6">
        <div className="relative col-span-4 aspect-[3/4]">
          <Image
            src="/images/looks/05-home-ground/01-hero-cabin-door.jpg"
            alt="Isaiah Ball standing in a cabin doorway wearing a quilted vest"
            fill
            sizes="30vw"
            className="object-cover"
          />
        </div>
        <div className="relative col-span-4 col-start-6 mt-16 aspect-[4/5]">
          <Image
            src="/images/looks/05-home-ground/02-cabin-door-alt.jpg"
            alt="Isaiah Ball in the same cabin doorway wearing a cream sweater"
            fill
            sizes="30vw"
            className="object-cover"
          />
        </div>
        <div className="relative col-span-3 col-start-10 aspect-square">
          <Image
            src="/images/looks/05-home-ground/03-picket-fence.jpg"
            alt="Isaiah Ball leaning on a white picket fence in a garden, wearing a white shirt"
            fill
            sizes="22vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
