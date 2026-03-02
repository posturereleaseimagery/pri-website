import Link from "next/link";

interface BlogHeaderProps {
  title: string;
  subtitle?: string;
}

export function BlogHeader({ title, subtitle }: BlogHeaderProps) {
  return (
    <div className="border-b border-border/60 bg-gradient-to-br from-sky-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pb-16 pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Link
          href="/blog"
          className="mb-4 inline-block text-sm font-medium text-warm hover:text-warm/80"
        >
          ← Back to Blog
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
