"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Check, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-warm">
          Contact
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Questions about PRI, the book, courses, or professional training?
          We would be glad to hear from you.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-xl border border-sage/20 bg-sage/5 p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage/10">
              <Check className="h-6 w-6 text-sage" />
            </div>
            <h2 className="mt-4 text-xl font-semibold">Message Sent</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Thank you for reaching out. We will respond as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" required className="bg-card" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-card"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                Subject
              </label>
              <Input id="subject" placeholder="What is this about?" className="bg-card" />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Your message..."
                required
                className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
            <Button type="submit" className="bg-warm text-warm-foreground hover:bg-warm/90">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        )}

        <div className="mt-12 rounded-xl border border-border/60 bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warm/10">
              <Mail className="h-5 w-5 text-warm" />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Email directly</h3>
              <p className="text-sm text-muted-foreground">
                info@posturereleaseimagery.org
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
