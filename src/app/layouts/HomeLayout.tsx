import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AuthModal from '../../features/auth/components/AuthModal';

export const HomeLayout = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const openAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F0FDFA] text-[#134E4A] selection:bg-teal-200 pb-24 md:pb-0">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F0FDFA]/80 backdrop-blur-xl border-b border-teal-900/5 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24">
          <div className="flex justify-between items-center h-20">
            <div
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => window.location.reload()}
            >
              <div className="bg-white p-2 rounded-xl shadow-sm border border-teal-100 group-hover:shadow-md transition-shadow">
                <img
                  src="/images/logo.png"
                  alt="MoriPract Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-teal-950">
                MoriPract
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => openAuth('login')}
                className="text-sm font-bold text-teal-800 hover:text-teal-950 transition-colors hidden sm:block px-4 py-2 cursor-pointer"
              >
                Đăng nhập
              </button>
              <button
                onClick={() => openAuth('register')}
                className="px-6 py-3 bg-[#0D9488] hover:bg-[#0F766E] text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-teal-900/20 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                Bắt đầu học miễn phí
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Outlet context={{ openAuth }} />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultMode={authMode}
      />
    </div>
  );
};
