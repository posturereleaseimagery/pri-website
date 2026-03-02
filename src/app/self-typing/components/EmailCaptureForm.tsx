"use client";

import { useState } from 'react';
import { QuizResponses, DerivedType } from '../types';
import { SlideLayout } from './SlideLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface EmailCaptureFormProps {
  responses: QuizResponses;
  derivedType: DerivedType;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function EmailCaptureForm({
  responses,
  derivedType,
  onNext,
  onPrev,
  isFirst,
  isLast,
}: EmailCaptureFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/pri-quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          responses,
          derivedType,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Auto-advance after successful submission
        setTimeout(() => {
          onNext();
        }, 2000);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to save your results. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = () => {
    onNext();
  };

  if (submitStatus === 'success') {
    return (
      <SlideLayout
        title="Results Saved!"
        body="Thank you! Your self-typing results have been saved successfully."
        onNext={onNext}
        onPrev={onPrev}
        isFirst={isFirst}
        isLast={isLast}
      >
        <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <div className="flex items-center text-green-800 dark:text-green-300">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Success!</span>
          </div>
          <p className="text-green-700 dark:text-green-400 mt-2">
            Check your email for personalized insights about your postural type.
          </p>
        </div>
      </SlideLayout>
    );
  }

  return (
    <SlideLayout
      title="Save Your Results"
      body="Would you like to receive your complete type description and learn more about PRI? Enter your email to get personalized insights."
      onNext={onNext}
      onPrev={onPrev}
      isFirst={isFirst}
      isLast={isLast}
    >
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            className="w-full"
            disabled={isSubmitting}
            aria-describedby={errorMessage ? "email-error" : undefined}
          />
          {errorMessage && (
            <p id="email-error" className="mt-1 text-sm text-red-600">
              {errorMessage}
            </p>
          )}
        </div>

        <div className="flex gap-3">
          <Button
            type="submit"
            disabled={isSubmitting || !email.trim()}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
          >
            {isSubmitting ? 'Saving...' : 'Save My Results'}
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={handleSkip}
            disabled={isSubmitting}
            className="flex-1"
          >
            Skip for Now
          </Button>
        </div>
      </form>

      <p className="mt-4 text-xs text-gray-500 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </SlideLayout>
  );
}
