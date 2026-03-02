import { Exercises } from '@/lib/types/blog';
import Link from 'next/link';

interface ExerciseCardProps {
  exercise: Exercises;
}

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <Link
      href={`/blog/exercises/${exercise.id}`}
      className="group flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-xl transition-all hover:border-warm/40 hover:shadow-md"
    >
      {exercise.image && (
        <div className="aspect-[16/9] overflow-hidden rounded-xl">
          <img
            src={exercise.image}
            alt={exercise.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <div>
        <h3 className="text-xl font-semibold text-foreground">{exercise.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{exercise.excerpt}</p>
      </div>
      <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground">
        <span>{new Date(exercise.createdAt).toLocaleDateString()}</span>
        <div className="flex gap-2 text-warm font-medium">See full post →</div>
      </div>
    </Link>
  );
}
