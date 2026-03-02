import Link from "next/link";

interface TagPillProps {
  tag: string;
  href?: string;
  variant?: "default" | "small";
}

export function TagPill({ tag, href, variant = "default" }: TagPillProps) {
  const baseClasses = "inline-block rounded-full bg-warm/10 text-warm transition-colors hover:bg-warm/20";
  const sizeClasses = variant === "small"
    ? "px-2.5 py-0.5 text-xs font-medium"
    : "px-3 py-1 text-sm font-medium";

  const content = (
    <span className={`${baseClasses} ${sizeClasses}`}>
      {tag}
    </span>
  );

  if (href) {
    return (
      <Link href={href}>
        {content}
      </Link>
    );
  }

  return content;
}
