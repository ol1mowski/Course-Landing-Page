import { motion } from "framer-motion";
import { useOfferAnimations } from "../hooks/useOfferAnimations";

export const AnimatedRings = () => {
  const { getRingAnimation } = useOfferAnimations();
  const firstRingAnimation = getRingAnimation(true);
  const secondRingAnimation = getRingAnimation(false);

  return (
    <>
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full border border-primary/5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={firstRingAnimation.animate}
        transition={firstRingAnimation.transition}
      />
      
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full border border-primary/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={secondRingAnimation.animate}
        transition={secondRingAnimation.transition}
      />
    </>
  );
}; 