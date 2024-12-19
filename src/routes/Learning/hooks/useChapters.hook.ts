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
  },
  {
    id: 2,
    title: "Podstawy programowania",
    progress: 0,
    videos: [
      {
        id: 3,
        title: "Zmienne i typy danych",
        url: "https://example.com/video3",
        duration: 900,
        completed: false
      },
      {
        id: 4,
        title: "Instrukcje warunkowe",
        url: "https://example.com/video4",
        duration: 1200,
        completed: false
      },
      {
        id: 5,
        title: "Pętle",
        url: "https://example.com/video5",
        duration: 1500,
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