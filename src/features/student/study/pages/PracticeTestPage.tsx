import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { mockPracticeQuestions } from '../mock/mockPracticeQuestions';

export const PracticeTestPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const questions =
    id && mockPracticeQuestions[id]
      ? mockPracticeQuestions[id]
      : mockPracticeQuestions['p1'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>(
    'idle',
  );
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 mins mock

  const currentQuestion = questions[currentIndex];

  // Timer mock
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSelectOption = (optionId: string) => {
    if (status !== 'idle') return;
    setSelectedOptionId(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOptionId) return;

    if (selectedOptionId === currentQuestion.correctAnswerId) {
      setStatus('correct');
      setScore((prev) => prev + 1);
    } else {
      setStatus('incorrect');
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setStatus('idle');
    } else {
      // Finish
      void navigate(`/practice-test/${id || 'p1'}/result`, {
        state: {
          score,
          total: questions.length,
          timeSpent: 15 * 60 - timeLeft,
        },
      });
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-[#F0FDFA] dark:bg-slate-950 text-[#134E4A] flex flex-col font-sans">
      {/* Header */}
      <header className="flex-shrink-0 h-16 px-4 md:px-8 border-b border-teal-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-between sticky top-0 z-50">
        <button
          onClick={() => navigate(`/practice-test/${id}/detail`)}
          className="p-2 -ml-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex-1 max-w-xl mx-4">
          <div className="flex justify-between text-xs font-bold text-gray-500 mb-1.5">
            <span>
              Câu {currentIndex + 1} / {questions.length}
            </span>
            <span>{Math.round((currentIndex / questions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-teal-500 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(currentIndex / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-bold bg-teal-50 dark:bg-teal-900/40 px-3 py-1.5 rounded-lg">
          <Clock size={18} />
          <span className="tabular-nums">{formatTime(timeLeft)}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-3xl flex flex-col gap-8 mt-4 md:mt-12"
          >
            {/* Question Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-sm border-2 border- dark:border-slate-700 text-center relative">
              <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-500 dark:bg-slate-800 dark:text-slate-400 rounded-lg">
                {currentQuestion.type}
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-teal-950 dark:text-white leading-tight mt-6">
                {currentQuestion.question}
              </h2>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                const isCorrect = currentQuestion.correctAnswerId === opt.id;

                let btnClass =
                  'border-2 bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-300 border-gray-200 dark:border-slate-700 hover:border-teal-400 dark:hover:border-teal-600 hover:bg-teal-50/50 dark:hover:bg-teal-900/20';

                if (status === 'idle' && isSelected) {
                  btnClass =
                    'border-2 border-teal-500 bg-teal-50 dark:bg-teal-900/40 text-teal-900 dark:text-teal-100 ring-4 ring-teal-500/20';
                } else if (status !== 'idle') {
                  if (isCorrect) {
                    btnClass =
                      'border-2 border-green-500 bg-green-50 dark:bg-green-900/40 text-green-900 dark:text-green-100 ring-4 ring-green-500/20';
                  } else if (isSelected && !isCorrect) {
                    btnClass =
                      'border-2 border-red-500 bg-red-50 dark:bg-red-900/40 text-red-900 dark:text-red-100 ring-4 ring-red-500/20';
                  } else {
                    btnClass =
                      'border-2 bg-gray-50 dark:bg-slate-900/50 text-gray-400 dark:text-slate-500 border-gray-200 dark:border-slate-700 opacity-50';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    disabled={status !== 'idle'}
                    className={`relative w-full p-6 text-lg font-bold rounded-2xl transition-all duration-200 flex items-center justify-center text-center ${btnClass}`}
                  >
                    {opt.text}
                    {status !== 'idle' && isCorrect && (
                      <CheckCircle2
                        size={24}
                        className="absolute right-4 text-green-500"
                      />
                    )}
                    {status !== 'idle' && isSelected && !isCorrect && (
                      <XCircle
                        size={24}
                        className="absolute right-4 text-red-500"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Action Bar */}
      <footer
        className={`flex-shrink-0 border-t transition-colors duration-300 ${
          status === 'idle'
            ? 'bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-700'
            : status === 'correct'
              ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900/50'
              : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-900/50'
        }`}
      >
        <div className="max-w-5xl mx-auto w-full px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 w-full">
            {status === 'idle' ? (
              <p className="text-gray-500 dark:text-slate-400 font-medium text-center md:text-left">
                Chọn một đáp án để tiếp tục
              </p>
            ) : (
              <div className="flex items-start gap-4">
                <div
                  className={`mt-1 p-2 rounded-full flex-shrink-0 ${status === 'correct' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}
                >
                  {status === 'correct' ? (
                    <CheckCircle2 size={24} />
                  ) : (
                    <XCircle size={24} />
                  )}
                </div>
                <div>
                  <h3
                    className={`text-xl font-extrabold mb-1 ${status === 'correct' ? 'text-green-800 dark:text-green-400' : 'text-red-800 dark:text-red-400'}`}
                  >
                    {status === 'correct' ? 'Chính xác!' : 'Sai rồi!'}
                  </h3>
                  <div className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300">
                    <BookOpen size={16} className="mt-0.5 flex-shrink-0" />
                    <p>{currentQuestion.explanation}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            {status === 'idle' ? (
              <button
                onClick={handleSubmit}
                disabled={!selectedOptionId}
                className="w-full md:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 dark:disabled:bg-slate-700 disabled:text-gray-500 text-white font-extrabold text-lg rounded-2xl transition-all duration-200 uppercase tracking-widest shadow-lg shadow-teal-600/20 disabled:shadow-none"
              >
                Kiểm tra
              </button>
            ) : (
              <button
                onClick={handleNext}
                className={`w-full md:w-auto px-8 py-4 text-white font-extrabold text-lg rounded-2xl transition-all duration-200 uppercase tracking-widest flex items-center justify-center gap-2 ${
                  status === 'correct'
                    ? 'bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/20'
                    : 'bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20'
                }`}
              >
                <span>
                  {currentIndex < questions.length - 1
                    ? 'Tiếp tục'
                    : 'Kết thúc'}
                </span>
                <ArrowRight size={20} />
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};
