import Link from "next/link";
import { ArrowLeft, ArrowRight, Eye, Layers, Sparkles, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const principles = [
  {
    icon: Eye,
    title: "Sensation Before Correction",
    description:
      "PRI does not begin by telling you what is wrong with your posture. It begins by asking you to feel what is already there. The back surface, the front surface, the seam between them. Awareness itself is the first intervention.",
  },
  {
    icon: Layers,
    title: "Imagery as a Perceptual Tool",
    description:
      "The guided images in PRI — the egg, the lamb, the seam — are not metaphors or visualizations. They are perceptual tools that speak directly to the body's organizational intelligence. When you imagine the egg, your torso responds. This is not suggestion; it is somatic communication.",
  },
  {
    icon: Sparkles,
    title: "No Exercises, No Manipulation",
    description:
      "PRI requires no physical exercises, no stretching, no strengthening, and no hands-on manipulation. The work happens entirely through guided attention and imagination. This makes it accessible to anyone who can sit quietly and listen.",
  },
  {
    icon: Brain,
    title: "Evolutionary Grounding",
    description:
      "The images and concepts in PRI are not arbitrary. They are grounded in evolutionary biology and embryological development. The dorsal-ventral distinction, the lateral seam, the archetypal forms — all have their roots in the deep history of the vertebrate body.",
  },
];

export default function MethodPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-warm">
          About PRI
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          The Method
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Posture Release Imagery is a somatic education method that works through guided
          mental imagery to change your embodied experience and posture. Here is how it
          works and what makes it different.
        </p>

        <div className="mt-10 space-y-6">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warm/10">
                  <principle.icon className="h-5 w-5 text-warm" />
                </div>
                <h2 className="text-lg font-semibold">{principle.title}</h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-6 text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold">The Learning Progression</h2>
            <p className="mt-3 text-muted-foreground">
              PRI follows a specific pedagogical sequence, designed to build understanding
              from the ground up:
            </p>
            <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warm/10 text-xs font-semibold text-warm">1</span>
                <span><strong className="text-foreground">Sensation</strong> — Feel the body surfaces directly, without interpretation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warm/10 text-xs font-semibold text-warm">2</span>
                <span><strong className="text-foreground">Pattern Recognition</strong> — Notice how the surfaces relate to each other and to habitual posture.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warm/10 text-xs font-semibold text-warm">3</span>
                <span><strong className="text-foreground">Conceptual Understanding</strong> — Learn the theory behind what you are feeling.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warm/10 text-xs font-semibold text-warm">4</span>
                <span><strong className="text-foreground">Deliberate Practice</strong> — Work with guided imagery to reshape your postural patterns.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warm/10 text-xs font-semibold text-warm">5</span>
                <span><strong className="text-foreground">Advanced Theory</strong> — Engage with the evolutionary, embryological, and typological dimensions.</span>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="bg-warm text-warm-foreground hover:bg-warm/90">
            <Link href="/experience/first-touch">
              Try It Now
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/learn">Explore the Curriculum</Link>
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border/60 pt-6">
          <Link
            href="/about/lineage"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Intellectual Lineage
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            About John Appleton
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
