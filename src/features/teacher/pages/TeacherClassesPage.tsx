import React from 'react';

export const TeacherClassesPage: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 animate-in fade-in duration-500">
      <h1 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white tracking-tight">
        Lớp học
      </h1>
      <p className="text-gray-500 dark:text-gray-400 font-medium mt-2">
        Quản lý lớp học của bạn. (Sắp ra mắt)
      </p>
    </div>
  );
};

export default TeacherClassesPage;
