import { useState } from 'react';
import { Chapter } from '../types';

const MOCK_CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: "Wprowadzenie do kursu",
    progress: 0,
    videos: [
      {
        id: 1,
        title: "Powitanie w kursie",
        url: "https://example.com/video1",
        duration: 180,
        completed: false
      },
      {
        id: 2,
        title: "Jak korzystać z platformy",
        url: "https://example.com/video2",
        duration: 300,
        completed: false
      }
    ]
  }
];

export const useChapters = () => {
  const [chapters] = useState<Chapter[]>(MOCK_CHAPTERS);
  const [activeChapterId, setActiveChapterId] = useState<number | null>(null);

  const handleChapterClick = (chapterId: number) => {
    setActiveChapterId(prevId => prevId === chapterId ? null : chapterId);
  };

  return {
    chapters,
    activeChapterId,
    handleChapterClick
  };
}; 