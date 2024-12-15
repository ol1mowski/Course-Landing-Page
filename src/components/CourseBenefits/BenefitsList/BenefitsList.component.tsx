import { motion } from "framer-motion";
import { contentVariants } from "../../../animations/benefitsAnimations";
import { COURSE_BENEFITS_DATA } from "../../../data/CourseBenefits.data";
import BenefitCard from "../BenefitCard/BenefitCard.component";

const BenefitsList = () => (
  <motion.div
    variants={contentVariants}
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
);

export default BenefitsList; 