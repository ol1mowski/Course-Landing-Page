import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
      <div className="bg-white shadow-sm">
        <div className="max-w-8xl mx-auto px-4">
          <div className="h-16 flex items-center">
            <Link 
              to="/mojekonto" 
              className="flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
              Powrót do mojego konta
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <VideoSidebar />
          </div>
          
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