import Link from "next/link";
import { ArrowRight, Clock, Users, GraduationCap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmailCapture } from "@/components/email-capture";

const courses = [
  {
    slug: "foundations",
    title: "PRI Foundations",
    audience: "Beginners & curious learners",
    duration: "4 weeks",
    icon: Users,
    color: "sage",
    description:
      "A gentle, guided introduction to Posture Release Imagery. Learn to sense your body surfaces, work with basic imagery, and begin changing your posture through imagination.",
    includes: [
      "Weekly guided imagery sessions",
      "Simple conceptual explanations",
      "Practice exercises for daily life",
      "Community discussion space",
      "Direct Q&A with John Appleton",
    ],
  },
  {
    slug: "professional",
    title: "Professional Practitioner Training",
    audience: "Somatic & movement professionals",
    duration: "12 weeks",
    icon: GraduationCap,
    color: "warm",
    description:
      "A comprehensive training for professionals who wish to integrate PRI into their existing practice. Covers the full theoretical framework, assessment methods, and practical application.",
    includes: [
      "Complete theoretical framework",
      "The Four Type Theory in clinical practice",
      "Assessment and observation skills",
      "Guided imagery facilitation techniques",
      "Case study analysis",
      "Supervised practice sessions",
      "Certificate of completion",
    ],
  },
];

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-warm">
          Courses & Training
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Learn With Guidance
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Structured learning experiences for those who want to go deeper than self-study.
          Each course is taught by John Appleton and follows the progressive disclosure
          principle — sensation first, theory later.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.slug}
            className="flex flex-col rounded-xl border border-border/60 bg-card shadow-sm"
          >
            <div className="p-8">
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${
                course.color === "sage" ? "bg-sage/10" : "bg-warm/10"
              }`}>
                <course.icon className={`h-6 w-6 ${
                  course.color === "sage" ? "text-sage" : "text-warm"
                }`} />
              </div>
              <h2 className="mt-5 text-xl font-semibold">{course.title}</h2>
              <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                <span>{course.audience}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {course.duration}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {course.description}
              </p>
              <div className="mt-6">
                <h3 className="text-sm font-semibold">Includes</h3>
                <ul className="mt-3 space-y-2">
                  {course.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${
                        course.color === "sage" ? "text-sage" : "text-warm"
                      }`} />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-auto border-t border-border/60 p-6">
              <Button className={`w-full ${
                course.color === "sage"
                  ? "bg-sage text-sage-foreground hover:bg-sage/90"
                  : "bg-warm text-warm-foreground hover:bg-warm/90"
              }`}>
                Join Waitlist
              </Button>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Next cohort dates announced via email
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Free starting point */}
      <div className="mx-auto mt-16 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Not Ready for a Course?</h2>
        <p className="mt-3 text-muted-foreground">
          Start with the free guided experiences. They will give you a direct taste of the
          method before committing to structured study.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild variant="outline">
            <Link href="/experience/first-touch">
              Try a Free Experience
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/book">Explore the Book</Link>
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-xl">
        <EmailCapture
          heading="Be the first to know"
          description="Join the mailing list to receive course announcements, early-bird pricing, and free preparatory materials."
        />
      </div>
    </div>
  );
}
