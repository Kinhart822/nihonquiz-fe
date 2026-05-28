import React from 'react';
import { DashboardLayout } from '../../../app/layouts/DashboardLayout';
import {
  GraduationCap,
  Users,
  Calendar,
  Clock,
  ChevronRight,
} from 'lucide-react';
import { mockClasses } from '../../lms/mock/mockClasses';

export const ClassesPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="w-full max-w-6xl mx-auto px-4 py-8 md:px-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-teal-950 dark:text-white mb-2">
            Lớp học của tôi
          </h1>
          <p className="text-gray-500 dark:text-slate-400 text-sm md:text-base">
            Quản lý và theo dõi tiến độ các lớp học bạn đang tham gia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockClasses.map((cls) => (
            <div
              key={cls.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 dark:bg-teal-400/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-teal-50 dark:bg-teal-900/40 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap
                      size={28}
                      className="text-teal-600 dark:text-teal-400"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-teal-950 dark:text-white mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {cls.name}
                    </h2>
                    <div className="flex items-center gap-3 text-sm font-semibold text-gray-500 dark:text-slate-400">
                      <span className="px-2 py-0.5 bg-gray-100 dark:bg-slate-800 rounded-md text-gray-600 dark:text-slate-300">
                        {cls.level}
                      </span>
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>{cls.studentCount} học viên</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                <div className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-500 dark:text-slate-400 mb-2">
                    <img
                      src={cls.teacherAvatar}
                      alt={cls.teacher}
                      className="w-6 h-6 rounded-full"
                    />
                    <span>Giáo viên</span>
                  </div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    {cls.teacher}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-500 dark:text-slate-400 mb-2">
                    <Calendar size={16} />
                    <span>Lịch học</span>
                  </div>
                  <div className="space-y-1">
                    {cls.schedule.map((s, idx) => (
                      <p
                        key={idx}
                        className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2"
                      >
                        <span className="w-12">{s.day}</span>
                        <Clock size={12} className="text-gray-400" />
                        <span>{s.time}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-6 relative z-10">
                <div className="flex items-center justify-between text-sm font-bold mb-2">
                  <span className="text-gray-500 dark:text-slate-400">
                    Tiến độ khóa học
                  </span>
                  <span className="text-teal-600 dark:text-teal-400">
                    {cls.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-teal-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${cls.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-800 relative z-10">
                <div className="text-sm font-bold">
                  {cls.upcomingAssignmentsCount > 0 ? (
                    <span className="text-orange-500 bg-orange-50 dark:bg-orange-900/20 px-3 py-1.5 rounded-lg">
                      {cls.upcomingAssignmentsCount} bài tập chờ nộp
                    </span>
                  ) : (
                    <span className="text-green-500 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-lg">
                      Đã hoàn thành mọi bài tập
                    </span>
                  )}
                </div>
                <button className="w-10 h-10 bg-gray-50 dark:bg-slate-800 text-gray-400 hover:bg-teal-50 hover:text-teal-600 dark:hover:bg-teal-900/40 dark:hover:text-teal-400 rounded-xl flex items-center justify-center transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClassesPage;
