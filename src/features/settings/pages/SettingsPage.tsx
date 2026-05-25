import { useState } from 'react';
import { User, Palette, Smartphone, ChevronRight } from 'lucide-react';
import { DashboardLayout } from '../../../app/layouts/DashboardLayout';
import { ProfileFormModal } from '../components/ProfileFormModal';
import { PasswordFormModal } from '../components/PasswordFormModal';
import { useTheme } from '../../../app/hooks/useTheme';

const SettingsPage = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <DashboardLayout>
      <div className="pt-8 pb-32 px-4 max-w-2xl mx-auto min-h-full transition-colors">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-teal-950 dark:text-teal-100 mb-3 transition-colors">
            Cài đặt
          </h1>
          <p className="text-teal-700/80 dark:text-teal-400/80 font-medium transition-colors">
            Tùy chỉnh trải nghiệm học tập của bạn
          </p>
        </div>

        <div className="space-y-6">
          {/* User Info Block */}
          <section className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-teal-50 dark:border-slate-800 shadow-sm transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/40 rounded-full flex items-center justify-center text-teal-700 dark:text-teal-400 transition-colors">
                <User size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-teal-950 dark:text-teal-100 transition-colors">
                  Tài khoản
                </h2>
                <p className="text-sm text-teal-600/80 dark:text-teal-400/70 transition-colors">
                  Quản lý thông tin cá nhân
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setIsProfileOpen(true)}
                className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group"
              >
                <span className="font-bold text-teal-800 dark:text-slate-300 group-hover:text-teal-950 dark:group-hover:text-white transition-colors">
                  Chỉnh sửa hồ sơ
                </span>
                <ChevronRight
                  size={20}
                  className="text-teal-300 dark:text-slate-600 group-hover:text-teal-500 dark:group-hover:text-slate-400 transition-colors"
                />
              </button>
              <button
                onClick={() => setIsPasswordOpen(true)}
                className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group"
              >
                <span className="font-bold text-teal-800 dark:text-slate-300 group-hover:text-teal-950 dark:group-hover:text-white transition-colors">
                  Đổi mật khẩu
                </span>
                <ChevronRight
                  size={20}
                  className="text-teal-300 dark:text-slate-600 group-hover:text-teal-500 dark:group-hover:text-slate-400 transition-colors"
                />
              </button>
            </div>
          </section>

          {/* Theme Settings Block */}
          <section className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-teal-50 dark:border-slate-800 shadow-sm transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-700 dark:text-emerald-400 transition-colors">
                <Palette size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-teal-950 dark:text-teal-100 transition-colors">
                  Giao diện
                </h2>
                <p className="text-sm text-teal-600/80 dark:text-teal-400/70 transition-colors">
                  Tùy chỉnh màu sắc và theme
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div
                onClick={toggleTheme}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group"
              >
                <span className="font-bold text-teal-800 dark:text-slate-300 group-hover:text-teal-950 dark:group-hover:text-white transition-colors">
                  Chế độ Sáng / Tối
                </span>
                <div className="flex bg-teal-100 dark:bg-slate-700 p-1 rounded-lg transition-colors relative">
                  <div
                    className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white dark:bg-slate-600 rounded-md shadow-sm transition-all duration-300 ${
                      theme === 'light' ? 'left-1' : 'left-[calc(50%+2px)]'
                    }`}
                  ></div>
                  <div
                    className={`px-3 py-1 text-xs font-bold relative z-10 transition-colors ${
                      theme === 'light' ? 'text-teal-900' : 'text-slate-400'
                    }`}
                  >
                    Sáng
                  </div>
                  <div
                    className={`px-3 py-1 text-xs font-bold relative z-10 transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-teal-600/60'
                    }`}
                  >
                    Tối
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* App Settings Block */}
          <section className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-teal-50 dark:border-slate-800 shadow-sm transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-700 dark:text-orange-400 transition-colors">
                <Smartphone size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-teal-950 dark:text-teal-100 transition-colors">
                  Ứng dụng
                </h2>
                <p className="text-sm text-teal-600/80 dark:text-teal-400/70 transition-colors">
                  Cài đặt tính năng
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group"
              >
                <span className="font-bold text-teal-800 dark:text-slate-300 group-hover:text-teal-950 dark:group-hover:text-white transition-colors">
                  Âm thanh phát âm
                </span>
                <div
                  className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
                    soundEnabled
                      ? 'bg-[#0D9488] dark:bg-teal-500'
                      : 'bg-teal-200 dark:bg-slate-700'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 ${
                      soundEnabled
                        ? 'right-1 bg-white'
                        : 'left-1 bg-white dark:bg-slate-400'
                    }`}
                  ></div>
                </div>
              </div>
              <div
                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group"
              >
                <span className="font-bold text-teal-800 dark:text-slate-300 group-hover:text-teal-950 dark:group-hover:text-white transition-colors">
                  Thông báo nhắc nhở
                </span>
                <div
                  className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
                    notificationsEnabled
                      ? 'bg-[#0D9488] dark:bg-teal-500'
                      : 'bg-teal-200 dark:bg-slate-700'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 ${
                      notificationsEnabled
                        ? 'right-1 bg-white'
                        : 'left-1 bg-white dark:bg-slate-400'
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <ProfileFormModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
      <PasswordFormModal
        isOpen={isPasswordOpen}
        onClose={() => setIsPasswordOpen(false)}
      />
    </DashboardLayout>
  );
};

export default SettingsPage;
