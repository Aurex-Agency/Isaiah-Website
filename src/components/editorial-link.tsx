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
  const isPrimary = variant === "primary";
  const sizeClasses = isPrimary
    ? "font-display text-2xl sm:text-3xl"
    : "font-sans text-base sm:text-lg";
  const colorClasses = isPrimary
    ? "text-paper transition-colors duration-300 group-hover:text-denim-light"
    : "text-paper/85";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center gap-2.5 ${sizeClasses} ${colorClasses} ${className}`}
    >
      <span className="relative">
        {children}
        <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-100 bg-current opacity-40 transition-transform duration-300 ease-out group-hover:scale-x-0" />
        <span className="absolute inset-x-0 -bottom-0.5 h-px origin-right scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
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
