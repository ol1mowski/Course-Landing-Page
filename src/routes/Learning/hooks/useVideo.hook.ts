import { useState, useCallback } from 'react';
import { Video } from '../types';

export const useVideo = () => {
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleVideoProgress = useCallback((time: number, duration: number) => {
    const progressPercent = (time / duration) * 100;
    setProgress(Math.round(progressPercent));
  }, []);

  const handleVideoEnd = useCallback(() => {
    setIsPlaying(false);
    // TODO: Mark video as completed and update progress
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