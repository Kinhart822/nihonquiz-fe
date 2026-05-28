import React from 'react';
import { TrendingUp } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { WEEKLY_PROGRESS_DATA } from '../mock/mockProgressData';
import { useTheme } from '../../../../app/hooks/useTheme';

export const ProgressChart: React.FC = () => {
  const data = WEEKLY_PROGRESS_DATA;
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border-2 border- dark:border-slate-700 shadow-sm flex flex-col h-full transition-colors">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-bold text-gray-800 dark:text-white transition-colors">
            Tiến độ học tập
          </h2>
          <p className="text-sm text-gray-500 dark:text-slate-400 transition-colors">
            Số lượng bài học hoàn thành trong tuần
          </p>
        </div>
        <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400 transition-colors">
          <TrendingUp size={20} />
        </div>
      </div>

      <div className="flex-1 w-full min-h-[450px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: isDark ? '#94a3b8' : '#6b7280', fontSize: 13 }}
              dy={10}
            />
            <Tooltip
              cursor={{ fill: isDark ? '#1e293b' : '#f3f4f6' }}
              contentStyle={{
                backgroundColor: isDark ? '#0f172a' : '#ffffff',
                border: isDark ? '1px solid #1e293b' : '1px solid #f3f4f6',
                borderRadius: '8px',
                color: isDark ? '#f8fafc' : '#111827',
                fontWeight: 'bold',
              }}
              itemStyle={{ color: '#0d9488' }}
              formatter={(value: any) => [`${value} bài học`, 'Hoàn thành']}
            />
            <Bar dataKey="value" radius={[6, 6, 6, 6]}>
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={isDark ? '#14b8a6' : '#0d9488'}
                  className="transition-all duration-300 hover:opacity-80"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
