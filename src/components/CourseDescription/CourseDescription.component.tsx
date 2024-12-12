import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { COURSE_DESCRIPTION_DATA } from "../../data/CourseDescription.data";
import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import Heading from "../UI/Heading/Heading.component";
import CourseFeature from "./CourseFeature/CourseFeature.component";

const CourseDescription = () => {
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
            transition: { staggerChildren: 0.3 },
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
            W tym <span className="text-primary">kursie</span> nauczysz się:
          </Heading>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.2 },
              },
            }}
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {COURSE_DESCRIPTION_DATA.mainDescription}
          </motion.p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {COURSE_DESCRIPTION_DATA.features.map((feature, index) => (
            <CourseFeature key={feature.id} {...feature} index={index} />
          ))}
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { delay: 0.4 },
            },
          }}
          className="w-full max-w-4xl bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-2xl"
        >
          <p className="text-center text-lg font-medium">
            Dołącz do kursu już dziś i rozpocznij swoją przygodę z
            programowaniem!
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default CourseDescription;
