import { memo } from 'react';
import { motion } from 'framer-motion';
import VideoSidebar from './components/VideoSidebar/VideoSidebar.component';
import VideoPlayer from './components/VideoPlayer/VideoPlayer.component';
import Comments from './components/Comments/Comments.component';

const Learning = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="max-w-8xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar z listą rozdziałów */}
          <div className="col-span-3">
            <VideoSidebar />
          </div>
          
          {/* Główna zawartość */}
          <div className="col-span-9 space-y-8">
            <VideoPlayer />
            <Comments />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(Learning); 