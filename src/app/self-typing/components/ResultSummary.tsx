"use client";

import { QuizResponses, DerivedType } from '../types';
import { SlideLayout } from './SlideLayout';

interface ResultSummaryProps {
  responses: QuizResponses;
  derivedType: DerivedType;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const typeDescriptions = {
  A: {
    title: "Type A: Withdrawn Head, Humming Hips",
    description: "Your postural pattern suggests a tendency toward gathering awareness and containing energy. You may find comfort in creating space for observation while maintaining a sense of centered stability.",
    qualities: ["Observant", "Contained", "Reflective", "Grounded"]
  },
  B: {
    title: "Type B: Withdrawn Head, Explosive Hips",
    description: "Your postural pattern suggests a tendency toward expansive awareness and releasing energy. You may find comfort in broadening your field of perception while creating forward momentum.",
    qualities: ["Expansive", "Dynamic", "Curious", "Mobile"]
  },
  C: {
    title: "Type C: Controlled Head, Humming Hips",
    description: "Your postural pattern suggests a tendency toward focused awareness and containing energy. You may find comfort in directing your attention while maintaining stability and presence.",
    qualities: ["Focused", "Stable", "Intentional", "Centered"]
  },
  D: {
    title: "Type D: Controlled Head, Explosive Hips",
    description: "Your postural pattern suggests a tendency toward directed awareness and releasing energy. You may find comfort in purposeful engagement while creating momentum and action.",
    qualities: ["Direct", "Energetic", "Purposeful", "Active"]
  }
};

export function ResultSummary({
  responses,
  derivedType,
  onNext,
  onPrev,
  isFirst,
  isLast,
}: ResultSummaryProps) {
  const typeInfo = derivedType ? typeDescriptions[derivedType] : null;

  const body = derivedType && typeInfo
    ? `Based on your responses, you show tendencies toward ${typeInfo.title.toLowerCase()}.`
    : "We're calculating your postural type based on your responses...";

  return (
    <SlideLayout
      title="Your Provisional Type"
      body={body}
      onNext={onNext}
      onPrev={onPrev}
      isFirst={isFirst}
      isLast={isLast}
    >
      {typeInfo && (
        <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {typeInfo.title}
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {typeInfo.description}
          </p>

          <div className="mb-6">
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Associated Qualities:</h4>
            <div className="flex flex-wrap gap-2">
              {typeInfo.qualities.map((quality) => (
                <span
                  key={quality}
                  className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium"
                >
                  {quality}
                </span>
              ))}
            </div>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-4 rounded">
            <p className="font-medium mb-2">Remember:</p>
            <p>This is a provisional assessment based on your self-reflection. Postural patterns are dynamic and can change with awareness and practice. PRI offers guided experiences to explore these patterns more deeply.</p>
          </div>
        </div>
      )}

      {!derivedType && (
        <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400">Unable to determine type. Please go back and complete all reflections.</p>
        </div>
      )}
    </SlideLayout>
  );
}
