import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { COURSE_TARGET } from "../../data/CourseTarget.data";

import Card from "../UI/Card/Card.component";
import Heading from "../UI/Heading/Heading.component";
import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";

const CourseTarget = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="mt-72" id="dla-kogo">
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
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Heading>
              Ten kurs jest dla <span className="text-primary">Ciebie</span> <br />
              jeśli:
            </Heading>
          </motion.div>

          <motion.section 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            className="flex w-fit h-fit items-center justify-center flex-wrap gap-16 mt-20"
          >
            {COURSE_TARGET.map((target, index) => (
              <motion.div
                key={target}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }
                }}
              >
                <Card 
                  text={target} 
                  type="target"
                />
              </motion.div>
            ))}
          </motion.section>
        </motion.div>
      </SectionWrapper>
    </section>
  );
};

export default CourseTarget; 