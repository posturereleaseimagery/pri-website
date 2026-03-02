import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getExerciseById, getAllExercises } from '@/lib/blog-posts';

export default async function ExercisePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const exercise = await getExerciseById(id);

  if (!exercise) {
    notFound();
  }

  const getOrdinal = (n: number) => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  const date = new Date(exercise.createdAt);
  const day = date.getDate();
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).replace(/\d+/, `${day}${getOrdinal(day)}`);

  const allExercises = await getAllExercises();
  const sortedExercises = allExercises.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const currentIndex = sortedExercises.findIndex(e => e.id === id);
  const prevExercise = currentIndex > 0 ? sortedExercises[currentIndex - 1] : null;
  const nextExercise = currentIndex < sortedExercises.length - 1 ? sortedExercises[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <article className="prose prose-lg mx-auto dark:prose-invert">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{exercise.title}</h1>
          <div className="text-sm text-muted-foreground mb-8">
            {formattedDate}
          </div>
          {exercise.image && (
            <img src={exercise.image} alt={exercise.title} className="w-full rounded-md mb-2" />
          )}
          <div style={{ whiteSpace: 'pre-wrap' }}>{exercise.content}</div>
        </article>
        <div className="mt-8">
          <div className="text-center">
            {prevExercise && <Link href={`/blog/exercises/${prevExercise.id}`} className="text-warm hover:text-warm/80">← Previous: {prevExercise.title}</Link>}
            {prevExercise && ' | '}
            <Link href="/blog/exercises" className="text-warm hover:text-warm/80">Back to Exercises</Link>
            {nextExercise && ' | '}
            {nextExercise && <Link href={`/blog/exercises/${nextExercise.id}`} className="text-warm hover:text-warm/80">Next: {nextExercise.title} →</Link>}
          </div>
        </div>
      </div>
    </div>
  );
}
