import { useState, useCallback } from 'react';
import { Video } from '../types';

export const useVideo = () => {
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useState(() => {
    setCurrentVideo({
      id: 1,
      _id: '1',
      title: "Wprowadzenie do kursu",
      url: "https://example.com/video1",
      duration: 180,
      completed: false
    });
  }, []);

  const handleVideoProgress = useCallback((time: number, duration: number) => {
    const progressPercent = (time / duration) * 100;
    setProgress(Math.round(progressPercent));
  }, []);

  const handleVideoEnd = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleVideoSelect = useCallback((video: Video) => {
    setCurrentVideo(video);
    setIsPlaying(true);
    setProgress(0);
  }, []);

  return {
    currentVideo,
    isPlaying,
    progress,
    handleVideoProgress,
    handleVideoEnd,
    handleVideoSelect
  };
}; 