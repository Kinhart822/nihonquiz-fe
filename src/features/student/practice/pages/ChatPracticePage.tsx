import React, { useState } from 'react';
import { Send, Bot, User, Sparkles, MessageSquare } from 'lucide-react';

const ChatPracticePage: React.FC = () => {
  const [messages] = useState([
    {
      role: 'assistant',
      content:
        'こんにちは！Hôm nay bạn muốn luyện tập chủ đề gì bằng tiếng Nhật?',
    },
    {
      role: 'user',
      content: 'Mình muốn luyện tập cách gọi món trong nhà hàng.',
    },
    {
      role: 'assistant',
      content:
        "Tuyệt vời! Chúng ta hãy bắt đầu nhé. Mình sẽ đóng vai người phục vụ (店員 - ten'in), còn bạn sẽ là khách hàng (客 - kyaku).\n\nいらっしゃいませ。何名様でしょうか？\n(Irasshaimase. Nanmei-sama deshou ka?)",
    },
  ]);
  const [input, setInput] = useState('');

  return (
    <>
      <div className="w-full px-4 py-8 md:px-8 md:py-12 lg:px-16 xl:px-24 h-full flex flex-col">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border-2 border- dark:border-green-800/50 transition-colors">
            <Sparkles size={14} /> AI Practice
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 transition-colors">
            Trò chuyện cùng AI
          </h1>
          <p className="text-gray-500 dark:text-slate-400 text-sm md:text-base transition-colors">
            Luyện tập giao tiếp thực tế với AI tutor
          </p>
        </div>

        <div className="flex-1 bg-white dark:bg-slate-900 rounded-xl border-2 border- dark:border-slate-700 shadow-sm flex flex-col overflow-hidden min-h-[500px] transition-colors">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50 dark:bg-slate-950/50 transition-colors">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${msg.role === 'user' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'}`}
                >
                  {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                </div>
                <div
                  className={`max-w-[80%] rounded-2xl p-4 transition-colors ${msg.role === 'user' ? 'bg-blue-600 dark:bg-blue-600 text-white rounded-tr-none' : 'bg-white dark:bg-slate-900 border-2 border- dark:border-slate-700 shadow-sm rounded-tl-none text-gray-800 dark:text-slate-200'}`}
                >
                  <p className="whitespace-pre-wrap leading-relaxed text-[15px]">
                    {msg.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 transition-colors">
            <div className="flex items-center gap-3">
              <button className="p-3 text-gray-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">
                <MessageSquare size={20} />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Nhập tin nhắn bằng tiếng Nhật hoặc tiếng Việt..."
                  className="w-full bg-gray-50 dark:bg-slate-800 border-2 border- dark:border-slate-700 text-gray-800 dark:text-slate-200 rounded-xl px-4 py-3.5 pr-12 outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-500/50 transition-all font-medium"
                />
              </div>
              <button className="p-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-sm flex-shrink-0">
                <Send size={20} className="ml-0.5" />
              </button>
            </div>
            <p className="text-center text-xs text-gray-400 dark:text-slate-500 mt-3 font-medium transition-colors">
              AI có thể mắc lỗi. Vui lòng kiểm tra lại các thông tin quan trọng.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPracticePage;
