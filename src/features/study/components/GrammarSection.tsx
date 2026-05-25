import React from 'react';
import { Layers, FileText, Book, ChevronRight } from 'lucide-react';
import { GRAMMAR_LEVELS } from '../mock/mockGrammar';

export const GrammarSection: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 transition-colors">
          Ngữ pháp
        </h1>
        <p className="text-gray-500 dark:text-slate-400 text-sm md:text-base transition-colors">
          Khám phá và học ngữ pháp tiếng Nhật
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-gray-100 dark:border-slate-800 hover:shadow-sm transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gray-100 dark:bg-slate-800 rounded-lg flex items-center justify-center transition-colors">
              <Layers size={20} className="text-gray-700 dark:text-slate-300" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">
                5
              </div>
              <div className="text-xs text-gray-500 dark:text-slate-400 uppercase tracking-wide transition-colors">
                Trình độ
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-gray-100 dark:border-slate-800 hover:shadow-sm transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center transition-colors">
              <FileText
                size={20}
                className="text-blue-600 dark:text-blue-400"
              />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">
                95
              </div>
              <div className="text-xs text-gray-500 dark:text-slate-400 uppercase tracking-wide transition-colors">
                Bài học
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-gray-100 dark:border-slate-800 hover:shadow-sm transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-600 dark:bg-blue-600/90 rounded-lg flex items-center justify-center shadow-md shadow-blue-100 dark:shadow-none transition-colors">
              <Book size={20} className="text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">
                485
              </div>
              <div className="text-xs text-gray-500 dark:text-slate-400 uppercase tracking-wide transition-colors">
                Ngữ pháp
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold text-gray-700 dark:text-slate-200 mb-4 transition-colors">
          Danh sách trình độ
        </h2>

        {GRAMMAR_LEVELS.map((level) => (
          <div
            key={level.id}
            className="group bg-white dark:bg-slate-900 rounded-xl p-5 border border-gray-100 dark:border-slate-800 transition-all duration-300 cursor-pointer hover:shadow-md hover:border-teal-500/30 dark:hover:border-teal-500/30"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                    {level.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-slate-400 transition-colors">
                  <span className="flex items-center gap-1">
                    <FileText size={14} /> {level.lessons} bài học
                  </span>
                  <span className="flex items-center gap-1">
                    <Book size={14} /> {level.grammars} ngữ pháp
                  </span>
                </div>
              </div>
              <ChevronRight
                size={20}
                className="text-gray-400 dark:text-slate-500 transition-transform group-hover:translate-x-1"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
