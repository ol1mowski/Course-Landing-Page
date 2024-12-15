import { motion } from "framer-motion";
import { headerVariants } from "../../../animations/bonusesAnimations";
import Heading from "../../UI/Heading/Heading.component";

const BonusesHeader = () => (
  <motion.div
    variants={headerVariants}
    className="text-center"
  >
    <Heading>
      Co otrzymasz <span className="text-primary">gratis?</span>
    </Heading>
    <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
      Dołączając do kursu otrzymasz dodatkowe bonusy, które pomogą Ci w nauce
    </p>
  </motion.div>
);

export default BonusesHeader; 