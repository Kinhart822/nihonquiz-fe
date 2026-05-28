import React, { useState } from 'react';
import {
  Search,
  Send,
  MoreVertical,
  Phone,
  Video,
  MessageSquare,
} from 'lucide-react';
import { mockMessages } from '../mock/mockMessages';

export const MessagesPage: React.FC = () => {
  const [activeThreadId, setActiveThreadId] = useState<string | null>(
    mockMessages.length > 0 ? mockMessages[0].id : null,
  );

  const activeThread = mockMessages.find((m) => m.id === activeThreadId);

  return (
    <>
      <div className="w-full h-full bg-white dark:bg-slate-900 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-full md:w-80 lg:w-96 border-r border-gray-200 dark:border-slate-700 flex flex-col">
          <div className="p-6 border-b border-gray-200 dark:border-slate-700">
            <h2 className="text-2xl font-extrabold text-teal-950 dark:text-white mb-4">
              Messages
            </h2>
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Tìm kiếm tin nhắn..."
                className="w-full bg-gray-50 dark:bg-slate-800 border-none rounded-xl py-3 pl-10 pr-4 text-sm font-semibold text-gray-700 dark:text-slate-300 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar">
            {mockMessages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <div className="w-16 h-16 bg-gray-50 dark:bg-slate-800/50 rounded-2xl flex items-center justify-center mb-4">
                  <MessageSquare
                    className="w-8 h-8 text-gray-400 dark:text-slate-500"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-1">
                  Chưa có tin nhắn
                </h3>
                <p className="text-sm text-gray-500 dark:text-slate-400 max-w-[200px]">
                  Bạn chưa có cuộc hội thoại nào. Hãy kết nối với giáo viên hoặc
                  bạn bè!
                </p>
              </div>
            ) : (
              mockMessages.map((thread) => (
                <div
                  key={thread.id}
                  onClick={() => setActiveThreadId(thread.id)}
                  className={`flex items-center gap-4 p-4 cursor-pointer transition-colors border-l-4 ${
                    activeThreadId === thread.id
                      ? 'bg-teal-50 dark:bg-teal-900/20 border-teal-500'
                      : 'border-transparent hover:bg-gray-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <div className="relative">
                    <img
                      src={thread.recipientAvatar}
                      alt={thread.recipientName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {thread.isOnline && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-gray-900 dark:text-white truncate">
                        {thread.recipientName}
                      </h3>
                      <span className="text-xs font-semibold text-gray-400">
                        {thread.lastMessageTime}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <p
                        className={`text-sm truncate ${thread.unreadCount > 0 ? 'font-bold text-gray-900 dark:text-white' : 'font-medium text-gray-500 dark:text-slate-400'}`}
                      >
                        {thread.lastMessage}
                      </p>
                      {thread.unreadCount > 0 && (
                        <div className="w-5 h-5 bg-teal-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full flex-shrink-0">
                          {thread.unreadCount}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Chat Area */}
        {activeThread ? (
          <div className="hidden md:flex flex-1 flex-col bg-gray-50/50 dark:bg-slate-900/50">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-4">
                <img
                  src={activeThread.recipientAvatar}
                  alt={activeThread.recipientName}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-bold text-lg text-gray-900 dark:text-white">
                    {activeThread.recipientName}
                  </h2>
                  <span className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                    {activeThread.recipientRole}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <button className="hover:text-teal-600 transition-colors">
                  <Phone size={20} />
                </button>
                <button className="hover:text-teal-600 transition-colors">
                  <Video size={20} />
                </button>
                <button className="hover:text-teal-600 transition-colors">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>

            {/* Messages Area (Mocked) */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
              <div className="text-center my-4">
                <span className="text-xs font-bold bg-gray-200 dark:bg-slate-800 text-gray-500 dark:text-slate-400 px-3 py-1 rounded-full">
                  Hôm nay
                </span>
              </div>

              <div className="flex items-end gap-2 max-w-[80%]">
                <img
                  src={activeThread.recipientAvatar}
                  alt=""
                  className="w-8 h-8 rounded-full mb-1"
                />
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-bl-sm shadow-sm border-2 border- dark:border-slate-700">
                  <p className="text-gray-700 dark:text-slate-300 font-medium">
                    Chào em, em làm xong bài tập Kanji tuần này chưa?
                  </p>
                  <span className="text-[10px] font-bold text-gray-400 mt-2 block">
                    10:00 AM
                  </span>
                </div>
              </div>

              <div className="flex items-end gap-2 max-w-[80%] self-end flex-row-reverse">
                <div className="w-8 h-8 rounded-full mb-1 bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-xs">
                  Me
                </div>
                <div className="bg-teal-500 text-white p-4 rounded-2xl rounded-br-sm shadow-sm">
                  <p className="font-medium">
                    Dạ em đang làm ạ, tối nay em nộp nhé Sensei!
                  </p>
                  <span className="text-[10px] font-bold text-teal-100 mt-2 block text-right">
                    10:15 AM
                  </span>
                </div>
              </div>

              <div className="flex items-end gap-2 max-w-[80%]">
                <img
                  src={activeThread.recipientAvatar}
                  alt=""
                  className="w-8 h-8 rounded-full mb-1"
                />
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-bl-sm shadow-sm border-2 border- dark:border-slate-700">
                  <p className="text-gray-700 dark:text-slate-300 font-medium">
                    {activeThread.lastMessage}
                  </p>
                  <span className="text-[10px] font-bold text-gray-400 mt-2 block">
                    10:30 AM
                  </span>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
              <div className="flex items-center gap-3 bg-gray-50 dark:bg-slate-800 rounded-2xl p-2 pr-3">
                <input
                  type="text"
                  placeholder="Nhập tin nhắn..."
                  className="flex-1 bg-transparent border-none px-3 py-2 text-sm font-semibold focus:ring-0 outline-none dark:text-white"
                />
                <button className="w-10 h-10 bg-teal-500 text-white rounded-xl flex items-center justify-center hover:bg-teal-600 transition-colors shadow-sm shadow-teal-500/20">
                  <Send size={18} className="ml-0.5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50/50 dark:bg-slate-900/50">
            <p className="text-gray-500 font-semibold">
              Chọn một cuộc hội thoại để bắt đầu
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default MessagesPage;
