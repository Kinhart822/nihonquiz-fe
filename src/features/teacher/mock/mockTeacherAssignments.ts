export type AssignmentStatus = 'active' | 'draft' | 'closed';

export interface Assignment {
  id: string;
  title: string;
  classId: string;
  className: string;
  createdAt: string;
  deadline: string;
  totalStudents: number;
  submittedCount: number;
  averageScore: number;
  status: AssignmentStatus;
}

export const mockTeacherAssignments: Assignment[] = [
  {
    id: 'a1',
    title: 'Bài kiểm tra cuối kỳ Kanji N4',
    classId: 'c1',
    className: 'Luyện thi JLPT N4',
    createdAt: '2026-05-20T08:00:00Z',
    deadline: '2026-05-29T23:59:59Z',
    totalStudents: 30,
    submittedCount: 25,
    averageScore: 82,
    status: 'active',
  },
  {
    id: 'a2',
    title: 'Đọc hiểu Hiragana',
    classId: 'c2',
    className: 'Lớp N5 Cơ bản',
    createdAt: '2026-05-25T08:00:00Z',
    deadline: '2026-05-30T12:00:00Z',
    totalStudents: 45,
    submittedCount: 10,
    averageScore: 60,
    status: 'active',
  },
  {
    id: 'a3',
    title: 'Bài kiểm tra giữa kỳ Ngữ pháp N3',
    classId: 'c3',
    className: 'Ngữ pháp N3 Nâng cao',
    createdAt: '2026-05-01T08:00:00Z',
    deadline: '2026-05-15T23:59:59Z',
    totalStudents: 20,
    submittedCount: 20,
    averageScore: 90,
    status: 'closed',
  },
  {
    id: 'a4',
    title: 'Thực hành Giao tiếp 1',
    classId: 'c4',
    className: 'Giao tiếp Cơ bản',
    createdAt: '2026-05-28T10:00:00Z',
    deadline: '2026-06-05T23:59:59Z',
    totalStudents: 15,
    submittedCount: 0,
    averageScore: 0,
    status: 'draft',
  },
];
