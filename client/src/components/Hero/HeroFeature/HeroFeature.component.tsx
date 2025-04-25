import { memo } from 'react';
import { motion } from 'framer-motion';

type HeroFeatureProps = {
  text: string;
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5
    }
  }
};

const HeroFeature = ({ text }: HeroFeatureProps) => (
  <motion.div 
    className="flex gap-3 items-center"
    variants={itemVariants}
  >
    <motion.img
      src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732119121/Course-site/check_xddkrs.svg"
      alt="check icon"
      className="w-7 h-7"
      whileHover={{ scale: 1.2 }}
    />
    <span className="text-md">{text}</span>
  </motion.div>
);

export default memo(HeroFeature); 