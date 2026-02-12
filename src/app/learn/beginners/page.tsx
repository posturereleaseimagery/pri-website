import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmailCapture } from "@/components/email-capture";

const steps = [
  {
    title: "Try a Guided Experience",
    desc: "Start with 60 seconds of body surface awareness. No reading required.",
    href: "/experience/first-touch",
    cta: "Start the experience",
  },
  {
    title: "Learn About Body Surfaces",
    desc: "Understand why the back and front of your body feel so different — and why it matters for posture.",
    href: "/learn/surfaces",
    cta: "Read about surfaces",
  },
  {
    title: "Explore the Seam",
    desc: "Discover the boundary where back meets front, and how sensing it can change the way you stand and move.",
    href: "/experience/seam",
    cta: "Experience the seam",
  },
  {
    title: "Work with Imagery",
    desc: "Learn how simple mental images — an egg, a lamb — can reorganize your posture from the inside.",
    href: "/experience/imagery",
    cta: "Try the imagery",
  },
  {
    title: "Understand the Four Types",
    desc: "See how your personality tendencies and postural habits may be connected.",
    href: "/learn/four-types",
    cta: "Explore the types",
  },
  {
    title: "Go Deeper with the Book",
    desc: "When you are ready for the full picture, the book brings everything together.",
    href: "/book",
    cta: "About the book",
  },
];

export default function BeginnersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sage">
          Beginner Path
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Start With What You Feel
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          You do not need to understand posture to begin changing it. PRI starts with
          sensation — what you can feel right now, in your own body. Follow these steps
          at your own pace. Each one builds on the last.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl space-y-4">
        {steps.map((step, i) => (
          <div
            key={i}
            className="rounded-xl border border-border/60 bg-card p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage/10 text-sm font-semibold text-sage">
                {i + 1}
              </span>
              <div className="flex-1">
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
                <Link
                  href={step.href}
                  className="mt-3 inline-flex items-center text-sm font-medium text-warm hover:text-warm/80"
                >
                  {step.cta}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-xl">
        <EmailCapture
          heading="Get guided along the way"
          description="Join the mailing list for free guided experiences and beginner-friendly introductions to PRI."
        />
      </div>
    </div>
  );
}
