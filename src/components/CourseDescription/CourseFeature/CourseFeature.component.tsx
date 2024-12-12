import { motion } from "framer-motion";

type CourseFeatureProps = {
  title: string;
  description: string;
  icon: string;
  index: number;
};

const CourseFeature = ({ title, description, icon, index }: CourseFeatureProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: index * 0.2 }
      }
    }}
    className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm"
  >
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
      <img src={icon} alt={title} className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </motion.div>
);

export default CourseFeature; 