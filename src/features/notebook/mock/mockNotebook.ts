export interface NotebookWord {
  id: string;
  kanji: string;
  hiragana: string;
  meaning: string;
  romaji: string;
  level: string;
  type: string;
  example: string;
  exampleMeaning: string;
  isFavorite: boolean;
  addedAt: string;
}

export const mockNotebookWords: NotebookWord[] = [
  {
    id: 'nw-1',
    kanji: '勉強',
    hiragana: 'べんきょう',
    meaning: 'Học tập',
    romaji: 'benkyou',
    level: 'N5',
    type: 'Danh từ',
    example: '毎日日本語を勉強します。',
    exampleMeaning: 'Tôi học tiếng Nhật mỗi ngày.',
    isFavorite: true,
    addedAt: '2026-05-28T08:00:00Z',
  },
  {
    id: 'nw-2',
    kanji: '家族',
    hiragana: 'かぞく',
    meaning: 'Gia đình',
    romaji: 'kazoku',
    level: 'N5',
    type: 'Danh từ',
    example: '私の家族は4人です。',
    exampleMeaning: 'Gia đình tôi có 4 người.',
    isFavorite: true,
    addedAt: '2026-05-27T10:30:00Z',
  },
  {
    id: 'nw-3',
    kanji: '一生懸命',
    hiragana: 'いっしょうけんめい',
    meaning: 'Chăm chỉ, hết sức mình',
    romaji: 'isshoukenmei',
    level: 'N4',
    type: 'Tính từ đuôi な',
    example: '一生懸命働きます。',
    exampleMeaning: 'Tôi sẽ làm việc hết sức mình.',
    isFavorite: false,
    addedAt: '2026-05-26T14:15:00Z',
  },
  {
    id: 'nw-4',
    kanji: '経験',
    hiragana: 'けいけん',
    meaning: 'Kinh nghiệm',
    romaji: 'keiken',
    level: 'N4',
    type: 'Danh từ',
    example: '日本での経験は素晴らしいです。',
    exampleMeaning: 'Kinh nghiệm ở Nhật Bản thật tuyệt vời.',
    isFavorite: true,
    addedAt: '2026-05-25T09:20:00Z',
  },
  {
    id: 'nw-5',
    kanji: '複雑',
    hiragana: 'ふくざつ',
    meaning: 'Phức tạp',
    romaji: 'fukuzatsu',
    level: 'N3',
    type: 'Tính từ đuôi な',
    example: 'この問題はとても複雑です。',
    exampleMeaning: 'Vấn đề này rất phức tạp.',
    isFavorite: false,
    addedAt: '2026-05-24T16:45:00Z',
  },
  {
    id: 'nw-6',
    kanji: '感謝',
    hiragana: 'かんしゃ',
    meaning: 'Cảm tạ, biết ơn',
    romaji: 'kansha',
    level: 'N3',
    type: 'Danh từ / Động từ',
    example: '先生に感謝しています。',
    exampleMeaning: 'Tôi rất biết ơn thầy giáo.',
    isFavorite: true,
    addedAt: '2026-05-23T11:10:00Z',
  },
];
