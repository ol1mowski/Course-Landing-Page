import { motion } from "framer-motion";
import { COURSE_DESCRIPTION_DATA } from "../../../data/CourseDescription.data";
import FeatureCard from "../FeatureCard/FeatureCard.component";

const FeaturesList = () => (
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  >
    {COURSE_DESCRIPTION_DATA.features.map((feature, index) => (
      <FeatureCard
        key={feature.id}
        {...feature}
        index={index}
      />
    ))}
  </motion.div>
);

export default FeaturesList; 