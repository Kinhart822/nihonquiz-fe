import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const FilterCheckbox = ({
  label,
  value,
  state,
  setState,
}: {
  label: string;
  value: string;
  state: string[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const isChecked = state.includes(value);

  const toggleFilter = () => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  return (
    <button
      onClick={toggleFilter}
      className="flex items-center gap-3 p-2 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 cursor-pointer transition-colors group text-left w-full"
    >
      <div
        className={`w-5 h-5 rounded border flex items-center justify-center transition-colors flex-shrink-0 ${
          isChecked
            ? 'bg-teal-500 border-teal-500 text-white'
            : 'border-gray-300 dark:border-slate-600 group-hover:border-teal-400'
        }`}
      >
        {isChecked && <CheckCircle2 size={14} strokeWidth={3} />}
      </div>
      <span
        className={`text-sm font-medium transition-colors ${
          isChecked
            ? 'text-teal-900 dark:text-teal-100'
            : 'text-gray-600 dark:text-slate-400 group-hover:text-teal-700 dark:group-hover:text-teal-300'
        }`}
      >
        {label}
      </span>
    </button>
  );
};
