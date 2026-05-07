import { AnimatePresence, motion } from 'framer-motion';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { HiCheck } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { topics } from '../constants/topics';

const HomePage = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('JLPT N5');
  const [difficulty, setDifficulty] = useState('beginner');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    'vocabulary',
  ]);
  const [customPrompt, setCustomPrompt] = useState('');
  const [numQuestions, setNumQuestions] = useState('5');

  const handleLanguageSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    // Reset selected topics if they don't exist in the new language (though they are all the same for now)
    setSelectedTopics(['vocabulary']);
  };

  const toggleTopic = (topicKey: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topicKey)
        ? prev.length > 1
          ? prev.filter((t) => t !== topicKey)
          : prev
        : [...prev, topicKey],
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Layout className="pb-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        {/* HERO SECTION */}
        <div className="text-center mb-16">
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-black tracking-tight text-white mb-4"
          >
            Nihon<span className="text-rose-600 font-serif">Quiz</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto font-light"
          >
            {t('subtitle')}
            <span className="text-slate-500 italic block mt-1">
              AI クイズ ジェネレーター
            </span>
          </motion.p>
        </div>

        {/* CONFIGURATION CARD */}
        <motion.div
          variants={itemVariants}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* LEFT COLUMN: OPTIONS */}
              <div className="flex-1 space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* JLPT LEVEL */}
                  <div className="group space-y-3">
                    <label
                      htmlFor="level-select"
                      className="block text-xs font-bold uppercase tracking-[0.3em] text-slate-500 group-focus-within:text-rose-500 transition-colors"
                    >
                      {t('level')}
                    </label>
                    <div className="relative">
                      <select
                        id="level-select"
                        value={language}
                        onChange={handleLanguageSelect}
                        className="quiz-select"
                      >
                        <option value="JLPT N5">JLPT N5</option>
                        <option value="JLPT N4">JLPT N4</option>
                        <option value="JLPT N3">JLPT N3</option>
                        <option value="JLPT N2">JLPT N2</option>
                        <option value="JLPT N1">JLPT N1</option>
                      </select>
                    </div>
                  </div>

                  {/* DIFFICULTY */}
                  <div className="group space-y-3">
                    <label
                      htmlFor="difficulty-select"
                      className="block text-xs font-bold uppercase tracking-[0.3em] text-slate-500 group-focus-within:text-rose-500 transition-colors"
                    >
                      {t('difficulty')}
                    </label>
                    <div className="relative">
                      <select
                        id="difficulty-select"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="quiz-select"
                      >
                        <option value="beginner">
                          {t('difficulty_options.beginner')}
                        </option>
                        <option value="intermediate">
                          {t('difficulty_options.intermediate')}
                        </option>
                        <option value="advanced">
                          {t('difficulty_options.advanced')}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* NUMBER OF QUESTIONS */}
                <div className="group space-y-3">
                  <label
                    htmlFor="num-questions-select"
                    className="block text-xs font-bold uppercase tracking-[0.3em] text-slate-500 group-focus-within:text-rose-500 transition-colors"
                  >
                    {t('num_questions')}
                  </label>
                  <div className="relative">
                    <select
                      id="num-questions-select"
                      value={numQuestions}
                      onChange={(e) => setNumQuestions(e.target.value)}
                      className="quiz-select"
                    >
                      {[5, 10, 15, 20].map((num) => (
                        <option value={num} key={num}>
                          {t('questions_count', { count: num })}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* TOPICS (MULTI-SELECT CHIPS) */}
                <div className="group space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold uppercase tracking-[0.3em] text-slate-500 group-focus-within:text-rose-500 transition-colors">
                      {t('topic')}
                    </label>
                    <span className="text-[10px] text-slate-600 uppercase tracking-widest font-medium">
                      {t('topics_select_hint')}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {topics[language as keyof typeof topics].map((topicKey) => {
                      const isSelected = selectedTopics.includes(topicKey);
                      return (
                        <button
                          key={topicKey}
                          type="button"
                          onClick={() => toggleTopic(topicKey)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl border font-bold text-xs transition-all duration-300 ${
                            isSelected
                              ? 'bg-rose-600/20 border-rose-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.2)]'
                              : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:bg-white/10'
                          }`}
                        >
                          <AnimatePresence>
                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0, width: 0 }}
                                animate={{ scale: 1, width: 'auto' }}
                                exit={{ scale: 0, width: 0 }}
                              >
                                <HiCheck className="text-rose-500" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                          {t(`topic_options.${topicKey}`)}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: PROMPT AREA */}
              <div className="flex-1 flex flex-col group space-y-3">
                <label
                  htmlFor="prompt-input"
                  className="block text-xs font-bold uppercase tracking-[0.3em] text-slate-500 group-focus-within:text-rose-500 transition-colors"
                >
                  {t('custom_prompt_label')}
                </label>
                <div className="relative h-[300px] lg:flex-1 lg:min-h-[300px]">
                  <textarea
                    id="prompt-input"
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    placeholder={t('custom_prompt_placeholder')}
                    className="absolute inset-0 w-full h-full bg-white/5 border border-white/10 text-slate-200 rounded-3xl py-6 px-8 outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/30 transition-all resize-none text-sm placeholder:text-slate-600 font-medium leading-relaxed"
                  />
                </div>
              </div>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center pt-8 border-t border-white/5"
            >
              <Link
                className="q-button w-full md:w-auto md:min-w-[320px]"
                to={`/quiz?language=${language}&difficulty=${difficulty.toLowerCase()}&topic=${selectedTopics.join(',')}&numQuestions=${numQuestions}&prompt=${encodeURIComponent(customPrompt)}`}
              >
                {t('start_session')}
              </Link>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default HomePage;
