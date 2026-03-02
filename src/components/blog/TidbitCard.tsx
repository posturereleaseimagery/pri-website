import { Tidbit } from "@/lib/types/blog";
import Link from "next/link";
import { TagPill } from "./TagPill";

interface TidbitCardProps {
  tidbit: Tidbit;
}

export function TidbitCard({ tidbit }: TidbitCardProps) {
  const hasImage = tidbit.imageUrl;
  const imageUrl = hasImage ? tidbit.imageUrl : null;

  return (
    <Link
      href={`/blog/tidbits/${tidbit.id}`}
      className="block rounded-lg border border-border/60 bg-card p-4 shadow-sm transition hover:-translate-y-0.5"
    >
      {hasImage && (
        <div className="mb-3">
          <img
            src={imageUrl!}
            alt="Tidbit illustration"
            className="w-full h-32 object-cover rounded-md"
          />
        </div>
      )}

      <p className="text-sm leading-relaxed text-foreground">
        {tidbit.text}
      </p>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {(tidbit.tags || []).slice(0, 2).map((tag) => (
            <TagPill key={tag} tag={tag} variant="small" href={`/blog/tag/${tag}`} />
          ))}
        </div>
        <div className="text-xs text-muted-foreground">
          {new Date(tidbit.publishDate).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
          })}
        </div>
      </div>
      <div className="mt-3 text-warm font-medium">See full post →</div>
    </Link>
  );
}
