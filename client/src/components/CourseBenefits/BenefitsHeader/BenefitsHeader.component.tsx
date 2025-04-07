import { motion } from "framer-motion";
import { headerVariants } from "../../../animations/benefitsAnimations";
import Heading from "../../UI/Heading/Heading.component";

const BenefitsHeader = () => (
  <motion.div
    variants={headerVariants}
    className="text-center"
  >
    <Heading>
      Ten <span className="text-primary">kurs</span> to:
    </Heading>
  </motion.div>
);

export default BenefitsHeader; 