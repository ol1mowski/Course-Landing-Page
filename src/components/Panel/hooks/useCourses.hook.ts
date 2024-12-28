import { useState } from 'react';
import { Course } from '../types';

const MOCK_COURSES: Course[] = [
  {
    id: 1,
    title: "Kariera w IT",
    logo: "https://res.cloudinary.com/dbbuav0rj/image/upload/v1732100151/Course-site/site-logo_oyzuwi.svg",
    progress: 0
  },
];

export const useCourses = () => {
  const [courses] = useState<Course[]>(MOCK_COURSES);
  
  return { courses };
}; 