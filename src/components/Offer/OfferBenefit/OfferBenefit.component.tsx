import { motion } from "framer-motion";

type OfferBenefitProps = {
  icon: string;
  text: string;
  index: number;
};

const OfferBenefit = ({ icon, text, index }: OfferBenefitProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex items-center gap-4 bg-white/50 backdrop-blur-sm rounded-lg p-4 hover:bg-white/80 transition-colors duration-300"
  >
    <span className="text-2xl">{icon}</span>
    <span className="text-lg">{text}</span>
  </motion.div>
);

export default OfferBenefit; 