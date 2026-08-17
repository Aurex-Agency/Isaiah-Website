import Image from "next/image";
import { EditorialLink } from "./editorial-link";
import { ParallaxImage } from "./motion/parallax-image";
import { RevealImage } from "./motion/reveal-image";

export function Look01Studio() {
  return (
    <section id="look-01" data-look-number="01" className="relative">
      <div className="relative h-[92vh] min-h-[620px] w-full">
        <ParallaxImage strength={5} className="h-full w-full">
          <Image
            src="/images/looks/01-studio/01-hero-wide-establishing.jpg"
            alt="Isaiah Ball seated on a stool under stage lighting during a studio shoot, full lighting rig visible in frame"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%]"
          />
        </ParallaxImage>
        <div className="from-ink/85 via-ink/15 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />
        <div className="absolute inset-x-5 bottom-10 sm:inset-x-8 sm:bottom-14 lg:max-w-xl">
          <p className="text-denim-light mb-3 font-sans text-xs tracking-[0.2em] uppercase sm:text-sm">
            Campaign Ready
          </p>
          <h1 className="font-display text-paper text-5xl leading-[0.95] sm:text-7xl">
            Isaiah Ball
          </h1>
          <ul className="text-paper/85 mt-4 flex flex-wrap gap-x-3 gap-y-1 font-sans text-base sm:text-lg">
            <li>Fashion Creator</li>
            <li aria-hidden="true" className="text-paper/40">
              /
            </li>
            <li>Model</li>
            <li aria-hidden="true" className="text-paper/40">
              /
            </li>
            <li>Creative Partner</li>
          </ul>
          <p className="text-paper/60 mt-3 font-sans text-sm sm:text-base">
            Nashville based
            <br />
            Available for campaigns, collaborations and travel
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
            <EditorialLink href="#inquire" variant="primary">
              Work With Isaiah
            </EditorialLink>
            <EditorialLink href="#social" variant="secondary">
              View Socials
            </EditorialLink>
          </div>
        </div>
      </div>

      <div className="bg-line grid grid-cols-2 gap-px sm:grid-cols-[1.1fr_1fr]">
        <RevealImage delay={0.05} className="bg-ink aspect-[2/3] sm:mt-10">
          <Image
            src="/images/looks/01-studio/02-seated-three-quarter.jpg"
            alt="Isaiah Ball seated on a stool in three-quarter view, studio lighting"
            fill
            priority
            sizes="(min-width: 640px) 50vw, 50vw"
            className="object-cover"
          />
        </RevealImage>
        <RevealImage delay={0.18} className="bg-ink aspect-[2/3] sm:mb-10">
          <Image
            src="/images/looks/01-studio/03-standing-front.jpg"
            alt="Isaiah Ball standing, facing the camera directly, studio backdrop"
            fill
            priority
            sizes="(min-width: 640px) 50vw, 50vw"
            className="object-cover"
          />
        </RevealImage>
      </div>
    </section>
  );
}
