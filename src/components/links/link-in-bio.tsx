"use client";

import Image from "next/image";
import {
  MotionConfig,
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { useRef, type ComponentType, type SVGProps } from "react";
import { useSafeReducedMotion } from "@/components/motion/use-safe-reduced-motion";
import { CopyEmailButton } from "./copy-email-button";
import { ArrowUpRightIcon, InstagramIcon, MailIcon, TikTokIcon } from "./icons";

// ---------------------------------------------------------------------------
// Content. Edit here to change what the link page shows.
// ---------------------------------------------------------------------------
const EMAIL = "isaiahball2020@gmail.com";

const PORTRAIT = {
  src: "/images/looks/03-after-dark/01-hero-columns-standing.jpg",
  alt: "Isaiah Ball at night between rows of warmly lit concrete columns, wearing a cream cap, white shirt, and a yellow knit sweater over his shoulders",
};

const COLLAB_SUBJECT = "Collab inquiry for Isaiah";

const COLLAB_BODY = [
  "Hi Isaiah,",
  "",
  "I'd love to work with you.",
  "",
  "Name:",
  "Brand / company:",
  "Project type (brand partnership, modeling, creative project):",
  "What we have in mind:",
  "Timeline:",
  "Budget:",
  "",
  "Thanks!",
].join("\r\n");

const COLLAB_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent(
  COLLAB_SUBJECT,
)}&body=${encodeURIComponent(COLLAB_BODY)}`;

type Social = {
  name: string;
  handle: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const SOCIALS: Social[] = [
  {
    name: "Instagram",
    handle: "@_.isaiahball",
    href: "https://www.instagram.com/_.isaiahball/",
    Icon: InstagramIcon,
  },
  {
    name: "TikTok",
    handle: "@_isaiahball",
    href: "https://www.tiktok.com/@_isaiahball",
    Icon: TikTokIcon,
  },
];

// ---------------------------------------------------------------------------

const EASE = [0.22, 1, 0.36, 1] as const;

// Every element that animates in carries the `links-reveal` class. For
// visitors who prefer reduced motion, globals.css pins those elements to
// their final state, so content is there at first paint with no fade,
// stagger, or wait on JavaScript.
const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE },
  }),
};

const fade: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay, ease: EASE },
  }),
};

export function LinkInBio() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative isolate flex min-h-svh flex-1 flex-col">
        <AmbientBackdrop />

        <motion.div
          initial="hidden"
          animate="visible"
          className="sm:border-paper/10 sm:bg-ink/35 relative mx-auto flex w-full max-w-[440px] flex-1 flex-col sm:my-12 sm:flex-none sm:border sm:shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)] sm:backdrop-blur-2xl"
        >
          <Hero />

          <section
            aria-label="Links"
            className="relative z-10 flex flex-col gap-3 px-4 sm:px-5"
          >
            <CollabCard />
            <ul className="grid grid-cols-2 gap-3">
              {SOCIALS.map((social, i) => (
                <motion.li
                  key={social.name}
                  variants={rise}
                  custom={0.58 + i * 0.07}
                  className="links-reveal"
                >
                  <SocialTile {...social} />
                </motion.li>
              ))}
            </ul>
          </section>

          <motion.footer
            variants={fade}
            custom={0.85}
            className="links-reveal text-paper/60 mt-auto flex items-center justify-between gap-4 px-5 pt-10 pb-[max(1.75rem,env(safe-area-inset-bottom))] font-sans text-[0.6875rem] tracking-[0.18em] uppercase sm:pt-12"
          >
            <span>© {new Date().getFullYear()} Isaiah Ball</span>
            <span>Nashville, TN</span>
          </motion.footer>
        </motion.div>
      </main>
    </MotionConfig>
  );
}

/** The portrait, blurred to a warm glow behind everything, so the page's
 * colour comes from the photo itself rather than an invented gradient. */
function AmbientBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <Image
        src={PORTRAIT.src}
        alt=""
        fill
        sizes="96px"
        className="scale-125 object-cover opacity-70 blur-3xl saturate-150"
      />
      <div className="from-ink/30 via-ink/70 to-ink absolute inset-0 bg-gradient-to-b" />
      <div className="links-grain absolute inset-0 opacity-[0.07] mix-blend-overlay" />
    </div>
  );
}

function Hero() {
  const reduce = useSafeReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <header
      ref={ref}
      className="relative h-[clamp(340px,50svh,540px)] overflow-hidden"
    >
      {/* Photo dissolves into the ambient backdrop instead of ending on a
          hard edge, so the hero and the links read as one surface. */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_45%,transparent_98%)]">
        <motion.div
          className="absolute inset-0"
          style={reduce ? undefined : { y: imageY }}
        >
          <motion.div
            className="links-reveal absolute inset-0"
            initial={{ scale: 1.14, filter: "brightness(0.55)" }}
            animate={{ scale: 1, filter: "brightness(1)" }}
            transition={{ duration: 1.8, ease: EASE }}
          >
            <Image
              src={PORTRAIT.src}
              alt={PORTRAIT.alt}
              fill
              preload
              sizes="(min-width: 640px) 440px, 100vw"
              className="object-cover object-[center_30%]"
            />
          </motion.div>
        </motion.div>
        {/* Functional scrim for legibility of the name over the photo. */}
        <div className="from-ink/85 via-ink/40 pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t to-transparent" />
      </div>

      <div className="from-ink/70 pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b to-transparent" />

      <motion.div
        variants={fade}
        custom={0.1}
        className="links-reveal absolute inset-x-5 top-5 flex items-center justify-between font-sans text-[0.6875rem] tracking-[0.2em] uppercase"
      >
        <span className="text-paper/80">Nashville, TN</span>
        <span className="text-paper flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#9fd49b] opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-[#9fd49b]" />
          </span>
          Open to collabs
        </span>
      </motion.div>

      <div className="absolute inset-x-5 bottom-5">
        <motion.p
          variants={rise}
          custom={0.15}
          className="links-reveal text-paper/80 font-sans text-xs tracking-[0.22em] uppercase"
        >
          Fashion Creator <span className="text-paper/45">/</span> Model
        </motion.p>
        <h1 className="font-display text-paper mt-2 text-[clamp(3rem,15vw,4.1rem)] leading-none tracking-[-0.02em]">
          <span className="sr-only">Isaiah Ball</span>
          <SplitText text="Isaiah Ball" delay={0.2} />
        </h1>
      </div>
    </header>
  );
}

/** Letter-by-letter masked rise for the name. */
function SplitText({ text, delay }: { text: string; delay: number }) {
  return (
    <span
      aria-hidden="true"
      className="-my-[0.08em] block overflow-hidden py-[0.08em]"
    >
      {Array.from(text).map((char, i) =>
        char === " " ? (
          <span key={i} className="inline-block w-[0.24em]" />
        ) : (
          <motion.span
            key={i}
            className="links-reveal inline-block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.035,
              ease: EASE,
            }}
          >
            {char}
          </motion.span>
        ),
      )}
    </span>
  );
}

function CollabCard() {
  return (
    <motion.div
      variants={rise}
      custom={0.45}
      className="links-reveal bg-paper text-ink relative overflow-hidden"
    >
      <motion.a
        href={COLLAB_HREF}
        whileTap={{ scale: 0.985 }}
        className="group/collab focus-visible:outline-ink relative block px-5 pt-4 pb-5 [-webkit-tap-highlight-color:transparent] focus-visible:outline-2 focus-visible:-outline-offset-4"
      >
        <span aria-hidden="true" className="links-sheen" />

        <span className="text-ink/70 relative flex items-center gap-2 font-sans text-[0.6875rem] tracking-[0.2em] uppercase">
          <MailIcon className="size-3.5" />
          Brands &amp; creatives
        </span>

        <span className="relative mt-3 flex items-end justify-between gap-4">
          <span className="min-w-0">
            <span className="font-display block text-[clamp(1.6rem,8.4vw,2.15rem)] leading-[0.95] tracking-[-0.01em] whitespace-nowrap">
              Collab With Me
            </span>
            <span className="text-ink/65 mt-2 block font-sans text-sm leading-snug">
              Brand partnerships, modeling and creative projects
            </span>
          </span>
          <span className="bg-ink text-paper group-hover/collab:bg-rust grid size-11 shrink-0 place-items-center rounded-full transition-colors duration-300">
            <ArrowUpRightIcon className="size-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/collab:rotate-45" />
          </span>
        </span>
      </motion.a>

      <div className="border-ink/10 relative border-t">
        <CopyEmailButton email={EMAIL} />
      </div>
    </motion.div>
  );
}

function SocialTile({ name, handle, href, Icon }: Social) {
  return (
    <motion.a
      href={href}
      whileTap={{ scale: 0.97 }}
      className="group/tile border-paper/15 bg-ink/45 focus-visible:outline-paper active:bg-paper/10 relative flex h-full flex-col overflow-hidden border p-4 backdrop-blur-md [-webkit-tap-highlight-color:transparent] focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {/* Paper fill that wipes in on hover (pointer devices only). */}
      <span
        aria-hidden="true"
        className="bg-paper absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/tile:scale-y-100"
      />

      <span className="relative flex items-start justify-between">
        <Icon className="text-paper group-hover/tile:text-ink size-6 transition-colors duration-300" />
        <ArrowUpRightIcon className="text-paper/60 group-hover/tile:text-ink size-[18px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/tile:translate-x-0.5 group-hover/tile:-translate-y-0.5" />
      </span>

      <span className="relative mt-6 block">
        <span className="font-display text-paper group-hover/tile:text-ink block text-[1.6rem] leading-none transition-colors duration-300">
          {name}
        </span>
        <span className="text-paper/65 group-hover/tile:text-ink/65 mt-1.5 block truncate font-sans text-[0.8125rem] transition-colors duration-300">
          {handle}
        </span>
      </span>
    </motion.a>
  );
}
