import { motion } from "framer-motion";

type BlueParticlesProps = {
  number?: number;
};

export const BlueParticles = ({ number = 20 }: BlueParticlesProps) => {
  const particles = Array(number).fill(null);
  
  return (
    <>
      {particles.map((_, idx) => {
        const duration = Math.random() * 2 + 5;
        const delay = Math.random() * (0.8 - 0.2) + 0.2;
        const leftPosition = Math.floor(Math.random() * (400 - -400) + -400);
        
        return (
          <motion.span
            key={`particle-${idx}`}
            className="absolute h-0.5 w-0.5 rounded-full bg-primary shadow-[0_0_0_1px_rgba(0,122,204,0.1)]
                      before:absolute before:top-1/2 before:h-[1px] before:w-[30px] before:translate-y-[-50%] 
                      before:bg-gradient-to-r before:from-primary/20 before:to-transparent before:content-['']"
            style={{
              top: 0,
              left: `${leftPosition}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`,
              opacity: 0.1
            }}
            animate={{
              top: ["0vh", "100vh"],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </>
  );
}; 