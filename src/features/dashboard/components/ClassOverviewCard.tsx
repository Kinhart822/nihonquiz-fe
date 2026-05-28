import React from 'react';
import { GraduationCap, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockClasses } from '../../lms/mock/mockClasses';

export const ClassOverviewCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-100 dark:border-slate-800 shadow-sm flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-xl flex items-center justify-center">
            <GraduationCap size={20} />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Lớp học của tôi
          </h2>
        </div>
        <button
          onClick={() => navigate('/classes')}
          className="text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline"
        >
          View all
        </button>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        {mockClasses.map((c) => (
          <div
            key={c.id}
            className="p-4 bg-gray-50 dark:bg-slate-800/50 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-teal-50 dark:hover:bg-teal-900/10 transition-colors border border-transparent hover:border-teal-100 dark:hover:border-teal-900/30"
          >
            <div className="flex items-center gap-3">
              <img
                src={c.teacherAvatar}
                alt={c.teacher}
                className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 shadow-sm"
              />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">
                  {c.name}
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-gray-500 dark:text-slate-400">
                  <span>{c.teacher}</span>
                  <div className="flex items-center gap-1">
                    <Users size={12} />
                    <span>{c.studentCount}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1">
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-900/40 px-2 py-0.5 rounded-md">
                {c.level}
              </span>
              <span className="text-xs font-bold text-gray-400 dark:text-slate-500">
                {c.progress}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
