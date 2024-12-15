import { motion } from "framer-motion";
import { containerVariants } from "../../animations/commonAnimations";
import { useAnimationInView } from "../../hooks/useAnimationInView";

import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import LessonsHeader from "./LessonsHeader/LessonsHeader.component";
import VideoGrid from "./VideoGrid/VideoGrid.component";

const FreeLessons = () => {
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
        <LessonsHeader />
        <VideoGrid />
      </motion.div>
    </SectionWrapper>
  );
};

export default FreeLessons; 