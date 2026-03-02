import { notFound } from "next/navigation";
import Link from "next/link";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { FeaturedArticleCard } from "@/components/blog/FeaturedArticleCard";
import { TidbitCard } from "@/components/blog/TidbitCard";
import { sampleArticles, sampleTidbits } from "@/lib/data/blog-content";

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;

  // Find all content with this tag
  const taggedArticles = sampleArticles.filter(article =>
    article.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
  const taggedTidbits = sampleTidbits.filter(tidbit =>
    tidbit.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );

  const allTaggedContent = [
    ...taggedArticles.map(article => ({ ...article, type: 'article' as const })),
    ...taggedTidbits.map(tidbit => ({ ...tidbit, type: 'tidbit' as const }))
  ].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  if (allTaggedContent.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <BlogHeader
        title={`Posts tagged "${tag}"`}
        subtitle={`Content related to ${tag} from The PRI Journal.`}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="space-y-8">
          {allTaggedContent.map((content) => {
            if (content.type === 'article') {
              return (
                <div key={content.id} className="max-w-2xl mx-auto">
                  <FeaturedArticleCard article={content} />
                </div>
              );
            } else {
              return (
                <div key={content.id} className="max-w-2xl mx-auto">
                  <TidbitCard tidbit={content} />
                </div>
              );
            }
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="text-warm hover:text-warm/80 font-medium"
          >
            ← Back to Journal
          </Link>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all tags
export async function generateStaticParams() {
  const allTags = new Set<string>();

  // Collect tags from articles
  sampleArticles.forEach(article => {
    article.tags.forEach(tag => allTags.add(tag.toLowerCase()));
  });

  // Collect tags from tidbits
  sampleTidbits.forEach(tidbit => {
    tidbit.tags.forEach(tag => allTags.add(tag.toLowerCase()));
  });

  return Array.from(allTags).map(tag => ({
    tag: tag,
  }));
}
