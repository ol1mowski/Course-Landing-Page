import { motion } from "framer-motion";
import { cardsContainerVariants } from "../../../animations/targetAnimations";
import { COURSE_TARGET } from "../../../data/CourseTarget.data";
import TargetCard from "../TargetCard/TargetCard.component";

const TargetCards = () => (
  <motion.section 
    variants={cardsContainerVariants}
    className="flex w-fit h-fit items-center justify-center flex-wrap gap-16 mt-20"
  >
    {COURSE_TARGET.map((target, index) => (
      <TargetCard
        key={target}
        text={target}
        index={index}
      />
    ))}
  </motion.section>
);

export default TargetCards; 