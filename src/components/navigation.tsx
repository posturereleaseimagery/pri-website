"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Feather } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navItems = [
  {
    label: "Experience",
    href: "/experience",
    children: [
      { label: "First Touch", href: "/experience/first-touch" },
      { label: "Surfaces", href: "/experience/surfaces" },
      { label: "The Seam", href: "/experience/seam" },
      { label: "Imagery", href: "/experience/imagery" },
    ],
  },
  {
    label: "Learn",
    href: "/learn",
    children: [
      { label: "For Beginners", href: "/learn/beginners" },
      { label: "For Professionals", href: "/learn/professionals" },
      { label: "Body Surfaces", href: "/learn/surfaces" },
      { label: "Differentiation", href: "/learn/differentiation" },
      { label: "Four Types", href: "/learn/four-types" },
      { label: "Evolution", href: "/learn/evolution" },
    ],
  },
  { label: "Book", href: "/book" },
  { label: "Courses", href: "/courses" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "John Appleton", href: "/about" },
      { label: "Lineage", href: "/about/lineage" },
      { label: "The Method", href: "/about/method" },
    ],
  },
  { label: "Blog", href: "/blog" },
];

export function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Feather className="h-6 w-6 text-warm" />
          <span className="text-lg font-semibold tracking-tight text-primary">
            Posture Release Imagery
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full z-50 min-w-[180px] rounded-lg border border-border bg-card p-1.5 shadow-lg">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button asChild size="sm" className="ml-3 bg-warm text-warm-foreground hover:bg-warm/90">
            <Link href="/experience/first-touch">Try It Now</Link>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] overflow-y-auto">
            <SheetTitle className="flex items-center gap-2 px-2 pb-4">
              <Feather className="h-5 w-5 text-warm" />
              <span className="text-base font-semibold">PRI</span>
            </SheetTitle>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 flex flex-col gap-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button asChild className="mt-4 bg-warm text-warm-foreground hover:bg-warm/90">
                <Link href="/experience/first-touch" onClick={() => setMobileOpen(false)}>
                  Try It Now
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
