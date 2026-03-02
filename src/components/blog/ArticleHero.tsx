import { Article } from "@/lib/types/blog";
import { ArticleMeta } from "./ArticleMeta";

interface ArticleHeroProps {
  article: Article;
}

export function ArticleHero({ article }: ArticleHeroProps) {
  return (
    <div className="border-b border-border/60 bg-gradient-to-br from-sky-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pb-16 pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          {article.coverImage && (
            <div className="mb-8">
              <img
                src={article.coverImage}
                alt={article.title}
                className="mx-auto h-auto w-full max-w-2xl rounded-lg shadow-lg"
              />
            </div>
          )}
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {article.title}
          </h1>
          <ArticleMeta article={article} />
        </div>
      </div>
    </div>
  );
}
