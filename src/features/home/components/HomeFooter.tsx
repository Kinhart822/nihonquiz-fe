export const HomeFooter = () => {
  return (
    <footer className="py-12 border-t border-teal-100 bg-[#F0FDFA]">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-xl shadow-sm border border-teal-100">
              <img
                src="/images/running-mori.png"
                alt="MoriPract Logo"
                className="w-6 h-6 object-contain grayscale opacity-60"
              />
            </div>
            <span className="font-bold text-teal-800/60">MoriPract © 2026</span>
          </div>
          <div className="flex gap-8 text-sm font-bold text-teal-800/60">
            <a href="#" className="hover:text-teal-900 transition-colors">
              Điều khoản
            </a>
            <a href="#" className="hover:text-teal-900 transition-colors">
              Bảo mật
            </a>
            <a href="#" className="hover:text-teal-900 transition-colors">
              Liên hệ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
