import { memo } from 'react';
import { Chapter } from '../../../types';
import { formatDuration } from '../../../utils/formatDuration';

type ChapterAccordionProps = {
  chapter: Chapter;
  isActive: boolean;
  onClick: () => void;
};

const ChapterAccordion = memo(({ chapter, isActive, onClick }: ChapterAccordionProps) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div 
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                chapter.progress === 100 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {chapter.progress === 100 ? '✓' : `${chapter.progress}%`}
            </div>
          </div>
          <span className="font-medium text-gray-900">{chapter.title}</span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform ${
            isActive ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isActive && (
        <div className="border-t">
          {chapter.videos.map(video => (
            <button
              key={video.id}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  {video.completed ? (
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      ✓
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-gray-100" />
                  )}
                </div>
                <span className="text-sm text-gray-700">{video.title}</span>
              </div>
              <span className="text-sm text-gray-500">{formatDuration(video.duration)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
});

export default ChapterAccordion; 