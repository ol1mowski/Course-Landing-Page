import { motion, Variants } from "framer-motion";
import { headerVariants } from "../../../animations/offerAnimations";

import Heading from "../../UI/Heading/Heading.component";

const OfferHeader = () => {
  // Animacja dla tekstu z efektem pojawiania się litera po literze
  const textVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  // Animacja dla komety
  const cometVariants = {
    initial: { x: -100, y: -100, opacity: 0 },
    animate: { 
      x: 20, 
      y: 20, 
      opacity: [0, 1, 0.2],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeOut",
        times: [0, 0.3, 1],
      }
    }
  };

  return (
    <div className="relative">
      {/* Dekoracyjna kometa */}
      <motion.div
        className="absolute -top-16 -left-16 w-32 h-32 md:w-48 md:h-48"
        initial={{ x: -100, y: -100, opacity: 0 }}
        animate={{ 
          x: 20, 
          y: 20, 
          opacity: [0, 1, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeOut",
          times: [0, 0.3, 1],
        }}
      >
        <div className="relative w-full h-full">
          <motion.div 
            className="absolute w-6 h-6 rounded-full bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute w-32 h-1 bg-gradient-to-r from-white/80 to-transparent transform origin-left rotate-45"
            animate={{
              width: [20, 60, 20],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
      
      {/* Główny nagłówek */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading className="text-white">
          <motion.span
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            {"Dołącz do ".split("").map((char, index) => (
              <motion.span
                key={`title-char-${index}`}
                variants={letterVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
          <motion.span 
            className="relative bg-gradient-to-r from-primary via-blue-400 to-primary text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            kursu
            <motion.span 
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </motion.span>
        </Heading>
        
        <motion.p 
          className="mt-6 text-xl text-gray-300/90 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Zainwestuj w swoją przyszłość i rozpocznij karierę w IT
          <motion.span
            className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-primary to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 1, duration: 0.6 }}
          />
        </motion.p>
      </motion.div>
      
      {/* Dekoracyjne elementy */}
      <motion.div 
        className="absolute top-1/4 -right-12 w-24 h-24 rounded-full border border-white/10 opacity-60"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ delay: 0.8, duration: 1 }}
      />
    </div>
  );
};

export default OfferHeader; 