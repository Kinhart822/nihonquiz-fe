import { CheckCircle2, Play, RotateCcw } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { PracticeExercise } from '../mock/mockPractice';

interface PracticeCardProps {
  exercise: PracticeExercise;
}

export const PracticeCard: React.FC<PracticeCardProps> = ({ exercise }) => {
  const navigate = useNavigate();

  const progressPercent = Math.round(
    (exercise.completedQuestions / exercise.totalQuestions) * 100,
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/30 ring-green-500/20';
      case 'Medium':
        return 'text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/30 ring-orange-500/20';
      case 'Hard':
        return 'text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/30 ring-red-500/20';
      default:
        return 'text-gray-600 bg-gray-50 dark:text-gray-400 dark:bg-gray-800 ring-gray-500/20';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Vocabulary':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Grammar':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Kanji':
        return 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400';
      case 'Mixed':
        return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'Mock Exam':
        return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  return (
    <div
      onClick={() => navigate(`/practice-test/${exercise.id}/detail`)}
      className="group bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border- dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-teal-300 dark:hover:border-teal-700 transition-all duration-300 flex flex-col h-full cursor-pointer relative overflow-hidden"
    >
      {/* Decorative gradient blob on hover */}
      <div className="absolute -right-12 -top-12 w-32 h-32 bg-teal-500/10 dark:bg-teal-400/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>

      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-1 text-xs font-black bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 rounded-lg border-2 border- dark:border-teal-800/50">
            {exercise.level}
          </span>
          <span
            className={`px-2.5 py-1 text-xs font-bold rounded-lg ${getCategoryColor(exercise.category)}`}
          >
            {exercise.category}
          </span>
          <span
            className={`px-2.5 py-1 text-xs font-bold rounded-lg ring-1 ${getDifficultyColor(exercise.difficulty)}`}
          >
            {exercise.difficulty}
          </span>
        </div>
        {exercise.status === 'Completed' && (
          <div
            className="text-emerald-500 dark:text-emerald-400"
            title="Đã hoàn thành"
          >
            <CheckCircle2 size={24} strokeWidth={2.5} />
          </div>
        )}
      </div>

      <h3 className="text-lg font-bold text-teal-950 dark:text-slate-100 mb-2 relative z-10 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors line-clamp-1">
        {exercise.title}
      </h3>

      <p className="text-sm text-gray-500 dark:text-slate-400 mb-6 flex-1 line-clamp-2 relative z-10">
        {exercise.description}
      </p>

      <div className="mt-auto relative z-10">
        <div className="flex justify-between text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
          <span>Tiến độ</span>
          <span>
            {exercise.completedQuestions} / {exercise.totalQuestions}
          </span>
        </div>

        <div className="h-2.5 w-full bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden mb-4 border-2 border- dark:border-slate-700/50">
          <div
            className={`h-full rounded-full transition-all duration-1000 ease-out ${
              exercise.status === 'Completed'
                ? 'bg-emerald-500'
                : 'bg-gradient-to-r from-teal-400 to-teal-500'
            }`}
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <button className="w-full py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 bg-gray-50 text-teal-700 dark:bg-slate-800 dark:text-teal-400 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white group-hover:shadow-md">
          {exercise.status === 'Not Started' ? (
            <>
              <Play size={16} className="fill-current" />
              <span>Bắt đầu ngay</span>
            </>
          ) : exercise.status === 'In Progress' ? (
            <>
              <Play size={16} className="fill-current" />
              <span>Tiếp tục học</span>
            </>
          ) : (
            <>
              <RotateCcw size={16} />
              <span>Làm lại ({exercise.score}đ)</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
