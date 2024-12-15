import { motion } from "framer-motion";
import { headerVariants, descriptionVariants } from "../../../animations/lessonsAnimations";
import Heading from "../../UI/Heading/Heading.component";

const LessonsHeader = () => (
  <motion.div
    variants={headerVariants}
    className="text-center"
  >
    <Heading>
      Zobacz darmowe <span className="text-primary">lekcje</span>
    </Heading>
    <motion.p
      variants={descriptionVariants}
      className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
    >
      Zapoznaj się z jakością naszych materiałów dzięki darmowym lekcjom
    </motion.p>
  </motion.div>
);

export default LessonsHeader; 