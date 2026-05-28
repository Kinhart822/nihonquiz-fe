import { Bell, LogOut, Menu, Settings, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { Notification } from '../../features/notifications/components/NotificationsPanel';
import { NotificationsPanel } from '../../features/notifications/components/NotificationsPanel';
import { useRole } from '../../app/providers/RoleProvider';

export interface SideNavLink {
  path: string;
  label: string;
  icon: React.ElementType;
  badge?: number | string;
  badgeColor?: string;
  matchPrefix?: boolean;
}

interface SideNavProps {
  children: React.ReactNode;
  links: SideNavLink[];
  notifications: Notification[];
}

export const SideNav: React.FC<SideNavProps> = ({
  children,
  links,
  notifications: initialNotifications,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const location = useLocation();
  const navigate = useNavigate();
  const { role } = useRole();

  const unreadCount = notifications.filter((n) => n.unread).length;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMarkAsRead = (id: number) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, unread: false } : n)),
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, unread: false })));
  };

  const isActive = (link: SideNavLink) => {
    if (link.matchPrefix) {
      return location.pathname.includes(link.path);
    }
    return location.pathname === link.path;
  };

  return (
    <div className="flex h-[100dvh] w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 overflow-hidden md:p-4 gap-4 font-inter">
      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-[200] md:hidden backdrop-blur-sm transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      />

      {/* Floating Sidebar */}
      <div
        className={`fixed md:relative z-[210] flex flex-col w-24 h-full md:h-[calc(100dvh-32px)] bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-2 border- dark:border-slate-700 transition-transform duration-300 ease-in-out shadow-xl md:rounded-3xl ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-4 flex flex-col items-center justify-center gap-2 mb-4 mt-2">
          <div
            onClick={() => window.location.reload()}
            className="flex flex-col items-center justify-center gap-1 group cursor-pointer"
          >
            <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <img
                src="/images/logo.png"
                alt="MoriPract"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
          <button
            className="md:hidden p-1 hover:bg-gray-100 dark:hover:bg-slate-800 rounded mt-2 text-gray-500 dark:text-gray-400 cursor-pointer"
            onClick={toggleSidebar}
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 pb-4 no-scrollbar flex flex-col items-center gap-3">
          {links.map((link) => {
            const active = isActive(link);
            const Icon = link.icon;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex flex-col items-center justify-center gap-1.5 py-3 px-2 w-full rounded-2xl transition-all duration-300 group cursor-pointer relative ${
                  active
                    ? 'bg-teal-50 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400 shadow-sm ring-1 ring-teal-100/50 dark:ring-teal-800/50 scale-100'
                    : 'text-gray-400 dark:text-slate-500 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-600 dark:hover:text-slate-300 hover:scale-105'
                }`}
              >
                {link.badge !== undefined && link.badge !== 0 && (
                  <span
                    className={`absolute top-2 right-2 w-2 h-2 rounded-full border-2 border-white dark:border-slate-900 ${link.badgeColor || 'bg-red-500'} ${typeof link.badge === 'number' && link.badge > 0 && link.badgeColor !== 'bg-red-500' ? 'w-4 h-4 flex items-center justify-center text-[8px] font-bold text-white' : ''}`}
                  >
                    {typeof link.badge === 'number' &&
                    link.badge > 0 &&
                    link.badgeColor !== 'bg-red-500'
                      ? link.badge
                      : ''}
                  </span>
                )}
                <Icon
                  size={22}
                  strokeWidth={active ? 2.5 : 2}
                  className={`transition-transform duration-300 ${
                    active ? 'scale-110' : 'group-hover:scale-110'
                  }`}
                />
                <span className="text-xs font-bold leading-none text-center">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-auto p-3 flex flex-col gap-2 border-t border-gray-200 dark:border-slate-700">
          <button
            onClick={() => setIsNotificationsOpen(true)}
            className="flex flex-col items-center justify-center gap-1.5 p-3 text-gray-400 dark:text-slate-500 hover:bg-teal-50 dark:hover:bg-teal-900/40 hover:text-teal-600 dark:hover:text-teal-400 rounded-2xl transition-all group relative cursor-pointer"
            title="Thông báo"
          >
            <Bell
              size={22}
              strokeWidth={2}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            {unreadCount > 0 && (
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full shadow-sm"></span>
            )}
            <span className="text-xs font-bold leading-none text-center">
              Thông báo
            </span>
          </button>

          <Link
            to={`/${role}/settings`}
            className="flex flex-col items-center justify-center gap-1.5 p-3 text-gray-400 dark:text-slate-500 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-600 dark:hover:text-slate-300 rounded-2xl transition-all group"
            title="Cài đặt"
          >
            <Settings
              size={22}
              strokeWidth={2}
              className="group-hover:rotate-45 transition-transform duration-300"
            />
            <span className="text-xs font-bold leading-none text-center">
              Cài đặt
            </span>
          </Link>

          <div className="h-px bg-gray-100 dark:bg-slate-800 mx-2" />
          <button
            onClick={() => navigate(role === 'teacher' ? '/teachers' : '/')}
            className="flex flex-col items-center justify-center gap-1.5 p-3 text-gray-400 dark:text-slate-500 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 rounded-2xl transition-colors cursor-pointer"
            title="Đăng xuất"
          >
            <LogOut size={22} strokeWidth={2} />
            <span className="text-xs font-bold leading-none text-center">
              Đăng xuất
            </span>
          </button>
        </div>
      </div>

      {/* Top Header Mobile */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 z-[100] flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="p-2 -ml-2 text-gray-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full cursor-pointer"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="MoriPract Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="font-black text-lg bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400">
              MoriPract
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden flex flex-col relative pt-16 md:pt-0 bg-[#F0FDFA] dark:bg-slate-950 md:bg-white/50 md:dark:bg-slate-900/50 md:rounded-3xl md:shadow-sm md:border md:border-teal-200/50 md:dark:border-slate-700">
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
