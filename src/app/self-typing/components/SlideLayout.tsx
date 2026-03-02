"use client";

import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SlideLayoutProps {
  title: string;
  body: string;
  children?: React.ReactNode;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
  canProceed?: boolean;
}

export function SlideLayout({
  title,
  body,
  children,
  onNext,
  onPrev,
  isFirst,
  isLast,
  canProceed = true,
}: SlideLayoutProps) {
  return (
    <div className="text-center max-w-lg mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
        {title}
      </h1>

      <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
        {body}
      </p>

      {children}

      <div className="flex items-center justify-center gap-4 mt-12">
        {!isFirst && (
          <Button
            variant="outline"
            onClick={onPrev}
            className="flex items-center gap-2"
            aria-label="Go to previous slide"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>
        )}

        {!isLast && (
          <Button
            onClick={onNext}
            disabled={!canProceed}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600"
            aria-label="Go to next slide"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}

        {isLast && (
          <Button
            onClick={onNext}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600"
            aria-label="Complete quiz"
          >
            Finish
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        Use arrow keys or spacebar to navigate
      </div>
    </div>
  );
}
