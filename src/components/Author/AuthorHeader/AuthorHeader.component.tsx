import { motion } from "framer-motion";
import Heading from "../../UI/Heading/Heading.component";

const AuthorHeader = () => (
  <motion.div variants={{
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }}>
    <Heading>
      Poznaj autora <span className="text-primary">kursu</span>
    </Heading>
  </motion.div>
);

export default AuthorHeader; 