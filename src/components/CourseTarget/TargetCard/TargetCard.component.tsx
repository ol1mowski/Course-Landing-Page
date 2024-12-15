import { motion } from "framer-motion";
import { cardVariants } from "../../../animations/targetAnimations";
import Card from "../../UI/Card/Card.component";

type TargetCardProps = {
  text: string;
  index: number;
};

const TargetCard = ({ text, index }: TargetCardProps) => (
  <motion.div
    variants={cardVariants}
    custom={index}
  >
    <Card 
      text={text} 
      type="target"
    />
  </motion.div>
);

export default TargetCard; 