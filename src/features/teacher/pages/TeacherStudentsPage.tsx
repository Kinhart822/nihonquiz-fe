import React from 'react';
import { mockStudents } from '../mock/mockStudents';
import { Search, Filter, MoreVertical } from 'lucide-react';
import { DataTable } from '../../../shared/components/DataTable';
import type { ColumnDef } from '../../../shared/components/DataTable';

type StudentData = (typeof mockStudents)[0];

export const TeacherStudentsPage: React.FC = () => {
  const columns: ColumnDef<StudentData>[] = [
    {
      header: 'Học viên',
      cell: (student) => (
        <div className="flex items-center gap-3">
          <img
            src={student.avatar}
            alt={student.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm"
          />
          <div>
            <p className="font-bold text-gray-800 dark:text-white">
              {student.name}
            </p>
            <p className="text-xs text-gray-500">{student.email}</p>
          </div>
        </div>
      ),
    },
    {
      header: 'Trình độ JLPT',
      accessorKey: 'jlptLevel',
      cell: (student) => (
        <span className="font-bold text-gray-700 dark:text-slate-300">
          {student.jlptLevel}
        </span>
      ),
    },
    {
      header: 'Lớp học',
      cell: (student) => (
        <div className="flex flex-col gap-1">
          {student.enrolledClasses.map((cls, idx) => (
            <span
              key={idx}
              className="text-xs bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md max-w-max truncate"
            >
              {cls}
            </span>
          ))}
        </div>
      ),
    },
    {
      header: 'Tiến độ',
      cell: (student) => (
        <div className="flex items-center gap-2">
          <div className="w-full max-w-[100px] bg-gray-200 dark:bg-slate-700 rounded-full h-2">
            <div
              className="bg-teal-500 h-2 rounded-full"
              style={{ width: `${student.overallProgress}%` }}
            ></div>
          </div>
          <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
            {student.overallProgress}%
          </span>
        </div>
      ),
    },
    {
      header: 'Điểm TB',
      cell: (student) => (
        <span className="font-black text-teal-600 dark:text-teal-400">
          {student.averageScore}
        </span>
      ),
    },
    {
      header: 'Trạng thái',
      cell: (student) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${
            student.status === 'active'
              ? 'bg-emerald-100 text-emerald-700'
              : student.status === 'at_risk'
                ? 'bg-orange-100 text-orange-700'
                : 'bg-gray-100 text-gray-700'
          }`}
        >
          {student.status === 'active'
            ? 'ĐANG HỌC'
            : student.status === 'at_risk'
              ? 'NGUY CƠ'
              : 'NGHỈ HỌC'}
        </span>
      ),
    },
    {
      header: 'Thao tác',
      align: 'center',
      cell: () => (
        <button className="p-2 text-gray-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
          <MoreVertical size={18} />
        </button>
      ),
    },
  ];

  return (
    <div className="h-full flex flex-col p-4 md:p-8 space-y-6 animate-in fade-in duration-500 overflow-y-auto no-scrollbar">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white tracking-tight">
            Học viên
          </h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            Quản lý và theo dõi tiến độ của học viên.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Tìm kiếm học viên..."
              className="pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border-2 border- dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50"
            />
          </div>
          <button className="p-2 bg-white dark:bg-slate-900 border-2 border- dark:border-slate-700 rounded-xl hover:bg-gray-50 transition-colors">
            <Filter size={20} className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      <DataTable
        data={mockStudents}
        columns={columns}
        keyExtractor={(item) => item.id}
      />
    </div>
  );
};

export default TeacherStudentsPage;
