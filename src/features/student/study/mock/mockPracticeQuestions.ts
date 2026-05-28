export type QuestionType = 'vocabulary' | 'kanji' | 'grammar' | 'fill_blank';

export interface PracticeOption {
  id: string;
  text: string;
}

export interface PracticeQuestion {
  id: string;
  practiceId: string;
  type: QuestionType;
  question: string;
  options: PracticeOption[];
  correctAnswerId: string;
  explanation: string;
}

export const mockPracticeQuestions: Record<string, PracticeQuestion[]> = {
  p1: [
    {
      id: 'q-1',
      practiceId: 'p1',
      type: 'vocabulary',
      question: '「食べる」の意味は？',
      options: [
        { id: 'opt-1', text: 'To drink' },
        { id: 'opt-2', text: 'To eat' },
        { id: 'opt-3', text: 'To sleep' },
        { id: 'opt-4', text: 'To read' },
      ],
      correctAnswerId: 'opt-2',
      explanation:
        '食べる (taberu) có nghĩa là ăn (to eat). Uống là 飲む (nomu).',
    },
    {
      id: 'q-2',
      practiceId: 'p1',
      type: 'kanji',
      question: '「勉強」の読み方は？',
      options: [
        { id: 'opt-1', text: 'べんきょう' },
        { id: 'opt-2', text: 'れんしゅう' },
        { id: 'opt-3', text: 'しゅくだい' },
        { id: 'opt-4', text: 'じゅぎょう' },
      ],
      correctAnswerId: 'opt-1',
      explanation:
        '勉強 (べんきょう - benkyou) có nghĩa là học tập. 練習 là renshuu, 宿題 là shukudai.',
    },
    {
      id: 'q-3',
      practiceId: 'p1',
      type: 'fill_blank',
      question: '私は毎日パン ___ 食べます。',
      options: [
        { id: 'opt-1', text: 'が' },
        { id: 'opt-2', text: 'に' },
        { id: 'opt-3', text: 'を' },
        { id: 'opt-4', text: 'で' },
      ],
      correctAnswerId: 'opt-3',
      explanation:
        'Trợ từ を (wo) dùng để chỉ tân ngữ trực tiếp của hành động ăn (食べます).',
    },
    {
      id: 'q-4',
      practiceId: 'p1',
      type: 'grammar',
      question: 'Chọn câu đúng:',
      options: [
        { id: 'opt-1', text: 'あしたは雨が降りました。' },
        { id: 'opt-2', text: 'あしたは雨が降るでしょう。' },
        { id: 'opt-3', text: 'あしたは雨が降っています。' },
        { id: 'opt-4', text: 'あしたは雨が降るでした。' },
      ],
      correctAnswerId: 'opt-2',
      explanation:
        'あした (Ngày mai) là tương lai, nên dùng でしょう để phỏng đoán sự việc trong tương lai.',
    },
  ],
};
