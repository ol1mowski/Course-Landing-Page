import { motion } from "framer-motion";
import { HERO_FEATURES } from "../../../data/CourseFeature.data";
import HeroFeature from "../HeroFeature/HeroFeature.component";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2
    }
  }
};

const HeroFeatures = () => (
  <motion.section 
    className="flex w-full flex-row flex-wrap gap-5 lg:w-2/3"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {HERO_FEATURES.map(({ id, text }) => (
      <HeroFeature key={id} text={text} />
    ))}
  </motion.section>
);

export default HeroFeatures; 