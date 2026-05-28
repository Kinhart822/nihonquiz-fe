import { createBrowserRouter, Navigate } from 'react-router-dom';
import DashboardHomePage from '../../features/dashboard/pages/DashboardHomePage';
import StudyPage from '../../features/study/pages/StudyPage';
import { VocabularySection } from '../../features/study/components/VocabularySection';
import { GrammarSection } from '../../features/study/components/GrammarSection';
import { KanjiSection } from '../../features/study/components/KanjiSection';
import { HomeLayout } from '../layouts/HomeLayout';
import ChatPracticePage from '../../features/practice/pages/ChatPracticePage';
import HomePage from '../../features/home/pages/HomePage';
import NotFoundPage from '../errors/NotFoundPage';
import SettingsPage from '../../features/settings/pages/SettingsPage';
import { PracticeSection } from '../../features/study/components/PracticeSection';

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
    path: '/settings',
    element: <SettingsPage />,
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
