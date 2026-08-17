"use client";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="from-ink/70 pointer-events-none absolute inset-0 h-24 bg-gradient-to-b to-transparent" />
      <div className="relative flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <a
          href="#look-01"
          className="font-display text-paper text-sm tracking-wide"
        >
          Isaiah Ball
        </a>
        <a
          href="#inquire"
          className="border-paper/40 text-paper hover:border-paper border-b font-sans text-sm transition-colors"
        >
          Inquire
        </a>
      </div>
    </header>
  );
}
