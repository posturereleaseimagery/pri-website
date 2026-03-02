"use client";

import { useState } from 'react';
import { SlideOption } from '../types';

interface OptionSelectorProps {
  options: SlideOption[];
  selectedValue: string | null;
  onChange: (value: string | null) => void;
}

export function OptionSelector({ options, selectedValue, onChange }: OptionSelectorProps) {
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onChange(options[index].value);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      setFocusedIndex((prev) => (prev + 1) % options.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setFocusedIndex((prev) => (prev - 1 + options.length) % options.length);
    }
  };

  return (
    <div className="space-y-3" role="radiogroup" aria-label="Select an option">
      {options.map((option, index) => (
        <div
          key={option.value}
          className={`
            relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
            ${selectedValue === option.value
              ? 'border-green-500 bg-green-50 dark:bg-green-900/20 shadow-md'
              : 'border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-xl'
            }
            ${focusedIndex === index ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-800' : ''}
          `}
          onClick={() => onChange(option.value)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          tabIndex={0}
          role="radio"
          aria-checked={selectedValue === option.value}
          aria-label={option.label}
        >
          <div className="flex items-center">
            <div
              className={`
                w-4 h-4 rounded-full border-2 mr-3 flex-shrink-0 transition-colors
                ${selectedValue === option.value
                  ? 'border-green-500 bg-green-500'
                  : 'border-gray-300'
                }
              `}
            >
              {selectedValue === option.value && (
                <div className="w-full h-full rounded-full bg-white scale-50"></div>
              )}
            </div>
            <span className="text-left text-gray-700 dark:text-gray-300 leading-relaxed">
              {option.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
