import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import Layout from '../components/Layout';
import { gifs } from '../constants/gifs';
import { pickRandom } from '../utils';

const EndScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [params] = useSearchParams();
  const score = Number(params.get('score'));
  const [message, setMessage] = useState('');
  const [gif, setGif] = useState('');
  const { width, height } = useWindowSize();

  const { selectedAnswers, quizParams } = (location.state as any) || {};

  const handlePlayAgain = () => {
    void navigate('/');
  };

  const handleViewDetails = () => {
    if (selectedAnswers) {
      void navigate(`/quiz${quizParams || ''}`, {
        state: { selectedAnswers },
      });
    } else {
      void navigate(-1);
    }
  };

  useEffect(() => {
    let grade: 'perfect' | 'good' | 'bad';
    if (score === 1) {
      grade = 'perfect';
    } else if (score >= 0.7) {
      grade = 'good';
    } else {
      grade = 'bad';
    }

    const endMessages = {
      perfect: [
        "Ồ, nhìn bạn kìa, trả lời đúng hết cơ đấy! Chắc hẳn bạn được sinh ra với một lợi thế 'gian lận' gọi là trí thông minh rồi.",
        'Chúc mừng màn trình diễn xuất sắc! Tôi đoán việc trở thành một cuốn từ điển sống cũng có cái giá của nó nhỉ.',
        'Tuyệt vời! Khả năng làm người khác cảm thấy thấp kém về trí tuệ của bạn thật đáng kinh ngạc.',
        'Làm tốt lắm! Tôi cá là bạn có đường dây nóng bí mật kết nối với các vị thần đố vui đấy.',
        'Ồ, hãy khai sáng cho chúng tôi bằng thiên tài của bạn khi bạn lướt qua các câu hỏi một cách dễ dàng như thế này.',
        'Nhìn bạn trả lời đúng hết kìa. Cứ như thể bạn đang gian lận... bằng chính bộ não của mình vậy!',
        'Màn trình diễn của bạn thật đi vào huyền thoại. Ý tôi là, ai cần đời sống xã hội khi có thể học cả ngày chứ?',
        'Chúc mừng điểm số tuyệt đối! Tôi sẽ ngồi đây và tự hỏi về ý nghĩa sự tồn tại của mình vậy.',
        'Bạn giống như một Google bằng xương bằng thịt, nhưng không có quảng cáo phiền nhiễu. Tôi thuê bạn đi thi hộ được không?',
      ],
      good: [
        'Suýt soát đạt điểm tối đa cũng giống như suýt trúng số vậy, nó vẫn chẳng có nghĩa lý gì cả.',
        'Làm tốt lắm với số điểm gần như hoàn hảo. Đó là một thành tựu thực sự... đối với một người không phải là bạn.',
        'Bạn làm khá tốt, nhưng đừng lo, luôn có chỗ cho sự cải thiện mà. Lần tới thử đạt điểm tuyệt đối xem sao?',
        'Chúc mừng điểm số gần hoàn hảo. Cứ như thể bạn đã cố gắng, nhưng vẫn chưa đủ ấy nhỉ.',
        'Bạn đã ở rất gần điểm tuyệt đối rồi, cứ như thể bạn đang cố làm chúng tôi cảm thấy tốt hơn về bản thân mình vậy.',
        'Tôi thấy bạn bỏ lỡ vài câu rồi. Đừng lo, sai lầm tạo nên tính cách... người ta bảo thế.',
        'Bạn chưa thực sự xuất sắc, nhưng đừng lo, vẫn còn nhiều thứ bạn có thể làm tốt mà, ví dụ như việc sống trung bình chẳng hạn.',
        'Bạn không đạt điểm tối đa, nhưng ít nhất bạn cũng có cúp tham gia... ồ đợi đã, đây đâu phải giải nhi đồng?',
        "Màn trình diễn của bạn gần như hoàn hảo, nhưng đáng tiếc là 'gần như' không có giá trị trong thế giới thực.",
        "Làm tốt lắm với số điểm gần tuyệt đối. Một minh chứng sống cho câu nói 'suýt trúng thì vẫn là trượt'.",
      ],
      bad: [
        'Một màn trình diễn trung bình thật ấn tượng. Hãy tiếp tục mơ về những vì sao nhé!',
        'Nếu nỗ lực mà tính thành điểm, chắc chắn bạn đứng đầu lớp! Nhưng đáng tiếc là không phải vậy...',
        'Làm tốt lắm khi đưa ra những câu trả lời sai với sự tự tin như vậy! Bạn đúng là một kẻ ngoại đạo thực thụ!',
        'Tuyệt vời! Màn trình diễn của bạn là một kiệt tác của những suy đoán sáng tạo.',
        'Kết quả của bạn là một ví dụ điển hình về những gì không nên làm nếu bạn muốn thành công trong cuộc sống.',
        'Tôi thực sự ngưỡng mộ khả năng chọn sai đáp án một cách nhất quán của bạn. Đó là một tài năng đấy!',
        'Ai cần đáp án đúng khi bạn có thể dễ dàng đạt điểm tuyệt đối trong việc hiểu sai vấn đề chứ?',
        'Màn trình diễn của bạn làm tôi câm nín. Tôi không biết có thể sai một cách nhất quán đến thế này.',
      ],
    };

    const messages = endMessages[grade];
    const randomMessage = pickRandom(messages);
    setMessage(randomMessage);

    const randomGif = pickRandom(gifs[grade]);
    setGif(randomGif);
  }, [score]);

  return (
    <Layout className="px-4">
      <div className="flex-1 flex items-center justify-center py-12">
        {score >= 0.8 && (
          <Confetti
            width={width}
            height={height}
            className="overflow-hidden opacity-50"
          />
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 w-full max-w-3xl"
        >
          <div className="glass-card rounded-3xl p-8 md:p-16 text-center border-rose-500/10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-500 mb-4 block">
                Hoàn thành buổi học
              </span>
              <h2 className="text-6xl md:text-9xl font-black tracking-tight text-white mb-8">
                {Math.round(score * 100)}
                <span className="text-rose-600 text-3xl md:text-5xl">%</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative mb-12 w-full max-w-[480px] mx-auto"
            >
              <div className="absolute inset-0 bg-rose-600/20 blur-3xl rounded-full" />
              <div className="relative z-10 aspect-video rounded-none border border-white/10 shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-500 overflow-hidden">
                <iframe
                  src={gif}
                  className="w-full h-full scale-[1.1] pointer-events-none"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-slate-300 font-light mb-12 max-w-xl mx-auto italic"
            >
              "{message}"
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4"
            >
              <button
                className="q-button min-w-[240px]"
                onClick={handlePlayAgain}
              >
                Học thêm chủ đề khác
              </button>
              <button
                className="px-10 py-4 rounded-2xl border border-white/10 bg-white/5 text-white font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-300 min-w-[240px]"
                onClick={handleViewDetails}
              >
                Xem chi tiết đáp án
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default EndScreen;
