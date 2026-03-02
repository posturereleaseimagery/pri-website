import { notFound } from "next/navigation";
import Link from "next/link";
import { ArticleHero } from "@/components/blog/ArticleHero";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { findArticleBySlug, getAllArticleSlugs, getAllBlogArticles } from "@/lib/blog-posts";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const article = await findArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  const allArticles = await getAllBlogArticles();
  const sortedArticles = allArticles.sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  const currentIndex = sortedArticles.findIndex(a => a.slug === slug);
  const prevArticle = currentIndex > 0 ? sortedArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < sortedArticles.length - 1 ? sortedArticles[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      <ArticleHero article={article} />
      <ArticleBody article={article} className="w-full rounded-md mb-2" />
      {article.attachments && article.attachments.length > 0 && (
        <div className="mx-auto max-w-4xl px-4 py-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Attachments</h2>
          <ul className="space-y-3">
            {article.attachments.map((attachment) => (
              <li key={attachment.url} className="flex items-center justify-between rounded border border-border/60 bg-card p-3">
                <span className="text-sm text-gray-700 dark:text-gray-200">
                  {attachment.label || attachment.url.split('/').pop()} ({attachment.mediaType})
                </span>
                <a
                  href={attachment.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-warm font-medium underline-offset-2 hover:underline"
                >
                  Download
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="text-center">
          {prevArticle && <Link href={`/blog/${prevArticle.slug}`} className="text-warm hover:text-warm/80">← Previous: {prevArticle.title}</Link>}
          {prevArticle && ' | '}
          <Link href="/blog/articles" className="text-warm hover:text-warm/80">Back to Articles</Link>
          {nextArticle && ' | '}
          {nextArticle && <Link href={`/blog/${nextArticle.slug}`} className="text-warm hover:text-warm/80">Next: {nextArticle.title} →</Link>}
        </div>
      </div>
    </div>
  );
}

// Generate static params for all posts
export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map(slug => ({ slug }));
}
