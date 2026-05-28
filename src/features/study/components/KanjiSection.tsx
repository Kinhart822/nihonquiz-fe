import React, { useMemo, useState } from 'react';
import { Search, Filter, BarChart, CheckCircle2 } from 'lucide-react';
import { mockKanjiTopics } from '../mock/mockKanji';
import { TopicCard } from './TopicCard';
import { FilterOption } from '../../../shared/components/ui/FilterOption';
import { FilterCheckbox } from '../../../shared/components/ui/FilterCheckbox';

export const KanjiSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  // Filter logic
  const filteredTopics = useMemo(() => {
    return mockKanjiTopics.filter((topic) => {
      const matchSearch =
        topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchLevel =
        selectedLevels.length === 0 || selectedLevels.includes(topic.level);

      const matchStatus =
        selectedStatuses.length === 0 ||
        selectedStatuses.includes(topic.status);

      return matchSearch && matchLevel && matchStatus;
    });
  }, [searchTerm, selectedLevels, selectedStatuses]);

  const toggleFilter = (
    setState: React.Dispatch<React.SetStateAction<string[]>>,
    value: string,
  ) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Left Sidebar - Filters */}
      <div className="w-full lg:w-72 flex-shrink-0">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-teal-100 dark:border-slate-800 shadow-sm lg:sticky lg:top-24 h-max">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-teal-950 dark:text-white">
              <Filter size={20} className="text-teal-600 dark:text-teal-400" />
              <h2 className="text-lg font-black">Bộ lọc</h2>
            </div>

            {/* Clear Filters Button */}
            {(selectedLevels.length > 0 || selectedStatuses.length > 0) && (
              <button
                onClick={() => {
                  setSelectedLevels([]);
                  setSelectedStatuses([]);
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
              placeholder="Tìm kiếm chủ đề..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-slate-800 border-none rounded-xl text-sm font-medium text-teal-950 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 transition-all outline-none"
            />
          </div>

          <div className="flex flex-col">
            {/* JLPT Level */}
            <FilterOption
              title="Cấp độ JLPT"
              icon={BarChart}
              activeCount={selectedLevels.length}
            >
              <div className="grid grid-cols-2 gap-2">
                {['N5', 'N4', 'N3', 'N2', 'N1'].map((level) => (
                  <button
                    key={level}
                    onClick={() => toggleFilter(setSelectedLevels, level)}
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

            {/* Status */}
            <FilterOption
              title="Trạng thái"
              icon={CheckCircle2}
              activeCount={selectedStatuses.length}
            >
              <div className="flex flex-col gap-1">
                {['Not Started', 'In Progress', 'Completed'].map((status) => (
                  <FilterCheckbox
                    key={status}
                    label={
                      status === 'Not Started'
                        ? 'Chưa bắt đầu'
                        : status === 'In Progress'
                          ? 'Đang học'
                          : 'Đã hoàn thành'
                    }
                    value={status}
                    state={selectedStatuses}
                    setState={setSelectedStatuses}
                  />
                ))}
              </div>
            </FilterOption>
          </div>
        </div>
      </div>

      {/* Right Content - Grid */}
      <div className="flex-1">
        <div className="flex justify-between items-end mb-6 px-2">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-teal-950 dark:text-white mb-2">
              Kanji
            </h1>
            <p className="text-gray-500 dark:text-slate-400 font-medium">
              Tìm thấy{' '}
              <strong className="text-teal-600 dark:text-teal-400">
                {filteredTopics.length}
              </strong>{' '}
              chủ đề phù hợp
            </p>
          </div>
        </div>

        {filteredTopics.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} categoryType="Kanji" />
            ))}
          </div>
        ) : (
          <div className="w-full py-20 flex flex-col items-center justify-center bg-white/50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-gray-200 dark:border-slate-800">
            <div className="w-20 h-20 bg-gray-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-teal-950 dark:text-white mb-2">
              Không tìm thấy chủ đề nào
            </h3>
            <p className="text-gray-500 dark:text-slate-400 text-center max-w-sm">
              Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm để xem các kết quả khác.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedLevels([]);
                setSelectedStatuses([]);
              }}
              className="mt-6 px-6 py-2.5 bg-teal-50 dark:bg-slate-800 text-teal-700 dark:text-teal-400 font-bold rounded-xl hover:bg-teal-100 dark:hover:bg-slate-700 transition-colors"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
