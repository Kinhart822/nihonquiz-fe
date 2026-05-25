import React from 'react';
import { X, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: React.ReactNode;
  bg: string;
  unread: boolean;
}

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
  onMarkAsRead: (id: number) => void;
  onMarkAllAsRead: () => void;
}

export const NotificationsPanel: React.FC<NotificationsPanelProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
}) => {
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-[300]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-slate-900 shadow-2xl z-[310] flex flex-col border-l border-teal-50 dark:border-slate-800"
          >
            <div className="p-4 md:p-6 border-b border-teal-50 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-50 dark:bg-teal-900/40 rounded-xl relative">
                  <Bell
                    className="text-teal-700 dark:text-teal-400"
                    size={24}
                  />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-white dark:border-teal-900/40 rounded-full"></span>
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-teal-950 dark:text-white">
                    Thông báo
                  </h2>
                  <p className="text-sm text-teal-600 dark:text-teal-400/70">
                    {unreadCount > 0
                      ? `Bạn có ${unreadCount} thông báo mới`
                      : 'Bạn đã đọc tất cả'}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-teal-700 dark:hover:text-teal-300 hover:bg-teal-50 dark:hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4">
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  onClick={() => onMarkAsRead(notif.id)}
                  className={`p-4 rounded-2xl transition-colors cursor-pointer border ${
                    notif.unread
                      ? 'bg-teal-50/50 dark:bg-teal-900/20 border-teal-100 dark:border-teal-800/50'
                      : 'bg-white dark:bg-slate-900 border-gray-100 dark:border-slate-800'
                  } hover:border-teal-300 dark:hover:border-teal-600 group`}
                >
                  <div className="flex gap-4">
                    <div
                      className={`w-10 h-10 ${notif.bg} rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      {notif.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4
                          className={`text-sm font-bold ${notif.unread ? 'text-teal-950 dark:text-teal-100' : 'text-gray-700 dark:text-slate-300'}`}
                        >
                          {notif.title}
                        </h4>
                        {notif.unread && (
                          <span className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-slate-400 mb-2 leading-relaxed">
                        {notif.description}
                      </p>
                      <span className="text-xs font-medium text-gray-400 dark:text-slate-500">
                        {notif.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-teal-50 dark:border-slate-800">
              <button
                onClick={onMarkAllAsRead}
                disabled={unreadCount === 0}
                className={`w-full py-3 font-bold rounded-xl transition-colors text-sm cursor-pointer ${
                  unreadCount > 0
                    ? 'bg-teal-50 dark:bg-slate-800 hover:bg-teal-100 dark:hover:bg-slate-700 text-teal-700 dark:text-teal-300'
                    : 'bg-gray-50 dark:bg-slate-800/50 text-gray-400 dark:text-slate-500 cursor-not-allowed'
                }`}
              >
                Đánh dấu đã đọc tất cả
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
