import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EmailCapture } from "@/components/email-capture";

const posts = [
  {
    slug: "why-posture-is-not-alignment",
    title: "Why Posture Is Not Alignment",
    excerpt:
      "Most approaches to posture treat it as a mechanical problem — bones stacked in the right order. PRI takes a fundamentally different view.",
    date: "2025-12-15",
    readTime: "5 min",
    tags: ["Beginners", "Concept"],
  },
  {
    slug: "the-dorsal-ventral-distinction",
    title: "The Dorsal-Ventral Distinction: An Evolutionary Perspective",
    excerpt:
      "The oldest organizational principle in the vertebrate body is the distinction between back and front. Understanding this changes everything about how we approach posture.",
    date: "2025-11-28",
    readTime: "8 min",
    tags: ["Professional", "Evolution"],
  },
  {
    slug: "imagery-is-not-visualization",
    title: "Imagery Is Not Visualization",
    excerpt:
      "When PRI uses the word 'imagery,' it means something quite specific — and quite different from what most people assume.",
    date: "2025-11-10",
    readTime: "4 min",
    tags: ["Beginners", "Practice"],
  },
  {
    slug: "raymond-dart-and-the-double-spiral",
    title: "Raymond Dart and the Double Spiral",
    excerpt:
      "The anatomist who discovered the Taung Child spent decades studying posture. His insights remain revolutionary — and largely unknown.",
    date: "2025-10-22",
    readTime: "10 min",
    tags: ["Professional", "Lineage"],
  },
  {
    slug: "the-lamb-and-the-egg",
    title: "The Lamb and the Egg: Working with Archetypal Imagery",
    excerpt:
      "Two of PRI's core images — the newborn lamb and the egg — are not metaphors. They are perceptual tools rooted in evolutionary biology.",
    date: "2025-10-05",
    readTime: "6 min",
    tags: ["Concept", "Practice"],
  },
  {
    slug: "alexander-technique-and-pri",
    title: "Alexander Technique and PRI: Continuity and Departure",
    excerpt:
      "PRI owes a deep debt to F.M. Alexander. But it also departs from the Alexander tradition in significant ways.",
    date: "2025-09-18",
    readTime: "7 min",
    tags: ["Professional", "Lineage"],
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-warm">
          Blog
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Articles & Insights
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Explorations of posture, perception, evolution, and somatic practice.
          Written for both beginners and professionals.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:border-warm/40 hover:shadow-md"
          >
            <div className="flex flex-wrap items-center gap-2">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs font-normal"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <h2 className="mt-3 text-lg font-semibold group-hover:text-warm">
              {post.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
              <span>{formatDate(post.date)}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-xl">
        <EmailCapture
          heading="New articles in your inbox"
          description="Subscribe to receive new articles on posture, perception, and somatic practice."
        />
      </div>
    </div>
  );
}
