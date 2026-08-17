"use client";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="from-ink/75 pointer-events-none absolute inset-0 h-28 bg-gradient-to-b to-transparent" />
      <div className="relative flex items-center justify-between px-5 py-5 sm:px-8 sm:py-7">
        <a
          href="#look-01"
          className="font-display text-paper text-lg tracking-wide sm:text-xl"
        >
          Isaiah Ball
        </a>
        <a
          href="#inquire"
          className="border-paper/50 text-paper hover:border-paper border-b font-sans text-base transition-colors sm:text-lg"
        >
          Inquire
        </a>
      </div>
    </header>
  );
}
