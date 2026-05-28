import { AnimatePresence, motion } from 'framer-motion';
import {
  BarChart,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Filter,
  Layers,
  Search,
} from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { mockPractices } from '../mock/mockPractice';
import { PracticeCard } from './PracticeCard';

// Extracted FilterCheckbox to prevent re-mounting
const FilterCheckbox = ({
  label,
  value,
  state,
  setState,
}: {
  label: string;
  value: string;
  state: string[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const isChecked = state.includes(value);

  const toggleFilter = () => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  return (
    <button
      onClick={toggleFilter}
      className="flex items-center gap-3 p-2 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 cursor-pointer transition-colors group text-left w-full"
    >
      <div
        className={`w-5 h-5 rounded border flex items-center justify-center transition-colors flex-shrink-0 ${
          isChecked
            ? 'bg-teal-500 border-teal-500 text-white'
            : 'border-gray-300 dark:border-slate-600 group-hover:border-teal-400'
        }`}
      >
        {isChecked && <CheckCircle2 size={14} strokeWidth={3} />}
      </div>
      <span
        className={`text-sm font-medium transition-colors ${
          isChecked
            ? 'text-teal-900 dark:text-teal-100'
            : 'text-gray-600 dark:text-slate-400 group-hover:text-teal-700 dark:group-hover:text-teal-300'
        }`}
      >
        {label}
      </span>
    </button>
  );
};

//  Collapsible Component
const FilterOption = ({
  title,
  icon: Icon,
  children,
  defaultOpen = false,
  activeCount = 0,
}: {
  title: string;
  icon: any;
  children: React.ReactNode;
  defaultOpen?: boolean;
  activeCount?: number;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 dark:border-slate-700 py-4 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left group"
      >
        <div className="flex items-center gap-2">
          <Icon
            size={16}
            className={`transition-colors ${activeCount > 0 ? 'text-teal-500' : 'text-gray-400 dark:text-slate-500 group-hover:text-teal-600 dark:group-hover:text-teal-400'}`}
          />
          <h3
            className={`text-sm font-bold uppercase tracking-wider transition-colors ${activeCount > 0 ? 'text-teal-700 dark:text-teal-400' : 'text-gray-600 dark:text-slate-400 group-hover:text-teal-700 dark:group-hover:text-teal-300'}`}
          >
            {title}
          </h3>
          {activeCount > 0 && (
            <span className="ml-2 w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 text-xs flex items-center justify-center font-black">
              {activeCount}
            </span>
          )}
        </div>
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const PracticeSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>(
    [],
  );
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  // Filter logic
  const filteredPractices = useMemo(() => {
    return mockPractices.filter((practice) => {
      const matchSearch =
        practice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        practice.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchLevel =
        selectedLevels.length === 0 || selectedLevels.includes(practice.level);

      const matchCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(practice.category);

      const matchDifficulty =
        selectedDifficulties.length === 0 ||
        selectedDifficulties.includes(practice.difficulty);

      const matchStatus =
        selectedStatuses.length === 0 ||
        selectedStatuses.includes(practice.status);

      return (
        matchSearch &&
        matchLevel &&
        matchCategory &&
        matchDifficulty &&
        matchStatus
      );
    });
  }, [
    searchTerm,
    selectedLevels,
    selectedCategories,
    selectedDifficulties,
    selectedStatuses,
  ]);

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
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-[1400px] mx-auto">
      {/* Left Sidebar - Filters */}
      <div className="w-full lg:w-72 flex-shrink-0">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border- dark:border-slate-700 shadow-sm lg:sticky lg:top-24 h-max">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-teal-950 dark:text-white">
              <Filter size={20} className="text-teal-600 dark:text-teal-400" />
              <h2 className="text-lg font-black">Bộ lọc</h2>
            </div>

            {/* Clear Filters Button */}
            {(selectedLevels.length > 0 ||
              selectedCategories.length > 0 ||
              selectedDifficulties.length > 0 ||
              selectedStatuses.length > 0) && (
              <button
                onClick={() => {
                  setSelectedLevels([]);
                  setSelectedCategories([]);
                  setSelectedDifficulties([]);
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
              placeholder="Tìm kiếm bài tập..."
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
                        : 'bg-transparent text-gray-500 border-gray-200 dark:border-slate-700 hover:border-teal-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </FilterOption>

            {/* Category */}
            <FilterOption
              title="Chủ đề"
              icon={BookOpen}
              activeCount={selectedCategories.length}
            >
              <div className="flex flex-col gap-1">
                {['Vocabulary', 'Grammar', 'Kanji', 'Mock Exam'].map((cat) => (
                  <FilterCheckbox
                    key={cat}
                    label={
                      cat === 'Vocabulary'
                        ? 'Từ vựng'
                        : cat === 'Grammar'
                          ? 'Ngữ pháp'
                          : cat === 'Mock Exam'
                            ? 'Đề thi JLPT'
                            : 'Kanji'
                    }
                    value={cat}
                    state={selectedCategories}
                    setState={setSelectedCategories}
                  />
                ))}
              </div>
            </FilterOption>

            {/* Difficulty */}
            <FilterOption
              title="Độ khó"
              icon={Layers}
              activeCount={selectedDifficulties.length}
            >
              <div className="flex flex-col gap-1">
                {['Easy', 'Medium', 'Hard'].map((diff) => (
                  <FilterCheckbox
                    key={diff}
                    label={
                      diff === 'Easy'
                        ? 'Dễ'
                        : diff === 'Medium'
                          ? 'Trung bình'
                          : 'Khó'
                    }
                    value={diff}
                    state={selectedDifficulties}
                    setState={setSelectedDifficulties}
                  />
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
              Bài tập thực hành
            </h1>
            <p className="text-gray-500 dark:text-slate-400 font-medium">
              Tìm thấy{' '}
              <strong className="text-teal-600 dark:text-teal-400">
                {filteredPractices.length}
              </strong>{' '}
              bài tập phù hợp
            </p>
          </div>
        </div>

        {filteredPractices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPractices.map((practice) => (
              <PracticeCard key={practice.id} exercise={practice} />
            ))}
          </div>
        ) : (
          <div className="w-full py-20 flex flex-col items-center justify-center bg-white/50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-gray-200 dark:border-slate-700">
            <div className="w-20 h-20 bg-gray-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-teal-950 dark:text-white mb-2">
              Không tìm thấy bài tập nào
            </h3>
            <p className="text-gray-500 dark:text-slate-400 text-center max-w-sm">
              Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm để xem các kết quả khác.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedLevels([]);
                setSelectedCategories([]);
                setSelectedDifficulties([]);
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
