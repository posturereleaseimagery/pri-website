import Link from "next/link";
import { ArrowRight, Clock, Waves, Shell, Egg } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    slug: "first-touch",
    icon: Waves,
    title: "First Touch",
    duration: "60 seconds",
    description: "Your first encounter with body surface awareness. Feel the difference between back and front.",
    level: "Start here",
  },
  {
    slug: "surfaces",
    icon: Shell,
    title: "Dorsal & Ventral Surfaces",
    duration: "3 minutes",
    description: "Deepen your awareness of the two fundamental surfaces that define your posture.",
    level: "Foundation",
  },
  {
    slug: "seam",
    icon: Waves,
    title: "The Functional Seam",
    duration: "4 minutes",
    description: "Explore the living boundary where your back surface meets your front surface.",
    level: "Intermediate",
  },
  {
    slug: "imagery",
    icon: Egg,
    title: "Archetypal Imagery",
    duration: "5 minutes",
    description: "Work with the lamb, the egg, and other imaginative forms that reshape your embodied experience.",
    level: "Deepening",
  },
];

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="flex justify-center mb-12">
        <img 
          src="/images/seam.jpg" 
          alt="Guided Experiences"
          className="h-auto w-auto rounded-[25px]"
        />
      </div>
      
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-warm">
          Guided Experiences
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Feel It Before You Think It
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Each experience is a short, guided imaginative journey. No theory, no jargon —
          just your attention and your body. Begin with First Touch and progress at your own pace.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl gap-4">
        {experiences.map((exp, i) => (
          <Link
            key={exp.slug}
            href={`/experience/${exp.slug}`}
            className="group flex items-center gap-5 rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:border-warm/40 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-warm/10">
              <exp.icon className="h-6 w-6 text-warm" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold group-hover:text-warm">{exp.title}</h2>
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                  {exp.level}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{exp.description}</p>
              <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {exp.duration}
              </div>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-warm" />
          </Link>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-md text-center">
        <p className="text-sm text-muted-foreground">
          Ready to understand the ideas behind the experiences?
        </p>
        <Button asChild variant="outline" className="mt-3">
          <Link href="/learn">Explore the Method</Link>
        </Button>
      </div>
    </div>
  );
}
