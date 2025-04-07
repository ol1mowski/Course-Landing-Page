import { motion } from "framer-motion";
import { containerVariants } from "../../animations/comparisonAnimations";
import { useAnimationInView } from "../../hooks/useAnimationInView";

import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import ComparisonHeader from "./ComparisonHeader/ComparisonHeader.component";
import ComparisonTable from "./ComparisonTable/ComparisonTable.component";

const CourseComparison = () => {
  const { ref, isInView } = useAnimationInView();

  return (
    <SectionWrapper>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center gap-16"
      >
        <ComparisonHeader />
        <ComparisonTable />
      </motion.div>
    </SectionWrapper>
  );
};

export default CourseComparison; 