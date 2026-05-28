import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'login' | 'register';
}

const AuthModal = ({
  isOpen,
  onClose,
  defaultMode = 'login',
}: AuthModalProps) => {
  const [mode, setMode] = useState<'login' | 'register' | 'forgotPassword'>(
    defaultMode,
  );
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setMode(defaultMode);
    }
  }, [isOpen, defaultMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login/register by navigating to vocabulary page
    onClose();
    void navigate('/dashboard');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#37352f]/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl w-full max-w-[600px] shadow-2xl relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <img
                    src="/images/logo.png"
                    alt="MoriPract Logo"
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400">
                    MoriPract
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="p-8">
                <h2 className="text-2xl font-black text-gray-900 mb-2">
                  {mode === 'login'
                    ? 'Đăng nhập'
                    : mode === 'register'
                      ? 'Tạo tài khoản'
                      : 'Quên mật khẩu'}
                </h2>
                <p className="text-gray-500 mb-8 font-medium">
                  {mode === 'login'
                    ? 'Chào mừng bạn quay trở lại với MoriPract.'
                    : mode === 'register'
                      ? 'Bắt đầu hành trình chinh phục tiếng Nhật của bạn.'
                      : 'Nhập email của bạn để nhận liên kết đặt lại mật khẩu.'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                      Email
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full bg-[#F7F7F5] border border-transparent text-gray-900 rounded-xl pl-11 pr-4 py-3 outline-none focus:border-blue-500 focus:bg-white transition-all font-medium"
                      />
                    </div>
                  </div>

                  {mode !== 'forgotPassword' && (
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                        Mật khẩu
                      </label>
                      <div className="relative">
                        <Lock
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          placeholder="••••••••"
                          className="w-full bg-[#F7F7F5] border border-transparent text-gray-900 rounded-xl pl-11 pr-12 py-3 outline-none focus:border-blue-500 focus:bg-white transition-all font-medium"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff size={20} />
                          ) : (
                            <Eye size={20} />
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {mode === 'login' && (
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setMode('forgotPassword')}
                        className="text-sm font-bold text-blue-600 hover:text-blue-700"
                      >
                        Quên mật khẩu?
                      </button>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#37352f] hover:bg-black text-white text-base font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-4"
                  >
                    {mode === 'login'
                      ? 'Đăng nhập'
                      : mode === 'register'
                        ? 'Tạo tài khoản'
                        : 'Gửi liên kết'}
                    <ArrowRight size={18} />
                  </button>
                </form>

                {mode !== 'forgotPassword' && (
                  <>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="flex-1 h-px bg-gray-200"></div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                        Hoặc
                      </span>
                      <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    <div className="mt-6">
                      <button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-bold text-gray-700 text-sm"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                          <path fill="none" d="M1 1h22v22H1z" />
                        </svg>
                        Google
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Footer */}
              <div className="bg-[#F7F7F5] p-6 text-center border-t border-gray-100">
                {mode === 'forgotPassword' ? (
                  <button
                    onClick={() => setMode('login')}
                    className="text-gray-600 font-bold hover:text-gray-900"
                  >
                    Quay lại đăng nhập
                  </button>
                ) : (
                  <p className="text-gray-600 text-sm font-medium">
                    {mode === 'login'
                      ? 'Chưa có tài khoản? '
                      : 'Đã có tài khoản? '}
                    <button
                      onClick={() =>
                        setMode(mode === 'login' ? 'register' : 'login')
                      }
                      className="text-blue-600 font-bold hover:text-blue-700 underline underline-offset-2"
                    >
                      {mode === 'login' ? 'Đăng ký ngay' : 'Đăng nhập'}
                    </button>
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
