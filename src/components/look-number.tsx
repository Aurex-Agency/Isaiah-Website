type LookNumberProps = {
  number: string;
  title: string;
  className?: string;
};

export function LookNumber({ number, title, className = "" }: LookNumberProps) {
  return (
    <div className={`flex items-baseline gap-3 ${className}`}>
      <span className="font-display text-denim-light text-sm tabular-nums">
        {number}
      </span>
      <h2 className="font-display text-paper text-2xl sm:text-3xl">{title}</h2>
    </div>
  );
}
