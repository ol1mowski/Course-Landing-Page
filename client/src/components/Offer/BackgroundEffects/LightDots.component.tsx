import { motion } from "framer-motion";

type LightDotsProps = {
  count?: number;
};

export const LightDots = ({ count = 50 }: LightDotsProps) => {
  const dots = Array(count).fill(0);
  
  return (
    <>
      {dots.map((_, index) => {
        const size = Math.random() * 3 + 1;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        
        return (
          <motion.div
            key={`dot-${index}`}
            className="absolute rounded-full bg-primary"
            style={{
              width: size,
              height: size,
              top: `${top}%`,
              left: `${left}%`,
              opacity: 0.05,
              boxShadow: "0 0 4px rgba(0, 122, 204, 0.2)"
            }}
            animate={{ 
              opacity: [0.03, 0.07, 0.03],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              delay,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        );
      })}
    </>
  );
}; 