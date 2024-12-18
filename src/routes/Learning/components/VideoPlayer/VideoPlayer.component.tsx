import { memo, useRef, useEffect } from 'react';
import { useVideo } from '../../hooks/useVideo.hook';

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { 
    currentVideo, 
    isPlaying,
    handleVideoProgress, 
    handleVideoEnd 
  } = useVideo();

  useEffect(() => {
    if (videoRef.current && isPlaying) {
      videoRef.current.play();
    }
  }, [isPlaying, currentVideo]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      handleVideoProgress(
        videoRef.current.currentTime,
        videoRef.current.duration
      );
    }
  };

  if (!currentVideo) {
    return (
      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Wybierz film z listy obok</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="aspect-video bg-black rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          src={currentVideo.url}
          controls
          className="w-full h-full"
          poster="/video-placeholder.jpg"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnd}
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{currentVideo.title}</h1>
      </div>
    </div>
  );
};

export default memo(VideoPlayer); 