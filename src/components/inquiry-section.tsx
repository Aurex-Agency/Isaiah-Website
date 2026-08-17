import { InquiryForm } from "./inquiry-form";

export function InquirySection() {
  return (
    <section id="inquire" className="bg-ink px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-xl">
        <h2 className="font-display text-paper text-4xl sm:text-5xl">
          Work With Isaiah
        </h2>
        <p className="text-paper/60 mt-3 font-sans">
          Brand partnership, modeling booking, or a local project — tell him
          what you&apos;re building.
        </p>
        <div className="mt-10">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
