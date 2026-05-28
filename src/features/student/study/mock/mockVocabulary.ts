export const VOCABULARY_LEVELS = [
  { id: 'v5', title: 'Từ vựng N5 - Cơ bản', topics: 20, words: 600 },
  { id: 'v4', title: 'Từ vựng N4 - Sơ trung cấp', topics: 25, words: 800 },
  { id: 'v3', title: 'Từ vựng N3 - Trung cấp', topics: 30, words: 1200 },
  { id: 'v2', title: 'Từ vựng N2 - Thượng cấp', topics: 25, words: 1500 },
  { id: 'v1', title: 'Từ vựng N1 - Cao cấp', topics: 20, words: 2000 },
];

export interface Topic {
  id: string;
  title: string;
  description: string;
  level: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  totalItems: number;
  learnedItems: number;
  score?: number;
}

export const mockVocabularyTopics: Topic[] = [
  {
    id: 'vt-1',
    title: 'Bài 1: Chào hỏi & Tự giới thiệu',
    description:
      'Các từ vựng cơ bản dùng để chào hỏi, giới thiệu bản thân và nghề nghiệp.',
    level: 'N5',
    status: 'Completed',
    totalItems: 20,
    learnedItems: 20,
    score: 100,
  },
  {
    id: 'vt-2',
    title: 'Bài 2: Đồ vật xung quanh',
    description:
      'Từ vựng chỉ đồ vật, sách vở, đồ dùng cá nhân trong phòng học và gia đình.',
    level: 'N5',
    status: 'In Progress',
    totalItems: 25,
    learnedItems: 10,
  },
  {
    id: 'vt-3',
    title: 'Bài 3: Mua sắm & Giá cả',
    description:
      'Cách nói giá tiền, các loại cửa hàng và đồ dùng mua sắm hàng ngày.',
    level: 'N5',
    status: 'Not Started',
    totalItems: 30,
    learnedItems: 0,
  },
  {
    id: 'vt-4',
    title: 'Chủ đề: Cuộc sống hàng ngày',
    description:
      'Từ vựng về các hoạt động thường ngày, thời gian, và sinh hoạt.',
    level: 'N4',
    status: 'Not Started',
    totalItems: 40,
    learnedItems: 0,
  },
  {
    id: 'vt-5',
    title: 'Chủ đề: Sở thích & Kỹ năng',
    description:
      'Sở thích, thể thao, âm nhạc và những kỹ năng đặc biệt của bản thân.',
    level: 'N4',
    status: 'In Progress',
    totalItems: 35,
    learnedItems: 15,
  },
  {
    id: 'vt-6',
    title: 'Chủ đề: Công việc & Nơi làm việc',
    description:
      'Từ vựng chốn công sở, cuộc họp, báo cáo và giao tiếp với đồng nghiệp.',
    level: 'N3',
    status: 'Not Started',
    totalItems: 50,
    learnedItems: 0,
  },
];
