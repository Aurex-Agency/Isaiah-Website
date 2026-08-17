import { EditorialLink } from "./editorial-link";
import { AnimatedMetric } from "./motion/animated-metric";
import { RevealTitle } from "./motion/reveal-title";

// -----------------------------------------------------------------------
// DEMO DATA ONLY. Isaiah's real follower counts, engagement rate, and
// view figures have not been verified yet. These values exist purely so
// the metric-reveal animation can be designed and reviewed — they are
// NOT his real statistics and must not ship to production. Replace with
// verified numbers (or remove the metrics entirely) before launch. See
// AUREX-STATUS.md for exactly what's needed from Isaiah.
// -----------------------------------------------------------------------
const PLATFORMS = [
  {
    name: "Instagram",
    handle: "@_.isaiahball",
    href: "https://www.instagram.com/_.isaiahball/",
    metrics: [
      { label: "Followers", value: "12.8K" },
      { label: "Engagement", value: "8.4%" },
    ],
  },
  {
    name: "TikTok",
    handle: "@_isaiahball",
    href: "https://www.tiktok.com/@_isaiahball",
    metrics: [
      { label: "Followers", value: "6.2K" },
      { label: "30-Day Views", value: "428K" },
    ],
  },
];

export function SocialPresence() {
  return (
    <section
      id="social"
      className="border-line bg-ink scroll-mt-20 overflow-hidden border-y py-24 sm:scroll-mt-24 sm:py-40"
    >
      <div className="px-5 sm:px-8">
        <RevealTitle className="font-display text-paper text-[3.5rem] leading-[0.85] sm:text-[7rem] lg:text-[9rem]">
          Social
        </RevealTitle>
        <RevealTitle
          delay={0.1}
          className="font-display text-paper/45 text-[3.5rem] leading-[0.85] sm:text-[7rem] lg:text-[9rem]"
        >
          Presence
        </RevealTitle>
      </div>

      <p className="text-paper/70 mt-8 max-w-md px-5 font-sans sm:mt-14 sm:px-8 sm:text-lg">
        Fashion, lifestyle and personality-led content across short-form social
        platforms. Nashville based. Available for brand partnerships and UGC.
      </p>

      <div className="mt-16 grid gap-12 px-5 sm:mt-24 sm:grid-cols-2 sm:gap-8 sm:px-8">
        {PLATFORMS.map((platform) => (
          <div key={platform.name} className="border-line border-t pt-8">
            <RevealTitle className="font-display text-paper text-3xl sm:text-5xl">
              {platform.name}
            </RevealTitle>
            <div className="mt-3">
              <EditorialLink href={platform.href} external variant="secondary">
                {platform.handle}
              </EditorialLink>
            </div>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-10">
              {platform.metrics.map((metric) => (
                <div key={metric.label}>
                  <AnimatedMetric
                    value={metric.value}
                    className="font-display text-paper text-6xl tabular-nums sm:text-4xl"
                  />
                  <p className="text-paper/55 mt-2 font-sans text-xs tracking-[0.1em] uppercase">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-paper/55 mt-12 px-5 font-sans text-xs sm:px-8">
        Metrics shown are placeholder demo values for design review only,
        pending Isaiah&apos;s verified figures.
      </p>
    </section>
  );
}
