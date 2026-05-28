import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockAssignments } from '../../lms/mock/mockAssignments';

export const AssignmentsDueCard: React.FC = () => {
  const navigate = useNavigate();
  // Filter pending or overdue
  const dueAssignments = mockAssignments
    .filter((a) => a.status === 'pending' || a.status === 'overdue')
    .slice(0, 3); // top 3

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-100 dark:border-slate-800 shadow-sm flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl flex items-center justify-center">
            <AlertCircle size={20} />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Assignments Due Soon
          </h2>
        </div>
        <button
          onClick={() => navigate('/assignments')}
          className="text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline"
        >
          View all
        </button>
      </div>

      <div className="flex-1 flex flex-col gap-3">
        {dueAssignments.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-gray-500 dark:text-slate-400">
            Không có bài tập nào sắp đến hạn! 🎉
          </div>
        ) : (
          dueAssignments.map((assignment) => (
            <div
              key={assignment.id}
              onClick={() => navigate(`/assignments`)}
              className="group flex flex-col p-4 bg-gray-50 dark:bg-slate-800/50 rounded-2xl cursor-pointer hover:bg-red-50 dark:hover:bg-red-900/10 border border-transparent hover:border-red-100 dark:hover:border-red-900/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-1">
                  {assignment.title}
                </h3>
                {assignment.status === 'overdue' && (
                  <span className="px-2 py-0.5 text-xs font-bold bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400 rounded-md whitespace-nowrap">
                    Overdue
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 dark:text-slate-400 mb-2 truncate">
                {assignment.className} • {assignment.teacher}
              </p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 dark:text-slate-500">
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
                  {new Date(assignment.dueDate).toLocaleDateString('vi-VN')}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
