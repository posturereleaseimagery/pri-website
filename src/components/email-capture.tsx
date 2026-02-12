"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Check } from "lucide-react";

interface EmailCaptureProps {
  variant?: "inline" | "card";
  heading?: string;
  description?: string;
}

export function EmailCapture({
  variant = "card",
  heading = "Begin your journey",
  description = "Receive a free guided imagery session and gentle introductions to Posture Release Imagery, delivered to your inbox.",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
        {submitted ? (
          <div className="flex items-center gap-2 text-sage">
            <Check className="h-4 w-4" />
            <span className="text-sm">Welcome. Check your inbox.</span>
          </div>
        ) : (
          <>
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background"
            />
            <Button type="submit" className="bg-warm text-warm-foreground hover:bg-warm/90 shrink-0">
              Subscribe
            </Button>
          </>
        )}
      </form>
    );
  }

  return (
    <section className="rounded-xl border border-border bg-card p-8 text-center shadow-sm sm:p-10">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-warm/10">
        <Mail className="h-6 w-6 text-warm" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-foreground">{heading}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-sm gap-2">
        {submitted ? (
          <div className="flex w-full items-center justify-center gap-2 text-sage">
            <Check className="h-5 w-5" />
            <span className="text-sm font-medium">Welcome. Check your inbox.</span>
          </div>
        ) : (
          <>
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background"
            />
            <Button type="submit" className="bg-warm text-warm-foreground hover:bg-warm/90 shrink-0">
              Subscribe
            </Button>
          </>
        )}
      </form>
    </section>
  );
}
