import { Library, Layers, BookOpen } from 'lucide-react';

export const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="pt-24 pb-12 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white relative"
    >
      <div className="w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-teal-950">
            Hệ sinh thái học tập toàn diện
          </h2>
          <p className="text-teal-700 text-lg max-w-2xl mx-auto font-medium">
            Phương pháp tiếp cận đa chiều giúp bạn ghi nhớ sâu và giao tiếp tự
            nhiên như người bản xứ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group relative bg-white p-10 rounded-[2.5rem] border border-teal-50 shadow-sm hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#0D9488] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-teal-900/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Library size={32} />
              </div>
              <h3 className="text-2xl font-black text-teal-950 mb-4">
                Từ vựng thông minh
              </h3>
              <p className="text-teal-700/80 leading-relaxed font-medium">
                Học qua flashcard và thuật toán lặp lại ngắt quãng (Spaced
                Repetition). Tự động nhắc nhở ôn tập đúng thời điểm giúp nhớ
                lâu.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative bg-white p-10 rounded-[2.5rem] border border-teal-50 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#059669] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-900/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                <Layers size={32} />
              </div>
              <h3 className="text-2xl font-black text-teal-950 mb-4">
                Ngữ pháp chuyên sâu
              </h3>
              <p className="text-teal-700/80 leading-relaxed font-medium">
                Giải thích cặn kẽ bằng tiếng Việt, so sánh các mẫu ngữ pháp dễ
                nhầm lẫn. Bài tập thực hành đa dạng từ dễ đến khó.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative bg-white p-10 rounded-[2.5rem] border border-teal-50 shadow-sm hover:shadow-2xl hover:shadow-orange-900/10 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#EA580C] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-900/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-black text-teal-950 mb-4">
                Kanji qua câu chuyện
              </h3>
              <p className="text-teal-700/80 leading-relaxed font-medium">
                Học Hán tự qua câu chuyện hình ảnh, phân tích bộ thủ logic. Hệ
                thống hóa toàn bộ Kanji chuẩn bị cho kỳ thi JLPT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
