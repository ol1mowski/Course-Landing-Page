import { createContext, useContext, ReactNode, useState } from 'react';
import type { Video, Chapter } from '../routes/Learning/types';

type LearningContextType = {
  currentVideo: Video | null;
  setCurrentVideo: (video: Video | null) => void;
  chapters: Chapter[];
  setChapters: (chapters: Chapter[]) => void;
  progress: number;
  setProgress: (progress: number) => void;
};

const LearningContext = createContext<LearningContextType | null>(null);

export const LearningProvider = ({ children }: { children: ReactNode }) => {
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [progress, setProgress] = useState(0);

  return (
    <LearningContext.Provider 
      value={{ 
        currentVideo, 
        setCurrentVideo, 
        chapters, 
        setChapters,
        progress,
        setProgress
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
}; 