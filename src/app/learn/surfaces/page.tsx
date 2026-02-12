import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmailCapture } from "@/components/email-capture";

export default function SurfacesLearnPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-warm">
          Conceptual Foundation
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Body Surface Sensation
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          The foundation of Posture Release Imagery is a simple observation: your body has
          two distinct surfaces, and your posture lives in the relationship between them.
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/90">
          <div>
            <h2 className="text-xl font-semibold">The Back Surface</h2>
            <p className="mt-3 text-muted-foreground">
              The dorsal surface — your back — is the older surface in evolutionary terms.
              In the earliest vertebrates, the back faced the sun and the sky. It is the
              surface of protection, of the spine, of the structural muscles that hold you
              upright without conscious effort.
            </p>
            <p className="mt-3 text-muted-foreground">
              When you feel the back of your body, you are feeling the part of yourself that
              has been supporting you since before you were born. The muscles here are
              predominantly postural — slow-twitch, endurance-oriented, designed to work
              continuously in the background.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">The Front Surface</h2>
            <p className="mt-3 text-muted-foreground">
              The ventral surface — your front — is the younger surface. It is where the
              mouth formed, where the gut opened to the world. Evolutionarily, it is the
              surface of vulnerability, of reaching, of engagement with the environment.
            </p>
            <p className="mt-3 text-muted-foreground">
              Your face, your palms, your belly — these are the surfaces through which you
              express, receive, and interact. The front tends toward softness, mobility, and
              responsiveness.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Why This Matters for Posture</h2>
            <p className="mt-3 text-muted-foreground">
              Most approaches to posture focus on alignment — where your bones are in space.
              PRI takes a different starting point: sensation. Before you can change your
              posture, you need to feel the surfaces that create it.
            </p>
            <p className="mt-3 text-muted-foreground">
              When you become aware of the back and front as distinct surfaces with distinct
              qualities, something shifts. The body begins to reorganize not through effort
              but through awareness. This is not a metaphor — it is a repeatable perceptual
              phenomenon that forms the basis of the entire PRI method.
            </p>
          </div>

          <div className="rounded-xl border border-warm/20 bg-warm/5 p-6">
            <h3 className="font-semibold text-warm">Try It Yourself</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              The best way to understand body surface sensation is to experience it directly.
              The First Touch guided experience takes 60 seconds.
            </p>
            <Button asChild className="mt-4 bg-warm text-warm-foreground hover:bg-warm/90" size="sm">
              <Link href="/experience/first-touch">
                Start the Experience
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-between border-t border-border/60 pt-6">
          <Link
            href="/learn"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Learn
          </Link>
          <Link
            href="/learn/differentiation"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            Next: Differentiation
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
