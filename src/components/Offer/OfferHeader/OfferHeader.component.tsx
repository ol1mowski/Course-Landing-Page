import { motion } from "framer-motion";
import { headerVariants } from "../../../animations/offerAnimations";

import Heading from "../../UI/Heading/Heading.component";

const OfferHeader = () => (
  <motion.div
    variants={headerVariants}
  >
    <Heading>
      Dołącz do <span className="text-primary">kursu</span>
    </Heading>
    <p className="mt-6 text-xl text-gray-600">
      Zainwestuj w swoją przyszłość i rozpocznij karierę w IT
    </p>
  </motion.div>
);

export default OfferHeader; 