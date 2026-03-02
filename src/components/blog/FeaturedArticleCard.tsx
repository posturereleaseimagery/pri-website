import Link from "next/link";
import { Clock } from "lucide-react";
import { Article } from "@/lib/types/blog";
import { TagPill } from "./TagPill";

interface FeaturedArticleCardProps {
  article: Article;
}

export function FeaturedArticleCard({ article }: FeaturedArticleCardProps) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block overflow-hidden rounded-xl border border-border/60 bg-card shadow-xl transition-all hover:border-warm/40 hover:shadow-md"
    >
      {article.coverImage && (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={article.coverImage}
            alt={article.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full bg-warm/10 px-2.5 py-0.5 text-xs font-medium text-warm">
            Featured
          </span>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {article.readingTime} min read
          </div>
        </div>
        <h3 className="text-xl font-semibold text-foreground group-hover:text-warm transition-colors">
          {article.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {article.excerpt}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {article.tags.slice(0, 3).map((tag) => (
            <TagPill key={tag} tag={tag} variant="small" />
          ))}
        </div>
        <div className="mt-4 text-xs text-muted-foreground">
          {new Date(article.publishDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>
    </Link>
  );
}
