import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { COURSE_COMPARISON_DATA } from "../../data/CourseComparison.data";
import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import Heading from "../UI/Heading/Heading.component";

const CourseComparison = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <SectionWrapper>
      <motion.div
        ref={containerRef}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center gap-16"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-center"
        >
          <Heading>
            Dlaczego ten <span className="text-primary">kurs ? </span>
          </Heading>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="w-full max-w-4xl overflow-x-auto"
        >
          <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-6 text-left border-b">Cechy</th>
                <th className="p-6 text-center border-b">
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732100151/Course-site/site-logo_oyzuwi.svg"
                      alt="Kariera W IT Logo"
                      className="h-8"
                    />

                  </div>
                </th>
                <th className="p-6 text-center border-b">
                  <span className="text-gray-600 font-bold">Inne kursy</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {COURSE_COMPARISON_DATA.features.map((feature, index) => (
                <motion.tr
                  key={feature.id}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.1 }
                    }
                  }}
                  className="border-b last:border-b-0 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-6 font-medium">{feature.name}</td>
                  <td className="p-6 text-center">
                    {feature.hasFeature ? (
                      <span className="text-green-500 text-2xl">✓</span>
                    ) : (
                      <span className="text-red-500 text-2xl">✕</span>
                    )}
                  </td>
                  <td className="p-6 text-center">
                    {feature.otherCourses ? (
                      <span className="text-green-500 text-2xl">✓</span>
                    ) : (
                      <span className="text-red-500 text-2xl">✕</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { delay: 0.4 }
            }
          }}
          className="bg-primary/5 p-8 rounded-2xl max-w-2xl"
        >
          <p className="text-center text-lg font-medium text-gray-800">
            Wybierz kurs, który naprawdę przygotuje Cię do pracy w IT!
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default CourseComparison; 