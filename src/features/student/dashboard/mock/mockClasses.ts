export interface ClassSchedule {
  day: string;
  time: string;
}

export interface ClassData {
  id: string;
  name: string;
  teacher: string;
  teacherAvatar: string;
  level: string;
  studentCount: number;
  progress: number;
  schedule: ClassSchedule[];
  upcomingAssignmentsCount: number;
}

export const mockClasses: ClassData[] = [
  // {
  //   id: 'c1',
  //   name: 'JLPT Intensive N4',
  //   teacher: 'Sensei Tanaka',
  //   teacherAvatar: 'https://i.pravatar.cc/150?u=tanaka',
  //   level: 'N4',
  //   studentCount: 25,
  //   progress: 45,
  //   schedule: [
  //     { day: 'Thứ 3', time: '18:00 - 20:00' },
  //     { day: 'Thứ 5', time: '18:00 - 20:00' },
  //   ],
  //   upcomingAssignmentsCount: 2,
  // },
  // {
  //   id: 'c2',
  //   name: 'Kanji Master Course',
  //   teacher: 'Sensei Suzuki',
  //   teacherAvatar: 'https://i.pravatar.cc/150?u=suzuki',
  //   level: 'All Levels',
  //   studentCount: 150,
  //   progress: 70,
  //   schedule: [{ day: 'Thứ 7', time: '09:00 - 11:00' }],
  //   upcomingAssignmentsCount: 0,
  // },
  // {
  //   id: 'c3',
  //   name: 'N5 Beginner Class',
  //   teacher: 'Sensei Sato',
  //   teacherAvatar: 'https://i.pravatar.cc/150?u=sato',
  //   level: 'N5',
  //   studentCount: 15,
  //   progress: 10,
  //   schedule: [
  //     { day: 'Thứ 2', time: '19:00 - 21:00' },
  //     { day: 'Thứ 4', time: '19:00 - 21:00' },
  //   ],
  //   upcomingAssignmentsCount: 1,
  // },
];
