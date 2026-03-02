import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
  className?: string;
}

export function BlogLayout({ children, className = "" }: BlogLayoutProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-sky-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {children}
      </div>
    </div>
  );
}
