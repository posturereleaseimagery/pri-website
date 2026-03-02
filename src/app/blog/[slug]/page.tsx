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
