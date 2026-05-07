import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { HiChevronRight } from 'react-icons/hi2';
import { Typewriter } from 'react-simple-typewriter';
import { pickRandom } from '../utils';

const POOL = [
  'Tiếng Nhật có ba hệ thống chữ viết: Hiragana, Katakana và Kanji.',
  'Có hơn 50.000 chữ Kanji, nhưng bạn chỉ cần khoảng 2.000 chữ để đọc một tờ báo Nhật Bản.',
  'Tiếng Nhật được sử dụng bởi hơn 125 triệu người trên toàn thế giới.',
  'Tiếng Nhật được coi là một ngôn ngữ biệt lập, không có mối quan hệ phả hệ rõ ràng với các ngữ hệ lớn khác.',
  'Hiragana chủ yếu được dùng cho các từ thuần Nhật và các thành phần ngữ pháp.',
  'Katakana chủ yếu dùng cho các từ mượn nước ngoài, từ tượng thanh và thuật ngữ khoa học.',
  'Câu tiếng Nhật thường theo cấu trúc Chủ ngữ - Tân ngữ - Động từ (SOV).',
  'Tiếng Nhật không có thì tương lai; thì hiện tại được dùng cho cả hành động hiện tại và tương lai.',
  'Tiếng Nhật sử dụng kính ngữ (Keigo) để thể hiện sự tôn trọng dựa trên thứ bậc xã hội.',
  'Tiếng Nhật đã ảnh hưởng đến tiếng Anh qua các từ như tsunami, karaoke và emoji.',
  "Tại sao học sinh Nhật Bản lại học trên máy bay? Vì họ muốn đạt đến 'tầm cao' mới trong học tập!",
  "Bạn gọi một sợi mì giả là gì? Là 'impasta'! (Chơi chữ: imposter)",
  'Tại sao cuộn sushi lại lăn? Vì nó nhìn thấy nước tương.',
  "Tôi biết một câu đùa về ngữ pháp tiếng Nhật, nhưng nó là 'thì quá khứ' rồi.",
  "Loại giày yêu thích của ninja là gì? Giày 'Sneakers' (giày lén lút).",
];

const Facts = () => {
  const [fact, setFact] = useState(() => pickRandom(POOL));

  return (
    <div className="flex flex-col items-center text-center">
      <div className="min-h-[120px] flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={fact}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed italic"
          >
            <Typewriter
              words={[fact]}
              loop={1}
              typeSpeed={40}
              cursor
              cursorStyle="_"
              cursorColor="#e11d48"
            />
          </motion.p>
        </AnimatePresence>
      </div>

      <button
        onClick={() => setFact(pickRandom(POOL))}
        className="group mt-12 flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-rose-500/50 hover:bg-rose-500/10 transition-all duration-300"
      >
        <span className="text-sm font-bold uppercase tracking-widest">
          Kiến thức tiếp theo
        </span>
        <HiChevronRight className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default Facts;
