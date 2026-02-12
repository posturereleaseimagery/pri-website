import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, GraduationCap, Users, Layers, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmailCapture } from "@/components/email-capture";

export default function Home() {
  return (
    <>
      {/* Hero — Experiential Invitation */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-warm/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-warm">
              A 30-Second Invitation
            </p>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Close your eyes.
              <br />
              <span className="text-muted-foreground">Feel the back of your body.</span>
            </h1>
            <div className="mx-auto mt-8 max-w-lg space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Notice the surface that touches the chair, the air, the fabric of your clothing.
                The whole back of you — from your heels to the crown of your head.
              </p>
              <p>
                Now notice the front. Your face, your chest, your palms, your belly.
                Feel how different these two surfaces are.
              </p>
              <p className="font-medium text-foreground">
                You have just begun Posture Release Imagery.
              </p>
            </div>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-warm text-warm-foreground hover:bg-warm/90">
                <Link href="/experience/first-touch">
                  Continue the Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/learn">
                  Explore the Method
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is PRI — Brief */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              What is Posture Release Imagery?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              PRI is a somatic education method developed by John Appleton. It teaches you to
              change your posture and embodied experience through guided mental imagery alone —
              no exercises, no manipulation, no equipment. Just your attention and your imagination.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Eye,
                title: "Sensation First",
                desc: "Begin with what you can feel right now. Your body surfaces — back and front — are the foundation of posture.",
              },
              {
                icon: Layers,
                title: "Imagery, Not Exercise",
                desc: "Guided imaginative experiences reshape your relationship to gravity. No physical effort required.",
              },
              {
                icon: Sparkles,
                title: "Rooted in Science",
                desc: "Built on evolutionary development, embryology, and decades of somatic research from Alexander Technique to tensegrity.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border/60 bg-card p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warm/10">
                  <item.icon className="h-5 w-5 text-warm" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Paths */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Two Ways In
            </h2>
            <p className="mt-3 text-muted-foreground">
              Whether you are new to somatic work or a seasoned practitioner, there is a path for you.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Link
              href="/learn/beginners"
              className="group rounded-xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:border-warm/40 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/10">
                <Users className="h-6 w-6 text-sage" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">I&apos;m Curious</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                You experience tension, pain, or postural confusion and are open to a different
                approach. Start with a simple guided experience and discover what your body
                already knows.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-warm transition-colors group-hover:text-warm/80">
                Begin here <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/learn/professionals"
              className="group rounded-xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:border-warm/40 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-warm/10">
                <GraduationCap className="h-6 w-6 text-warm" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">I&apos;m a Professional</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                You teach Alexander Technique, yoga, Pilates, massage, or physical therapy.
                Explore PRI as a framework that deepens your existing practice through
                evolutionary and perceptual science.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-warm transition-colors group-hover:text-warm/80">
                Explore the framework <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Progressive Curriculum Preview */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              The Learning Journey
            </h2>
            <p className="mt-3 text-muted-foreground">
              PRI unfolds in layers. Each step builds on the last.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl">
            {[
              { step: "1", title: "Body Surface Sensation", desc: "Feel the distinction between your back and front surfaces.", href: "/learn/surfaces" },
              { step: "2", title: "Dorsal & Ventral Differentiation", desc: "Understand the two fundamental surfaces of your body.", href: "/learn/differentiation" },
              { step: "3", title: "The Functional Seam", desc: "Discover the living boundary where back meets front.", href: "/experience/seam" },
              { step: "4", title: "Archetypal Imagery", desc: "Work with the lamb, the egg, and other imaginative forms.", href: "/experience/imagery" },
              { step: "5", title: "The Four Types", desc: "Explore how personality tendencies relate to postural patterns.", href: "/learn/four-types" },
              { step: "6", title: "Evolutionary Development", desc: "See posture through the lens of deep biological time.", href: "/learn/evolution" },
            ].map((item, i) => (
              <Link
                key={item.step}
                href={item.href}
                className="group flex items-start gap-4 border-b border-border/40 py-5 transition-colors last:border-0 hover:bg-accent/30"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-warm/10 text-sm font-semibold text-warm">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-base font-medium group-hover:text-warm">{item.title}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Book & Courses Teaser */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-card p-8 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warm/10">
                <BookOpen className="h-5 w-5 text-warm" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">The Book</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A comprehensive guide to Posture Release Imagery — the theory, the practice,
                and the evolutionary science behind it. Best approached after you have felt
                the method for yourself.
              </p>
              <Button asChild variant="outline" className="mt-5">
                <Link href="/book">Learn More</Link>
              </Button>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-8 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage/10">
                <GraduationCap className="h-5 w-5 text-sage" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Courses & Workshops</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Structured learning for beginners and professionals. From introductory
                foundations to advanced practitioner training, guided by John Appleton.
              </p>
              <Button asChild variant="outline" className="mt-5">
                <Link href="/courses">View Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <EmailCapture />
        </div>
      </section>
    </>
  );
}
