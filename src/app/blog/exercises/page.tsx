import Link from "next/link";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { getAllExercises } from "@/lib/blog-posts";
import { ExerciseCard } from "@/components/blog/ExerciseCard";

export default async function ExercisesPage() {
  const exercises = (await getAllExercises()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <BlogHeader
        title="Featured Exercises"
        subtitle="Practice prompts, imagery, and somatic exercises pulled from PRI." 
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 space-y-8">
        {exercises.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {exercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-2xl text-center py-16">
            <p className="text-lg text-muted-foreground">
              There are no exercises yet. Check back soon for new guidance.
            </p>
            <div className="mt-8">
              <Link href="/blog" className="text-warm hover:text-warm/80 font-medium">
                ← Back to Journal
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
