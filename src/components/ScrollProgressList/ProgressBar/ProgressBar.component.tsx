import { memo } from "react";
import { motion, MotionValue } from "framer-motion";

type ProgressBarProps = {
  scaleY: MotionValue<number>;
  opacity: MotionValue<number>;
};

const ProgressBar = ({ scaleY, opacity }: ProgressBarProps) => (
  <motion.div
    className="fixed left-[15%] top-0 w-[10px] h-screen bg-gray-200 rounded-full"
    style={{
      originY: 0,
      scaleY,
      opacity
    }}
  >
    <motion.div
      className="absolute w-full h-full bg-primary rounded-full"
      style={{ scaleY }}
    />
  </motion.div>
);

export default memo(ProgressBar); 