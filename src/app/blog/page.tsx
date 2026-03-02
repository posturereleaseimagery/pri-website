import Link from "next/link";
import { BookOpen, Zap } from "lucide-react";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { FeaturedArticleCard } from "@/components/blog/FeaturedArticleCard";
import { TidbitCard } from "@/components/blog/TidbitCard";
import { getAllExercises, getAllBlogArticles, getAllTidbits } from "@/lib/blog-posts";
import { ExerciseCard } from "@/components/blog/ExerciseCard";

export default async function BlogPage() {
  const allArticles = (await getAllBlogArticles()).sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  const featuredArticles = allArticles.slice(0, 3);
  const allTidbits = (await getAllTidbits()).sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  const exercises = (await getAllExercises()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <BlogLayout>
      {/* Hero Section */}
      <div className="border-b border-border/60 bg-gradient-to-br from-sky-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pb-16 pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            The PRI Journal
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Ideas, imagery, and evolutionary posture insights. Deep thinking meets rapid noticing.
          </p>
        </div>
      </div>

      <div className="py-16">
        {/* Featured Articles Section */}
        {featuredArticles.length > 0 && (
          <section className="mb-16">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Featured Articles
              </h2>
              <Link
                href="/blog/articles"
                className="flex items-center gap-2 text-sm text-warm hover:text-warm/80"
              >
                <BookOpen className="h-4 w-4" />
                View all articles
              </Link>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredArticles.map((article) => (
                <FeaturedArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}

        {/* Exercises Section */}
        {exercises.length > 0 && (
          <section className="mb-16">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Exercises</h2>
              <Link
                href="/blog/exercises"
                className="flex items-center gap-2 text-sm text-warm hover:text-warm/80"
              >
                View all exercises
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {exercises.map((exercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
              ))}
            </div>
          </section>
        )}

        {/* Tidbits Stream */}
        <section>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Recent Tidbits
            </h2>
            <Link
              href="/blog/tidbits"
              className="flex items-center gap-2 text-sm text-warm hover:text-warm/80"
            >
              <Zap className="h-4 w-4" />
              View all tidbits
            </Link>
          </div>
          <div className="space-y-4">
            {allTidbits.slice(0, 5).map((tidbit) => (
              <TidbitCard key={tidbit.id} tidbit={tidbit} />
            ))}
          </div>
        </section>

      </div>
    </BlogLayout>
  );
}
