import { CheckCircle2, Play, RotateCcw } from 'lucide-react';
import React from 'react';
import type { Topic } from '../mock/mockVocabulary';

interface TopicCardProps {
  topic: Topic;
  categoryType: 'Vocabulary' | 'Grammar' | 'Kanji';
}

export const TopicCard: React.FC<TopicCardProps> = ({
  topic,
  categoryType,
}) => {
  const progressPercent = Math.round(
    (topic.learnedItems / topic.totalItems) * 100,
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Vocabulary':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Grammar':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Kanji':
        return 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'Vocabulary':
        return 'Từ vựng';
      case 'Grammar':
        return 'Ngữ pháp';
      case 'Kanji':
        return 'Kanji';
      default:
        return category;
    }
  };

  return (
    <div className="group bg-white dark:bg-slate-900 rounded-2xl p-6 border border-teal-100/50 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-teal-300 dark:hover:border-teal-700 transition-all duration-300 flex flex-col h-full cursor-pointer relative overflow-hidden">
      {/* Decorative gradient blob on hover */}
      <div className="absolute -right-12 -top-12 w-32 h-32 bg-teal-500/10 dark:bg-teal-400/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>

      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-1 text-xs font-black bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 rounded-lg border border-teal-100/50 dark:border-teal-800/50">
            {topic.level}
          </span>
          <span
            className={`px-2.5 py-1 text-xs font-bold rounded-lg ${getCategoryColor(categoryType)}`}
          >
            {getCategoryLabel(categoryType)}
          </span>
        </div>
        {topic.status === 'Completed' && (
          <div
            className="text-emerald-500 dark:text-emerald-400"
            title="Đã hoàn thành"
          >
            <CheckCircle2 size={24} strokeWidth={2.5} />
          </div>
        )}
      </div>

      <h3 className="text-lg font-bold text-teal-950 dark:text-slate-100 mb-2 relative z-10 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors line-clamp-1">
        {topic.title}
      </h3>

      <p className="text-sm text-gray-500 dark:text-slate-400 mb-6 flex-1 line-clamp-2 relative z-10">
        {topic.description}
      </p>

      <div className="mt-auto relative z-10">
        <div className="flex justify-between text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
          <span>Tiến độ</span>
          <span>
            {topic.learnedItems} / {topic.totalItems} mục
          </span>
        </div>

        <div className="h-2.5 w-full bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden mb-4 border border-gray-200 dark:border-slate-700/50">
          <div
            className={`h-full rounded-full transition-all duration-1000 ease-out ${
              topic.status === 'Completed'
                ? 'bg-emerald-500'
                : 'bg-gradient-to-r from-teal-400 to-teal-500'
            }`}
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <button className="w-full py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 bg-gray-50 text-teal-700 dark:bg-slate-800 dark:text-teal-400 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white group-hover:shadow-md">
          {topic.status === 'Not Started' ? (
            <>
              <Play size={16} className="fill-current" />
              <span>Bắt đầu học</span>
            </>
          ) : topic.status === 'In Progress' ? (
            <>
              <Play size={16} className="fill-current" />
              <span>Học tiếp</span>
            </>
          ) : (
            <>
              <RotateCcw size={16} />
              <span>Ôn tập lại ({topic.score}đ)</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
