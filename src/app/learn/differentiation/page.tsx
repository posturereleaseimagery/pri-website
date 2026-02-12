import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmailCapture } from "@/components/email-capture";

export default function DifferentiationPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-warm">
          Core Concept
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Dorsal & Ventral Differentiation
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          The distinction between back and front is not just anatomical — it is the
          oldest organizational principle in the vertebrate body.
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/90">
          <div>
            <h2 className="text-xl font-semibold">An Embryological Origin</h2>
            <p className="mt-3 text-muted-foreground">
              In the earliest days of embryonic development, the body organizes itself into
              two sheets: a dorsal sheet that will become the back, the spine, and the
              nervous system, and a ventral sheet that will become the gut, the organs, and
              the front of the body.
            </p>
            <p className="mt-3 text-muted-foreground">
              These two sheets fold together to form the tube-within-a-tube structure that
              defines all vertebrates. The place where they meet — the lateral seam — becomes
              a functional boundary that persists throughout life.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Differentiation as a Living Process</h2>
            <p className="mt-3 text-muted-foreground">
              Differentiation in PRI does not mean separation. It means the ability to
              perceive and experience the dorsal and ventral surfaces as distinct while
              recognizing their integration. A well-differentiated body is one in which
              the back can be firm without being rigid, and the front can be soft without
              being collapsed.
            </p>
            <p className="mt-3 text-muted-foreground">
              Most postural problems can be understood as failures of differentiation —
              the back and front have become confused, merged, or one has dominated the
              other. The person who holds their belly tight is using ventral tissue to do
              dorsal work. The person who collapses forward has lost ventral tone while
              the dorsal surface overworks.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">The PRI Approach</h2>
            <p className="mt-3 text-muted-foreground">
              Rather than correcting posture through alignment cues or strengthening
              exercises, PRI works by restoring differentiation. Through guided imagery
              and sensory awareness, you learn to feel each surface distinctly and allow
              them to find their natural relationship to gravity.
            </p>
            <p className="mt-3 text-muted-foreground">
              This is not a cognitive process. It happens through the body&apos;s own
              intelligence, activated by attention and imagination. The imagery provides
              the language; the body does the reorganizing.
            </p>
          </div>

          <div className="rounded-xl border border-warm/20 bg-warm/5 p-6">
            <h3 className="font-semibold text-warm">Experience Differentiation</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              The Surfaces guided experience walks you through feeling dorsal and ventral
              differentiation directly in your own body.
            </p>
            <Button asChild className="mt-4 bg-warm text-warm-foreground hover:bg-warm/90" size="sm">
              <Link href="/experience/surfaces">
                Try the Experience
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border/60 pt-6">
          <Link
            href="/learn/surfaces"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Body Surfaces
          </Link>
          <Link
            href="/learn/four-types"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            Next: Four Types
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
