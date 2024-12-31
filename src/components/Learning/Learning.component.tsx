import { memo } from 'react';
import { motion } from 'framer-motion';

import VideoSidebar from './components/VideoSidebar/VideoSidebar.component';
import VideoPlayer from './components/VideoPlayer/VideoPlayer.component';
import Comments from '../../components/Comments/Comments.component';
import ProgressBar from '../../components/Learning/ProgressBar/ProgressBar.component';
import BackButton from './components/BackButton/BackButton.component';

import { useChapters } from './hooks/useChapters.hook';
import { useVideo } from './hooks/useVideo.hook';

const LearningComponent = () => {
  const { chapters } = useChapters();
  const { currentVideo } = useVideo();

  const totalLessons = chapters.reduce((sum, chapter) => sum + chapter.videos.length, 0);
  const completedLessons = chapters.reduce((sum, chapter) => 
    sum + chapter.videos.filter(video => video.completed).length, 0
  );
  const progress = Math.round((completedLessons / totalLessons) * 100) || 0;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50"
    >
      <ProgressBar
        progress={progress}
        totalLessons={totalLessons}
        completedLessons={completedLessons}
      />
      
      <BackButton />

      <div className="max-w-8xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <VideoSidebar />
          </div>
          
          <div className="col-span-9 space-y-8">
            <VideoPlayer />
            {currentVideo && <Comments />}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(LearningComponent);

