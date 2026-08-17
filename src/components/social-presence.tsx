import { EditorialLink } from "./editorial-link";
import { RevealTitle } from "./motion/reveal-title";

// Follower counts, engagement rate, and other metrics are intentionally
// omitted until verified directly from Isaiah — see AUREX-STATUS.md.
// A stats row can be added here once real numbers exist; do not fill
// this with placeholder figures in the meantime.
const PLATFORMS = [
  {
    name: "Instagram",
    handle: "@_.isaiahball",
    href: "https://www.instagram.com/_.isaiahball/",
  },
  {
    name: "TikTok",
    handle: "@_isaiahball",
    href: "https://www.tiktok.com/@_isaiahball",
  },
];

export function SocialPresence() {
  return (
    <section
      id="social"
      className="border-line bg-ink scroll-mt-20 border-y px-5 py-24 sm:scroll-mt-24 sm:px-8 sm:py-36"
    >
      <div className="grid gap-10 sm:grid-cols-12 sm:gap-6">
        <div className="sm:col-span-5">
          <p className="text-paper/50 font-sans text-sm tracking-[0.2em] uppercase">
            Social Presence
          </p>
          <p className="font-display text-paper mt-6 max-w-sm text-2xl leading-snug sm:text-3xl">
            Fashion, lifestyle and personality-led content across short-form
            social platforms.
          </p>
          <p className="text-paper/60 mt-6 font-sans">
            Nashville based. Growing audience. Available for brand partnerships
            and UGC.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-8 sm:col-span-6 sm:col-start-7">
          {PLATFORMS.map((platform) => (
            <div key={platform.name} className="border-line border-b pb-8">
              <RevealTitle className="font-display text-paper text-4xl sm:text-6xl">
                {platform.name}
              </RevealTitle>
              <div className="mt-3">
                <EditorialLink
                  href={platform.href}
                  external
                  variant="secondary"
                >
                  {platform.handle}
                </EditorialLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
