import { useEffect, useState } from 'react';
import { HiCheck, HiOutlineXMark } from 'react-icons/hi2';
import { motion, AnimatePresence } from 'framer-motion';

interface QuestionType {
  query: string;
  choices: string[];
  answer: string | number;
  explanation: string;
}

interface QuestionProps {
  question: QuestionType;
  id: number;
  setNumSubmitted: React.Dispatch<React.SetStateAction<number>>;
  setNumCorrect: React.Dispatch<React.SetStateAction<number>>;
}

const Question: React.FC<QuestionProps> = ({
  question,
  id,
  setNumSubmitted,
  setNumCorrect,
}) => {
  const { query, choices, answer, explanation } = question;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isExplained, setIsExplained] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(-1);
  const [choiceObjects, setChoiceObjects] = useState(() =>
    choices.map((choice) => ({
      text: choice,
      isSelected: false,
    })),
  );

  const isCorrect = () => {
    return Number(answer) === selectedChoiceIndex;
  };

  const handleChoiceSelect = (choiceIndex) => {
    if (isSubmitted) return;

    setSelectedChoiceIndex(choiceIndex);
    setIsSelected(true);

    setChoiceObjects((prevChoiceObjects) =>
      prevChoiceObjects.map((choice, index) => ({
        ...choice,
        isSelected: choiceIndex === index,
      })),
    );
  };

  const handleAnswerSubmit = () => {
    if (isSubmitted || !isSelected) return;
    setIsSubmitted(true);
    setNumSubmitted((prev) => prev + 1);
    if (isCorrect()) {
      setNumCorrect((prev) => prev + 1);
      setIsExplained(true);
    }
  };

  const renderChoices = () => {
    return choiceObjects?.map((choice, index) => {
      let statusStyle =
        'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20';
      let icon: any = null;

      if (choice.isSelected) {
        statusStyle = 'border-rose-500/50 bg-rose-500/10 text-white';
      }

      if (isSubmitted) {
        if (index === selectedChoiceIndex) {
          if (isCorrect()) {
            statusStyle =
              'border-emerald-500/50 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]';
            icon = <HiCheck className="text-emerald-500 text-xl" />;
          } else {
            statusStyle =
              'border-rose-500/50 bg-rose-500/10 text-rose-400 shadow-[0_0_15px_rgba(225,29,72,0.2)]';
            icon = <HiOutlineXMark className="text-rose-500 text-xl" />;
          }
        }
      }

      if (isExplained && index === Number(answer)) {
        statusStyle =
          'border-emerald-500/50 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]';
        icon = <HiCheck className="text-emerald-500 text-xl" />;
      }

      return (
        <button
          key={index}
          disabled={isSubmitted}
          className={`w-full p-5 text-left rounded-2xl border transition-all duration-300 flex items-center justify-between group ${statusStyle}`}
          onClick={() => handleChoiceSelect(index)}
        >
          <span className="font-medium">{choice.text}</span>
          <AnimatePresence>
            {icon && (
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0 }}
              >
                {icon}
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      );
    });
  };

  useEffect(() => {
    setChoiceObjects(
      choices.map((choice) => ({
        text: choice,
        isSelected: false,
      })),
    );
  }, [choices]);

  return (
    <div className="glass-card rounded-3xl p-8 md:p-10 border-white/5 relative overflow-hidden group">
      {/* Decorative inner glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-600/5 rounded-full blur-3xl group-hover:bg-rose-600/10 transition-colors duration-500" />

      <div className="relative z-10">
        <header className="flex items-center justify-between mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
            Quest {id + 1}
          </span>
          {isSubmitted && (
            <span
              className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isCorrect() ? 'text-emerald-500' : 'text-rose-500'}`}
            >
              {isCorrect() ? 'Excellent' : 'Not quite'}
            </span>
          )}
        </header>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 leading-snug">
          {query}
        </h2>

        <div className="grid gap-4 mb-10">{renderChoices()}</div>

        <footer className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-white/5">
          <div className="flex items-center gap-4">
            {isSubmitted && (
              <button
                onClick={() => setIsExplained(true)}
                disabled={isExplained}
                className={`text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors ${isExplained ? 'opacity-0 pointer-events-none' : ''}`}
              >
                Reveal Insight
              </button>
            )}
          </div>

          <button
            onClick={handleAnswerSubmit}
            disabled={isSubmitted || !isSelected}
            className={`px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
              isSubmitted
                ? 'bg-white/5 text-slate-500 cursor-default'
                : isSelected
                  ? 'bg-rose-600 text-white shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:scale-105 active:scale-95'
                  : 'bg-white/5 text-slate-600 cursor-not-allowed'
            }`}
          >
            {isSubmitted ? 'Locked In' : 'Confirm Selection'}
          </button>
        </footer>

        <AnimatePresence>
          {((isSubmitted && isCorrect()) || isExplained) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-10 pt-10 border-t border-rose-500/20"
            >
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-rose-600/5 border border-rose-500/10">
                <div className="mt-1">
                  <div className="w-2 h-2 rounded-full bg-rose-600 shadow-[0_0_10px_rgba(225,29,72,0.8)]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500 mb-2">
                    Zen Insight
                  </h3>
                  <p className="text-slate-300 leading-relaxed font-light">
                    {explanation}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Question;
