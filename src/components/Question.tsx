import { motion, AnimatePresence } from 'framer-motion';
import { HiCheck, HiOutlineXMark } from 'react-icons/hi2';

export interface QuestionType {
  query: string;
  choices: string[];
  answer: string | number;
  explanation: string;
}

interface QuestionProps {
  question: QuestionType;
  id: number;
  selectedChoiceIndex: number | null;
  onSelectChoice: (index: number) => void;
  isSubmitted: boolean;
  showResults?: boolean;
}

const Question: React.FC<QuestionProps> = ({
  question,
  id,
  selectedChoiceIndex,
  onSelectChoice,
  isSubmitted,
  showResults = false,
}) => {
  const { query, choices, answer, explanation } = question;

  const isCorrect = () => {
    return Number(answer) === selectedChoiceIndex;
  };

  const renderChoices = () => {
    return choices.map((choice, index) => {
      let statusStyle =
        'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20';
      let icon: any = null;

      if (selectedChoiceIndex === index) {
        statusStyle = 'border-rose-500/50 bg-rose-500/10 text-white';
      }

      if (isSubmitted && showResults) {
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
        } else if (index === Number(answer)) {
          // Show correct answer if user got it wrong
          statusStyle =
            'border-emerald-500/50 bg-emerald-500/10 text-emerald-400 opacity-60';
          icon = <HiCheck className="text-emerald-500 text-xl" />;
        }
      }

      return (
        <button
          key={index}
          disabled={isSubmitted}
          className={`w-full p-5 text-left rounded-2xl border transition-all duration-300 flex items-center justify-between group ${statusStyle}`}
          onClick={() => onSelectChoice(index)}
        >
          <span className="text-xl font-bold">{choice}</span>
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

  return (
    <div className="glass-card rounded-3xl p-8 md:p-10 border-white/5 relative overflow-hidden group">
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-600/5 rounded-full blur-3xl group-hover:bg-rose-600/10 transition-colors duration-500" />

      <div className="relative z-10">
        <header className="flex items-center justify-between mb-8">
          <span className="text-[18px] font-bold uppercase tracking-[0.3em] text-slate-500">
            Câu hỏi {id + 1}
          </span>
          {isSubmitted && showResults && (
            <span
              className={`text-[16px] font-bold uppercase tracking-[0.2em] ${isCorrect() ? 'text-emerald-500' : 'text-rose-500'}`}
            >
              {isCorrect() ? 'Chính xác' : 'Chưa chính xác'}
            </span>
          )}
        </header>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 leading-snug">
          {query}
        </h2>

        <div className="grid gap-4 mb-0">{renderChoices()}</div>

        <AnimatePresence>
          {isSubmitted && showResults && (
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
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-rose-500 mb-3">
                    Giải thích chi tiết
                  </h3>
                  <p className="text-xl text-slate-300 leading-relaxed font-medium">
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
