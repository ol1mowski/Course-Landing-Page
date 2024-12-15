import { motion } from "framer-motion";
import { itemWithDelayVariants } from "../../../animations/commonAnimations";

type FeatureCardProps = {
  title: string;
  description: string;
  index: number;
};

const FeatureCard = ({ title, description, index }: FeatureCardProps) => (
  <motion.div
    custom={index}
    variants={itemWithDelayVariants}
    className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm"
  >
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
      <span className="text-green-500 text-2xl">✓</span>
    </div>
    <h3 className="text-xl font-bold text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </motion.div>
);

export default FeatureCard; 