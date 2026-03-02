"use client";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
        <span>Progress</span>
        <span>{currentStep + 1} of {totalSteps}</span>
      </div>

      <div
        className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden"
        role="progressbar"
        aria-valuenow={currentStep + 1}
        aria-valuemin={1}
        aria-valuemax={totalSteps}
        aria-label={`Quiz progress: ${currentStep + 1} of ${totalSteps} slides completed`}
      >
        <div
          className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between mt-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`
              flex-1 h-1 rounded-full mx-0.5 transition-colors duration-300
              ${i <= currentStep ? 'bg-green-500' : 'bg-gray-200'}
            `}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}
