import React from 'react';
import { mockTeacherAssignments } from '../mock/mockTeacherAssignments';
import { Plus, Search, Calendar } from 'lucide-react';

export const TeacherAssignmentsPage: React.FC = () => {
  return (
    <div className="h-full flex flex-col p-4 md:p-8 space-y-6 animate-in fade-in duration-500 overflow-y-auto no-scrollbar">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white tracking-tight">
            Bài tập
          </h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            Tạo, quản lý và chấm điểm bài tập.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Tìm kiếm bài tập..."
              className="pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border-2 border- dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-colors shadow-sm">
            <Plus size={20} />
            Tạo mới
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockTeacherAssignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white dark:bg-slate-900 border-2 border- dark:border-slate-700 rounded-3xl p-6 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="flex justify-between items-start">
              <div>
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-lg ${
                    assignment.status === 'active'
                      ? 'bg-emerald-100 text-emerald-700'
                      : assignment.status === 'draft'
                        ? 'bg-gray-100 text-gray-700'
                        : 'bg-orange-100 text-orange-700'
                  }`}
                >
                  {assignment.status === 'active'
                    ? 'ĐANG MỞ'
                    : assignment.status === 'draft'
                      ? 'BẢN NHÁP'
                      : 'ĐÃ ĐÓNG'}
                </span>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-2 group-hover:text-teal-600 transition-colors">
                  {assignment.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {assignment.className}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar size={16} />
              <span>
                Hạn chót:{' '}
                {new Date(assignment.deadline).toLocaleDateString('vi-VN')}
              </span>
            </div>

            <div className="mt-2">
              <div className="flex justify-between text-sm font-medium mb-1">
                <span className="text-gray-600 dark:text-gray-400">
                  Tỷ lệ nộp bài
                </span>
                <span className="text-teal-600 font-bold">
                  {assignment.submittedCount}/{assignment.totalStudents}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  className="bg-teal-500 h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${(assignment.submittedCount / assignment.totalStudents) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-slate-700 mt-2">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Điểm TB</span>
                <span className="font-black text-gray-800 dark:text-white">
                  {assignment.averageScore > 0
                    ? `${assignment.averageScore}%`
                    : '-'}
                </span>
              </div>
              <button className="text-sm font-bold text-teal-600 hover:text-teal-700">
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherAssignmentsPage;
