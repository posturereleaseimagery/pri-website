import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmailCapture } from "@/components/email-capture";

const types = [
  {
    name: "Dorsal Dominant",
    quality: "Structure & Holding",
    description:
      "The back surface leads. These individuals tend toward firmness, endurance, and a sense of being held together. Posturally, the spine is prominent, the back muscles overwork, and the front may feel underdeveloped or withdrawn.",
  },
  {
    name: "Ventral Dominant",
    quality: "Expression & Reaching",
    description:
      "The front surface leads. These individuals tend toward expressiveness, engagement, and forward orientation. Posturally, the chest may be pushed forward, the belly active, while the back loses its supportive role.",
  },
  {
    name: "Seam-Compressed",
    quality: "Containment & Tension",
    description:
      "The lateral seam is tight, pulling the two surfaces together. These individuals tend toward containment, control, and a narrowing of the body. Posturally, the sides feel compressed and breathing may be restricted.",
  },
  {
    name: "Seam-Released",
    quality: "Expansion & Diffusion",
    description:
      "The lateral seam is loose, and the two surfaces lack clear relationship. These individuals tend toward openness but may feel uncontained or diffuse. Posturally, there is width but insufficient integration.",
  },
];

export default function FourTypesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-warm">
          Advanced Concept
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          The Four Type Theory
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          PRI proposes that postural patterns and personality tendencies are connected
          through the relationship between dorsal and ventral surfaces. This is not a
          personality test — it is a perceptual framework.
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/90">
          <div>
            <h2 className="text-xl font-semibold">Surface Dominance</h2>
            <p className="mt-3 text-muted-foreground">
              Every person has a characteristic relationship between their back and front
              surfaces. In some, the dorsal surface dominates — providing structure but
              potentially rigidity. In others, the ventral surface leads — providing
              expressiveness but potentially instability. The lateral seam mediates between
              them, and its quality — tight or loose — creates two further variations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">The Four Patterns</h2>
            <div className="mt-4 space-y-4">
              {types.map((type) => (
                <div
                  key={type.name}
                  className="rounded-xl border border-border/60 bg-card p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold">{type.name}</h3>
                    <span className="rounded-full bg-warm/10 px-2.5 py-0.5 text-xs font-medium text-warm">
                      {type.quality}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Not a Box — A Lens</h2>
            <p className="mt-3 text-muted-foreground">
              The Four Type Theory is not meant to categorize people into fixed boxes.
              It is a perceptual lens — a way of seeing how the body&apos;s surface
              organization relates to habitual patterns of posture, movement, and
              temperament. Most people are a blend, with one pattern predominating.
            </p>
            <p className="mt-3 text-muted-foreground">
              The therapeutic value lies not in identifying your type but in using the
              framework to understand what your body is doing and why — and then working
              with imagery to restore differentiation and balance between the surfaces.
            </p>
          </div>

          <div className="rounded-xl border border-warm/20 bg-warm/5 p-6">
            <h3 className="font-semibold text-warm">Explore Further</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              The Four Type Theory is developed in full detail in the book, with case
              examples and practical applications for both self-work and professional practice.
            </p>
            <Button asChild className="mt-4 bg-warm text-warm-foreground hover:bg-warm/90" size="sm">
              <Link href="/book">
                About the Book
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border/60 pt-6">
          <Link
            href="/learn/differentiation"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Differentiation
          </Link>
          <Link
            href="/learn/evolution"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            Next: Evolution
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12">
          <EmailCapture />
        </div>
      </div>
    </div>
  );
}
