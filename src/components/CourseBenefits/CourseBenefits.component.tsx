import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { COURSE_BENEFITS_DATA } from "../../data/CourseBenefits.data";
import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import Heading from "../UI/Heading/Heading.component";
import BenefitCard from "./BenefitCard/BenefitCard.component";

const CourseBenefits = () => {
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
        className="flex flex-col items-center gap-16 mt-32"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-center"
        >
          <Heading>
            Ten <span className="text-primary">kurs</span> to:
          </Heading>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl"
        >
          {COURSE_BENEFITS_DATA.benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.id}
              {...benefit}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.4 },
            },
          }}
          className="bg-gradient-to-r from-primary to-primary/80 p-8 rounded-2xl text-white max-w-2xl"
        >
          <p className="text-center text-lg font-medium">
            Wszystko czego potrzebujesz, aby rozpocząć karierę w IT!
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default CourseBenefits; 