import { motion } from "framer-motion";
import CoursesList from "./components/CoursesList/CoursesList.component";
import { useCourses } from "./hooks/useCourses.hook";
import { useLogout } from '../../hooks/useLogout.hook';

const Panel = () => {
  const { logout, isLoading } = useLogout();
  const { courses } = useCourses();

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gray-50 py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Moje kursy</h2>
          <CoursesList courses={courses} />
        </section>
      </div>
    </motion.main>
  );
};

export default Panel; 