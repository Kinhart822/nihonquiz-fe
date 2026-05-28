export type AnnouncementType =
  | 'general'
  | 'assignment'
  | 'feedback'
  | 'schedule';

export interface AnnouncementData {
  id: string;
  type: AnnouncementType;
  title: string;
  content: string;
  sender: string;
  senderAvatar?: string;
  timestamp: string;
  isRead: boolean;
  isPriority: boolean;
}

export const mockAnnouncements: AnnouncementData[] = [
  // {
  //   id: 'an1',
  //   type: 'schedule',
  //   title: 'Thay đổi lịch học tuần tới',
  //   content:
  //     'Lớp JLPT Intensive N4 tuần tới sẽ chuyển buổi thứ 5 sang thứ 6 nhé các bạn.',
  //   sender: 'Sensei Tanaka',
  //   senderAvatar: 'https://i.pravatar.cc/150?u=tanaka',
  //   timestamp: '2026-05-28T08:00:00Z',
  //   isRead: false,
  //   isPriority: true,
  // },
  // {
  //   id: 'an2',
  //   type: 'assignment',
  //   title: 'Nhắc nhở nộp bài tập Kanji',
  //   content:
  //     'Còn 1 ngày nữa là hết hạn nộp Kanji Writing Test 2. Nhớ nộp bài đúng hạn!',
  //   sender: 'Hệ thống LMS',
  //   timestamp: '2026-05-26T10:00:00Z',
  //   isRead: true,
  //   isPriority: false,
  // },
  // {
  //   id: 'an3',
  //   type: 'feedback',
  //   title: 'Có nhận xét mới từ giáo viên',
  //   content: 'Sensei Tanaka đã chấm bài N4 Vocabulary Mid-term của bạn.',
  //   sender: 'Hệ thống LMS',
  //   timestamp: '2026-05-21T15:30:00Z',
  //   isRead: true,
  //   isPriority: false,
  // },
];
