"use client";

import Link from "next/link";
import { ArrowRight, ArrowDown, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmailCapture } from "@/components/email-capture";
import { StorySection } from "@/components/story/story-section";
import {
  UndifferentiatedFigure,
  DorsalVentralFigure,
  SeamFigure,
  EggFigure,
  LambFigure,
  IntegratedFigure,
  EvolutionSequence,
} from "@/components/story/illustrations";

export default function StoryPage() {
  return (
    <div className="overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: THE INVITATION — Hero
          Purpose: Immediately invite a subtle body awareness experience.
          No theory, no explanation. Just a felt prompt.
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-warm/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-xl text-center">
          <StorySection>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-warm/70">
              A Visual Introduction
            </p>
            <h1 className="text-3xl font-light leading-snug tracking-tight text-foreground/90 sm:text-4xl md:text-5xl">
              Right now, you have a body.
            </h1>
            <p className="mx-auto mt-6 max-w-sm text-lg leading-relaxed text-muted-foreground">
              It has a back and a front.
              <br />
              Can you feel the difference?
            </p>
          </StorySection>
          <StorySection className="mt-16">
            <UndifferentiatedFigure className="mx-auto h-48 w-auto text-foreground sm:h-56" />
            <p className="mt-6 text-sm italic text-muted-foreground/70">
              Before we name anything, just notice.
            </p>
          </StorySection>
          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto h-5 w-5 text-warm/40" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: UNDIFFERENTIATED AWARENESS
          Purpose: Establish the starting point — the body as one vague mass.
          Most people experience their body this way.
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <StorySection>
            <div className="text-center">
              <UndifferentiatedFigure className="mx-auto h-52 w-auto text-foreground/60 sm:h-64" />
              <h2 className="mt-8 text-2xl font-light tracking-tight sm:text-3xl">
                Most of us feel our body as one thing.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                A single shape. A vague outline. We know it is there, but we do not
                feel its surfaces distinctly.
              </p>
            </div>
          </StorySection>
          <StorySection className="mt-16">
            <div className="mx-auto max-w-sm rounded-xl border border-border/40 bg-card/50 p-6 text-center">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Place your hand on your back. Now place it on your chest.
                <br />
                <span className="mt-2 block font-medium text-foreground/80">
                  These are two different worlds.
                </span>
              </p>
            </div>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3: THE BACK SURFACE — Dorsal
          Purpose: Introduce the dorsal surface as a distinct felt reality.
          Pattern recognition: the back has a quality.
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 bg-gradient-to-b from-secondary/40 to-transparent px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <StorySection>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="flex justify-center">
                <DorsalVentralFigure highlight="dorsal" className="h-64 w-auto text-foreground sm:h-72" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/50">
                  The Back Surface
                </p>
                <h2 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
                  The part of you that faces away.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Your spine. Your shoulder blades. The backs of your legs.
                  This surface holds you up without being asked. It has been
                  working since before you were born.
                </p>
                <p className="mt-4 text-sm italic text-muted-foreground/70">
                  Feel it now — the whole back of you, from heels to crown.
                </p>
              </div>
            </div>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4: THE FRONT SURFACE — Ventral
          Purpose: Introduce the ventral surface as a contrasting quality.
          The visitor now holds two distinct sensations.
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <StorySection>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm/60">
                  The Front Surface
                </p>
                <h2 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
                  The part of you that meets the world.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Your face. Your chest. Your palms. Your belly.
                  This surface reaches, expresses, and receives.
                  It is softer, more mobile, more alive to touch.
                </p>
                <p className="mt-4 text-sm italic text-muted-foreground/70">
                  Notice how different the front feels from the back.
                </p>
              </div>
              <div className="order-1 flex justify-center md:order-2">
                <DorsalVentralFigure highlight="ventral" className="h-64 w-auto text-foreground sm:h-72" />
              </div>
            </div>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: TWO SURFACES TOGETHER
          Purpose: The "aha" moment — seeing both surfaces simultaneously.
          Transition from sensation to pattern recognition.
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 bg-gradient-to-b from-warm/5 to-transparent px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <StorySection>
            <DorsalVentralFigure highlight="both" className="mx-auto h-64 w-auto text-foreground sm:h-80" />
            <h2 className="mt-8 text-2xl font-light tracking-tight sm:text-3xl">
              You are not one surface.
              <br />
              <span className="text-muted-foreground">You are two.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              A firm, structural back. A soft, expressive front.
              Your posture is the living relationship between them.
            </p>
          </StorySection>
          <StorySection className="mt-12">
            <div className="mx-auto flex max-w-sm items-center gap-4">
              <div className="flex-1 rounded-lg bg-primary/5 p-4 text-center">
                <div className="text-xs font-medium uppercase tracking-wider text-primary/50">Dorsal</div>
                <p className="mt-1 text-sm text-muted-foreground">Structure</p>
                <p className="text-sm text-muted-foreground">Support</p>
                <p className="text-sm text-muted-foreground">Holding</p>
              </div>
              <div className="text-muted-foreground/30">&amp;</div>
              <div className="flex-1 rounded-lg bg-warm/5 p-4 text-center">
                <div className="text-xs font-medium uppercase tracking-wider text-warm/60">Ventral</div>
                <p className="mt-1 text-sm text-muted-foreground">Expression</p>
                <p className="mt-0 text-sm text-muted-foreground">Reaching</p>
                <p className="text-sm text-muted-foreground">Openness</p>
              </div>
            </div>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6: THE SEAM
          Purpose: Introduce the functional seam — where back meets front.
          This is the conceptual pivot of PRI.
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <StorySection>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="flex justify-center">
                <SeamFigure className="h-64 w-auto text-foreground sm:h-80" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm/70">
                  The Seam
                </p>
                <h2 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
                  Where back becomes front.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Running along each side of your body — from the sides of your head,
                  down your neck, along your ribs, your hips, the outer edges of your
                  legs — there is a living boundary.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  This is where the two surfaces meet. In embryological development,
                  it is where the dorsal and ventral sheets folded together to form you.
                </p>
                <p className="mt-4 text-sm italic text-muted-foreground/70">
                  Sense the sides of your body. Not back, not front — the edges.
                </p>
              </div>
            </div>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7: THE EGG
          Purpose: Introduce archetypal imagery — the egg as primordial body form.
          Shift from anatomy to imagination.
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 bg-gradient-to-b from-secondary/40 to-transparent px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <StorySection>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm/70">
              Archetypal Imagery
            </p>
            <h2 className="mt-3 text-2xl font-light tracking-tight sm:text-3xl">
              Imagine your torso as an egg.
            </h2>
            <EggFigure className="mx-auto mt-8 h-44 w-auto text-foreground sm:h-56" />
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Smooth. Continuous. Gently curved in every direction.
              The shell is your back. The open end is your front.
              Its shape is self-supporting.
            </p>
            <p className="mt-4 text-sm italic text-muted-foreground/70">
              Feel how this image changes the effort in your back and belly.
            </p>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8: THE LAMB
          Purpose: Second archetypal image — the lamb as first uprightness.
          The body responding to gravity with innocence.
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <StorySection>
            <h2 className="text-2xl font-light tracking-tight sm:text-3xl">
              Now imagine a newborn lamb.
            </h2>
            <LambFigure className="mx-auto mt-8 h-36 w-auto text-foreground sm:h-44" />
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Just born. Still finding its legs. Back arched, belly soft,
              head lifted with innocent curiosity.
            </p>
            <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
              Feel the quality of the lamb in your own body — not the shape,
              but the <em>aliveness</em>. The softness. The openness.
            </p>
            <p className="mt-4 text-sm italic text-muted-foreground/70">
              These images are not fantasies. They are evolutionary echoes.
            </p>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9: EVOLUTIONARY CONTEXT
          Purpose: Brief visual of the evolutionary journey.
          Plain-language explanation — the "why" behind the imagery.
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 bg-gradient-to-b from-warm/5 to-transparent px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <StorySection>
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/50">
                Deep Time
              </p>
              <h2 className="mt-3 text-2xl font-light tracking-tight sm:text-3xl">
                Your body remembers what your mind has forgotten.
              </h2>
              <div className="mt-10 overflow-x-auto">
                <EvolutionSequence className="mx-auto h-32 w-auto min-w-[500px] text-foreground sm:h-40" />
              </div>
              <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
                The distinction between back and front is hundreds of millions of years old.
                It was forged in water, tested on land, and refined into the upright posture
                you carry today.
              </p>
              <p className="mt-4 text-sm italic text-muted-foreground/70">
                The egg recalls the earliest body plan. The lamb recalls the first moment of standing.
              </p>
            </div>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 10: INTEGRATION
          Purpose: The resolved figure — dorsal and ventral in harmony.
          The visitor sees what "good posture" actually looks like in PRI terms.
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <StorySection>
            <IntegratedFigure className="mx-auto h-56 w-auto text-foreground sm:h-72" />
            <h2 className="mt-8 text-2xl font-light tracking-tight sm:text-3xl">
              When both surfaces find their relationship to gravity,
              <br />
              <span className="text-warm">posture releases.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Not held. Not corrected. Released.
              <br />
              The back supports. The front opens. The seam breathes.
            </p>
            <p className="mt-4 text-sm italic text-muted-foreground/70">
              You did not move. You imagined. And something shifted.
            </p>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 11: THE NAME
          Purpose: Only now do we name the method.
          The visitor has already experienced it.
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 bg-secondary/30 px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-xl text-center">
          <StorySection>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm/70">
              What you just experienced is called
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Posture Release Imagery
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Developed by John Appleton
            </p>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              A somatic education method that changes your posture and embodied
              experience through guided mental imagery. No exercises. No manipulation.
              Just your attention and your imagination.
            </p>
          </StorySection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 12: GENTLE TRANSITION — Where to go next
          Purpose: Graceful exit from the visual story into the rest of the site.
          Multiple paths based on interest level.
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border/30 px-4 py-24 sm:py-32">
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
                href="/experience/first-touch"
                className="group rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:border-warm/40 hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-warm/60">
                  Feel More
                </p>
                <h3 className="mt-2 text-lg font-semibold group-hover:text-warm">
                  Guided Experiences
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Continue with longer, deeper guided imagery sessions at your own pace.
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-warm">
                  Begin <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/learn/surfaces"
                className="group rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:border-warm/40 hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-sage/70">
                  Understand More
                </p>
                <h3 className="mt-2 text-lg font-semibold group-hover:text-warm">
                  The Concepts
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Read about body surfaces, differentiation, and the science behind PRI.
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-warm">
                  Explore <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/book"
                className="group rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:border-warm/40 hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-primary/40">
                  Study
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

              <Link
                href="/courses"
                className="group rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:border-warm/40 hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-primary/40">
                  Train
                </p>
                <h3 className="mt-2 text-lg font-semibold group-hover:text-warm">
                  <GraduationCap className="mr-2 inline h-4 w-4" />
                  Courses
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Structured learning for beginners and professional practitioners.
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-warm">
                  View courses <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </div>
          </StorySection>

          <StorySection className="mt-12">
            <div className="mx-auto max-w-xl">
              <EmailCapture
                heading="Continue the journey"
                description="Receive a free guided imagery session and gentle introductions to PRI, delivered to your inbox."
              />
            </div>
          </StorySection>
        </div>
      </section>
    </div>
  );
}
