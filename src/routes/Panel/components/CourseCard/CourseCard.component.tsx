import { memo } from 'react';

type CourseCardProps = {
  title: string;
  progress: number;
};

const CourseCard = memo(({ title, progress }: CourseCardProps) => (
  <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
    <div className="flex items-center cursor-pointer">
      <div className="flex-1 min-w-0">
        <h3 className="text-2xl font-bold text-primary truncate">
          {title}
        </h3>
        <div className="mt-2">
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
    </div>
  </div>
));

CourseCard.displayName = 'CourseCard';

export default CourseCard; 