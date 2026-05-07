import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiChevronRight } from 'react-icons/hi2';
import { Typewriter } from 'react-simple-typewriter';
import { pickRandom } from '../utils';

const Facts = () => {
  const { t, i18n } = useTranslation();
  const getPool = () => {
    const factsArr = t('facts', { returnObjects: true }) as string[];
    const jokesArr = t('jokes', { returnObjects: true }) as string[];
    return [...factsArr, ...jokesArr];
  };

  const [fact, setFact] = useState(() => pickRandom(getPool()));

  // Reset fact when language changes to ensure it's in the correct language
  useEffect(() => {
    setFact(pickRandom(getPool()));
  }, [i18n.language]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="min-h-[120px] flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={fact}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed italic"
          >
            <Typewriter
              words={[fact]}
              loop={1}
              typeSpeed={40}
              cursor
              cursorStyle="_"
              cursorColor="#e11d48"
            />
          </motion.p>
        </AnimatePresence>
      </div>

      <button
        onClick={() => setFact(pickRandom(getPool()))}
        className="group mt-12 flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-rose-500/50 hover:bg-rose-500/10 transition-all duration-300"
      >
        <span className="text-sm font-bold uppercase tracking-widest">
          {t('next_fact')}
        </span>
        <HiChevronRight className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default Facts;
