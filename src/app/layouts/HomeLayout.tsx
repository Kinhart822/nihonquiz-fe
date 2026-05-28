import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import AuthModal from '../../features/auth/components/AuthModal';

export interface HomeContextType {
  openAuth: (mode: 'login' | 'register', role?: 'student' | 'teacher') => void;
}

export const HomeLayout = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [authRole, setAuthRole] = useState<'student' | 'teacher'>('student');
  const location = useLocation();

  const isTeacherPage = location.pathname.startsWith('/teachers');

  const openAuth = (
    mode: 'login' | 'register',
    role: 'student' | 'teacher' = 'student',
  ) => {
    setAuthMode(mode);
    setAuthRole(role);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F0FDFA] text-[#134E4A] selection:bg-teal-200 pb-24 md:pb-0">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F0FDFA]/80 backdrop-blur-xl border-b border-teal-900/5 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24">
          <div className="flex justify-between items-center h-20 relative">
            {!isTeacherPage ? (
              <>
                <Link
                  to="/"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="bg-white p-2 rounded-xl shadow-sm border-2 border-gray-200 group-hover:shadow-md transition-shadow">
                    <img
                      src="/images/logo.png"
                      alt="MoriPract Logo"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <span className="font-extrabold text-2xl tracking-tight text-teal-950">
                    MoriPract
                  </span>
                </Link>

                <div className="flex items-center gap-2 md:gap-4">
                  <button
                    onClick={() => openAuth('login', 'student')}
                    className="text-sm md:text-base font-bold text-teal-700 hover:text-teal-900 transition-colors px-3 md:px-4 py-2"
                  >
                    Đăng nhập
                  </button>
                  <button
                    onClick={() => openAuth('register', 'student')}
                    className="bg-teal-500 hover:bg-teal-600 text-white text-sm md:text-base font-bold px-4 md:px-6 py-2 md:py-2.5 rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-95"
                  >
                    Bắt đầu ngay
                  </button>
                </div>
              </>
            ) : (
              <div className="flex-1 flex justify-center items-center">
                <Link
                  to="/teachers"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="bg-white p-2 rounded-xl shadow-sm border-2 border-gray-200 group-hover:shadow-md transition-shadow">
                    <img
                      src="/images/logo.png"
                      alt="MoriPract Logo"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <span className="font-extrabold text-2xl tracking-tight text-teal-950">
                    MoriPract Teacher
                  </span>
                </Link>
              </div>
            )}
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
        targetRole={authRole}
      />
    </div>
  );
};
