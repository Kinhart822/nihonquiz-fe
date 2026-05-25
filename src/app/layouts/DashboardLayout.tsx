import React, { useState } from 'react';
import {
  BookOpen,
  User,
  LogOut,
  Menu,
  X,
  MessageSquare,
  Home,
  Settings,
  Bell,
  CheckCircle2,
  Flame,
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NotificationsPanel } from '../../features/notifications/components/NotificationsPanel';
import type { Notification } from '../../features/notifications/components/NotificationsPanel';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const initialMockNotifications: Notification[] = [
  {
    id: 1,
    title: 'Đến giờ học rồi!',
    description: 'Bạn có 15 từ vựng cần ôn tập hôm nay.',
    time: '5 phút trước',
    icon: <BookOpen size={20} className="text-teal-600 dark:text-teal-400" />,
    bg: 'bg-teal-100 dark:bg-teal-900/40',
    unread: true,
  },
  {
    id: 2,
    title: 'Kỷ lục mới!',
    description:
      'Bạn đã đạt chuỗi học 7 ngày liên tiếp. Tiếp tục phát huy nhé!',
    time: '2 giờ trước',
    icon: <Flame size={20} className="text-orange-600 dark:text-orange-400" />,
    bg: 'bg-orange-100 dark:bg-orange-900/40',
    unread: true,
  },
  {
    id: 3,
    title: 'Hoàn thành bài tập',
    description: 'Bạn đã hoàn thành xuất sắc bài kiểm tra N4.',
    time: '1 ngày trước',
    icon: (
      <CheckCircle2
        size={20}
        className="text-emerald-600 dark:text-emerald-400"
      />
    ),
    bg: 'bg-emerald-100 dark:bg-emerald-900/40',
    unread: false,
  },
];

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(
    initialMockNotifications,
  );

  const unreadCount = notifications.filter((n) => n.unread).length;

  const handleMarkAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, unread: false } : notif,
      ),
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, unread: false })),
    );
  };
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = () => {
    void navigate('/');
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-[100dvh] w-full bg-[#F0FDFA] dark:bg-slate-950 text-[#134E4A] dark:text-slate-200 md:p-4 md:gap-4 transition-colors duration-300">
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[200] md:hidden backdrop-blur-sm transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      />

      {/* Floating Sidebar */}
      <div
        className={`fixed md:relative z-[210] flex flex-col w-24 h-full md:h-[calc(100dvh-32px)] bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-teal-100/50 dark:border-slate-800 transition-transform duration-300 ease-in-out shadow-xl md:rounded-3xl ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-4 flex flex-col items-center justify-center gap-2 mb-4 mt-2">
          <Link
            to="/"
            className="flex flex-col items-center justify-center gap-1 group"
          >
            <div className="w-10 h-10 bg-teal-50 dark:bg-teal-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <img
                src="/images/running-mori.png"
                alt="MoriPract"
                className="w-6 h-6 object-contain"
              />
            </div>
          </Link>
          <button
            className="md:hidden p-1 hover:bg-gray-100 dark:hover:bg-slate-800 rounded mt-2 text-gray-500 dark:text-gray-400 cursor-pointer"
            onClick={toggleSidebar}
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 pb-4 no-scrollbar flex flex-col items-center gap-3">
          <Link
            to="/dashboard"
            className={`flex flex-col items-center justify-center gap-1.5 py-3 px-2 w-full rounded-2xl transition-all duration-300 group cursor-pointer ${
              location.pathname === '/dashboard'
                ? 'bg-teal-50 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400 shadow-sm ring-1 ring-teal-100/50 dark:ring-teal-800/50 scale-100'
                : 'text-gray-400 dark:text-slate-500 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-600 dark:hover:text-slate-300 hover:scale-105'
            }`}
          >
            <Home
              size={22}
              strokeWidth={location.pathname === '/dashboard' ? 2.5 : 2}
              className={`transition-transform duration-300 ${
                location.pathname === '/dashboard'
                  ? 'scale-110'
                  : 'group-hover:scale-110'
              }`}
            />
            <span className="text-[10px] font-bold leading-none text-center">
              Home
            </span>
          </Link>

          <Link
            to="/study"
            className={`flex flex-col items-center justify-center gap-1.5 py-3 px-2 w-full rounded-2xl transition-all duration-300 group cursor-pointer ${
              location.pathname.includes('/study')
                ? 'bg-teal-50 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400 shadow-sm ring-1 ring-teal-100/50 dark:ring-teal-800/50 scale-100'
                : 'text-gray-400 dark:text-slate-500 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-600 dark:hover:text-slate-300 hover:scale-105'
            }`}
          >
            <BookOpen
              size={22}
              strokeWidth={location.pathname.includes('/study') ? 2.5 : 2}
              className={`transition-transform duration-300 ${
                location.pathname.includes('/study')
                  ? 'scale-110'
                  : 'group-hover:scale-110'
              }`}
            />
            <span className="text-[10px] font-bold leading-none text-center">
              Study
            </span>
          </Link>

          <Link
            to="/practice/chat"
            className={`flex flex-col items-center justify-center gap-1.5 py-3 px-2 w-full rounded-2xl transition-all duration-300 group cursor-pointer ${
              location.pathname.includes('/practice')
                ? 'bg-teal-50 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400 shadow-sm ring-1 ring-teal-100/50 dark:ring-teal-800/50 scale-100'
                : 'text-gray-400 dark:text-slate-500 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-600 dark:hover:text-slate-300 hover:scale-105'
            }`}
          >
            <MessageSquare
              size={22}
              className={`transition-transform duration-300 ${
                location.pathname.includes('/practice')
                  ? 'scale-110'
                  : 'group-hover:scale-110'
              }`}
            />
            <span className="text-[10px] font-bold leading-none text-center">
              AI Chat
            </span>
          </Link>

          <Link
            to="/settings"
            className={`flex flex-col items-center justify-center gap-1.5 py-3 px-2 w-full rounded-2xl transition-all duration-300 group cursor-pointer ${
              location.pathname.includes('/settings')
                ? 'bg-teal-50 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400 shadow-sm ring-1 ring-teal-100/50 dark:ring-teal-800/50 scale-100'
                : 'text-gray-400 dark:text-slate-500 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-600 dark:hover:text-slate-300 hover:scale-105'
            }`}
          >
            <Settings
              size={22}
              strokeWidth={location.pathname.includes('/settings') ? 2.5 : 2}
              className={`transition-transform duration-300 ${
                location.pathname.includes('/settings')
                  ? 'scale-110'
                  : 'group-hover:scale-110'
              }`}
            />
            <span className="text-[10px] font-bold leading-none text-center">
              Settings
            </span>
          </Link>
        </div>

        {/* User Stats & Footer */}
        <div className="p-4 border-t border-gray-100 dark:border-slate-800 flex flex-col items-center gap-4">
          <button
            onClick={() => setIsNotificationsOpen(true)}
            className="w-10 h-10 bg-gray-100 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-900/40 rounded-full flex items-center justify-center text-gray-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors relative cursor-pointer"
            title="Thông báo"
          >
            <Bell size={18} />
            {unreadCount > 0 && (
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
            )}
          </button>

          <div
            className="w-10 h-10 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-gray-500 dark:text-slate-400 shadow-inner cursor-help transition-transform hover:scale-105"
            title="huongpham71llp@gmail.com"
          >
            <User size={18} />
          </div>
          <button
            onClick={handleSignOut}
            className="p-2 text-gray-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition-all duration-200 w-full flex justify-center group cursor-pointer"
            title="Đăng xuất"
          >
            <LogOut
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 z-50 flex items-center px-4 justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <button
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-teal-700 dark:text-teal-400 cursor-pointer"
            onClick={toggleSidebar}
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-2">
            <img
              src="/images/running-mori.png"
              alt="MoriPract Logo"
              className="w-6 h-6 object-contain"
            />
            <span className="font-bold text-teal-900 dark:text-teal-100">
              MoriPract
            </span>
          </div>
        </div>
        <button
          onClick={() => setIsNotificationsOpen(true)}
          className="p-2 text-gray-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full relative cursor-pointer"
        >
          <Bell size={20} />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
          )}
        </button>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden flex flex-col relative pt-16 md:pt-0 bg-[#F0FDFA] dark:bg-slate-950 md:bg-white/50 md:dark:bg-slate-900/50 md:rounded-3xl md:shadow-sm md:border md:border-teal-100/50 md:dark:border-slate-800">
        <div className="flex-1 overflow-y-auto no-scrollbar h-full">
          <div className="w-full h-full">{children}</div>
        </div>
      </main>

      {/* Notifications Panel */}
      <NotificationsPanel
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        notifications={notifications}
        onMarkAsRead={handleMarkAsRead}
        onMarkAllAsRead={handleMarkAllAsRead}
      />
    </div>
  );
};
