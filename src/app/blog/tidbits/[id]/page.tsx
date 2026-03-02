import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getTidbitById, getAllTidbits } from '@/lib/blog-posts';
import { Post } from '@/lib/posts';

export default async function TidbitPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tidbit: Post | null = await getTidbitById(id);

  if (!tidbit) {
    notFound();
  }

  const getOrdinal = (n: number) => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  const date = new Date(tidbit.createdAt);
  const day = date.getDate();
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).replace(/\d+/, `${day}${getOrdinal(day)}`);

  const allTidbits = await getAllTidbits();
  const sortedTidbits: Post[] = allTidbits.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const currentIndex = sortedTidbits.findIndex(t => t.id === id);
  const prevTidbit: Post | null = currentIndex > 0 ? sortedTidbits[currentIndex - 1] : null;
  const nextTidbit: Post | null = currentIndex < sortedTidbits.length - 1 ? sortedTidbits[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <article className="prose prose-lg mx-auto dark:prose-invert">
          <div className="text-sm text-muted-foreground mb-8">
            {formattedDate}
          </div>
          {tidbit.images && tidbit.images.length > 0 && (
            <img src={`/images/${tidbit.images[0]}`} alt="Tidbit illustration" className="w-full rounded-md mb-2" />
          )}
          <div style={{ whiteSpace: 'pre-wrap' }}>{tidbit.content}</div>
        </article>
        <div className="mt-8">
          <div className="text-center">
            {prevTidbit && <Link href={`/blog/tidbits/${prevTidbit.id}`} className="text-warm hover:text-warm/80">← Previous: {prevTidbit.title}</Link>}
            {prevTidbit && ' | '}
            <Link href="/blog/tidbits" className="text-warm hover:text-warm/80">Back to Tidbits</Link>
            {nextTidbit && ' | '}
            {nextTidbit && <Link href={`/blog/tidbits/${nextTidbit.id}`} className="text-warm hover:text-warm/80">Next: {nextTidbit.title} →</Link>}
          </div>
        </div>
      </div>
    </div>
  );
}
