import { memo } from 'react';
import CourseCard from '../CourseCard/CourseCard.component';
import { Course } from '../../types';

type CoursesListProps = {
  courses: Course[];
};

const CoursesList = memo(({ courses }: CoursesListProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {courses.map(course => (
      <CourseCard
        key={course.id}
        title={course.title}
        progress={course.progress}
      />
    ))}
  </div>
));

export default CoursesList; 