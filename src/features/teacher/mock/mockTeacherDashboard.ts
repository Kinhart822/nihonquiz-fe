export const mockTeacherDashboard = {
  totalStudents: 150,
  activeStudents: 132,
  totalClasses: 8,
  assignmentsCreated: 45,
  averageCompletionRate: 88, // percentage
  averageScore: 76, // out of 100
  weeklyActivity: [
    { day: 'T2', activeUsers: 120, submissions: 45 },
    { day: 'T3', activeUsers: 132, submissions: 60 },
    { day: 'T4', activeUsers: 110, submissions: 35 },
    { day: 'T5', activeUsers: 140, submissions: 80 },
    { day: 'T6', activeUsers: 135, submissions: 65 },
    { day: 'T7', activeUsers: 90, submissions: 20 },
    { day: 'CN', activeUsers: 105, submissions: 50 },
  ],
  upcomingDeadlines: [
    {
      id: 'd1',
      title: 'Bài kiểm tra cuối kỳ Kanji N4',
      class: 'Luyện thi JLPT N4',
      deadline: '2026-05-29T23:59:59Z',
      submittedCount: 25,
      totalCount: 30,
    },
    {
      id: 'd2',
      title: 'Đọc hiểu Hiragana',
      class: 'Lớp N5 Cơ bản',
      deadline: '2026-05-30T12:00:00Z',
      submittedCount: 10,
      totalCount: 45,
    },
  ],
  recentSubmissions: [
    {
      id: 'sub1',
      studentName: 'Nguyễn Văn A',
      assignmentTitle: 'Trắc nghiệm Kanji 1',
      score: 95,
      time: '10 phút trước',
    },
    {
      id: 'sub2',
      studentName: 'Trần Thị B',
      assignmentTitle: 'Kiểm tra Ngữ pháp',
      score: 60,
      time: '1 giờ trước',
    },
    {
      id: 'sub3',
      studentName: 'Lê Hoàng C',
      assignmentTitle: 'Ôn tập Từ vựng',
      score: 100,
      time: '3 giờ trước',
    },
  ],
};
