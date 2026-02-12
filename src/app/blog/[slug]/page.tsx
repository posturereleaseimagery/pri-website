import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmailCapture } from "@/components/email-capture";

const posts: Record<string, { title: string; date: string; readTime: string; tags: string[]; content: string[] }> = {
  "why-posture-is-not-alignment": {
    title: "Why Posture Is Not Alignment",
    date: "2025-12-15",
    readTime: "5 min",
    tags: ["Beginners", "Concept"],
    content: [
      "Most approaches to posture treat it as a mechanical problem. Stand up straight. Pull your shoulders back. Stack your bones. The assumption is that there is a correct alignment, and your job is to find it and hold it.",
      "This approach has a fundamental problem: it does not work. Or rather, it works for as long as you are thinking about it, and then your body returns to its habitual pattern the moment your attention wanders. This is because posture is not a position. It is a relationship.",
      "Specifically, it is the relationship between the two surfaces of your body — the dorsal (back) surface and the ventral (front) surface — and gravity. When this relationship is well-organized, you stand and move with ease. When it is disorganized, no amount of alignment cueing will produce lasting change.",
      "Posture Release Imagery takes this insight as its starting point. Instead of telling you where your bones should be, it asks you to feel the surfaces that organize them. Instead of correcting from the outside, it works from the inside — through sensation and imagination.",
      "The shift from alignment to surface awareness is not just a different technique. It is a different paradigm. And it is one that is grounded in evolutionary biology, embryological development, and decades of somatic research.",
      "If you have been trying to fix your posture through alignment and it has not worked, this is not because you are doing it wrong. It is because the approach itself is incomplete. Your body already knows how to organize itself. It just needs to be listened to in the right way.",
    ],
  },
  "the-dorsal-ventral-distinction": {
    title: "The Dorsal-Ventral Distinction: An Evolutionary Perspective",
    date: "2025-11-28",
    readTime: "8 min",
    tags: ["Professional", "Evolution"],
    content: [
      "The distinction between dorsal and ventral surfaces is the oldest organizational principle in the vertebrate body. It predates limbs, lungs, and even the spine as we know it. Understanding this distinction is essential for anyone who works with posture.",
      "In the earliest vertebrates — jawless fish swimming in ancient seas — the body was organized around a simple axis. The dorsal surface faced upward, toward light and sky. The ventral surface faced downward, toward the sea floor. This was not arbitrary; it was a response to the fundamental asymmetry of the aquatic environment.",
      "The dorsal surface became the surface of protection and structure. The spine developed here, along with the muscles that would eventually support the body against gravity. The ventral surface became the surface of engagement — the mouth, the gut, the organs of digestion and reproduction.",
      "When vertebrates moved onto land, this organization was preserved but transformed. The dorsal surface took on the primary role of anti-gravity support. The ventral surface, now facing forward rather than downward, became the surface of expression and interaction with the environment.",
      "In humans, this evolutionary history is still present in every body. The back is structurally dense, muscularly enduring, and perceptually quiet. The front is softer, more mobile, and perceptually rich. The relationship between these two surfaces — mediated by the lateral seam where they meet — is the foundation of posture.",
      "Most postural problems can be understood as disruptions in this relationship. When the dorsal surface overworks, the body becomes rigid. When the ventral surface dominates, the body loses structural support. When the seam is compressed, breathing and movement are restricted.",
      "PRI works by restoring awareness of these surfaces and their relationship. It does not impose a correct alignment. It invites the body to rediscover the organizational logic that has been present since the first vertebrate swam in the sea.",
      "For professionals, this evolutionary perspective provides a powerful diagnostic and therapeutic framework. Instead of assessing posture in terms of joint angles and muscle lengths, you can assess it in terms of surface relationship — which surface is dominant, how the seam is organized, and where differentiation has been lost.",
    ],
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="text-3xl font-semibold">Article Coming Soon</h1>
        <p className="mt-4 text-muted-foreground">
          This article is being prepared. Check back soon, or explore our existing content.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild variant="outline">
            <Link href="/blog">
              <ArrowLeft className="mr-1 h-4 w-4" />
              All Articles
            </Link>
          </Button>
          <Button asChild className="bg-warm text-warm-foreground hover:bg-warm/90">
            <Link href="/experience/first-touch">Try an Experience</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          All Articles
        </Link>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
          <span>{formatDate(post.date)}</span>
          <span>{post.readTime} read</span>
        </div>

        <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/90">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-warm/20 bg-warm/5 p-6">
          <h3 className="font-semibold text-warm">Experience It Yourself</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Reading about PRI is useful, but feeling it is transformative. Try a guided
            experience to understand what this article describes.
          </p>
          <Button asChild className="mt-4 bg-warm text-warm-foreground hover:bg-warm/90" size="sm">
            <Link href="/experience/first-touch">
              Start a Guided Experience
            </Link>
          </Button>
        </div>

        <div className="mt-12">
          <EmailCapture
            heading="More articles like this"
            description="Subscribe to receive new articles on posture, perception, and somatic practice."
          />
        </div>
      </div>
    </div>
  );
}
