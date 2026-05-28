export type AssignmentStatus = 'pending' | 'completed' | 'overdue';

export interface AssignmentData {
  id: string;
  title: string;
  className: string;
  teacher: string;
  dueDate: string;
  status: AssignmentStatus;
  score?: number;
  totalScore?: number;
  feedback?: string;
  jlptLevel: string;
}

export const mockAssignments: AssignmentData[] = [
  {
    id: 'a1',
    title: 'N4 Grammar Weekly Quiz 5',
    className: 'JLPT Intensive N4',
    teacher: 'Sensei Tanaka',
    dueDate: '2026-05-29T23:59:59Z',
    status: 'pending',
    jlptLevel: 'N4',
  },
  {
    id: 'a2',
    title: 'Kanji Writing Test 2',
    className: 'Kanji Master Course',
    teacher: 'Sensei Suzuki',
    dueDate: '2026-05-27T23:59:59Z', // Past date
    status: 'overdue',
    jlptLevel: 'N3',
  },
  {
    id: 'a3',
    title: 'Listening Practice Ch 4',
    className: 'N5 Beginner Class',
    teacher: 'Sensei Sato',
    dueDate: '2026-05-30T12:00:00Z',
    status: 'pending',
    jlptLevel: 'N5',
  },
  {
    id: 'a4',
    title: 'N4 Vocabulary Mid-term',
    className: 'JLPT Intensive N4',
    teacher: 'Sensei Tanaka',
    dueDate: '2026-05-20T23:59:59Z',
    status: 'completed',
    score: 85,
    totalScore: 100,
    feedback: 'Làm bài khá tốt. Cần chú ý thêm về kính ngữ nhé!',
    jlptLevel: 'N4',
  },
];
