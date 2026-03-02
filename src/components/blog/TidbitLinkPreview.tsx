import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface TidbitLinkPreviewProps {
  url: string;
  title: string;
}

export function TidbitLinkPreview({ url, title }: TidbitLinkPreviewProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-card px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      <span className="font-medium">{title}</span>
      <ExternalLink className="h-3 w-3" />
    </Link>
  );
}
