import React from 'react';
import { SideNav } from '../../shared/components/SideNav';
import type { SideNavLink } from '../../shared/components/SideNav';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  ClipboardCheck,
  MessageSquare,
  BellRing,
} from 'lucide-react';
import type { Notification } from '../../features/notifications/components/NotificationsPanel';

const teacherLinks: SideNavLink[] = [
  {
    path: '/teacher/dashboard',
    label: 'Tổng quan',
    icon: LayoutDashboard,
    matchPrefix: true,
  },
  {
    path: '/teacher/students',
    label: 'Học viên',
    icon: Users,
    matchPrefix: true,
  },
  {
    path: '/teacher/classes',
    label: 'Lớp học',
    icon: GraduationCap,
    matchPrefix: true,
  },
  {
    path: '/teacher/assignments',
    label: 'Bài tập',
    icon: ClipboardCheck,
    badge: 5,
    badgeColor: 'bg-red-500',
    matchPrefix: true,
  },
  {
    path: '/teacher/messages',
    label: 'Tin nhắn',
    icon: MessageSquare,
    badge: '99+',
    badgeColor: 'bg-teal-500',
    matchPrefix: true,
  },
];

const teacherNotifications: Notification[] = [
  {
    id: 1,
    title: 'Nộp bài mới',
    description: 'Có 5 học sinh vừa nộp bài tập Kanji.',
    time: '5 phút trước',
    icon: (
      <ClipboardCheck size={20} className="text-teal-600 dark:text-teal-400" />
    ),
    bg: 'bg-teal-100 dark:bg-teal-900/40',
    unread: true,
  },
  {
    id: 2,
    title: 'Tin nhắn học viên',
    description: 'Nguyễn Văn A có câu hỏi về ngữ pháp N4.',
    time: '2 giờ trước',
    icon: (
      <MessageSquare size={20} className="text-blue-600 dark:text-blue-400" />
    ),
    bg: 'bg-blue-100 dark:bg-blue-900/40',
    unread: true,
  },
  {
    id: 3,
    title: 'Nhắc nhở hệ thống',
    description: 'Lớp JLPT N4 sắp bắt đầu trong 30 phút.',
    time: '1 ngày trước',
    icon: (
      <BellRing size={20} className="text-orange-600 dark:text-orange-400" />
    ),
    bg: 'bg-orange-100 dark:bg-orange-900/40',
    unread: false,
  },
];

export const TeacherLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SideNav links={teacherLinks} notifications={teacherNotifications}>
      {children}
    </SideNav>
  );
};
