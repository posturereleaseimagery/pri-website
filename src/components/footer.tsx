"use client";

import Link from "next/link";
import { Feather } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const footerLinks = [
  {
    title: "Experience",
    links: [
      { label: "First Touch", href: "/experience/first-touch" },
      { label: "Surfaces", href: "/experience/surfaces" },
      { label: "The Seam", href: "/experience/seam" },
      { label: "Imagery", href: "/experience/imagery" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "For Beginners", href: "/learn/beginners" },
      { label: "For Professionals", href: "/learn/professionals" },
      { label: "Four Types", href: "/learn/four-types" },
      { label: "Evolution", href: "/learn/evolution" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "The Book", href: "/book" },
      { label: "Courses", href: "/courses" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "John Appleton", href: "/about" },
      { label: "Lineage", href: "/about/lineage" },
      { label: "The Method", href: "/about/method" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <Feather className="h-5 w-5 text-warm" />
            <span className="text-sm font-medium text-primary">
              Posture Release Imagery
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Developed by John Appleton. All rights reserved.
          </p>
        </div>
        <div className="mt-6 flex justify-center border-t border-border/40 pt-6">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
