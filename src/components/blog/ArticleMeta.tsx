import { Clock } from "lucide-react";
import { Article } from "@/lib/types/blog";
import { TagPill } from "../blog/TagPill";

interface ArticleMetaProps {
  article: Article;
}

export function ArticleMeta({ article }: ArticleMetaProps) {
  const getOrdinal = (n: number) => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  const date = new Date(article.publishDate);
  const day = date.getDate();
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).replace(/\d+/, `${day}${getOrdinal(day)}`);

  return (
    <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <time dateTime={article.publishDate}>
          {formattedDate}
        </time>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {article.readingTime} min read
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {article.tags.map((tag) => (
          <TagPill key={tag} tag={tag} href={`/blog/tag/${tag}`} />
        ))}
      </div>
    </div>
  );
}
