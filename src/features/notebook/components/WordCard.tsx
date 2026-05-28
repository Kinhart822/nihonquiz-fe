import React from 'react';
import { Volume2, Star, Tag } from 'lucide-react';
import type { NotebookWord } from '../mock/mockNotebook';

interface WordCardProps {
  word: NotebookWord;
  onUnfavorite: (id: string) => void;
}

export const WordCard: React.FC<WordCardProps> = ({ word, onUnfavorite }) => {
  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    onUnfavorite(word.id);
  };

  const playAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Logic phát âm thanh (tương lai)
  };

  return (
    <div className="group bg-white dark:bg-slate-900 rounded-3xl p-6 border border-teal-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-teal-300 dark:hover:border-teal-700 transition-all duration-300 relative overflow-hidden flex flex-col h-full cursor-pointer">
      {/* Decorative gradient blob on hover */}
      <div className="absolute -right-16 -top-16 w-40 h-40 bg-teal-500/5 dark:bg-teal-400/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

      {/* Header: Level & Actions */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 text-xs font-black bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 rounded-lg border border-teal-100/50 dark:border-teal-800/50 shadow-sm">
            {word.level}
          </span>
          <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-gray-50 text-gray-600 dark:bg-slate-800 dark:text-slate-400 rounded-lg">
            <Tag size={12} />
            {word.type}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={playAudio}
            className="p-2 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/30 rounded-full transition-colors"
            title="Nghe phát âm"
          >
            <Volume2 size={18} />
          </button>
          <button
            onClick={toggleFavorite}
            className="p-2 rounded-full transition-all duration-300 text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 hover:scale-110"
            title="Bỏ yêu thích"
          >
            <Star size={20} className="fill-current" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Main Content: Word */}
      <div className="flex-1 flex flex-col items-center justify-center text-center mb-6 relative z-10">
        <span className="text-sm font-bold text-gray-500 dark:text-slate-400 tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {word.romaji}
        </span>
        <h3 className="text-4xl sm:text-5xl font-black text-teal-950 dark:text-white mb-2 tracking-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
          {word.kanji}
        </h3>
        <p className="text-lg font-bold text-teal-700/80 dark:text-teal-300/80">
          {word.hiragana}
        </p>
      </div>

      {/* Footer: Meaning & Example */}
      <div className="mt-auto relative z-10 border-t border-gray-100 dark:border-slate-800 pt-5">
        <p className="text-lg font-bold text-gray-800 dark:text-slate-200 mb-3 text-center">
          {word.meaning}
        </p>
        <div className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-4 text-sm">
          <p className="font-medium text-gray-800 dark:text-slate-300 mb-1">
            {word.example}
          </p>
          <p className="text-gray-500 dark:text-slate-500 italic">
            {word.exampleMeaning}
          </p>
        </div>
      </div>
    </div>
  );
};
