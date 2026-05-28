export interface PracticeHistory {
  practiceId: string;
  recentScore: number;
  totalScore: number;
  lastAttempt: string;
  accuracy: number;
  timeSpent: number; // in seconds
  completionCount: number;
}

export const mockPracticeHistory: Record<string, PracticeHistory> = {
  p1: {
    practiceId: 'p1',
    recentScore: 80,
    totalScore: 100,
    lastAttempt: '2026-05-27T10:30:00Z',
    accuracy: 80,
    timeSpent: 120, // 2 mins
    completionCount: 3,
  },
  p2: {
    practiceId: 'p2',
    recentScore: 60,
    totalScore: 100,
    lastAttempt: '2026-05-20T08:15:00Z',
    accuracy: 60,
    timeSpent: 300, // 5 mins
    completionCount: 1,
  },
};
