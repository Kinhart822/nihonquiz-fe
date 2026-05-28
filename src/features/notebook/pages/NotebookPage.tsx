import React, { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, PlayCircle } from 'lucide-react';
import { DashboardLayout } from '../../../app/layouts/DashboardLayout';
import { mockNotebookWords } from '../mock/mockNotebook';
import { WordCard } from '../components/WordCard';
import { FilterOption } from '../../../shared/components/ui/FilterOption';

export const NotebookPage: React.FC = () => {
  const [words, setWords] = useState(mockNotebookWords);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

  // Lọc từ vựng
  const filteredWords = useMemo(() => {
    return words.filter((word) => {
      const matchSearch =
        word.kanji.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.hiragana.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.meaning.toLowerCase().includes(searchTerm.toLowerCase());

      const matchLevel =
        selectedLevels.length === 0 || selectedLevels.includes(word.level);

      return matchSearch && matchLevel;
    });
  }, [words, searchTerm, selectedLevels]);

  const toggleLevel = (level: string) => {
    setSelectedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level],
    );
  };

  return (
    <DashboardLayout>
      <div className="w-full px-4 py-8 md:px-8 md:py-12 lg:px-16 xl:px-24">
        {/* Header & Quick Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-teal-100 dark:bg-teal-900/40 rounded-xl text-teal-600 dark:text-teal-400">
                <BookOpen size={24} />
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-teal-950 dark:text-white">
                Sổ từ vựng
              </h1>
            </div>
            <p className="text-gray-500 dark:text-slate-400">
              Bạn đang có{' '}
              <strong className="text-teal-600">{filteredWords.length}</strong>{' '}
              từ vựng cần ôn tập
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-600 hover:to-teal-500 text-white font-bold rounded-2xl shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all duration-300 hover:-translate-y-0.5 group">
            <PlayCircle
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            <span>Bắt đầu ôn tập</span>
          </button>
        </div>

        {/* Layout 2 cột: Sidebar Filters & Main Grid */}
        <div className="flex flex-col lg:flex-row gap-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Left Sidebar - Filters */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-teal-100 dark:border-slate-800 shadow-sm lg:sticky lg:top-24 h-max">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-teal-950 dark:text-white">
                  <Filter
                    size={20}
                    className="text-teal-600 dark:text-teal-400"
                  />
                  <h2 className="text-lg font-black">Bộ lọc</h2>
                </div>

                {/* Clear Filters Button */}
                {(selectedLevels.length > 0 || searchTerm) && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedLevels([]);
                    }}
                    className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
                  >
                    Xóa lọc
                  </button>
                )}
              </div>

              {/* Search */}
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Tìm từ, nghĩa..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-slate-800 border-none rounded-xl text-sm font-medium text-teal-950 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 transition-all outline-none"
                />
              </div>

              <div className="flex flex-col">
                {/* JLPT Level */}
                <FilterOption
                  title="Cấp độ JLPT"
                  icon={BookOpen}
                  activeCount={selectedLevels.length}
                  defaultOpen={true}
                  onClear={() => setSelectedLevels([])}
                >
                  <div className="grid grid-cols-2 gap-2">
                    {['N5', 'N4', 'N3', 'N2', 'N1'].map((level) => (
                      <button
                        key={level}
                        onClick={() => toggleLevel(level)}
                        className={`py-2 px-3 rounded-xl text-sm font-bold transition-all border ${
                          selectedLevels.includes(level)
                            ? 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-900/40 dark:text-teal-300 dark:border-teal-700/50'
                            : 'bg-transparent text-gray-500 border-gray-100 dark:border-slate-800 hover:border-teal-300 dark:hover:border-slate-700'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </FilterOption>
              </div>
            </div>
          </div>

          {/* Right Content - Grid */}
          <div className="flex-1">
            {filteredWords.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredWords.map((word) => (
                  <WordCard
                    key={word.id}
                    word={word}
                    onUnfavorite={(id) =>
                      setWords((prev) => prev.filter((w) => w.id !== id))
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="w-full py-24 flex flex-col items-center justify-center bg-white/50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-gray-200 dark:border-slate-800 text-center px-4">
                <div className="w-20 h-20 bg-gray-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                  <Search size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-teal-950 dark:text-white mb-2">
                  Không tìm thấy từ vựng nào
                </h3>
                <p className="text-gray-500 dark:text-slate-400 max-w-sm mb-6">
                  Bạn có thể thử tìm kiếm bằng Romaji, Hiragana, hoặc nghĩa
                  Tiếng Việt khác.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedLevels([]);
                  }}
                  className="px-6 py-2.5 bg-teal-50 dark:bg-slate-800 text-teal-700 dark:text-teal-400 font-bold rounded-xl hover:bg-teal-100 dark:hover:bg-slate-700 transition-colors"
                >
                  Xóa tất cả bộ lọc
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NotebookPage;
