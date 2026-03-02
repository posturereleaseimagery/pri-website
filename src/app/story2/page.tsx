"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StorySection } from "@/components/story/story-section";
import {
  EvolutionaryOverlayFigure,
  CellFigure,
  OceanCreatureFigure,
  ElongatedOrganismFigure,
  BubbleOrganismFigure,
  QuadrupedFigure,
} from "@/components/story2/illustrations-1";
import {
  UprightingSequenceFigure,
  ThreeSegmentsFigure,
  MovementWavesFigure,
  FrozenPhaseFigure,
  HeadOrganizerFigure,
  VentralCareFigure,
  FinalOverlayFigure,
} from "@/components/story2/illustrations-2";

export default function Story2Page() {
  return (
    <div className="overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: HERO — AN EVOLUTIONARY BODY MAP
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/4 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-2xl text-center">
          <StorySection>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-primary/50">
              A Visual Introduction — Evolutionary Foundations
            </p>
            <h1 className="text-3xl font-light leading-snug tracking-tight text-foreground/90 sm:text-4xl md:text-5xl">
              Your posture is built on ancient evolutionary patterns.
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              The nervous system organizes posture using body maps formed in early organisms —
              inside and outside, dorsal and ventral, front and back.
              This is the evolutionary argument behind Posture Release Imagery.
            </p>
          </StorySection>
          <StorySection className="mt-14">
            <EvolutionaryOverlayFigure className="mx-auto h-64 w-auto text-foreground sm:h-80" />
            <p className="mt-4 text-xs italic text-muted-foreground/50">
              A modern human silhouette layered over the body plans that preceded it.
            </p>
          </StorySection>
          <div className="mt-14 animate-bounce">
            <ArrowDown className="mx-auto h-5 w-5 text-warm/40" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: INSIDE AND OUTSIDE — THE FIRST BODY BOUNDARY
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <StorySection>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="flex justify-center">
                <CellFigure className="h-56 w-auto text-foreground sm:h-64" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/50">
                  The First Boundary
                </p>
                <h2 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
                  The first organisms only knew inside and outside.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Before skeletons, before limbs, before direction — there was a membrane.
                  Nutrients moved inward across the entire surface. Waste moved outward.
                  The whole body was a boundary.
                </p>
                <p className="mt-4 text-sm italic text-muted-foreground/60">
                  This inside/outside distinction is still encoded in your nervous system.
                </p>
              </div>
            </div>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3: TOP AND BOTTOM — DORSAL AND VENTRAL
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 bg-gradient-to-b from-secondary/40 to-transparent px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <StorySection>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/50">
                  Dorsal &amp; Ventral
                </p>
                <h2 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
                  Life developed a top and bottom before it developed a skeleton.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Early ocean creatures rested on the sea floor. The underside became
                  the feeding surface — soft, open, ventral. The upper side faced the
                  open water — exposed, structural, dorsal.
                </p>
                <div className="mt-5 flex gap-4">
                  <div className="rounded-lg bg-primary/6 px-4 py-3 text-center">
                    <div className="text-xs font-medium uppercase tracking-wider text-primary/50">Dorsal</div>
                    <p className="mt-1 text-xs text-muted-foreground">back / top</p>
                  </div>
                  <div className="rounded-lg bg-warm/6 px-4 py-3 text-center">
                    <div className="text-xs font-medium uppercase tracking-wider text-warm/60">Ventral</div>
                    <p className="mt-1 text-xs text-muted-foreground">front / bottom</p>
                  </div>
                </div>
              </div>
              <div className="order-1 flex justify-center md:order-2">
                <OceanCreatureFigure className="h-48 w-auto text-foreground sm:h-56" />
              </div>
            </div>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4: FRONT AND BACK — DIRECTION AND THE GUT
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <StorySection>
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm/60">
                The Front-Back Axis
              </p>
              <h2 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
                Front and back allowed movement and the invention of the gut.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                Once organisms developed a direction of travel, a front-to-back axis emerged.
                The mouth led. The tail followed. A digestive tract ran between them —
                the first internal channel, the first distinction between head and tail.
              </p>
            </div>
            <div className="mt-10 overflow-x-auto">
              <ElongatedOrganismFigure className="mx-auto h-36 w-auto min-w-[300px] text-foreground sm:h-44" />
            </div>
            <p className="mt-4 text-center text-xs italic text-muted-foreground/50">
              A wave of coordinated movement passes from front to back.
            </p>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: SUPPORT BEFORE BONES — SURFACE TENSION
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 bg-gradient-to-b from-warm/5 to-transparent px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <StorySection>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="flex justify-center">
                <BubbleOrganismFigure className="h-52 w-auto text-foreground sm:h-60" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/50">
                  Surface Tension Structure
                </p>
                <h2 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
                  Before skeletons, bodies held shape through surface tension.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Early organisms maintained form not through rigid bones but through
                  pressure distributed evenly across the entire surface — like a bubble,
                  or a geodesic dome. Every point shared the load.
                </p>
                <p className="mt-4 text-sm italic text-muted-foreground/60">
                  This principle still operates in the fascial networks of your body.
                </p>
              </div>
            </div>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6: PRIMARY UPRIGHTING — THE HORIZONTAL ANIMAL
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <StorySection>
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/50">
                Primary Uprighting
              </p>
              <h2 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
                Four-legged animals are already upright in evolutionary terms.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                A quadruped holds its dorsal surface toward the sky and its ventral surface
                toward the ground. This is primary uprighting — the body organized against
                gravity along the dorsal-ventral axis.
              </p>
            </div>
            <div className="mt-10 overflow-x-auto">
              <QuadrupedFigure className="mx-auto h-44 w-auto min-w-[280px] text-foreground sm:h-52" />
            </div>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7: SECONDARY UPRIGHTING — THE HUMAN BODY ON EDGE
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 bg-gradient-to-b from-secondary/40 to-transparent px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <StorySection>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm/60">
                  Secondary Uprighting
                </p>
                <h2 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
                  Humans are secondarily upright: a horizontal body turned vertical.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  The human trunk rotated 90° from the quadruped position. The dorsal
                  surface now faces backward. The ventral surface faces forward. But the
                  head and pelvis retain their horizontal evolutionary references.
                </p>
                <p className="mt-4 text-sm italic text-muted-foreground/60">
                  We are a horizontal animal standing on its end.
                </p>
              </div>
              <div className="order-1 flex justify-center overflow-x-auto md:order-2">
                <UprightingSequenceFigure className="h-52 w-auto min-w-[320px] text-foreground sm:h-60" />
              </div>
            </div>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8: THREE EVOLUTIONARY BODY SEGMENTS
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <StorySection>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="flex justify-center">
                <ThreeSegmentsFigure className="h-72 w-auto text-foreground sm:h-80" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/50">
                  Three Functional Segments
                </p>
                <h2 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
                  Evolution left us with three functional body segments.
                </h2>
                <div className="mt-5 space-y-3">
                  <div className="rounded-lg border border-primary/15 bg-primary/4 p-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-primary/60">Head &amp; Neck</div>
                    <p className="mt-0.5 text-sm text-muted-foreground">The Director — organizes the whole body through neurological influence</p>
                  </div>
                  <div className="rounded-lg border border-warm/15 bg-warm/4 p-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-warm/60">Trunk</div>
                    <p className="mt-0.5 text-sm text-muted-foreground">The Motor — generates movement and breath</p>
                  </div>
                  <div className="rounded-lg border border-primary/15 bg-primary/4 p-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-primary/60">Pelvis &amp; Legs</div>
                    <p className="mt-0.5 text-sm text-muted-foreground">The Rudder — grounds and steers locomotion</p>
                  </div>
                </div>
              </div>
            </div>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9: ANCIENT MOVEMENT WAVES
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 bg-gradient-to-b from-warm/5 to-transparent px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <StorySection>
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/50">
                Ancient Movement Patterns
              </p>
              <h2 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
                Our nervous system still contains ancient movement waves.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                Three fundamental wave patterns evolved across hundreds of millions of years.
                Each is still present in the human nervous system — not as memory,
                but as active organizational potential.
              </p>
            </div>
            <div className="mt-10">
              <MovementWavesFigure className="mx-auto h-64 w-auto text-foreground sm:h-72" />
            </div>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 10: FROZEN PHASES AND POSTURAL TYPES
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <StorySection>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm/60">
                  Postural Habits
                </p>
                <h2 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
                  Postural habits may reflect "frozen" phases of these ancient waves.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  A movement wave has phases — extension, flexion, rotation, lateral shift.
                  When the nervous system gets stuck in one phase, posture reflects it.
                  What we call "bad posture" may be an incomplete wave.
                </p>
                <p className="mt-4 text-sm italic text-muted-foreground/60">
                  PRI proposes that imagery can restart the wave.
                </p>
              </div>
              <div className="order-1 flex justify-center overflow-x-auto md:order-2">
                <FrozenPhaseFigure className="h-52 w-auto min-w-[280px] text-foreground sm:h-60" />
              </div>
            </div>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 11: HEAD AND NECK AS MASTER ORGANIZER
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 bg-gradient-to-b from-secondary/40 to-transparent px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <StorySection>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="flex justify-center">
                <HeadOrganizerFigure className="h-72 w-auto text-foreground sm:h-80" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/50">
                  The Master Organizer
                </p>
                <h2 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
                  Head and neck organization influences the whole body.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  The head and neck segment evolved first as the primary sensory and
                  neurological director. How it is organized in space sends cascading
                  signals down through the trunk and into the pelvis.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Change the head-neck relationship and the whole body reorganizes —
                  not through effort, but through neurological influence.
                </p>
              </div>
            </div>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 12: THE EVOLUTION OF CARING — THE VENTRAL SURFACE
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <StorySection>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm/60">
                  The Ventral Surface
                </p>
                <h2 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
                  The front of the body evolved to support nurturing and care.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  In mammals, the ventral surface became the site of nursing, holding,
                  and contact. It is softer, more mobile, more neurologically sensitive
                  than the dorsal surface.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  The front of your body carries this evolutionary history — an openness
                  shaped by millions of years of care.
                </p>
              </div>
              <div className="order-1 flex justify-center md:order-2">
                <VentralCareFigure className="h-56 w-auto text-foreground sm:h-64" />
              </div>
            </div>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL SECTION: POSTURE AS LIVING EVOLUTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 bg-gradient-to-b from-warm/5 to-transparent px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <StorySection>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/50">
              Deep Time
            </p>
            <h2 className="mt-3 text-2xl font-light tracking-tight sm:text-3xl">
              Posture is the living expression of evolutionary history.
            </h2>
            <FinalOverlayFigure className="mx-auto mt-10 h-64 w-auto text-foreground sm:h-80" />
            <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
              PRI proposes that by changing how we sense our body surfaces, we can
              reorganize posture using these ancient neurological maps. Not through
              correction or exercise — through imagination.
            </p>
            <p className="mt-4 text-sm italic text-muted-foreground/60">
              Evolution → body surfaces → movement waves → modern posture.
            </p>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA — WHERE TO GO NEXT
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 bg-secondary/30 px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <StorySection>
            <div className="text-center">
              <h2 className="text-2xl font-light tracking-tight sm:text-3xl">
                Where would you like to go from here?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Follow your curiosity. Each path deepens the experience.
              </p>
            </div>
          </StorySection>
          <StorySection className="mt-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/story"
                className="group rounded-xl border border-border/60 bg-card p-6 shadow-xl transition-all hover:border-warm/40 hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-warm/60">
                  Feel It
                </p>
                <h3 className="mt-2 text-lg font-semibold group-hover:text-warm">
                  Visual Introduction 1
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Experience the body surfaces directly through guided somatic imagery.
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-warm">
                  Begin <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/experience/first-touch"
                className="group rounded-xl border border-border/60 bg-card p-6 shadow-xl transition-all hover:border-warm/40 hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-warm/60">
                  Experience
                </p>
                <h3 className="mt-2 text-lg font-semibold group-hover:text-warm">
                  Guided Sessions
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Longer, deeper guided imagery sessions at your own pace.
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-warm">
                  Try it <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/learn/evolution"
                className="group rounded-xl border border-border/60 bg-card p-6 shadow-xl transition-all hover:border-warm/40 hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-primary/40">
                  Study
                </p>
                <h3 className="mt-2 text-lg font-semibold group-hover:text-warm">
                  Evolution &amp; PRI
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Read the conceptual framework behind the evolutionary model.
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-warm">
                  Explore <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/book"
                className="group rounded-xl border border-border/60 bg-card p-6 shadow-xl transition-all hover:border-warm/40 hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-primary/40">
                  Read
                </p>
                <h3 className="mt-2 text-lg font-semibold group-hover:text-warm">
                  <BookOpen className="mr-2 inline h-4 w-4" />
                  The Book
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  The complete guide — theory, practice, and evolutionary science.
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-warm">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </div>
          </StorySection>
        </div>
      </section>

    </div>
  );
}
