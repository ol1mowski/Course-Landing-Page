import { motion } from "framer-motion";
import { itemVariants } from "../../../animations/bonusesAnimations";
import type { Bonus } from "../../../data/Bonuses.data";

type BonusItemProps = Bonus & {
  isReversed: boolean;
};

const BonusItem = ({ title, description, image, isReversed }: BonusItemProps) => {
  const contentOrder = isReversed ? "order-1 lg:order-2" : "order-1";
  const imageOrder = isReversed ? "order-2 lg:order-1" : "order-2";

  return (
    <motion.div
      variants={itemVariants}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-12"
    >
      <div className={`flex-1 ${contentOrder}`}>
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold mb-4"
        >
          {title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-600 text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={`flex-1 ${imageOrder}`}
      >
        <div className="w-full max-w-md mx-auto">
          <div className="aspect-square relative rounded-full bg-primary/5 p-12">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BonusItem; 