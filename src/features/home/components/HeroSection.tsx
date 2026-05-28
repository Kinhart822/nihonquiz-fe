import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Volume2, Check, Flame, Bot } from 'lucide-react';

interface HeroSectionProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const HeroSection = ({ onOpenAuth }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden relative">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-teal-200/40 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-emerald-200/40 rounded-full blur-[100px] -z-10"></div>

      <div className="w-full px-4 md:px-12 xl:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border-2 border- rounded-full text-xs font-bold text-teal-700 mb-8 shadow-sm">
              <Sparkles size={14} className="text-emerald-500" />
              <span className="uppercase tracking-wider">
                Phiên bản mới 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.15] text-teal-950">
              Chinh phục tiếng Nhật <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#059669]">
                thông minh hơn
              </span>
            </h1>
            <p className="text-lg md:text-xl text-teal-800/80 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
              Học từ vựng, ngữ pháp, Kanji và rèn luyện kỹ năng giao tiếp cùng
              AI. Lộ trình cá nhân hóa từ N5 đến N1 giúp bạn đạt mục tiêu nhanh
              gấp 3 lần.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={() => onOpenAuth('register')}
                className="w-full sm:w-auto px-8 py-4 bg-[#0D9488] hover:bg-[#0F766E] text-white text-lg font-bold rounded-2xl transition-all shadow-xl shadow-teal-900/20 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Bắt đầu học ngay <ArrowRight size={20} />
              </button>
              <a
                href="#features"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-teal-50 border-2 border- text-teal-900 text-lg font-bold rounded-2xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              >
                Tìm hiểu thêm
              </a>
            </div>

            {/* Social Proof Avatar Stack */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-[#F0FDFA] bg-teal-100 flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=e2e8f0`}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm font-semibold text-teal-800">
                <span className="text-teal-950 font-black">10.000+</span> học
                viên đang học
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex-1 w-full relative min-h-[480px] lg:min-h-[550px] flex items-center justify-center"
          >
            {/* Background Glows and Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-teal-200/50 rounded-full blur-[80px] -z-10 animate-pulse"></div>

            <div className="relative w-full max-w-[480px] h-[400px]">
              {/* 1. Main Vocabulary Card (Centered, high depth) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: 'easeInOut',
                }}
                className="absolute top-8 left-4 right-4 sm:top-12 sm:left-6 sm:right-6 bg-white p-6 sm:p-8 rounded-[2rem] shadow-xl shadow-teal-900/10 border-2 border-teal-900/10 z-20 hover:border-teal-500/30 transition-colors"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-5 border-2 border- bg-white flex items-center justify-center rounded-sm overflow-hidden flex-shrink-0">
                      <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    </div>
                    <span className="text-sm sm:text-base font-bold text-teal-800">
                      Tiếng Nhật N4
                    </span>
                  </div>
                  <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 text-sm sm:text-base font-bold rounded-full border-2 border-">
                    Từ vựng
                  </span>
                </div>

                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-5xl sm:text-6xl font-extrabold text-teal-950 mb-2 tracking-tight">
                      先生
                    </h3>
                    <p className="text-teal-600 font-bold text-base sm:text-lg">
                      せんせい • Sensei
                    </p>
                  </div>
                  <button
                    className="p-4 bg-teal-50 hover:bg-teal-100 text-teal-700 hover:text-teal-900 rounded-2xl transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                    aria-label="Phát âm"
                  >
                    <Volume2 size={24} />
                  </button>
                </div>

                <div className="bg-[#F0FDFA] p-5 rounded-2xl border-2 border- mb-8">
                  <p className="text-sm text-teal-700/80 font-bold uppercase tracking-wider mb-2">
                    Ý nghĩa
                  </p>
                  <p className="text-[#134E4A] font-bold text-lg sm:text-xl">
                    Giáo viên, thầy cô giáo
                  </p>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm font-bold text-teal-700/80 mb-2">
                      <span>Độ thuộc</span>
                      <span>67%</span>
                    </div>
                    <div className="w-full h-3 bg-teal-50 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
                    </div>
                  </div>
                  <button className="px-5 py-3 bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-xl text-sm sm:text-base font-bold shadow-md shadow-teal-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer">
                    <Check size={18} strokeWidth={3} /> Đã thuộc
                  </button>
                </div>
              </motion.div>

              {/* 2. Streak/Weekly Progress Card (Floating Top-Left) */}
              <motion.div
                animate={{ y: [0, 8, 0], rotate: [-2, 0, -2] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute -top-8 -left-4 sm:-top-6 sm:-left-14 bg-white p-5 rounded-2xl shadow-lg shadow-teal-900/5 border-2 border- z-30 flex items-center gap-4 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Flame size={24} className="text-orange-500 animate-pulse" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-teal-700/80 font-bold uppercase tracking-wider">
                    Học liên tục
                  </p>
                  <p className="text-lg sm:text-xl font-extrabold text-teal-950">
                    12 Ngày
                  </p>
                </div>
              </motion.div>

              {/* 3. AI Chat Bubble (Floating Bottom-Right) */}
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [1, -1, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -bottom-16 -right-12 sm:-bottom-20 sm:-right-24 w-72 bg-teal-950 text-white p-5 rounded-2xl shadow-xl shadow-teal-950/20 border-2 border- z-30"
              >
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                  <Bot size={20} className="text-[#2DD4BF]" />
                  <span className="text-xs sm:text-sm font-bold text-teal-200 uppercase tracking-wider">
                    Luyện nói cùng AI
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="bg-teal-900/40 rounded-xl rounded-tl-none p-3.5 border-2 border-">
                    <p className="text-sm sm:text-base text-teal-50 font-medium">
                      いらっしゃいませ。何名様ですか？
                    </p>
                    <p className="text-xs sm:text-sm text-teal-300/80 mt-1.5">
                      Xin chào quý khách. Đi mấy người ạ?
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-[#0D9488] rounded-xl rounded-tr-none p-3.5 max-w-[90%]">
                      <p className="text-sm sm:text-base font-bold">
                        2人です (Futari desu)
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 4. Kanji Card (Floating Bottom-Left) */}
              <motion.div
                animate={{ y: [0, 6, 0], rotate: [-1, 2, -1] }}
                transition={{
                  repeat: Infinity,
                  duration: 5.5,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
                className="absolute -bottom-20 -left-6 sm:-bottom-24 sm:-left-16 bg-white p-5 rounded-2xl shadow-lg shadow-teal-900/5 border-2 border- z-10 w-32 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mx-auto mb-3 text-teal-700 text-sm sm:text-base font-bold">
                  Kanji
                </div>
                <h4 className="text-5xl font-extrabold text-teal-950 mb-2">
                  学
                </h4>
                <p className="text-xs sm:text-sm text-teal-600 font-bold">
                  Học • Gaku
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
