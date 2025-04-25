import { motion } from "framer-motion";
import { useOfferAnimations } from "../hooks/useOfferAnimations";

export const WavyBottom = () => {
  const { wavePathVariants } = useOfferAnimations();

  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
      <motion.svg 
        className="relative w-full h-12 md:h-16 lg:h-20" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        initial={{ opacity: 0.5, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.path 
          variants={wavePathVariants}
          initial="initial"
          animate="animate"
          className="fill-white"
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </motion.svg>
    </div>
  );
}; 