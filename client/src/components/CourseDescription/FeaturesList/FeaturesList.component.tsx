import { motion } from "framer-motion";
import { COURSE_DESCRIPTION_DATA } from "../../../data/CourseDescription.data";
import FeatureCard from "../FeatureCard/FeatureCard.component";

const FeaturesList = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
    >
      {COURSE_DESCRIPTION_DATA.features.map((feature, index) => (
        <div key={feature.id} className="p-2 md:p-4">
          <FeatureCard
            {...feature}
            index={index}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default FeaturesList; 