import { EditorialLink } from "./editorial-link";

type MidPageCtaProps = {
  prompt: string;
  label: string;
};

export function MidPageCta({ prompt, label }: MidPageCtaProps) {
  return (
    <div className="border-line bg-ink border-y px-5 py-14 sm:px-8 sm:py-20">
      <p className="text-paper/50 font-sans sm:text-lg">{prompt}</p>
      <div className="mt-3">
        <EditorialLink href="#inquire">{label}</EditorialLink>
      </div>
    </div>
  );
}
