import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FREE_LESSONS } from "../../data/FreeLessons.data";
import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import Heading from "../UI/Heading/Heading.component";
import VideoCard from "./VideoCard/VideoCard.component";

const FreeLessons = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px"
  });

  return (
    <SectionWrapper>
      <motion.div
        ref={containerRef}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center gap-16"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-center"
        >
          <Heading>
            Zobacz darmowe <span className="text-primary">lekcje</span>
          </Heading>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Zapoznaj się z jakością naszych materiałów dzięki darmowym lekcjom
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
        >
          {FREE_LESSONS.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 }
                }
              }}
            >
              <VideoCard {...lesson} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default FreeLessons; 