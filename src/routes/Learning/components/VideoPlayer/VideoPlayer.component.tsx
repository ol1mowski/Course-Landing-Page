import { memo } from 'react';
import { useVideo } from '../../hooks/useVideo.hook';

const VideoPlayer = () => {
  const { currentVideo } = useVideo();

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
          src={currentVideo.url}
          controls
          className="w-full h-full"
          poster="/video-placeholder.jpg"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{currentVideo.title}</h1>
      </div>
    </div>
  );
};

export default memo(VideoPlayer); 