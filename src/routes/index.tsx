import { createBrowserRouter } from 'react-router-dom';
import EndScreen from '../pages/EndScreen';
import HomePage from '../pages/HomePage';
import QuizPage from '../pages/QuizPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/quiz',
    element: <QuizPage />,
  },
  {
    path: '/end-screen',
    element: <EndScreen />,
  },
]);
