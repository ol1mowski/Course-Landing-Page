import { motion } from "framer-motion";
import Button from "../../UI/Button/Button.component";
import Description from "../../UI/Description/Description.component";

const HeroContent = () => (
  <motion.section 
    className="flex flex-col gap-8"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    <motion.h1 
      className="text-5xl font-bold leading-tight sm:text-6xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      Zostań programistą <br /> nawet w czasach kryzysu
    </motion.h1>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.7 }}
    >
      <Description>
        Dołącz do naszego ekskluzywnego kursu i zdobądź umiejętności, które
        otworzą przed Tobą nowe możliwości zawodowe!
      </Description>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
    >
      <Button>Dowiedz się więcej</Button>
    </motion.div>
  </motion.section>
);

export default HeroContent; 