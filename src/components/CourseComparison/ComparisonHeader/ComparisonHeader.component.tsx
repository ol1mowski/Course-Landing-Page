import { motion } from "framer-motion";
import { headerVariants } from "../../../animations/commonAnimations";

import Heading from "../../UI/Heading/Heading.component";

const ComparisonHeader = () => (
  <motion.div
    variants={headerVariants}
    className="text-center"
  >
    <Heading>
      Dlaczego ten <span className="text-primary">kurs ? </span>
    </Heading>
  </motion.div>
);

export default ComparisonHeader; 