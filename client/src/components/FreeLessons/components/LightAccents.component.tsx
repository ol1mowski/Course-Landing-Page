import { motion } from "framer-motion";

interface LightAccentsProps {
  count?: number;
}

export const LightAccents = ({ count = 50 }: LightAccentsProps) => {
  const accents = Array(count).fill(0);

  return (
    <>
      {accents.map((_, index) => {
        const size = Math.random() * 2 + 1;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={`accent-${index}`}
            className="absolute rounded-full bg-primary"
            style={{
              width: size,
              height: size,
              top: `${top}%`,
              left: `${left}%`,
              boxShadow: "0 0 3px rgba(99, 102, 241, 0.5)"
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1]
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