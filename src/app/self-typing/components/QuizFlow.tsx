"use client";

import { useReducer, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizState, QuizAction, DerivedType } from '../types';
import { slides } from '../config/slides';
import { SlideRenderer } from './SlideRenderer';
import { ProgressBar } from './ProgressBar';

const initialState: QuizState = {
  currentStep: 0,
  responses: {
    headOrientation: null,
    hipOrientation: null,
    parentHeadModel: null,
    parentHipModel: null,
  },
  derivedType: null,
};

function calculateType(responses: QuizState['responses']): DerivedType {
  const { headOrientation, hipOrientation } = responses;

  if (!headOrientation || !hipOrientation) return null;

  if (headOrientation === 'withdrawn' && hipOrientation === 'humming') return 'A';
  if (headOrientation === 'withdrawn' && hipOrientation === 'explosive') return 'B';
  if (headOrientation === 'controlled' && hipOrientation === 'humming') return 'C';
  if (headOrientation === 'controlled' && hipOrientation === 'explosive') return 'D';

  return null;
}

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'NEXT_STEP':
      const nextStep = Math.min(state.currentStep + 1, slides.length - 1);
      let newState = { ...state, currentStep: nextStep };

      // Calculate type when moving to result slide
      if (slides[nextStep]?.type === 'result') {
        newState.derivedType = calculateType(newState.responses);
      }

      return newState;

    case 'PREV_STEP':
      return {
        ...state,
        currentStep: Math.max(state.currentStep - 1, 0),
      };

    case 'SET_RESPONSE':
      const newResponses = {
        ...state.responses,
        [action.field]: action.value,
      };
      return {
        ...state,
        responses: newResponses,
      };

    case 'CALCULATE_TYPE':
      return {
        ...state,
        derivedType: calculateType(state.responses),
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export function QuizFlow() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const currentSlide = slides[state.currentStep];

  const handleNext = useCallback(() => {
    dispatch({ type: 'NEXT_STEP' });
  }, []);

  const handlePrev = useCallback(() => {
    dispatch({ type: 'PREV_STEP' });
  }, []);

  const handleResponse = useCallback((field: keyof QuizState['responses'], value: string | null) => {
    dispatch({ type: 'SET_RESPONSE', field, value });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleNext, handlePrev]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <ProgressBar currentStep={state.currentStep} totalSteps={slides.length} />

        <AnimatePresence mode="wait">
          <motion.div
            key={state.currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="min-h-[60vh] flex items-center justify-center"
          >
            <SlideRenderer
              slide={currentSlide}
              responses={state.responses}
              derivedType={state.derivedType}
              onNext={handleNext}
              onPrev={handlePrev}
              onResponse={handleResponse}
              isFirst={state.currentStep === 0}
              isLast={state.currentStep === slides.length - 1}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
