import { motion } from "framer-motion";

export const WavyBottom = () => {
  const wavePathVariants = {
    initial: {
      d: "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
    },
    animate: {
      d: "M1000,90C925,70,850,30,775,15c-85-15-170-15-255,0C450,25,400,45,350,55,200,75,100,65,0,30V120H1200V95C1150,115,1075,110,1000,90Z"
    }
  };

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