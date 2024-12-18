import { motion } from "framer-motion";

const MOCK_COURSES = [
  {
    id: 1,
    title: "Kariera w IT",
    logo: "https://res.cloudinary.com/dbbuav0rj/image/upload/v1732100151/Course-site/site-logo_oyzuwi.svg",
    progress: 0
  },
];

const Panel = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gray-50 py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Moje kursy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_COURSES.map(course => (
              <div 
                key={course.id}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center cursor-pointer">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-primary truncate">
                      {course.title}
                    </h3>
                    <div className="mt-2">
                      <div className="flex items-center">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <span className="ml-2 text-sm text-gray-500">
                          {course.progress}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.main>
  );
};

export default Panel; 