import { motion, MotionValue } from "framer-motion";
import { memo } from "react";

interface BackgroundGradientProps {
  gradientX: MotionValue<string>;
  gradientY: MotionValue<string>;
  gradientScale: MotionValue<number>;
  gradientOpacity: MotionValue<number>;
}

export const BackgroundGradient = memo(({
  gradientX,
  gradientY,
  gradientScale,
  gradientOpacity
}: BackgroundGradientProps) => {
  return (
    <div className="absolute inset-0 -z-10 bg-[#fafbff] overflow-hidden">
      <motion.div 
        className="absolute inset-0 w-full h-full" 
        style={{
          x: gradientX,
          y: gradientY,
          scale: gradientScale,
          opacity: gradientOpacity
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/20 via-transparent to-transparent opacity-80" />
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent opacity-70" />
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-blue-50/30 via-primary/5 to-transparent opacity-80" />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-gradient-to-r from-blue-100/20 to-primary/10 blur-3xl"
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }} 
        transition={{ 
          repeat: Infinity, 
          duration: 20,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-[25vw] h-[25vw] rounded-full bg-gradient-to-r from-primary/10 to-blue-50/20 blur-3xl"
        animate={{ 
          x: [0, -20, 0], 
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }} 
        transition={{ 
          repeat: Infinity, 
          duration: 15,
          ease: "easeInOut",
          delay: 2 
        }}
      />
      
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,122,204,0.08)_1px,transparent_1px)] [background-size:20px_20px] -z-10 opacity-40" />
    </div>
  );
}); 