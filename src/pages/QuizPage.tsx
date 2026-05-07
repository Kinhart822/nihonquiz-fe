import { AnimatePresence, motion } from 'framer-motion';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import { useEffect, useState } from 'react';
import {
  FiAlertCircle,
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
  FiHome,
  FiSend,
} from 'react-icons/fi';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';
import LoadingScreen from '../components/LoadingScreen';
import Question, { type QuestionType } from '../components/Question';
import { testQuiz } from '../constants/test-quiz';

const QuizPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const reviewData = location.state as {
    selectedAnswers: (number | null)[];
  } | null;

  const language = searchParams.get('language') || 'JLPT N5';
  const difficulty = searchParams.get('difficulty') || 'beginner';
  const topic = searchParams.get('topic') || 'general';
  const numQuestions = Number(searchParams.get('numQuestions')) || 5;

  const [quiz, setQuiz] = useState<QuestionType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isReview, setIsReview] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const generateQuestions = async () => {
      setIsLoading(true);
      if (!reviewData) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      const questions = testQuiz.slice(0, numQuestions);
      setQuiz(questions);

      if (reviewData) {
        setSelectedAnswers(reviewData.selectedAnswers);
        setIsSubmitted(true);
        setIsReview(true);
      } else {
        setSelectedAnswers(new Array(questions.length).fill(null));
        setIsReview(false);
      }

      setIsLoading(false);
    };
    void generateQuestions();
  }, [numQuestions, reviewData]);

  useEffect(() => {
    hljs.highlightAll();
  }, [quiz, isSubmitted, currentQuestionIndex]);

  const handleSelectChoice = (questionIndex: number, choiceIndex: number) => {
    if (isSubmitted) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = choiceIndex;
    setSelectedAnswers(newAnswers);
  };

  const calculateResults = () => {
    let correct = 0;
    quiz.forEach((q, i) => {
      if (Number(q.answer) === selectedAnswers[i]) {
        correct++;
      }
    });
    return correct;
  };

  const handleFinalSubmit = () => {
    setIsSubmitted(true);
    setShowConfirmModal(false);
    const numCorrect = calculateResults();
    const score = numCorrect / quiz.length;

    void navigate(`/end-screen?score=${score}`, {
      state: {
        selectedAnswers,
        quizParams: location.search,
      },
    });
  };

  if (isLoading) {
    return <LoadingScreen responseStream="" />;
  }

  const topicLabels: Record<string, string> = {
    vocabulary: 'Từ vựng (語彙)',
    grammar: 'Ngữ pháp (文法)',
    kanji: 'Hán tự (漢字)',
  };

  const difficultyLabels: Record<string, string> = {
    beginner: 'Sơ cấp',
    intermediate: 'Trung cấp',
    advanced: 'Cao cấp',
  };

  const unansweredCount = selectedAnswers.filter((a) => a === null).length;

  return (
    <Layout className="py-12 px-4" showGrid={false}>
      <div className="bg-grid absolute inset-0 opacity-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto pb-20">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-4">
          <div className="space-y-2">
            <span className="text-[16px] font-bold uppercase tracking-[0.4em] text-rose-500 block">
              {isSubmitted ? 'Đã hoàn thành' : 'Đang thực hiện'}
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white capitalize">
              {topic
                ?.split(',')
                .map((tKey) => topicLabels[tKey] || tKey)
                .join(' • ')}
            </h1>
            <p className="text-lg text-slate-500 font-medium pt-2">
              {language} • {difficultyLabels[difficulty] || difficulty}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {isReview && (
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-3 px-8 py-5 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-bold text-lg hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                <FiHome className="text-rose-500 text-lg mr-2" />
                <span className="text-[20px]">Quay về trang chủ</span>
              </button>
            )}
            <div className="relative group">
              <button className="flex items-center gap-3 px-8 py-5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 hover:border-rose-500/50 transition-all duration-300">
                <FiDownload className="text-rose-500 text-lg mr-2" />
                <span className="text-[20px]">Xuất tệp</span>
              </button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Sidebar Navigation */}
          <aside className="lg:sticky lg:top-24 space-y-6 order-2 lg:order-1">
            <div className="glass-card rounded-3xl p-6 border-white/5">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-6 flex items-center justify-between">
                Tiến độ
                <span className="text-rose-500">
                  {quiz.length - unansweredCount}/{quiz.length}
                </span>
              </h3>

              <div className="grid grid-cols-5 gap-3">
                {quiz.map((_, index) => {
                  const isAnswered = selectedAnswers[index] !== null;
                  const isActive = currentQuestionIndex === index;
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentQuestionIndex(index)}
                      className={`aspect-square rounded-xl flex items-center justify-center text-2xl font-black transition-all duration-300 border ${
                        isActive
                          ? 'bg-white text-rose-600 border-white scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)] z-10'
                          : isAnswered
                            ? 'bg-rose-600/20 border-rose-500/50 text-rose-500'
                            : 'bg-white/5 border-white/10 text-slate-500 hover:border-white/20'
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>

              {!isSubmitted && (
                <button
                  onClick={() => setShowConfirmModal(true)}
                  className="w-full mt-8 flex items-center justify-center gap-3 py-4 rounded-xl bg-rose-600 text-white font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(225,29,72,0.3)]"
                >
                  <FiSend />
                  Nộp bài
                </button>
              )}
            </div>
          </aside>

          {/* Main Quiz Content - Paginated */}
          <div className="lg:col-span-3 space-y-8 order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Question
                  question={quiz[currentQuestionIndex]}
                  id={currentQuestionIndex}
                  selectedChoiceIndex={selectedAnswers[currentQuestionIndex]}
                  onSelectChoice={(choiceIndex) =>
                    handleSelectChoice(currentQuestionIndex, choiceIndex)
                  }
                  isSubmitted={isSubmitted}
                  showResults={isReview}
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between gap-4 pt-4">
              <button
                onClick={() =>
                  setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))
                }
                disabled={currentQuestionIndex === 0}
                className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${
                  currentQuestionIndex === 0
                    ? 'bg-white/5 text-slate-700 cursor-not-allowed'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <FiChevronLeft className="text-xl" />
                Câu trước
              </button>

              <button
                onClick={() =>
                  setCurrentQuestionIndex((prev) =>
                    Math.min(quiz.length - 1, prev + 1),
                  )
                }
                disabled={currentQuestionIndex === quiz.length - 1}
                className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${
                  currentQuestionIndex === quiz.length - 1
                    ? 'bg-white/5 text-slate-700 cursor-not-allowed'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Câu tiếp theo
                <FiChevronRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowConfirmModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-md glass-card rounded-3xl p-8 border-white/10 shadow-2xl"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-rose-500/10 flex items-center justify-center">
                  <FiAlertCircle className="text-4xl text-rose-500" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                    Xác nhận nộp bài?
                  </h3>
                  {unansweredCount > 0 ? (
                    <p className="text-slate-400">
                      Bạn vẫn còn{' '}
                      <span className="text-rose-500 font-bold">
                        {unansweredCount}
                      </span>{' '}
                      câu hỏi chưa trả lời. Bạn có chắc chắn muốn nộp bài không?
                    </p>
                  ) : (
                    <p className="text-slate-400">
                      Bạn đã hoàn thành tất cả câu hỏi. Hãy kiểm tra lại một lần
                      nữa trước khi nộp bài nhé!
                    </p>
                  )}
                </div>

                <div className="flex flex-col w-full gap-3">
                  <button
                    onClick={handleFinalSubmit}
                    className="w-full py-4 rounded-xl bg-rose-600 text-white font-bold uppercase tracking-widest hover:bg-rose-700 transition-colors"
                  >
                    Nộp bài ngay
                  </button>
                  <button
                    onClick={() => setShowConfirmModal(false)}
                    className="w-full py-4 rounded-xl bg-white/5 text-slate-300 font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
                  >
                    Quay lại làm tiếp
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default QuizPage;
