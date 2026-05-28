import React from 'react';
import { Inbox } from 'lucide-react';

export interface ColumnDef<T> {
  header: React.ReactNode;
  accessorKey?: keyof T;
  cell?: (item: T) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  keyExtractor: (item: T) => string | number;
}

export function DataTable<T>({
  data,
  columns,
  keyExtractor,
}: DataTableProps<T>) {
  return (
    <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-2 border-gray-200 dark:border-slate-700 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 w-full relative">
      <div className="overflow-x-auto w-full no-scrollbar">
        <table className="w-full text-left border-collapse min-w-max">
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 to-gray-50/50 dark:from-slate-800/80 dark:to-slate-800/40 border-b-2 border-gray-200 dark:border-slate-700">
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className={`py-5 px-6 text-xs font-black uppercase tracking-[0.15em] text-teal-800/70 dark:text-teal-400/80 whitespace-nowrap ${
                    col.align === 'center'
                      ? 'text-center'
                      : col.align === 'right'
                        ? 'text-right'
                        : 'text-left'
                  } ${col.className || ''}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50/50 dark:divide-slate-800/50">
            {data.map((item) => (
              <tr
                key={keyExtractor(item)}
                className="group hover:bg-teal-50/40 dark:hover:bg-teal-900/10 transition-colors duration-200"
              >
                {columns.map((col, idx) => (
                  <td
                    key={idx}
                    className={`py-5 px-6 text-[20px] font-semibold text-gray-800 dark:text-slate-200 align-middle ${
                      col.align === 'center'
                        ? 'text-center'
                        : col.align === 'right'
                          ? 'text-right'
                          : 'text-left'
                    } ${col.className || ''}`}
                  >
                    {col.cell
                      ? col.cell(item)
                      : col.accessorKey
                        ? (item[col.accessorKey] as React.ReactNode)
                        : null}
                  </td>
                ))}
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="py-16 px-6 text-center">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-16 h-16 bg-gray-50 dark:bg-slate-800/50 rounded-2xl flex items-center justify-center">
                      <Inbox
                        className="w-8 h-8 text-gray-400 dark:text-slate-500"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-gray-500 dark:text-slate-400 font-medium text-sm">
                      Không có dữ liệu hiển thị
                    </span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
