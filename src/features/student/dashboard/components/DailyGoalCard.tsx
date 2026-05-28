import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import { DAILY_GOALS_DATA } from '../mock/mockProgressData';

export const DailyGoalCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border-2 border- dark:border-slate-700 shadow-sm transition-colors">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-bold text-gray-800 dark:text-white transition-colors">
            Mục tiêu hằng ngày
          </h2>
          <p className="text-sm text-gray-500 dark:text-slate-400 transition-colors">
            Tiếp tục duy trì chuỗi học tập!
          </p>
        </div>
        <div className="p-2 bg-orange-50 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400 transition-colors">
          <Target size={20} />
        </div>
      </div>

      <div className="space-y-4">
        {DAILY_GOALS_DATA.map((goal) => {
          const progressPercent = Math.min(
            100,
            Math.round((goal.current / goal.target) * 100),
          );
          const isCompleted = goal.current >= goal.target;

          let iconBg = 'bg-gray-100 dark:bg-slate-800';
          let iconColor = 'text-gray-400 dark:text-slate-500';
          let barColor = 'bg-gray-500 dark:bg-slate-500';

          if (goal.type === 'success') {
            if (isCompleted) {
              iconBg = 'bg-green-100 dark:bg-green-900/30';
              iconColor = 'text-green-600 dark:text-green-400';
            }
            barColor = 'bg-green-500 dark:bg-green-500';
          } else if (goal.type === 'info') {
            barColor = 'bg-blue-500 dark:bg-blue-500';
          } else if (goal.type === 'warning') {
            barColor = 'bg-purple-500 dark:bg-purple-500';
          }

          return (
            <div key={goal.id} className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center ${iconColor} flex-shrink-0`}
              >
                {isCompleted ? (
                  <CheckCircle2 size={20} />
                ) : (
                  <div className="w-3 h-3 rounded-full border-2 border-gray-400 dark:border-slate-500"></div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-gray-700 dark:text-slate-300 transition-colors">
                    {goal.title}
                  </span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white transition-colors">
                    {goal.current}/{goal.target}
                  </span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-2 transition-colors">
                  <div
                    className={`${barColor} h-2 rounded-full`}
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-6 py-2.5 bg-gray-50 dark:bg-slate-800/50 hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-slate-300 text-sm font-bold rounded-lg transition-colors border-2 border- dark:border-slate-700">
        Xem tất cả mục tiêu
      </button>
    </div>
  );
};
