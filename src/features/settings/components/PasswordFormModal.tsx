import React, { useState } from 'react';
import { X, Eye, EyeOff, KeyRound, CheckCircle2 } from 'lucide-react';

interface PasswordFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PasswordFormModal: React.FC<PasswordFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.newPassword.length < 6) {
      setError('Mật khẩu mới phải có ít nhất 6 ký tự.');
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError('Mật khẩu xác nhận không khớp.');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border-2 border- dark:border-slate-700 flex flex-col transition-colors">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Đổi mật khẩu
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors text-gray-500 dark:text-slate-400"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-500 mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Đổi mật khẩu thành công!
              </h3>
              <p className="text-gray-500 dark:text-slate-400 text-sm">
                Tài khoản của bạn đã được cập nhật an toàn.
              </p>
            </div>
          ) : (
            <form
              id="password-form"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {error && (
                <div className="p-3 bg-red-50 dark:bg-red-900/20 border-2 border- dark:border-red-900/30 rounded-xl text-red-600 dark:text-red-400 text-sm font-medium animate-in slide-in-from-top-2">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
                  Mật khẩu hiện tại
                </label>
                <div className="relative">
                  <input
                    type={showCurrent ? 'text' : 'password'}
                    required
                    value={formData.currentPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        currentPassword: e.target.value,
                      })
                    }
                    className="w-full pl-4 pr-12 py-3 bg-gray-50 dark:bg-slate-800/50 border-2 border- dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 dark:focus:border-teal-500 text-gray-900 dark:text-white transition-all outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-slate-300 transition-colors"
                  >
                    {showCurrent ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
                  Mật khẩu mới
                </label>
                <div className="relative">
                  <input
                    type={showNew ? 'text' : 'password'}
                    required
                    value={formData.newPassword}
                    onChange={(e) =>
                      setFormData({ ...formData, newPassword: e.target.value })
                    }
                    className="w-full pl-4 pr-12 py-3 bg-gray-50 dark:bg-slate-800/50 border-2 border- dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 dark:focus:border-teal-500 text-gray-900 dark:text-white transition-all outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-slate-300 transition-colors"
                  >
                    {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
                  Xác nhận mật khẩu mới
                </label>
                <div className="relative">
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="w-full pl-4 pr-12 py-3 bg-gray-50 dark:bg-slate-800/50 border-2 border- dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 dark:focus:border-teal-500 text-gray-900 dark:text-white transition-all outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-slate-300 transition-colors"
                  >
                    {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        {!isSuccess && (
          <div className="p-6 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
            <button
              form="password-form"
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-600/70 text-white font-bold rounded-xl transition-colors"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <KeyRound size={20} />
                  Cập nhật mật khẩu
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
