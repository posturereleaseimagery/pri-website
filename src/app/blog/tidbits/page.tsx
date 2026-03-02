import Link from "next/link";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { TidbitCard } from "@/components/blog/TidbitCard";
import { getAllTidbits } from "@/lib/blog-posts";

export default async function TidbitsPage() {
  const sortedTidbits = (await getAllTidbits()).sort((a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <BlogHeader
        title="Tidbits & Links"
        subtitle="Quick insights, research references, quotes, and micro-observations from the world of posture and perception."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {sortedTidbits.length > 0 ? (
          <div className="mx-auto max-w-2xl space-y-6">
            {sortedTidbits.map((tidbit) => (
              <TidbitCard key={tidbit.id} tidbit={tidbit} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-2xl text-center py-16">
            <p className="text-lg text-muted-foreground">
              Tidbits are coming soon. Stay tuned for rapid insights and research links.
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
