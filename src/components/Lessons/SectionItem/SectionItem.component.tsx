import { useState } from "react";
import LessonItem from "../LessonItem/LessonItem.component";

type SectionItemProps = {
  title: string;
  duration: string;
  lessons: Array<{
    id: number;
    title: string;
    duration: string;
  }>;
}

const SectionItem = ({ title, duration, lessons }: SectionItemProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="border rounded-lg shadow-blueShadow overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors duration-300"
      >
        <h3 className="text-xl font-semibold text-left">{title}</h3>
        <div className="flex items-center gap-4">
          <span className="hidden md:block text-gray-500">{duration}</span>
          <img
            src={`https://res.cloudinary.com/dbbuav0rj/image/upload/v1732119121/Course-site/${isExpanded ? 'slide-down_vafohn' : 'slide-up_vhn7cx'}.svg`}
            alt={isExpanded ? "Zwiń" : "Rozwiń"}
            className="w-12 sm:w-5 transition-transform duration-300 transform-gpu"
          />
        </div>
      </button>
      {isExpanded && (
        <div className="border-t">
          {lessons.map((lesson) => (
            <LessonItem
              key={lesson.id}
              title={lesson.title}
              duration={lesson.duration}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionItem; 