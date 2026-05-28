import React from 'react';
import { Bell, MessageSquare, Calendar } from 'lucide-react';
import { mockAnnouncements } from '../../lms/mock/mockAnnouncements';

export const AnnouncementsCard: React.FC = () => {
  const topAnnouncements = mockAnnouncements.slice(0, 3);

  const getIcon = (type: string) => {
    switch (type) {
      case 'schedule':
        return <Calendar size={18} />;
      case 'feedback':
        return <MessageSquare size={18} />;
      default:
        return <Bell size={18} />;
    }
  };

  const getColor = (type: string, isPriority: boolean) => {
    if (isPriority)
      return 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30';
    if (type === 'feedback')
      return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30';
    return 'text-teal-600 bg-teal-100 dark:text-teal-400 dark:bg-teal-900/30';
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-100 dark:border-slate-800 shadow-sm flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center">
            <Bell size={20} />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Announcements
          </h2>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        {topAnnouncements.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 p-3 hover:bg-gray-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors cursor-pointer"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getColor(item.type, item.isPriority)}`}
            >
              {getIcon(item.type)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3
                  className={`font-bold truncate ${!item.isRead ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-slate-300'}`}
                >
                  {item.title}
                </h3>
                {!item.isRead && (
                  <div className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0"></div>
                )}
              </div>
              <p className="text-sm text-gray-500 dark:text-slate-400 line-clamp-2 mb-1">
                {item.content}
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                <span className="truncate">{item.sender}</span>
                <span>•</span>
                <span>
                  {new Date(item.timestamp).toLocaleDateString('vi-VN')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
