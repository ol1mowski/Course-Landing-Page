import { memo } from 'react';
import { Link } from 'react-router-dom';

type CourseCardProps = {
  title: string;
  progress: number;
};

const CourseCard = memo(({ title, progress }: CourseCardProps) => (
  <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
    <div className="flex flex-col h-full">
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-primary truncate mb-4">
          {title}
        </h3>
        <div className="mb-6">
          <div className="flex items-center">
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="ml-2 text-sm text-gray-500">
              {progress}%
            </span>
          </div>
        </div>
      </div>

      <Link
        to="/nauka"
        className="w-full px-4 py-2 bg-primary text-white text-center rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center space-x-2"
      >
        <svg 
          className="w-5 h-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        <span>Oglądaj kurs</span>
      </Link>
    </div>
  </div>
));

export default CourseCard; 