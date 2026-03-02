export type HeadOrientation = 'withdrawn' | 'controlled' | null;
export type HipOrientation = 'humming' | 'explosive' | null;
export type ParentModel = 'mother' | 'father' | 'unclear' | null;
export type DerivedType = 'A' | 'B' | 'C' | 'D' | null;

export interface QuizResponses {
  headOrientation: HeadOrientation;
  hipOrientation: HipOrientation;
  parentHeadModel: ParentModel;
  parentHipModel: ParentModel;
}

export interface QuizState {
  currentStep: number;
  responses: QuizResponses;
  derivedType: DerivedType;
}

export type QuizAction =
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'SET_RESPONSE'; field: keyof QuizResponses; value: string | null }
  | { type: 'CALCULATE_TYPE' }
  | { type: 'RESET' };

export type SlideType = 'info' | 'choice' | 'result' | 'email';

export interface SlideOption {
  label: string;
  value: string;
}

export interface Slide {
  id: string;
  title: string;
  body: string;
  type: SlideType;
  field?: keyof QuizResponses;
  options?: SlideOption[];
  autoAdvance?: boolean;
  duration?: number;
}

export interface EmailSubmissionData {
  email: string;
  responses: QuizResponses;
  derivedType: DerivedType;
}
