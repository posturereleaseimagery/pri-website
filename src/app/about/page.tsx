import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="order-2 lg:order-1">
          <img
            src="/images/john-appleton.png"
            alt="John Appleton"
            className="w-full h-auto object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Text Content */}
        <div className="order-1 lg:order-2">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-warm">
            About
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            John Appleton
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Developer of Posture Release Imagery
          </p>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/90">
            <p className="text-muted-foreground">
              I was born in 1945 and grew up in Denver, Colorado, graduating from Colorado State University in 1967. Since the years following this graduation, I have been on a quest for greater understanding of mind/body unity. Along the trail were experiences in and study of Reichian therapy, encounter group therapy, Rolfing, Tai Chi, and the Alexander Technique. I was certified as a teacher of the Alexander Technique in 1986 following a three-year training course with Joan and Alex Murray. In addition, years spent as a carpenter were valuable in providing me numerous opportunities to experience the physics of use and the exhilaration in the physical.
            </p>
            <p className="text-muted-foreground">
              Finally, what should not be left out for this short bio is the added stimulus I had (to explore the mind/body connection wherever it led) from severe lower back pain. This happened a year or more before beginning training in the Alexander Technique. Pain can be a wonderful motivator.
            </p>
          </div>
        </div>
      </div>

        {/* Links */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href="/about/history"
            className="group rounded-xl border border-border/60 bg-card p-6 shadow-xl transition-all hover:border-warm/40 hover:shadow-md"
          >
            <h3 className="font-semibold group-hover:text-warm">History</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              The origins and imagery experiments that became PRI.
            </p>
            <span className="mt-3 inline-flex items-center text-sm font-medium text-warm">
              Explore <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </Link>
          <Link
            href="/about/method"
            className="group rounded-xl border border-border/60 bg-card p-6 shadow-xl transition-all hover:border-warm/40 hover:shadow-md"
          >
            <h3 className="font-semibold group-hover:text-warm">The PRI Method</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              How the method works and what makes it unique.
            </p>
            <span className="mt-3 inline-flex items-center text-sm font-medium text-warm">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="bg-warm text-warm-foreground hover:bg-warm/90">
            <Link href="/book">
              <BookOpen className="mr-2 h-4 w-4" />
              The Book
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/courses">
              <GraduationCap className="mr-2 h-4 w-4" />
              Courses & Training
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
  );
}
