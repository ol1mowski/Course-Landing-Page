import { motion } from "framer-motion";
import { headerVariants } from "../../../animations/progressAnimations";

const ProgressHeader = () => (
  <motion.h2 
    variants={headerVariants}
    className="text-4xl font-bold text-center mb-16"
  >
    Więc co musisz zrobić ?
  </motion.h2>
);

export default ProgressHeader; 