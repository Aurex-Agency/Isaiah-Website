import Image from "next/image";

export function ClosingStatement() {
  return (
    <section className="border-line bg-ink border-b">
      <div className="grid sm:grid-cols-2">
        <div className="relative aspect-[4/5] sm:aspect-auto">
          <Image
            src="/images/portrait/about-portrait-bw.jpg"
            alt="Black and white portrait of Isaiah Ball"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover grayscale"
          />
        </div>
        <div className="flex items-center px-5 py-16 sm:px-12 sm:py-0">
          <p className="font-display text-paper max-w-sm text-2xl leading-snug sm:text-3xl">
            Available for brand partnerships, modeling, and creative or local
            projects.
          </p>
        </div>
      </div>
    </section>
  );
}
