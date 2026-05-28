import type { Topic } from './mockVocabulary';

export const GRAMMAR_LEVELS = [
  { id: 'g5', title: 'Ngữ pháp N5 - Cơ bản', topics: 15, points: 60 },
  { id: 'g4', title: 'Ngữ pháp N4 - Sơ trung cấp', topics: 20, points: 80 },
  { id: 'g3', title: 'Ngữ pháp N3 - Trung cấp', topics: 25, points: 100 },
  { id: 'g2', title: 'Ngữ pháp N2 - Thượng cấp', topics: 20, points: 120 },
  { id: 'g1', title: 'Ngữ pháp N1 - Cao cấp', topics: 15, points: 100 },
];

export const mockGrammarTopics: Topic[] = [
  {
    id: 'gt-1',
    title: 'Bài 1: Cấu trúc N1 は N2 です',
    description: 'Cách giới thiệu tên, nghề nghiệp, quốc tịch cơ bản nhất.',
    level: 'N5',
    status: 'Completed',
    totalItems: 5,
    learnedItems: 5,
    score: 95,
  },
  {
    id: 'gt-2',
    title: 'Bài 2: Từ chỉ định これ, それ, あれ',
    description: 'Chỉ vật ở gần, xa người nói và người nghe.',
    level: 'N5',
    status: 'In Progress',
    totalItems: 8,
    learnedItems: 4,
  },
  {
    id: 'gt-3',
    title: 'Bài 3: Động từ thể hiện tại, quá khứ',
    description: 'Cách chia động từ dạng ~ます, ~ました, ~ません.',
    level: 'N5',
    status: 'Not Started',
    totalItems: 10,
    learnedItems: 0,
  },
  {
    id: 'gt-4',
    title: 'Thể khả năng (Động từ)',
    description: 'Thể hiện năng lực làm một việc gì đó (できる).',
    level: 'N4',
    status: 'Completed',
    totalItems: 12,
    learnedItems: 12,
    score: 85,
  },
  {
    id: 'gt-5',
    title: 'Cấu trúc ~てみます (Thử làm gì)',
    description: 'Hành động mang tính thử nghiệm để xem kết quả ra sao.',
    level: 'N4',
    status: 'Not Started',
    totalItems: 8,
    learnedItems: 0,
  },
  {
    id: 'gt-6',
    title: 'Ngữ pháp ~うちに (Trong lúc)',
    description: 'Thực hiện hành động trước khi trạng thái thay đổi.',
    level: 'N3',
    status: 'In Progress',
    totalItems: 15,
    learnedItems: 5,
  },
];
