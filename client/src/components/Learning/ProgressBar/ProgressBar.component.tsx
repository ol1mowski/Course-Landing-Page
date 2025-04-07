import { memo } from 'react';

type ProgressBarProps = {
  progress: number;
  totalLessons: number;
  completedLessons: number;
};

const ProgressBar = memo(({ progress, totalLessons, completedLessons }: ProgressBarProps) => (
  <div className="bg-white shadow-sm border-b">
    <div className="max-w-8xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-medium text-gray-900">
          Postęp kursu
        </h2>
        <span className="text-sm text-gray-600">
          {completedLessons} z {totalLessons} lekcji
        </span>
      </div>
      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-end mt-1">
        <span className="text-sm font-medium text-primary">
          {progress}%
        </span>
      </div>
    </div>
  </div>
));

export default ProgressBar; 