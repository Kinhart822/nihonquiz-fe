export type StudentStatus = 'active' | 'inactive' | 'at_risk';

export interface Student {
  id: string;
  name: string;
  avatar: string;
  email: string;
  enrolledClasses: string[];
  jlptLevel: string;
  attendance: number; // percentage
  overallProgress: number; // percentage
  averageScore: number; // out of 100
  status: StudentStatus;
  lastActive: string;
}

export const mockStudents: Student[] = [
  {
    id: 'st_001',
    name: 'Nguyễn Văn A',
    avatar: 'https://i.pravatar.cc/150?u=st_001',
    email: 'nguyenvana@example.com',
    enrolledClasses: ['Luyện thi JLPT N4', 'Kanji Nâng cao'],
    jlptLevel: 'N4',
    attendance: 95,
    overallProgress: 80,
    averageScore: 85,
    status: 'active',
    lastActive: '2026-05-28T09:30:00Z',
  },
  {
    id: 'st_002',
    name: 'Trần Thị B',
    avatar: 'https://i.pravatar.cc/150?u=st_002',
    email: 'tranthib@example.com',
    enrolledClasses: ['Lớp N5 Cơ bản'],
    jlptLevel: 'N5',
    attendance: 60,
    overallProgress: 45,
    averageScore: 50,
    status: 'at_risk',
    lastActive: '2026-05-25T14:15:00Z',
  },
  {
    id: 'st_003',
    name: 'Lê Hoàng C',
    avatar: 'https://i.pravatar.cc/150?u=st_003',
    email: 'lehoangc@example.com',
    enrolledClasses: ['Luyện thi JLPT N4'],
    jlptLevel: 'N4',
    attendance: 100,
    overallProgress: 90,
    averageScore: 92,
    status: 'active',
    lastActive: '2026-05-28T10:00:00Z',
  },
  {
    id: 'st_004',
    name: 'Phạm Minh D',
    avatar: 'https://i.pravatar.cc/150?u=st_004',
    email: 'phamminhd@example.com',
    enrolledClasses: ['Lớp N5 Cơ bản', 'Giao tiếp Cơ bản'],
    jlptLevel: 'N5',
    attendance: 0,
    overallProgress: 10,
    averageScore: 0,
    status: 'inactive',
    lastActive: '2026-05-01T08:00:00Z',
  },
  {
    id: 'st_005',
    name: 'Hoàng Tú E',
    avatar: 'https://i.pravatar.cc/150?u=st_005',
    email: 'hoangtue@example.com',
    enrolledClasses: ['Kanji Nâng cao'],
    jlptLevel: 'N3',
    attendance: 85,
    overallProgress: 75,
    averageScore: 78,
    status: 'active',
    lastActive: '2026-05-27T16:45:00Z',
  },
];
