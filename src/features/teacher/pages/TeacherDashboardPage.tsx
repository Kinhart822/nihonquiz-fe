import React from 'react';
import { mockTeacherDashboard } from '../mock/mockTeacherDashboard';
import {
  Users,
  GraduationCap,
  ClipboardCheck,
  TrendingUp,
  Clock,
} from 'lucide-react';

export const TeacherDashboardPage: React.FC = () => {
  const {
    totalStudents,
    totalClasses,
    assignmentsCreated,
    averageScore,
    upcomingDeadlines,
    recentSubmissions,
  } = mockTeacherDashboard;

  return (
    <div className="h-full flex flex-col p-4 md:p-8 space-y-6 md:space-y-8 animate-in fade-in duration-500 overflow-y-auto no-scrollbar">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white tracking-tight">
          Bảng Điều Khiển Giáo Viên
        </h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          Chào mừng trở lại, Sensei! Dưới đây là tổng quan các lớp học của bạn.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: 'Tổng học viên',
            value: totalStudents,
            icon: <Users size={24} className="text-blue-500" />,
            bg: 'bg-blue-50 dark:bg-blue-900/20',
          },
          {
            label: 'Lớp học đang mở',
            value: totalClasses,
            icon: <GraduationCap size={24} className="text-teal-500" />,
            bg: 'bg-teal-50 dark:bg-teal-900/20',
          },
          {
            label: 'Bài tập đã tạo',
            value: assignmentsCreated,
            icon: <ClipboardCheck size={24} className="text-orange-500" />,
            bg: 'bg-orange-50 dark:bg-orange-900/20',
          },
          {
            label: 'Điểm trung bình',
            value: `${averageScore}%`,
            icon: <TrendingUp size={24} className="text-purple-500" />,
            bg: 'bg-purple-50 dark:bg-purple-900/20',
          },
        ].map((stat, i) => (
          <div
            key={i}
            className={`${stat.bg} rounded-3xl p-6 flex flex-col gap-4 border-2 border- dark:border-slate-700`}
          >
            <div className="flex justify-between items-start">
              <div className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                {stat.icon}
              </div>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white">
                {stat.value}
              </p>
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mt-1">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Deadlines */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border- dark:border-slate-700 shadow-sm flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <Clock size={20} className="text-orange-500" />
              Hạn chót sắp tới
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {upcomingDeadlines.map((deadline) => (
              <div
                key={deadline.id}
                className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex flex-col gap-2"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">
                      {deadline.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {deadline.class}
                    </p>
                  </div>
                  <span className="text-xs font-bold px-2 py-1 bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 rounded-lg">
                    {new Date(deadline.deadline).toLocaleDateString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 mt-2">
                  <div
                    className="bg-teal-500 h-2 rounded-full"
                    style={{
                      width: `${(deadline.submittedCount / deadline.totalCount) * 100}%`,
                    }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 text-right mt-1 font-medium">
                  {deadline.submittedCount} / {deadline.totalCount} đã nộp
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Submissions */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border- dark:border-slate-700 shadow-sm flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <ClipboardCheck size={20} className="text-teal-500" />
              Bài nộp gần đây
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {recentSubmissions.map((sub) => (
              <div
                key={sub.id}
                className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold">
                    {sub.studentName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">
                      {sub.studentName}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {sub.assignmentTitle}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="font-black text-teal-600 dark:text-teal-400">
                    {sub.score}%
                  </span>
                  <span className="text-xs text-gray-400">{sub.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboardPage;
