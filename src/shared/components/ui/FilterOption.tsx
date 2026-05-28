import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const FilterOption = ({
  title,
  icon: Icon,
  children,
  defaultOpen = false,
  activeCount = 0,
}: {
  title: string;
  icon: any;
  children: React.ReactNode;
  defaultOpen?: boolean;
  activeCount?: number;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-100 dark:border-slate-800 py-4 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left group"
      >
        <div className="flex items-center gap-2">
          <Icon
            size={16}
            className={`transition-colors ${activeCount > 0 ? 'text-teal-500' : 'text-gray-400 dark:text-slate-500 group-hover:text-teal-600 dark:group-hover:text-teal-400'}`}
          />
          <h3
            className={`text-sm font-bold uppercase tracking-wider transition-colors ${activeCount > 0 ? 'text-teal-700 dark:text-teal-400' : 'text-gray-600 dark:text-slate-400 group-hover:text-teal-700 dark:group-hover:text-teal-300'}`}
          >
            {title}
          </h3>
          {activeCount > 0 && (
            <span className="ml-2 w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 text-xs flex items-center justify-center font-black">
              {activeCount}
            </span>
          )}
        </div>
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
