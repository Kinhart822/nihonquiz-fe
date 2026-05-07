import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useWindowSize from 'react-use/lib/useWindowSize';
import Layout from '../components/Layout';
import { gifs } from '../constants/gifs';
import { pickRandom } from '../utils';

const EndScreen = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const score = Number(params.get('score'));
  const [message, setMessage] = useState('');
  const [gif, setGif] = useState('');
  const { width, height } = useWindowSize();

  const handlePlayAgain = () => {
    void navigate('/');
  };

  useEffect(() => {
    let grade: 'perfect' | 'good' | 'bad';
    if (score === 1) {
      grade = 'perfect';
    } else if (score >= 0.7) {
      grade = 'good';
    } else {
      grade = 'bad';
    }

    const messages = t(`endMessages.${grade}`, {
      returnObjects: true,
    }) as string[];
    const randomMessage = pickRandom(messages);
    setMessage(randomMessage);

    const randomGif = pickRandom(gifs[grade]);
    setGif(randomGif);
  }, [t, score]);

  return (
    <Layout className="flex items-center justify-center px-4">
      {score >= 0.8 && (
        <Confetti
          width={width}
          height={height}
          className="overflow-hidden opacity-50"
        />
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-3xl"
      >
        <div className="glass-card rounded-3xl p-8 md:p-16 text-center border-rose-500/10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-500 mb-4 block">
              {t('session_complete')}
            </span>
            <h2 className="text-6xl md:text-9xl font-black tracking-tight text-white mb-8">
              {Math.round(score * 100)}
              <span className="text-rose-600 text-3xl md:text-5xl">%</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative mb-12 w-full max-w-[480px] mx-auto"
          >
            <div className="absolute inset-0 bg-rose-600/20 blur-3xl rounded-full" />
            <div className="relative z-10 aspect-video rounded-2xl border border-white/10 shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-500 overflow-hidden">
              <iframe
                src={gif}
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-300 font-light mb-12 max-w-xl mx-auto italic"
          >
            "{message}"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button
              className="q-button min-w-[240px]"
              onClick={handlePlayAgain}
            >
              {t('master_another')}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default EndScreen;
