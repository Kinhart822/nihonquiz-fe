import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { RootProvider } from '../providers/RootProvider';
import TeacherHomePage from '../../features/home/pages/TeacherHomePage';
import { StudentLayout } from '../layouts/StudentLayout';
import { TeacherLayout } from '../layouts/TeacherLayout';

// Student / Generic Imports (from existing features)
import DashboardHomePage from '../../features/student/dashboard/pages/DashboardHomePage';
import HomePage from '../../features/home/pages/HomePage';
import { NotebookPage } from '../../features/student/notebook/pages/NotebookPage';
import ChatPracticePage from '../../features/student/practice/pages/ChatPracticePage';
import SettingsPage from '../../features/settings/pages/SettingsPage';
import { GrammarSection } from '../../features/student/study/components/GrammarSection';
import { KanjiSection } from '../../features/student/study/components/KanjiSection';
import { PracticeSection } from '../../features/student/study/components/PracticeSection';
import { VocabularySection } from '../../features/student/study/components/VocabularySection';
import { PracticeDetailPage } from '../../features/student/study/pages/PracticeDetailPage';
import { PracticeResultPage } from '../../features/student/study/pages/PracticeResultPage';
import { PracticeTestPage } from '../../features/student/study/pages/PracticeTestPage';
import StudyPage from '../../features/student/study/pages/StudyPage';
import NotFoundPage from '../errors/NotFoundPage';
import { HomeLayout } from '../layouts/HomeLayout';
import ClassesPage from '../../features/student/classes/pages/ClassesPage';
import AssignmentsPage from '../../features/student/assignments/pages/AssignmentsPage';
import MessagesPage from '../../features/student/messages/pages/MessagesPage';
import TeacherDashboardPage from '../../features/teacher/pages/TeacherDashboardPage';
import TeacherStudentsPage from '../../features/teacher/pages/TeacherStudentsPage';
import TeacherClassesPage from '../../features/teacher/pages/TeacherClassesPage';
import TeacherAssignmentsPage from '../../features/teacher/pages/TeacherAssignmentsPage';
import TeacherMessagesPage from '../../features/teacher/pages/TeacherMessagesPage';

export const router = createBrowserRouter([
  {
    element: <RootProvider />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomeLayout />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: 'teachers',
            element: <TeacherHomePage />,
          },
        ],
      },
      {
        path: '/student',
        element: (
          <StudentLayout>
            <Outlet />
          </StudentLayout>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="dashboard" replace />,
          },
          {
            path: 'dashboard',
            element: <DashboardHomePage />,
          },
          {
            path: 'classes',
            element: <ClassesPage />,
          },
          {
            path: 'assignments',
            element: <AssignmentsPage />,
          },
          {
            path: 'messages',
            element: <MessagesPage />,
          },
          {
            path: 'notebook',
            element: <NotebookPage />,
          },
          {
            path: 'settings',
            element: <SettingsPage />,
          },
          {
            path: 'study',
            element: <StudyPage />,
            children: [
              {
                index: true,
                element: <Navigate to="vocabulary" replace />,
              },
              {
                path: 'vocabulary',
                element: <VocabularySection />,
              },
              {
                path: 'grammar',
                element: <GrammarSection />,
              },
              {
                path: 'kanji',
                element: <KanjiSection />,
              },
              {
                path: 'practice',
                element: <PracticeSection />,
              },
            ],
          },
          {
            path: 'practice-test/:id/detail',
            element: <PracticeDetailPage />,
          },
          {
            path: 'practice-test/:id/play',
            element: <PracticeTestPage />,
          },
          {
            path: 'practice-test/:id/result',
            element: <PracticeResultPage />,
          },
          {
            path: 'practice/chat',
            element: <ChatPracticePage />,
          },
        ],
      },
      {
        path: '/teacher',
        element: (
          <TeacherLayout>
            <Outlet />
          </TeacherLayout>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="dashboard" replace />,
          },
          {
            path: 'dashboard',
            element: <TeacherDashboardPage />,
          },
          {
            path: 'students',
            element: <TeacherStudentsPage />,
          },
          {
            path: 'classes',
            element: <TeacherClassesPage />,
          },
          {
            path: 'assignments',
            element: <TeacherAssignmentsPage />,
          },
          {
            path: 'messages',
            element: <TeacherMessagesPage />,
          },
          {
            path: 'settings',
            element: <SettingsPage />,
          },
        ],
      },
    ],
  },
]);
