import { motion } from "framer-motion";
import { useState } from "react";
import { getGradientByIndex } from "../style/styleUtils.style";
import { CardIcon } from "./CardIcon.component";

interface TargetCardProps {
  text: string;
  index: number;
  isActive: boolean;
  onSelect: () => void;
}

export const TargetCard = ({
  text,
  index,
  isActive,
  onSelect
}: TargetCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full h-full relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: isActive ? 1.08 : 1,
        zIndex: isActive ? 10 : 1,
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: index * 0.1
      }}
      whileHover={{
        scale: isActive ? 1.1 : 1.05,
        zIndex: 5,
      }}
      onClick={onSelect}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={`w-full h-full rounded-2xl shadow-lg bg-white border-2 border-${isActive ? 'primary' : 'gray-100'}`}
        animate={{
          boxShadow: isActive || isHovered
            ? "0 20px 40px rgba(0, 0, 0, 0.15)"
            : "0 5px 15px rgba(0, 0, 0, 0.05)"
        }}
      >
        <div className="h-full px-5 py-6 rounded-2xl transform transition-all duration-300 relative overflow-hidden flex flex-col items-center justify-between">
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full opacity-50 blur-sm"
              style={{ backgroundColor: isActive ? 'rgba(99, 102, 241, 0.2)' : 'transparent' }}
              animate={{
                scale: isHovered || isActive ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 2,
                repeat: isHovered || isActive ? Infinity : 0,
                repeatType: "reverse"
              }}
            />
            <div className={`relative mb-4 p-4 rounded-full text-white bg-gradient-to-r ${getGradientByIndex(index)}`}>
              <CardIcon index={index} />
            </div>
          </div>

          <p className="text-center text-base font-semibold mb-3 text-gray-700">{text}</p>

          <motion.div
            className="h-1 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ width: 0 }}
            animate={{ width: isActive || isHovered ? "80%" : "40%" }}
            transition={{ duration: 0.3 }}
          />

          {isActive && (
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}; 