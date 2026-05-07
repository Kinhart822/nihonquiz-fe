import Facts from './Facts';
import { Bars } from 'react-loader-spinner';
import { motion } from 'framer-motion';

const LoadingScreen = ({ responseStream }: { responseStream: string }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0c0e]">
      {/* Background Stream Text (Decorative) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03] select-none text-[10px] leading-tight font-mono">
        <div className="absolute top-0 left-0 w-full">{responseStream}</div>
        <div className="absolute bottom-0 left-0 w-full rotate-180">
          {responseStream}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-24 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="bg-grid absolute inset-0 opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-2xl px-6 flex flex-col items-center"
      >
        <div className="flex flex-col items-center gap-8">
          <div className="relative">
            <div className="absolute inset-0 bg-rose-600/20 blur-2xl rounded-full" />
            <Bars width="80" height="80" color="#e11d48" />
          </div>

          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase animate-pulse">
              Đang khởi tạo <span className="text-rose-600">Câu hỏi</span>
            </h2>
            <p className="text-slate-500 font-medium tracking-[0.2em] text-xs uppercase">
              Được biên soạn bởi AI • Quá trình này mất khoảng 20-30 giây
            </p>
          </div>
        </div>

        <div className="mt-16 w-full">
          <div className="glass-card rounded-2xl p-8 border-rose-500/10">
            <Facts />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
