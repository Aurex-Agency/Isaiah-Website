type LookNumberProps = {
  number: string;
  title: string;
  tag?: string;
  className?: string;
};

export function LookNumber({
  number,
  title,
  tag,
  className = "",
}: LookNumberProps) {
  return (
    <div className={className}>
      <div className="flex items-baseline gap-3">
        <span className="font-display text-denim-light text-sm tabular-nums">
          {number}
        </span>
        <h2 className="font-display text-paper text-2xl sm:text-3xl">
          {title}
        </h2>
      </div>
      {tag && (
        <p className="text-paper/55 mt-1.5 ml-6 font-sans text-xs tracking-[0.15em] uppercase sm:text-sm">
          {tag}
        </p>
      )}
    </div>
  );
}
