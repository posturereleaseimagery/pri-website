import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Dna, Network, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmailCapture } from "@/components/email-capture";

const topics = [
  {
    icon: Layers,
    title: "Dorsal-Ventral Differentiation",
    desc: "The embryological and functional basis for understanding posture as a relationship between two body surfaces rather than a mechanical alignment problem.",
    href: "/learn/differentiation",
  },
  {
    icon: Dna,
    title: "Evolutionary Development",
    desc: "How the transition from aquatic to terrestrial life shaped the vertebrate body plan, and what this means for understanding postural organization today.",
    href: "/learn/evolution",
  },
  {
    icon: Network,
    title: "The Four Type Theory",
    desc: "A typological framework linking personality tendencies, postural patterns, and surface dominance — with implications for assessment and intervention.",
    href: "/learn/four-types",
  },
  {
    icon: BookOpen,
    title: "Intellectual Lineage",
    desc: "PRI's relationship to Alexander Technique, Raymond Dart's work on posture and evolution, tensegrity discourse, and the broader somatic education tradition.",
    href: "/about/lineage",
  },
];

const relevantFor = [
  "Alexander Technique teachers",
  "Yoga teachers and therapists",
  "Pilates instructors",
  "Massage therapists",
  "Physical therapists",
  "Osteopaths and chiropractors",
  "Movement educators",
  "Somatic psychotherapists",
];

export default function ProfessionalsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-warm">
          Professional Path
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          A Framework for Practitioners
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          PRI offers a coherent theoretical framework that can deepen and recontextualize
          your existing practice. It does not replace what you know — it provides a
          perceptual and evolutionary foundation beneath it.
        </p>
      </div>

      {/* Who this is for */}
      <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-border/60 bg-card p-8 shadow-sm">
        <h2 className="text-lg font-semibold">Relevant for</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {relevantFor.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Core Topics */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {topics.map((topic) => (
          <Link
            key={topic.href}
            href={topic.href}
            className="group rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:border-warm/40 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warm/10">
              <topic.icon className="h-5 w-5 text-warm" />
            </div>
            <h3 className="mt-4 text-base font-semibold group-hover:text-warm">
              {topic.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {topic.desc}
            </p>
            <span className="mt-3 inline-flex items-center text-sm font-medium text-warm">
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>

      {/* Next Steps */}
      <div className="mx-auto mt-16 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Ready to Go Deeper?</h2>
        <p className="mt-3 text-muted-foreground">
          The book provides the complete theoretical and practical framework.
          Professional training courses are available for those who wish to integrate
          PRI into their practice.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild className="bg-warm text-warm-foreground hover:bg-warm/90">
            <Link href="/book">
              <BookOpen className="mr-2 h-4 w-4" />
              The Book
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/courses">
              <GraduationCap className="mr-2 h-4 w-4" />
              Professional Training
            </Link>
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-xl">
        <EmailCapture
          heading="Stay informed"
          description="Receive updates on professional training, new articles, and developments in the PRI framework."
        />
      </div>
    </div>
  );
}
