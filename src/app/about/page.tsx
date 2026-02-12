import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-warm">
          About
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          John Appleton
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Developer of Posture Release Imagery
        </p>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/90">
          <p className="text-muted-foreground">
            John Appleton is a somatic educator whose work bridges the traditions of
            Alexander Technique, evolutionary biology, and imaginative perception. Over
            decades of teaching and research, he developed Posture Release Imagery as a
            method for changing embodied experience through guided mental imagery.
          </p>
          <p className="text-muted-foreground">
            His approach is rooted in the conviction that posture is not a mechanical
            problem to be solved through alignment cues or strengthening exercises, but a
            perceptual phenomenon — a living relationship between the body&apos;s surfaces
            and gravity that can be transformed through attention and imagination.
          </p>
          <p className="text-muted-foreground">
            Appleton&apos;s work draws on the insights of F.M. Alexander, the evolutionary
            anatomist Raymond Dart, contemporary tensegrity research, and the broader
            somatic education tradition. PRI synthesizes these influences into a coherent
            framework that is both intellectually rigorous and practically accessible.
          </p>
          <p className="text-muted-foreground">
            He teaches PRI through individual sessions, workshops, and professional
            training courses, and continues to develop the method through ongoing research
            and writing.
          </p>
        </div>

        {/* Links */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href="/about/lineage"
            className="group rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:border-warm/40 hover:shadow-md"
          >
            <h3 className="font-semibold group-hover:text-warm">Intellectual Lineage</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              The traditions and thinkers that inform PRI.
            </p>
            <span className="mt-3 inline-flex items-center text-sm font-medium text-warm">
              Explore <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </Link>
          <Link
            href="/about/method"
            className="group rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:border-warm/40 hover:shadow-md"
          >
            <h3 className="font-semibold group-hover:text-warm">The PRI Method</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              How the method works and what makes it unique.
            </p>
            <span className="mt-3 inline-flex items-center text-sm font-medium text-warm">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="bg-warm text-warm-foreground hover:bg-warm/90">
            <Link href="/book">
              <BookOpen className="mr-2 h-4 w-4" />
              The Book
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/courses">
              <GraduationCap className="mr-2 h-4 w-4" />
              Courses & Training
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
