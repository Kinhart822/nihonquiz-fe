export interface MessageThread {
  id: string;
  recipientName: string;
  recipientAvatar: string;
  recipientRole: 'Teacher' | 'Student' | 'System';
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isOnline: boolean;
}

export const mockMessages: MessageThread[] = [
  // {
  //   id: 'm1',
  //   recipientName: 'Sensei Tanaka',
  //   recipientAvatar: 'https://i.pravatar.cc/150?u=tanaka',
  //   recipientRole: 'Teacher',
  //   lastMessage: 'Em nhớ xem lại phần ngữ pháp nhé.',
  //   lastMessageTime: '10:30 AM',
  //   unreadCount: 1,
  //   isOnline: true,
  // },
  // {
  //   id: 'm2',
  //   recipientName: 'Sensei Suzuki',
  //   recipientAvatar: 'https://i.pravatar.cc/150?u=suzuki',
  //   recipientRole: 'Teacher',
  //   lastMessage: 'Ok em.',
  //   lastMessageTime: 'Hôm qua',
  //   unreadCount: 0,
  //   isOnline: false,
  // },
  // {
  //   id: 'm3',
  //   recipientName: 'Nguyễn Văn A',
  //   recipientAvatar: 'https://i.pravatar.cc/150?u=studentA',
  //   recipientRole: 'Student',
  //   lastMessage: 'Cậu làm xong bài Kanji chưa?',
  //   lastMessageTime: 'Thứ 3',
  //   unreadCount: 3,
  //   isOnline: true,
  // },
];
