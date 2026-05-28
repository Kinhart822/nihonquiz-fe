import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  Trophy,
  Clock,
  Target,
  RotateCcw,
  ArrowLeft,
  Star,
  CheckCircle2,
} from 'lucide-react';
import { DashboardLayout } from '../../../app/layouts/DashboardLayout';

export const PracticeResultPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Get score from location state or mock
  const state = location.state as {
    score?: number;
    total?: number;
    timeSpent?: number;
  } | null;
  const score = state?.score || 8;
  const total = state?.total || 10;
  const timeSpent = state?.timeSpent || 185; // 3 mins 5 seconds
  const accuracy = Math.round((score / total) * 100);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}p ${s}s`;
  };

  return (
    <DashboardLayout>
      <div className="w-full max-w-4xl mx-auto px-4 py-8 md:px-8 md:py-16 flex flex-col items-center">
        {/* Success Icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 rounded-full"></div>
          <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center shadow-xl shadow-yellow-500/30 relative z-10 border-4 border-white dark:border-slate-900">
            <Trophy size={64} className="text-white" />
          </div>
          {/* Confetti mocks */}
          <Star
            size={24}
            className="absolute -top-4 -left-8 text-yellow-400 animate-pulse"
          />
          <Star
            size={16}
            className="absolute top-1/2 -right-12 text-yellow-500 animate-pulse delay-75"
          />
          <Star
            size={32}
            className="absolute -bottom-8 left-1/4 text-yellow-300 animate-pulse delay-150"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-teal-950 dark:text-white mb-4 text-center">
          Tuyệt vời!
        </h1>
        <p className="text-lg text-gray-500 dark:text-slate-400 mb-12 text-center max-w-md">
          Bạn đã hoàn thành bài luyện tập. Hãy xem lại kết quả của mình nhé!
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-100 dark:border-slate-800 shadow-sm text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center mb-4">
              <Target size={24} />
            </div>
            <p className="text-sm font-bold text-gray-500 dark:text-slate-400 mb-1">
              Điểm số
            </p>
            <p className="text-3xl font-black text-teal-950 dark:text-white">
              <span className="text-teal-600 dark:text-teal-400">{score}</span>{' '}
              / {total}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-100 dark:border-slate-800 shadow-sm text-center flex flex-col items-center justify-center relative overflow-hidden">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 size={24} />
            </div>
            <p className="text-sm font-bold text-gray-500 dark:text-slate-400 mb-1">
              Độ chính xác
            </p>
            <p className="text-3xl font-black text-teal-950 dark:text-white">
              {accuracy}%
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-100 dark:border-slate-800 shadow-sm text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center mb-4">
              <Clock size={24} />
            </div>
            <p className="text-sm font-bold text-gray-500 dark:text-slate-400 mb-1">
              Thời gian
            </p>
            <p className="text-3xl font-black text-teal-950 dark:text-white">
              {formatTime(timeSpent)}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <button
            onClick={() => navigate(`/practice-test/${id}/play`)}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-teal-50 text-teal-700 dark:bg-slate-800 dark:text-teal-400 hover:bg-teal-100 dark:hover:bg-slate-700 font-bold rounded-2xl transition-colors"
          >
            <RotateCcw size={20} />
            <span>Làm lại</span>
          </button>

          <button
            onClick={() => navigate('/study/practice')}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-600 hover:to-teal-500 text-white font-bold rounded-2xl shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all duration-300 hover:-translate-y-1"
          >
            <ArrowLeft size={20} />
            <span>Về danh sách</span>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};
