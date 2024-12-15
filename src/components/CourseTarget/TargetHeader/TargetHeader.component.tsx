import { motion } from "framer-motion";
import { headerVariants } from "../../../animations/commonAnimations";
import Heading from "../../UI/Heading/Heading.component";

const TargetHeader = () => (
  <motion.div
    variants={headerVariants}
  >
    <Heading>
      Ten kurs jest dla <span className="text-primary">Ciebie</span> <br />
      jeśli:
    </Heading>
  </motion.div>
);

export default TargetHeader; 