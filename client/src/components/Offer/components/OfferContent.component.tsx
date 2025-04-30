import { motion, MotionValue } from "framer-motion";

interface AnimationProps {
  initial: any;
  animate: any;
  transition: any;
  whileHover?: any;
}

interface OfferContentProps {
  mainContainerAnimation: AnimationProps;
  leftColumnAnimation: AnimationProps;
  rightColumnAnimation: AnimationProps;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
}

export const OfferContent = ({
  mainContainerAnimation,
  leftColumnAnimation,
  rightColumnAnimation,
  y,
  opacity,
  scale
}: OfferContentProps) => {
  return (
    <motion.div
      style={{ y, opacity, scale }}
      className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-14"
      {...mainContainerAnimation}
    >
      <motion.div
        className="w-full lg:w-1/2 space-y-10"
        {...leftColumnAnimation}
      >
        <div id="offer-header" />
        <div id="offer-benefits" />
      </motion.div>

      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center lg:pl-8"
        {...rightColumnAnimation}
      >
        <div id="offer-card" />
      </motion.div>
    </motion.div>
  );
}; 