import { motion } from "framer-motion";
import { ctaVariants } from "../../../animations/benefitsAnimations";

const BenefitsCTA = () => (
  <motion.div
    variants={ctaVariants}
    className="bg-gradient-to-r from-primary to-primary/80 p-8 rounded-2xl text-white max-w-2xl"
  >
    <p className="text-center text-lg font-medium">
      Wszystko czego potrzebujesz, aby rozpocząć karierę w IT!
    </p>
  </motion.div>
);

export default BenefitsCTA; 