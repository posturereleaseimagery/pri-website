import Link from "next/link";
import { ArrowRight, Users, GraduationCap, Layers, GitBranch, Fingerprint, Dna } from "lucide-react";
import { Button } from "@/components/ui/button";

const curriculum = [
  {
    icon: Fingerprint,
    title: "Body Surface Sensation",
    href: "/learn/surfaces",
    desc: "The foundation: learning to feel the distinction between your back and front surfaces.",
  },
  {
    icon: GitBranch,
    title: "Dorsal & Ventral Differentiation",
    href: "/learn/differentiation",
    desc: "Understanding the two fundamental surfaces of your body and their distinct qualities.",
  },
  {
    icon: Layers,
    title: "The Four Types",
    href: "/learn/four-types",
    desc: "How personality tendencies and postural patterns are connected through surface dominance.",
  },
  {
    icon: Dna,
    title: "Evolutionary Development",
    href: "/learn/evolution",
    desc: "The deep biological narrative that gives PRI its scientific foundation.",
  },
];

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-warm">
          Learn
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Understand the Method
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          PRI is best understood through experience first, then concept. If you have not yet
          tried a guided experience, we recommend{" "}
          <Link href="/experience/first-touch" className="font-medium text-warm hover:underline">
            starting there
          </Link>
          . When you are ready for ideas, this is where they live.
        </p>
      </div>

      {/* Two Audience Paths */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Link
          href="/learn/beginners"
          className="group rounded-xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:border-sage/40 hover:shadow-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/10">
            <Users className="h-6 w-6 text-sage" />
          </div>
          <h2 className="mt-5 text-xl font-semibold">Beginner Path</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            New to somatic work? Start here. Plain language, no jargon, guided step by step
            from sensation to understanding.
          </p>
          <span className="mt-4 inline-flex items-center text-sm font-medium text-sage">
            Start learning <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </Link>
        <Link
          href="/learn/professionals"
          className="group rounded-xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:border-warm/40 hover:shadow-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-warm/10">
            <GraduationCap className="h-6 w-6 text-warm" />
          </div>
          <h2 className="mt-5 text-xl font-semibold">Professional Path</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Already a practitioner? Dive into the theoretical framework, intellectual lineage,
            and advanced concepts that make PRI unique.
          </p>
          <span className="mt-4 inline-flex items-center text-sm font-medium text-warm">
            Explore the framework <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </Link>
      </div>

      {/* Conceptual Spine */}
      <div className="mt-16">
        <h2 className="text-center text-2xl font-semibold tracking-tight">
          The Conceptual Spine
        </h2>
        <p className="mt-2 text-center text-muted-foreground">
          The core ideas of PRI, in the order they are best encountered.
        </p>
        <div className="mx-auto mt-8 max-w-2xl">
          {curriculum.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-start gap-4 border-b border-border/40 py-5 transition-colors last:border-0 hover:bg-accent/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warm/10">
                <item.icon className="h-5 w-5 text-warm" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-medium group-hover:text-warm">{item.title}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{item.desc}</p>
              </div>
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-warm" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
