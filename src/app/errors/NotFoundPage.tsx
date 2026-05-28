import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F0FDFA] flex flex-col items-center justify-center p-4 text-[#134E4A]">
      <div className="text-center max-w-md">
        <div className="mb-8 relative">
          <div className="text-[150px] font-black text-teal-100 leading-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/images/logo.png"
              alt="Mori"
              className="w-32 h-32 object-contain animate-bounce"
            />
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-teal-950 mb-4">
          Ôi không! Lạc đường rồi
        </h1>
        <p className="text-gray-500 mb-8">
          Trang bạn đang tìm kiếm dường như không tồn tại hoặc đã bị gỡ bỏ.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-teal-800 font-bold rounded-xl border-2 border- hover:bg-teal-50 transition-colors"
          >
            <ArrowLeft size={18} />
            Quay lại
          </button>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0D9488] text-white font-bold rounded-xl hover:bg-[#0F766E] transition-colors shadow-sm shadow-teal-200"
          >
            <Home size={18} />
            Về Trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
