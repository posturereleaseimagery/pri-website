import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmailCapture } from "@/components/email-capture";

const chapters = [
  "Body Surface Sensation and the Foundation of Posture",
  "The Dorsal and Ventral Surfaces",
  "The Functional Seam",
  "Archetypal Imagery in Somatic Practice",
  "The Four Type Theory",
  "Evolutionary Development and the Vertebrate Body Plan",
  "Raymond Dart, F.M. Alexander, and the Somatic Lineage",
  "Tensegrity and Living Structure",
  "Guided Practices for Self-Work",
  "Applications for Professionals",
];

const whoFor = [
  "You have tried the guided experiences and want to understand the theory behind them",
  "You are a somatic or movement professional seeking a new framework",
  "You want a comprehensive reference for the PRI method",
  "You are interested in the evolutionary science of posture",
  "You want guided practices you can return to repeatedly",
];

export default function BookPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-warm">
          The Book
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Posture Release Imagery
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">by John Appleton</p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          The complete guide to the PRI method — from the foundational sensation work
          through the evolutionary science, the Four Type Theory, and practical applications
          for both personal practice and professional work.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl">
        {/* Not the starting point notice */}
        <div className="rounded-xl border border-sage/20 bg-sage/5 p-6">
          <h3 className="font-semibold text-sage">A Deep Dive, Not a Starting Point</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            This book is best approached after you have experienced PRI for yourself.
            If you have not yet tried a guided experience, we recommend{" "}
            <Link href="/experience/first-touch" className="font-medium text-warm hover:underline">
              starting there
            </Link>
            . The book will make far more sense — and be far more useful — once you have
            felt what it describes.
          </p>
        </div>

        {/* Who it's for */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold">This Book Is For You If</h2>
          <ul className="mt-4 space-y-3">
            {whoFor.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chapter overview */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold">What&apos;s Inside</h2>
          <div className="mt-4 space-y-2">
            {chapters.map((chapter, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border border-border/40 bg-card px-4 py-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warm/10 text-xs font-semibold text-warm">
                  {i + 1}
                </span>
                <span className="text-sm text-foreground/90">{chapter}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Purchase CTA */}
        <div className="mt-12 rounded-xl border border-border/60 bg-card p-8 text-center shadow-sm">
          <BookOpen className="mx-auto h-8 w-8 text-warm" />
          <h3 className="mt-4 text-xl font-semibold">Get the Book</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Available in paperback and digital formats.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-warm text-warm-foreground hover:bg-warm/90">
              Order Now
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/experience/first-touch">Try PRI First</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <EmailCapture
            heading="Preview before you buy"
            description="Sign up to receive a free chapter excerpt and guided experience from the book."
          />
        </div>
      </div>
    </div>
  );
}
