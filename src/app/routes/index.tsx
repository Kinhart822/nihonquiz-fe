import { createBrowserRouter, Navigate } from 'react-router-dom';
import DashboardHomePage from '../../features/dashboard/pages/DashboardHomePage';
import HomePage from '../../features/home/pages/HomePage';
import { NotebookPage } from '../../features/notebook/pages/NotebookPage';
import ChatPracticePage from '../../features/practice/pages/ChatPracticePage';
import SettingsPage from '../../features/settings/pages/SettingsPage';
import { GrammarSection } from '../../features/study/components/GrammarSection';
import { KanjiSection } from '../../features/study/components/KanjiSection';
import { PracticeSection } from '../../features/study/components/PracticeSection';
import { VocabularySection } from '../../features/study/components/VocabularySection';
import { PracticeDetailPage } from '../../features/study/pages/PracticeDetailPage';
import { PracticeResultPage } from '../../features/study/pages/PracticeResultPage';
import { PracticeTestPage } from '../../features/study/pages/PracticeTestPage';
import StudyPage from '../../features/study/pages/StudyPage';
import NotFoundPage from '../errors/NotFoundPage';
import { HomeLayout } from '../layouts/HomeLayout';
import ClassesPage from '../../features/classes/pages/ClassesPage';
import AssignmentsPage from '../../features/assignments/pages/AssignmentsPage';
import MessagesPage from '../../features/messages/pages/MessagesPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardHomePage />,
  },
  {
    path: '/study',
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
    path: '/study',
    element: <StudyPage />,
  },
  {
    path: '/classes',
    element: <ClassesPage />,
  },
  {
    path: '/assignments',
    element: <AssignmentsPage />,
  },
  {
    path: '/messages',
    element: <MessagesPage />,
  },
  {
    path: '/notebook',
    element: <NotebookPage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
  {
    path: '/practice-test/:id/detail',
    element: <PracticeDetailPage />,
  },
  {
    path: '/practice-test/:id/play',
    element: <PracticeTestPage />,
  },
  {
    path: '/practice-test/:id/result',
    element: <PracticeResultPage />,
  },
  {
    path: '/practice/chat',
    element: <ChatPracticePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
