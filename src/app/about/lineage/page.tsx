import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const influences = [
  {
    name: "F.M. Alexander",
    field: "Alexander Technique",
    description:
      "The founder of Alexander Technique recognized that habitual patterns of use — how we hold and move ourselves — are the root of most postural problems. His insight that conscious awareness can change these patterns is foundational to PRI. Appleton extends Alexander's work by grounding it in evolutionary biology and shifting the focus from 'use' to 'surface sensation.'",
  },
  {
    name: "Raymond Dart",
    field: "Evolutionary Anatomy",
    description:
      "The South African anatomist who discovered the Taung Child spent decades studying the relationship between evolution and human posture. His work on the 'double spiral' arrangement of muscles and the evolutionary challenges of bipedalism directly informs PRI's understanding of the dorsal-ventral relationship.",
  },
  {
    name: "Tensegrity Discourse",
    field: "Structural Biology",
    description:
      "The concept of tensegrity — structures stabilized through balanced tension rather than rigid compression — provides a key framework for understanding how the body maintains posture. PRI draws on this work to explain how the relationship between body surfaces creates structural integrity without muscular effort.",
  },
  {
    name: "Embryological Research",
    field: "Developmental Biology",
    description:
      "The study of how the body forms in the womb — the folding of dorsal and ventral sheets, the formation of the lateral seam — provides the biological foundation for PRI's surface-based approach. The body's earliest organizational logic persists throughout life.",
  },
  {
    name: "The Somatic Education Tradition",
    field: "Feldenkrais, Hanna, and Others",
    description:
      "PRI sits within the broader tradition of somatic education — methods that work through awareness and sensation rather than mechanical correction. While distinct in its theoretical framework, PRI shares with Feldenkrais, Hanna Somatics, and other methods the conviction that the body can change through conscious attention.",
  },
];

export default function LineagePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-warm">
          About PRI
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Intellectual Lineage
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          PRI does not emerge from a vacuum. It is built on decades of somatic research,
          evolutionary science, and the practical wisdom of teachers who recognized that
          posture is a living, perceptual phenomenon.
        </p>

        <div className="mt-10 space-y-6">
          {influences.map((influence) => (
            <div
              key={influence.name}
              className="rounded-xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-semibold">{influence.name}</h2>
                <span className="rounded-full bg-warm/10 px-2.5 py-0.5 text-xs font-medium text-warm">
                  {influence.field}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {influence.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-warm/20 bg-warm/5 p-6">
          <h3 className="font-semibold text-warm">Want the Full Picture?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            The book includes detailed discussion of each of these influences and how
            they are synthesized in the PRI framework.
          </p>
          <Button asChild className="mt-4 bg-warm text-warm-foreground hover:bg-warm/90" size="sm">
            <Link href="/book">
              About the Book
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border/60 pt-6">
          <Link
            href="/about"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            About John Appleton
          </Link>
          <Link
            href="/about/method"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            The Method
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
