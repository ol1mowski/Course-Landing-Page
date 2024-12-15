import { motion } from "framer-motion";
import { containerVariants } from "../../animations/descriptionAnimations";
import { useAnimationInView } from "../../hooks/useAnimationInView";

import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import DescriptionHeader from "./DescriptionHeader/DescriptionHeader.component";
import FeaturesList from "./FeaturesList/FeaturesList.component";

const CourseDescription = () => {
  const { ref, isInView } = useAnimationInView();

  return (
    <SectionWrapper>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        id="co-otrzymasz"
        className="flex flex-col items-center gap-16"
      >
        <DescriptionHeader />
        <FeaturesList />
      </motion.div>
    </SectionWrapper>
  );
};

export default CourseDescription;
