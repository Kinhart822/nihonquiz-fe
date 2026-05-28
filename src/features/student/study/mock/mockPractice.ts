export interface PracticeExercise {
  id: string;
  title: string;
  description: string;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  category: 'Vocabulary' | 'Grammar' | 'Kanji' | 'Mixed' | 'Mock Exam';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  status: 'Completed' | 'In Progress' | 'Not Started';
  totalQuestions: number;
  completedQuestions: number;
  score?: number;
}

export const mockPractices: PracticeExercise[] = [
  {
    id: 'p1',
    title: 'Ôn tập Từ vựng Bài 1-5',
    description: 'Luyện tập các từ vựng cơ bản Minna no Nihongo.',
    level: 'N5',
    category: 'Vocabulary',
    difficulty: 'Easy',
    status: 'Completed',
    totalQuestions: 20,
    completedQuestions: 20,
    score: 95,
  },
  {
    id: 'p2',
    title: 'Ngữ pháp Thể Te',
    description: 'Bài tập chia động từ thể Te và các mẫu câu ứng dụng.',
    level: 'N5',
    category: 'Grammar',
    difficulty: 'Medium',
    status: 'In Progress',
    totalQuestions: 30,
    completedQuestions: 15,
  },
  {
    id: 'p3',
    title: 'Kanji cơ bản (Chương 1)',
    description: 'Nhận diện và cách đọc 50 Kanji N5 đầu tiên.',
    level: 'N5',
    category: 'Kanji',
    difficulty: 'Hard',
    status: 'Not Started',
    totalQuestions: 50,
    completedQuestions: 0,
  },
  {
    id: 'p4',
    title: 'Mixed Test N4 - Part 1',
    description: 'Bài thi thử tổng hợp kiến thức N4.',
    level: 'N4',
    category: 'Mixed',
    difficulty: 'Hard',
    status: 'Not Started',
    totalQuestions: 100,
    completedQuestions: 0,
  },
  {
    id: 'p5',
    title: 'Từ vựng N4 - Chủ đề Công việc',
    description: 'Các từ vựng thường gặp trong môi trường làm việc tiếng Nhật.',
    level: 'N4',
    category: 'Vocabulary',
    difficulty: 'Medium',
    status: 'Completed',
    totalQuestions: 40,
    completedQuestions: 40,
    score: 80,
  },
  {
    id: 'p6',
    title: 'Ngữ pháp N3 - Biểu hiện cảm xúc',
    description: 'Luyện tập các cấu trúc ngữ pháp chỉ cảm xúc, trạng thái.',
    level: 'N3',
    category: 'Grammar',
    difficulty: 'Medium',
    status: 'Not Started',
    totalQuestions: 25,
    completedQuestions: 0,
  },
  {
    id: 'p7',
    title: 'Kanji N3 - Bộ thủ quan trọng',
    description: 'Phân biệt các Kanji có bộ thủ giống nhau.',
    level: 'N3',
    category: 'Kanji',
    difficulty: 'Hard',
    status: 'In Progress',
    totalQuestions: 60,
    completedQuestions: 12,
  },
  {
    id: 'p8',
    title: 'JLPT N2 Mock Exam - Vocabulary',
    description: 'Đề thi thử phần Từ vựng N2.',
    level: 'N2',
    category: 'Mock Exam',
    difficulty: 'Hard',
    status: 'Not Started',
    totalQuestions: 50,
    completedQuestions: 0,
  },
];
