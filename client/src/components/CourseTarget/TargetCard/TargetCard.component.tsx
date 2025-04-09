import React, { useState } from "react";
import { motion, useAnimation, MotionValue, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import Card from "../../UI/Card/Card.component";

interface TargetCardProps {
  text: string;
  index: number;
  isActive?: boolean;
  onClick?: () => void;
}

const TargetCard = ({ text, index, isActive = false, onClick }: TargetCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  // Generowanie unikalnego koloru dla każdej karty
  const getCardColor = (idx: number) => {
    const colors = [
      "from-purple-500 to-indigo-700",
      "from-blue-500 to-cyan-600",
      "from-emerald-500 to-teal-700",
      "from-amber-500 to-orange-700",
      "from-pink-500 to-rose-700",
      "from-violet-500 to-purple-700",
    ];
    return colors[idx % colors.length];
  };

  // Efekt lewitacji przy najechaniu
  React.useEffect(() => {
    if (isHovered || isActive) {
      controls.start({
        y: -10,
        scale: 1.05,
        transition: { duration: 0.3 }
      });
    } else {
      controls.start({
        y: 0,
        scale: 1,
        transition: { duration: 0.3 }
      });
    }
  }, [isHovered, isActive, controls]);

  return (
    <motion.div
      className="relative mb-4 cursor-pointer perspective-1000"
      animate={controls}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        className={`
          relative w-full p-6 rounded-lg overflow-hidden
          bg-gradient-to-br ${getCardColor(index)}
          shadow-lg
          flex flex-col justify-center items-center
          h-[150px] z-10
          ${isActive ? "border-2 border-white" : ""}
        `}
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(0)"
        }}
      >
        {/* Gwiazdy w tle */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 1.5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(0.5px)",
            }}
          />
        ))}

        {/* Orbita */}
        <motion.div
          className="absolute inset-1 rounded-lg border border-white/10"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{ opacity: 0.4 }}
        />

        {/* Ikona gwiazdy */}
        {isActive && (
          <motion.div
            className="absolute -top-1 -right-1 text-yellow-300"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Star size={24} fill="currentColor" />
          </motion.div>
        )}

        {/* Tekst */}
        <motion.span 
          className="text-center text-white font-medium text-lg z-10"
          animate={{ scale: isActive ? 1.05 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {text}
        </motion.span>

        {/* Efekt świecenia przy najechaniu */}
        <motion.div
          className="absolute inset-0 bg-white opacity-0 rounded-lg"
          animate={{ opacity: isHovered || isActive ? 0.15 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      
      {/* Cień 3D */}
      <motion.div
        className="absolute inset-0 bg-black/50 rounded-lg blur-md -z-10"
        animate={{ 
          y: isHovered || isActive ? 12 : 8,
          scale: isHovered || isActive ? 0.95 : 0.98,
          opacity: isHovered || isActive ? 0.6 : 0.4
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default TargetCard; 