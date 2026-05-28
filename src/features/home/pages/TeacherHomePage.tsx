import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Users,
  BarChart3,
  LayoutDashboard,
} from 'lucide-react';
import type { HomeContextType } from '../../../app/layouts/HomeLayout';
import { HomeFooter } from '../components/HomeFooter';

const TeacherHomePage = () => {
  const { openAuth } = useOutletContext<HomeContextType>();

  return (
    <>
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden relative min-h-[90vh] flex flex-col justify-center">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-200/40 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-200/40 rounded-full blur-[100px] -z-10"></div>

        <div className="w-full px-4 md:px-12 xl:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border-2 border- rounded-full text-xs font-bold text-blue-700 mb-8 shadow-sm">
                <LayoutDashboard size={14} className="text-blue-500" />
                <span className="uppercase tracking-wider">
                  Nền tảng Giáo viên
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.15] text-teal-950">
                Quản lý lớp học <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  hiệu quả hơn
                </span>
              </h1>
              <p className="text-lg md:text-xl text-teal-800/80 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
                Theo dõi tiến độ, giao bài tập và phân tích kết quả học tập của
                học sinh một cách trực quan. Hệ thống LMS được thiết kế dành
                riêng cho giáo viên tiếng Nhật.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <button
                  onClick={() => openAuth('login', 'teacher')}
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-2xl transition-all shadow-xl shadow-blue-900/20 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Đăng nhập Giáo viên <ArrowRight size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
                    <Users size={24} />
                  </div>
                  <h3 className="font-bold text-teal-950 text-lg mb-1">
                    Quản lý học viên
                  </h3>
                  <p className="text-sm text-teal-800/70 text-center lg:text-left">
                    Dễ dàng theo dõi học viên và các lớp học hiện tại.
                  </p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-3">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="font-bold text-teal-950 text-lg mb-1">
                    Giao bài tập
                  </h3>
                  <p className="text-sm text-teal-800/70 text-center lg:text-left">
                    Chấm điểm và giao bài tập trắc nghiệm, tự luận.
                  </p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-3">
                    <BarChart3 size={24} />
                  </div>
                  <h3 className="font-bold text-teal-950 text-lg mb-1">
                    Báo cáo chi tiết
                  </h3>
                  <p className="text-sm text-teal-800/70 text-center lg:text-left">
                    Thống kê điểm số và nhận diện học viên yếu kém.
                  </p>
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
              className="flex-1 w-full relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-[500px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-30 animate-pulse"></div>
                <div className="relative bg-white rounded-3xl border-2 border- shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
                  <img
                    src="https://api.dicebear.com/7.x/shapes/svg?seed=teacherDashboard&backgroundColor=ffffff"
                    alt="Teacher Dashboard"
                    className="w-full h-full object-cover mix-blend-multiply opacity-80 p-8"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md border-2 border- p-4 rounded-xl shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-blue-600 uppercase mb-1">
                          Tổng quan hôm nay
                        </p>
                        <h4 className="font-black text-teal-950">
                          25 bài tập đã nộp
                        </h4>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                        92%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <HomeFooter />
    </>
  );
};

export default TeacherHomePage;
