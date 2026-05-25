import React from 'react';
import { Clock, Book, FileText, Layers } from 'lucide-react';

export const StatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-gray-100 dark:border-slate-800 hover:shadow-sm transition-shadow">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center transition-colors">
            <Clock size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">
              12h 30m
            </div>
            <div className="text-sm text-gray-500 dark:text-slate-400 font-medium transition-colors">
              Tổng thời gian
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-gray-100 dark:border-slate-800 hover:shadow-sm transition-shadow">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center transition-colors">
            <Book size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">
              350
            </div>
            <div className="text-sm text-gray-500 dark:text-slate-400 font-medium transition-colors">
              Từ vựng đã học
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-gray-100 dark:border-slate-800 hover:shadow-sm transition-shadow">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-xl flex items-center justify-center transition-colors">
            <FileText size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">
              125
            </div>
            <div className="text-sm text-gray-500 dark:text-slate-400 font-medium transition-colors">
              Kanji đã nhớ
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-gray-100 dark:border-slate-800 hover:shadow-sm transition-shadow">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center transition-colors">
            <Layers size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">
              45
            </div>
            <div className="text-sm text-gray-500 dark:text-slate-400 font-medium transition-colors">
              Cấu trúc ngữ pháp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
