import Image from "next/image";
import { InquiryForm } from "./inquiry-form";
import { RevealImage } from "./motion/reveal-image";
import { RevealTitle } from "./motion/reveal-title";

const AVAILABLE_FOR = ["Brand Partnerships", "Modeling", "Creative Projects"];

export function InquiryFinale() {
  return (
    <section id="inquire" className="bg-ink scroll-mt-20 sm:scroll-mt-24">
      <div className="grid sm:grid-cols-2">
        <RevealImage className="relative aspect-[4/5] sm:aspect-auto">
          <Image
            src="/images/portrait/about-portrait-bw.jpg"
            alt="Black and white portrait of Isaiah Ball"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover grayscale"
          />
        </RevealImage>

        <div className="flex flex-col justify-center px-5 py-16 sm:px-12 sm:py-20">
          <RevealTitle className="font-display text-paper text-4xl leading-none sm:text-6xl">
            Let&apos;s Make Something.
          </RevealTitle>
          <p className="text-paper/50 mt-8 font-sans text-sm tracking-[0.2em] uppercase">
            Available For
          </p>
          <ul className="font-display text-paper mt-4 text-3xl leading-tight sm:text-5xl">
            {AVAILABLE_FOR.map((item) => (
              <li key={item}>
                <RevealTitle>{item}</RevealTitle>
              </li>
            ))}
          </ul>
          <div className="text-paper/60 mt-6 font-sans text-sm sm:text-base">
            <p>Based in Nashville</p>
            <p>Available for select projects and travel</p>
          </div>

          <div className="mt-12">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
