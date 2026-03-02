import { Article } from "@/lib/types/blog";

interface ArticleBodyProps {
  article: Article;
}

export function ArticleBody({ article }: ArticleBodyProps) {
  // Strip HTML tags and preserve line breaks
  const cleanContent = article.content
    .replace(/<\/p>\s*<p>/g, '\n\n')
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '');

  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div style={{ whiteSpace: 'pre-wrap' }} className="leading-relaxed">
          {cleanContent}
        </div>
      </div>
    </div>
  );
}
