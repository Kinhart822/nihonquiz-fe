import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const CTASection = ({ onOpenAuth }: CTASectionProps) => {
  return (
    <section className="py-24 px-4 bg-[#F0FDFA]">
      <div className="w-full">
        <div className="relative bg-gradient-to-br from-[#0D9488] to-[#059669] rounded-[3rem] p-12 md:p-20 text-center overflow-hidden shadow-2xl shadow-teal-900/20">
          {/* Decorative background circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tight">
              Sẵn sàng đột phá trình độ?
            </h2>
            <p className="text-xl text-teal-50 mb-12 max-w-2xl mx-auto font-medium opacity-90">
              Gia nhập cộng đồng hơn 10.000 học viên và trải nghiệm phương pháp
              học tập thế hệ mới ngay hôm nay.
            </p>
            <button
              onClick={() => onOpenAuth('register')}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white hover:bg-teal-50 text-[#0D9488] text-xl font-bold rounded-2xl transition-all shadow-xl hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
            >
              Tạo tài khoản miễn phí
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
