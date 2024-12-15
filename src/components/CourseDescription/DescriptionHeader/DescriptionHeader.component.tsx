import { motion } from "framer-motion";
import { headerVariants, descriptionVariants } from "../../../animations/descriptionAnimations";
import { COURSE_DESCRIPTION_DATA } from "../../../data/CourseDescription.data";
import Heading from "../../UI/Heading/Heading.component";

const DescriptionHeader = () => (
  <motion.div
    variants={headerVariants}
    className="text-center"
  >
    <Heading>
      W tym <span className="text-primary">kursie</span> nauczysz się:
    </Heading>
    <motion.p
      variants={descriptionVariants}
      className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
    >
      {COURSE_DESCRIPTION_DATA.mainDescription}
    </motion.p>
  </motion.div>
);

export default DescriptionHeader; 