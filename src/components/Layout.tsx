import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  className?: string;
  showGrid?: boolean;
}

const Layout = ({ children, className = '', showGrid = true }: LayoutProps) => {
  return (
    <div
      className={`relative min-h-screen flex flex-col bg-[#0c0c0e] overflow-x-hidden ${className}`}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-rose-600/5 rounded-full blur-[100px]" />
      </div>

      {showGrid && <div className="bg-grid absolute inset-0 opacity-20" />}

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex-1 flex flex-col"
      >
        {children}
      </motion.main>

      {/* Global Footer */}
      <footer className="relative z-10 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-slate-600">
              Created By Kinhart822
            </span>
          </div>
          <div className="text-xs font-bold uppercase tracking-[0.4em] text-slate-600">
            © 2026 NihonQuiz • AI Powered
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
