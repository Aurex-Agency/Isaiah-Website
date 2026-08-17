import Image from "next/image";
import { LookNumber } from "./look-number";

export function Look04TheTable() {
  return (
    <section
      id="look-04"
      data-look-number="04"
      className="border-line bg-ink border-b py-16 sm:py-24"
    >
      <div className="px-5 sm:px-8">
        <LookNumber number="04" title="The Table" className="mb-8 sm:mb-12" />
      </div>
      <div className="relative mx-auto aspect-[4/5] w-full max-w-2xl sm:aspect-[16/10]">
        <Image
          src="/images/looks/04-the-table/01-hero-vintage-table.jpg"
          alt="Isaiah Ball seated at a vintage garden table styled with glassware and dried florals, wearing a blazer"
          fill
          sizes="(min-width: 640px) 60vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
