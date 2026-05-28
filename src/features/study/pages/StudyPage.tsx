import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { DashboardLayout } from '../../../app/layouts/DashboardLayout';

export const StudyPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="w-full px-4 py-8 md:px-8 md:py-12 lg:px-16 xl:px-24">
        {/* Navigation Pills */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white/50 dark:bg-slate-900/50 border border-teal-100 dark:border-slate-800 p-1 rounded-2xl shadow-sm backdrop-blur-md transition-colors">
            <NavLink
              to="/study/vocabulary"
              className={({ isActive }) =>
                `px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20 scale-100'
                    : 'text-gray-500 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-800'
                }`
              }
            >
              Từ vựng
            </NavLink>
            <NavLink
              to="/study/grammar"
              className={({ isActive }) =>
                `px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20 scale-100'
                    : 'text-gray-500 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-800'
                }`
              }
            >
              Ngữ pháp
            </NavLink>
            <NavLink
              to="/study/kanji"
              className={({ isActive }) =>
                `px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20 scale-100'
                    : 'text-gray-500 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-800'
                }`
              }
            >
              Kanji
            </NavLink>
            <NavLink
              to="/study/practice"
              className={({ isActive }) =>
                `px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20 scale-100'
                    : 'text-gray-500 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-800'
                }`
              }
            >
              Luyện tập
            </NavLink>
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudyPage;
