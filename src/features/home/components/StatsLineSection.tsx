import { CheckCircle2 } from 'lucide-react';

export const StatsLineSection = () => {
  return (
    <section className="pt-4 pb-16 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#0D9488]" size={24} />
            <span className="text-teal-950 font-bold text-lg">
              Hoàn toàn miễn phí
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#0D9488]" size={24} />
            <span className="text-teal-950 font-bold text-lg">
              Cập nhật liên tục
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#0D9488]" size={24} />
            <span className="text-teal-950 font-bold text-lg">Đa nền tảng</span>
          </div>
        </div>
      </div>
    </section>
  );
};
