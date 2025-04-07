import { motion } from "framer-motion";
import { itemWithDelayVariants } from "../../../animations/commonAnimations";
import Card from "../../UI/Card/Card.component";

type TargetCardProps = {
  text: string;
  index: number;
};

const TargetCard = ({ text, index }: TargetCardProps) => (
  <motion.div
    variants={itemWithDelayVariants}
    custom={index}
  >
    <Card 
      text={text} 
      type="target"
    />
  </motion.div>
);

export default TargetCard; 