import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  PlayCircle,
  Clock,
  BookOpen,
  Target,
  ArrowLeft,
  CheckCircle2,
  History,
} from 'lucide-react';
import { DashboardLayout } from '../../../app/layouts/DashboardLayout';
import { mockPractices } from '../mock/mockPractice';
import { mockPracticeHistory } from '../mock/mockPracticeResults';
import { mockPracticeQuestions } from '../mock/mockPracticeQuestions';

export const PracticeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Load data based on ID
  const practice = mockPractices.find((p) => p.id === id) || mockPractices[0];
  const history = id ? mockPracticeHistory[id] : null;
  const questions =
    id && mockPracticeQuestions[id] ? mockPracticeQuestions[id] : [];

  const totalQuestions = questions.length || 20; // Default mock

  return (
    <DashboardLayout>
      <div className="w-full max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/study/practice')}
          className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors mb-6 group font-semibold"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Quay lại danh sách</span>
        </button>

        {/* Header Banner */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 border border-teal-100 dark:border-slate-800 shadow-sm relative overflow-hidden mb-8">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 dark:bg-teal-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-sm font-black bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300 rounded-lg">
                  {practice.level}
                </span>
                <span className="px-3 py-1 text-sm font-bold bg-gray-100 text-gray-600 dark:bg-slate-800 dark:text-slate-400 rounded-lg">
                  {practice.category}
                </span>
                <span className="px-3 py-1 text-sm font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400 rounded-lg">
                  {practice.difficulty}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-teal-950 dark:text-white mb-4">
                {practice.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl">
                {practice.description}
              </p>
            </div>

            <button
              onClick={() => navigate(`/practice-test/${practice.id}/play`)}
              className="flex-shrink-0 flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-600 hover:to-teal-500 text-white font-bold text-lg rounded-2xl shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all duration-300 hover:-translate-y-1 w-full md:w-auto group"
            >
              <PlayCircle
                size={24}
                className="group-hover:scale-110 transition-transform"
              />
              <span>Bắt đầu làm bài</span>
            </button>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
              <BookOpen size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500 dark:text-slate-400">
                Số câu hỏi
              </p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {totalQuestions} câu
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500 dark:text-slate-400">
                Thời gian dự kiến
              </p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                ~ 15 phút
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
              <Target size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500 dark:text-slate-400">
                Kỹ năng
              </p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                Từ vựng & Ngữ pháp
              </p>
            </div>
          </div>
        </div>

        {/* History & Progress */}
        {history && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-gray-100 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-teal-950 dark:text-white">
              <History size={24} className="text-teal-600 dark:text-teal-400" />
              <h2 className="text-2xl font-bold">Lịch sử làm bài</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm font-semibold text-gray-500 dark:text-slate-400 mb-2">
                  Thành tích tốt nhất
                </p>
                <div className="flex items-end gap-3">
                  <span className="text-4xl font-black text-teal-600 dark:text-teal-400">
                    {history.recentScore}
                  </span>
                  <span className="text-xl font-bold text-gray-400">
                    / {history.totalScore}
                  </span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-slate-800 h-3 rounded-full mt-4 overflow-hidden">
                  <div
                    className="bg-teal-500 h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${(history.recentScore / history.totalScore) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-green-500" />
                    <span className="font-semibold text-gray-700 dark:text-slate-300">
                      Độ chính xác
                    </span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">
                    {history.accuracy}%
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-blue-500" />
                    <span className="font-semibold text-gray-700 dark:text-slate-300">
                      Lần làm cuối
                    </span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">
                    {new Date(history.lastAttempt).toLocaleDateString('vi-VN')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};
