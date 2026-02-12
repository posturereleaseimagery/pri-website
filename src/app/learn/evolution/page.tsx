import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmailCapture } from "@/components/email-capture";

export default function EvolutionPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-warm">
          Deep Theory
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Evolutionary Development
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          PRI is grounded in a scientific narrative that stretches back hundreds of millions
          of years. Understanding posture through evolution is not an academic exercise —
          it is the key to understanding why your body organizes itself the way it does.
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/90">
          <div>
            <h2 className="text-xl font-semibold">From Water to Land</h2>
            <p className="mt-3 text-muted-foreground">
              The vertebrate body plan was forged in water. The earliest fish-like creatures
              had a simple dorsal-ventral organization: a back surface facing up toward light,
              a belly surface facing down toward the sea floor. Gravity was largely neutralized
              by buoyancy.
            </p>
            <p className="mt-3 text-muted-foreground">
              The transition to land changed everything. Suddenly, the body had to support
              itself against gravity in a new way. The dorsal surface — the spine and its
              associated muscles — took on the primary role of anti-gravity support. The
              ventral surface — the organs, the gut — had to be carried. This fundamental
              challenge has shaped every vertebrate body since.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Raymond Dart and the Upright Posture</h2>
            <p className="mt-3 text-muted-foreground">
              The anatomist Raymond Dart, famous for discovering the Taung Child fossil,
              spent decades studying the relationship between evolution and human posture.
              He recognized that the transition from quadrupedal to bipedal stance created
              a unique set of challenges for the human body — challenges that are still
              being negotiated in every living person.
            </p>
            <p className="mt-3 text-muted-foreground">
              Dart&apos;s work, along with that of F.M. Alexander and others in the somatic
              tradition, forms a key part of PRI&apos;s intellectual foundation. PRI extends
              their insights by focusing specifically on the dorsal-ventral relationship as
              the primary organizing principle of posture.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Embryology Recapitulates Evolution</h2>
            <p className="mt-3 text-muted-foreground">
              In embryonic development, the human body passes through stages that echo
              evolutionary history. The early embryo forms a flat disc that folds into a
              tube — dorsal sheet becoming back, ventral sheet becoming front, the lateral
              folds creating the seam where they meet.
            </p>
            <p className="mt-3 text-muted-foreground">
              This is not mere analogy. The same developmental logic that shaped the first
              vertebrates is at work in every human embryo. PRI uses this understanding to
              inform its imagery: when you imagine the egg, you are connecting with the
              body&apos;s earliest organizational memory. When you sense the seam, you are
              feeling the trace of an ancient fold.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Tensegrity and Living Structure</h2>
            <p className="mt-3 text-muted-foreground">
              Contemporary work on tensegrity — the principle that structures can be
              stabilized through a balance of tension and compression rather than rigid
              stacking — provides another lens for understanding PRI. The body is not a
              column of blocks balanced on top of each other. It is a tensegrity structure
              in which the relationship between surfaces creates stability.
            </p>
            <p className="mt-3 text-muted-foreground">
              When the dorsal and ventral surfaces are properly differentiated and
              integrated, the body achieves a kind of effortless uprightness that cannot
              be produced by muscular effort alone. This is what PRI aims to restore.
            </p>
          </div>

          <div className="rounded-xl border border-warm/20 bg-warm/5 p-6">
            <h3 className="font-semibold text-warm">The Full Story</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              The evolutionary narrative is developed in full in the book, with detailed
              discussion of embryology, comparative anatomy, and the implications for
              practical somatic work.
            </p>
            <div className="mt-4 flex gap-3">
              <Button asChild className="bg-warm text-warm-foreground hover:bg-warm/90" size="sm">
                <Link href="/book">
                  About the Book
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/about/lineage">
                  Intellectual Lineage
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border/60 pt-6">
          <Link
            href="/learn/four-types"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Four Types
          </Link>
          <Link
            href="/learn"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            Back to Learn
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
