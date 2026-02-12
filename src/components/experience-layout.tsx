"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmailCapture } from "@/components/email-capture";

interface ExperienceStep {
  instruction: string;
  duration?: string;
}

interface ExperienceLayoutProps {
  title: string;
  subtitle: string;
  steps: ExperienceStep[];
  nextExperience?: { label: string; href: string };
  prevExperience?: { label: string; href: string };
}

export function ExperienceLayout({
  title,
  subtitle,
  steps,
  nextExperience,
  prevExperience,
}: ExperienceLayoutProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
        <div className="mx-auto max-w-lg text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-warm">
            Guided Experience
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
          <p className="mt-6 text-sm text-muted-foreground">
            Find a comfortable position. You may close your eyes at any point.
          </p>
          <Button
            onClick={() => setStarted(true)}
            size="lg"
            className="mt-8 bg-warm text-warm-foreground hover:bg-warm/90"
          >
            <Play className="mr-2 h-4 w-4" />
            Begin
          </Button>
        </div>
      </div>
    );
  }

  const step = steps[currentStep];
  const isLast = currentStep === steps.length - 1;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="flex min-h-[50vh] flex-col items-center justify-center">
        <div className="mx-auto max-w-lg text-center">
          {/* Progress */}
          <div className="mb-8 flex items-center justify-center gap-1.5">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentStep
                    ? "w-8 bg-warm"
                    : i < currentStep
                    ? "w-4 bg-warm/40"
                    : "w-4 bg-border"
                }`}
              />
            ))}
          </div>

          {/* Instruction */}
          <p className="text-xl leading-relaxed text-foreground sm:text-2xl">
            {step.instruction}
          </p>
          {step.duration && (
            <p className="mt-4 text-sm text-muted-foreground">
              Take {step.duration} with this.
            </p>
          )}

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-4">
            {currentStep > 0 && (
              <Button
                variant="ghost"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back
              </Button>
            )}
            {!isLast ? (
              <Button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="bg-warm text-warm-foreground hover:bg-warm/90"
              >
                Continue
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <p className="text-sm font-medium text-sage">Experience complete.</p>
                <div className="flex gap-3">
                  {nextExperience && (
                    <Button asChild className="bg-warm text-warm-foreground hover:bg-warm/90">
                      <Link href={nextExperience.href}>
                        {nextExperience.label}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  <Button asChild variant="outline">
                    <Link href="/experience">All Experiences</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Post-experience email capture */}
      {isLast && (
        <div className="mx-auto mt-16 max-w-xl">
          <EmailCapture
            heading="Want more guided experiences?"
            description="Join the PRI mailing list for free guided imagery sessions and gentle introductions to the method."
          />
        </div>
      )}

      {/* Prev/Next navigation at bottom */}
      <div className="mt-12 flex items-center justify-between border-t border-border/60 pt-6">
        {prevExperience ? (
          <Link
            href={prevExperience.href}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {prevExperience.label}
          </Link>
        ) : (
          <div />
        )}
        {nextExperience ? (
          <Link
            href={nextExperience.href}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            {nextExperience.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
