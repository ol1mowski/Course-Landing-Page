import { motion } from "framer-motion";

type BenefitCardProps = {
  title: string;
  description: string;
  icon: string;
  index: number;
};

const BenefitCard = ({ title, description, icon, index }: BenefitCardProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
          ease: "easeOut"
        }
      }
    }}
    whileHover={{ scale: 1.05 }}
    className="flex gap-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="flex-shrink-0">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
        <img src={icon} alt={title} className="w-6 h-6" />
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

export default BenefitCard; 