import type { Topic } from './mockVocabulary';

export const KANJI_LEVELS = [
  { id: 'k5', title: 'Kanji N5 - Cơ bản', topics: 10, kanji: 100 },
  { id: 'k4', title: 'Kanji N4 - Sơ trung cấp', topics: 15, kanji: 200 },
  { id: 'k3', title: 'Kanji N3 - Trung cấp', topics: 20, kanji: 400 },
  { id: 'k2', title: 'Kanji N2 - Thượng cấp', topics: 25, kanji: 600 },
  { id: 'k1', title: 'Kanji N1 - Cao cấp', topics: 30, kanji: 800 },
];

export const mockKanjiTopics: Topic[] = [
  {
    id: 'kt-1',
    title: 'Kanji Bài 1: Chữ số',
    description:
      'Các chữ Hán cơ bản nhất chỉ số đếm từ 1 đến 10, trăm, ngàn, vạn.',
    level: 'N5',
    status: 'Completed',
    totalItems: 15,
    learnedItems: 15,
    score: 100,
  },
  {
    id: 'kt-2',
    title: 'Kanji Bài 2: Tự nhiên',
    description: 'Nhật, Nguyệt, Hỏa, Thủy, Mộc, Kim, Thổ.',
    level: 'N5',
    status: 'Completed',
    totalItems: 10,
    learnedItems: 10,
    score: 90,
  },
  {
    id: 'kt-3',
    title: 'Kanji Bài 3: Con người & Bộ phận',
    description: 'Nhân, Mục, Nhĩ, Khẩu, Thủ, Túc.',
    level: 'N5',
    status: 'In Progress',
    totalItems: 12,
    learnedItems: 6,
  },
  {
    id: 'kt-4',
    title: 'Chủ đề: Phương hướng & Vị trí',
    description: 'Đông, Tây, Nam, Bắc, Thượng, Hạ, Tả, Hữu.',
    level: 'N4',
    status: 'Not Started',
    totalItems: 20,
    learnedItems: 0,
  },
  {
    id: 'kt-5',
    title: 'Chủ đề: Gia đình & Họ hàng',
    description: 'Phụ, Mẫu, Huynh, Đệ, Tỷ, Muội, Gia, Tộc.',
    level: 'N4',
    status: 'Not Started',
    totalItems: 18,
    learnedItems: 0,
  },
  {
    id: 'kt-6',
    title: 'Chủ đề: Thời gian & Cảm giác',
    description: 'Các chữ Hán diễn đạt ý niệm thời gian và biểu cảm.',
    level: 'N3',
    status: 'In Progress',
    totalItems: 25,
    learnedItems: 10,
  },
];
