import React from 'react';
import { SideNav } from '../../shared/components/SideNav';
import type { SideNavLink } from '../../shared/components/SideNav';
import {
  Home,
  GraduationCap,
  BookOpen,
  BookMarked,
  ClipboardList,
  MessageCircle,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import type { Notification } from '../../features/notifications/components/NotificationsPanel';

const studentLinks: SideNavLink[] = [
  {
    path: '/student/dashboard',
    label: 'Tổng quan',
    icon: Home,
    matchPrefix: true,
  },
  {
    path: '/student/classes',
    label: 'Lớp học',
    icon: GraduationCap,
    matchPrefix: true,
  },
  {
    path: '/student/study',
    label: 'Học tập',
    icon: BookOpen,
    matchPrefix: true,
  },
  {
    path: '/student/notebook',
    label: 'Sổ tay',
    icon: BookMarked,
    matchPrefix: true,
  },
  {
    path: '/student/assignments',
    label: 'Bài tập',
    icon: ClipboardList,
    badge: 2,
    badgeColor: 'bg-red-500',
    matchPrefix: true,
  },
  {
    path: '/student/messages',
    label: 'Hộp thư',
    icon: MessageCircle,
    badge: 'Mới',
    badgeColor: 'bg-teal-500',
    matchPrefix: true,
  },
];

const studentNotifications: Notification[] = [
  {
    id: 1,
    title: 'Đến giờ học rồi!',
    description: 'Bạn có 15 từ vựng cần ôn tập hôm nay.',
    time: '5 phút trước',
    icon: <BookOpen size={20} className="text-teal-600 dark:text-teal-400" />,
    bg: 'bg-teal-100 dark:bg-teal-900/40',
    unread: true,
  },
  {
    id: 2,
    title: 'Kỷ lục mới!',
    description:
      'Bạn đã đạt chuỗi học 7 ngày liên tiếp. Tiếp tục phát huy nhé!',
    time: '2 giờ trước',
    icon: <Flame size={20} className="text-orange-600 dark:text-orange-400" />,
    bg: 'bg-orange-100 dark:bg-orange-900/40',
    unread: true,
  },
  {
    id: 3,
    title: 'Hoàn thành bài tập',
    description: 'Bạn đã hoàn thành xuất sắc bài kiểm tra N4.',
    time: '1 ngày trước',
    icon: (
      <CheckCircle2
        size={20}
        className="text-emerald-600 dark:text-emerald-400"
      />
    ),
    bg: 'bg-emerald-100 dark:bg-emerald-900/40',
    unread: false,
  },
];

export const StudentLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SideNav links={studentLinks} notifications={studentNotifications}>
      {children}
    </SideNav>
  );
};
