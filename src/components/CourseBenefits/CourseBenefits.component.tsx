import { motion } from "framer-motion";
import { containerVariants } from "../../animations/benefitsAnimations";
import { useAnimationInView } from "../../hooks/useAnimationInView";

import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import BenefitsHeader from "./BenefitsHeader/BenefitsHeader.component";
import BenefitsList from "./BenefitsList/BenefitsList.component";
import BenefitsCTA from "./BenefitsCTA/BenefitsCTA.component";

const CourseBenefits = () => {
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
        <BenefitsHeader />
        <BenefitsList />
        <BenefitsCTA />
      </motion.div>
    </SectionWrapper>
  );
};

export default CourseBenefits; 