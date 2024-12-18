import { useState, useEffect } from 'react';
import { Video } from '../types';

export const useVideo = () => {
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  
  return {
    currentVideo,
    setCurrentVideo
  };
}; 