import Link from "next/link";
import { Article } from "@/lib/types/blog";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="block bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6 transition hover:-translate-y-0.5"
    >
      {article.coverImage && (
        <div className="mb-4">
          <img src={article.coverImage} alt={article.title} className="w-full h-48 object-cover rounded-lg" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{article.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
      <div className="text-sm text-muted-foreground mb-4">
        {article.publishDate} • {article.readingTime} min read
      </div>
      <span className="text-warm hover:text-warm/80 font-medium">See full post</span>
    </Link>
  );
}
