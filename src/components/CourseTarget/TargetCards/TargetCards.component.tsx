import { motion } from "framer-motion";
import { gridVariants } from "../../../animations/commonAnimations";
import { COURSE_TARGET } from "../../../data/CourseTarget.data";
import TargetCard from "../TargetCard/TargetCard.component";

const TargetCards = () => (
  <motion.section 
    variants={gridVariants}
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