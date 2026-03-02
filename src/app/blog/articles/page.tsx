import Link from "next/link";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { FeaturedArticleCard } from "@/components/blog/FeaturedArticleCard";
import { getAllBlogArticles } from "@/lib/blog-posts";

export default async function ArticlesPage() {
  const sortedArticles = (await getAllBlogArticles()).sort((a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <BlogHeader
        title="Featured Articles"
        subtitle="Longform essays exploring Posture Release Imagery, evolutionary posture, and somatic practice."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {sortedArticles.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedArticles.map((article) => (
              <FeaturedArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-2xl text-center py-16">
            <p className="text-lg text-muted-foreground">
              Articles are coming soon. Check back for deep explorations of posture and perception.
            </p>
            <div className="mt-8">
              <Link
                href="/blog"
                className="text-warm hover:text-warm/80 font-medium"
              >
                ← Back to Journal
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
