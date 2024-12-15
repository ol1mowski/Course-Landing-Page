import { motion } from "framer-motion";
import { containerVariants } from "../../animations/bonusesAnimations";
import { useAnimationInView } from "../../hooks/useAnimationInView";

import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import BonusesHeader from "./BonusesHeader/BonusesHeader.component";
import BonusesList from "./BonusesList/BonusesList.component";

const Bonuses = () => {
  const { ref, isInView } = useAnimationInView();

  return (
    <SectionWrapper>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        id="bonus"
        className="flex flex-col items-center gap-16"
      >
        <BonusesHeader />
        <BonusesList />
      </motion.div>
    </SectionWrapper>
  );
};

export default Bonuses; 