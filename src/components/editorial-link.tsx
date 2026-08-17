type EditorialLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

export function EditorialLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: EditorialLinkProps) {
  const sizeClasses =
    variant === "primary"
      ? "font-display text-xl sm:text-2xl"
      : "font-sans text-base sm:text-lg";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group text-paper inline-flex items-center gap-2 ${sizeClasses} ${className}`}
    >
      <span className="relative">
        {children}
        <span className="bg-paper/50 absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-100 transition-transform duration-300 ease-out group-hover:scale-x-0" />
        <span className="bg-paper absolute inset-x-0 -bottom-0.5 h-px origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </span>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5"
      >
        →
      </span>
    </a>
  );
}
