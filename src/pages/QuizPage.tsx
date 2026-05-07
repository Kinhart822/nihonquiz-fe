import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, useSpring } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import LoadingScreen from '../components/LoadingScreen';
import Question from '../components/Question';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

const QuizPage = () => {
  const { t } = useTranslation();
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const language = params.get('language');
  const difficulty = params.get('difficulty');
  const topic = params.get('topic');
  const prompt = params.get('prompt');
  const numQuestions = Number(params.get('numQuestions'));

  const [quiz, setQuiz] = useState([]); // array of questions
  const [isLoading, setIsLoading] = useState(false);
  const [numSubmitted, setNumSubmitted] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  const [progress, setProgress] = useState(0);
  const [responseStream, setResponseStream] = useState('');

  const scaleX = useSpring(progress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.002,
  });

  useEffect(() => {
    const generateQuestions = async () => {
      setIsLoading(true);
      let responseText = '';

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            language,
            difficulty,
            topic,
            numQuestions,
            prompt,
          }),
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = response.body;
        if (!data) return;

        const reader = data.getReader();
        const decoder = new TextDecoder();
        let done = false;

        while (!done) {
          const { value, done: doneReading } = await reader.read();
          done = doneReading;
          const chunkValue = decoder.decode(value);
          responseText += chunkValue;
          setResponseStream((prev) => prev + chunkValue);
        }

        const cleanedResponse = responseText.replace(/\n/g, '');
        const jsonResponse = JSON.parse(cleanedResponse);
        setQuiz(jsonResponse.questions);
      } catch (err) {
        console.log('Quiz Page:', err);
      } finally {
        setIsLoading(false);
      }
    };
    void generateQuestions();
  }, []);

  useEffect(() => {
    hljs.highlightAll();
  }, [quiz]);

  useEffect(() => {
    setProgress(numSubmitted / numQuestions);
    if (numSubmitted === numQuestions && numQuestions !== 0) {
      const score = numCorrect / numSubmitted;
      void navigate(`/end-screen?score=${score}`);
    }
  }, [numSubmitted]);

  useEffect(() => {
    scaleX.set(progress);
  }, [progress]);

  if (isLoading) {
    return <LoadingScreen responseStream={responseStream} />;
  }

  return (
    <Layout className="py-12 px-4" showGrid={false}>
      <div className="bg-grid absolute inset-0 opacity-10" />

      {/* Fixed Progress Header */}
      <div className="fixed top-0 left-0 w-full z-[100] h-1 bg-white/5">
        <motion.div
          className="h-full bg-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.6)]"
          style={{ scaleX, originX: 0 }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto pb-20">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-4">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-500 block">
              {t('quiz_progress_tag')}
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white capitalize">
              {topic
                ?.split(',')
                .map((tKey) => t(`topic_options.${tKey}`))
                .join(' • ')}
            </h1>
            <p className="text-slate-500 font-medium pt-2">
              {language} • {t(`difficulty_options.${difficulty}`)}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 hover:border-rose-500/50 transition-all duration-300">
                <FiDownload className="text-rose-500" />
                {t('export_button')}
              </button>

              <div className="absolute right-0 mt-3 w-48 glass-card rounded-xl border-white/10 p-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-[110] shadow-2xl">
                <button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                  {t('export_docx')}
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                  {t('export_pdf')}
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-12">
          {quiz?.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Question
                question={question}
                id={index}
                setNumSubmitted={setNumSubmitted}
                setNumCorrect={setNumCorrect}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default QuizPage;
