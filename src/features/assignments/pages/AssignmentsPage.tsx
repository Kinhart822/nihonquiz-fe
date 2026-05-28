import {
  AlertCircle,
  CheckCircle2,
  ClipboardList,
  Clock,
  PlayCircle,
} from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../../app/layouts/DashboardLayout';
import {
  mockAssignments,
  type AssignmentStatus,
} from '../../lms/mock/mockAssignments';

export const AssignmentsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'pending' | 'completed' | 'overdue'
  >('pending');
  const navigate = useNavigate();

  const filteredAssignments = mockAssignments.filter(
    (a) => a.status === activeTab,
  );

  const getStatusColor = (status: AssignmentStatus) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/40';
      case 'overdue':
        return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/40';
      default:
        return 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/40';
    }
  };

  const getStatusIcon = (status: AssignmentStatus) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 size={16} />;
      case 'overdue':
        return <AlertCircle size={16} />;
      default:
        return <Clock size={16} />;
    }
  };

  return (
    <DashboardLayout>
      <div className="w-full max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-teal-950 dark:text-white mb-2">
              Bài tập & Kiểm tra
            </h1>
            <p className="text-gray-500 dark:text-slate-400 text-sm md:text-base">
              Theo dõi và hoàn thành các bài tập được giao từ giáo viên.
            </p>
          </div>
          <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 rounded-2xl flex items-center justify-center">
            <ClipboardList size={24} />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-8 bg-gray-50 dark:bg-slate-900 p-1.5 rounded-2xl overflow-x-auto no-scrollbar border border-gray-100 dark:border-slate-800">
          <button
            onClick={() => setActiveTab('pending')}
            className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'pending'
                ? 'bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-400 shadow-sm'
                : 'text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            Đang chờ
          </button>
          <button
            onClick={() => setActiveTab('overdue')}
            className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'overdue'
                ? 'bg-white dark:bg-slate-800 text-red-600 dark:text-red-400 shadow-sm'
                : 'text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            Quá hạn
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'completed'
                ? 'bg-white dark:bg-slate-800 text-green-600 dark:text-green-400 shadow-sm'
                : 'text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            Đã nộp
          </button>
        </div>

        {/* List */}
        <div className="space-y-4">
          {filteredAssignments.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800">
              <ClipboardList
                size={48}
                className="mx-auto text-gray-300 dark:text-slate-700 mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                Không có bài tập
              </h3>
              <p className="text-gray-500 dark:text-slate-400">
                Bạn đã hoàn thành xuất sắc mọi nhiệm vụ!
              </p>
            </div>
          ) : (
            filteredAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group flex flex-col md:flex-row gap-6 md:items-center justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 text-xs font-black bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300 rounded-lg">
                      {assignment.jlptLevel}
                    </span>
                    <span
                      className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-lg ${getStatusColor(assignment.status)}`}
                    >
                      {getStatusIcon(assignment.status)}
                      <span className="capitalize">{assignment.status}</span>
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {assignment.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-gray-500 dark:text-slate-400">
                    <span>
                      Lớp:{' '}
                      <span className="text-gray-700 dark:text-slate-300">
                        {assignment.className}
                      </span>
                    </span>
                    <span>
                      Giáo viên:{' '}
                      <span className="text-gray-700 dark:text-slate-300">
                        {assignment.teacher}
                      </span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock
                        size={14}
                        className={
                          assignment.status === 'overdue' ? 'text-red-500' : ''
                        }
                      />
                      <span
                        className={
                          assignment.status === 'overdue' ? 'text-red-500' : ''
                        }
                      >
                        Hạn:{' '}
                        {new Date(assignment.dueDate).toLocaleDateString(
                          'vi-VN',
                        )}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {assignment.status === 'completed' ? (
                    <div className="flex flex-col items-end">
                      <div className="text-3xl font-black text-green-500">
                        {assignment.score}
                        <span className="text-lg text-gray-400">/100</span>
                      </div>
                      <button className="text-sm font-bold text-teal-600 hover:underline">
                        Xem lại kết quả
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => navigate(`/practice-test/p1/play`)} // Mock route to practice test
                      className="flex items-center gap-2 px-6 py-3 bg-teal-50 dark:bg-slate-800 text-teal-700 dark:text-teal-400 font-bold rounded-xl hover:bg-teal-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <PlayCircle size={20} />
                      <span>
                        {assignment.status === 'overdue'
                          ? 'Nộp muộn'
                          : 'Làm bài'}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AssignmentsPage;
