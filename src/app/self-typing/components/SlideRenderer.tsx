"use client";

import { Slide, QuizResponses, DerivedType } from '../types';
import { SlideLayout } from './SlideLayout';
import { OptionSelector } from './OptionSelector';
import { ResultSummary } from './ResultSummary';
import { EmailCaptureForm } from './EmailCaptureForm';

interface SlideRendererProps {
  slide: Slide;
  responses: QuizResponses;
  derivedType: DerivedType;
  onNext: () => void;
  onPrev: () => void;
  onResponse: (field: keyof QuizResponses, value: string | null) => void;
  isFirst: boolean;
  isLast: boolean;
}

export function SlideRenderer({
  slide,
  responses,
  derivedType,
  onNext,
  onPrev,
  onResponse,
  isFirst,
  isLast,
}: SlideRendererProps) {
  const renderSlideContent = () => {
    switch (slide.type) {
      case 'info':
        return (
          <SlideLayout
            title={slide.title}
            body={slide.body}
            onNext={onNext}
            onPrev={onPrev}
            isFirst={isFirst}
            isLast={isLast}
          />
        );

      case 'choice':
        if (!slide.field || !slide.options) {
          return null;
        }

        const currentValue = responses[slide.field];

        return (
          <SlideLayout
            title={slide.title}
            body={slide.body}
            onNext={onNext}
            onPrev={onPrev}
            isFirst={isFirst}
            isLast={isLast}
            canProceed={currentValue !== null}
          >
            <div className="mt-8">
              <OptionSelector
                options={slide.options}
                selectedValue={currentValue}
                onChange={(value) => onResponse(slide.field!, value)}
              />
            </div>
          </SlideLayout>
        );

      case 'result':
        return (
          <ResultSummary
            responses={responses}
            derivedType={derivedType}
            onNext={onNext}
            onPrev={onPrev}
            isFirst={isFirst}
            isLast={isLast}
          />
        );

      case 'email':
        return (
          <EmailCaptureForm
            responses={responses}
            derivedType={derivedType}
            onNext={onNext}
            onPrev={onPrev}
            isFirst={isFirst}
            isLast={isLast}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div
      role="region"
      aria-live="polite"
      aria-label={`Slide ${slide.id}: ${slide.title}`}
    >
      {renderSlideContent()}
    </div>
  );
}
