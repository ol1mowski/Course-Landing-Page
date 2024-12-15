import { motion } from "framer-motion";
import { containerVariants } from "../../animations/commonAnimations";
import { useAnimationInView } from "../../hooks/useAnimationInView";

import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import TargetHeader from "./TargetHeader/TargetHeader.component";
import TargetCards from "./TargetCards/TargetCards.component";

const CourseTarget = () => {
  const { ref, isInView } = useAnimationInView();

  return (
    <section className="mt-72" id="dla-kogo">
      <SectionWrapper>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <TargetHeader />
          <TargetCards />
        </motion.div>
      </SectionWrapper>
    </section>
  );
};

export default CourseTarget; 