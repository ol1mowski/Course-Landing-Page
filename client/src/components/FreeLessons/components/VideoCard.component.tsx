import { motion } from "framer-motion";
import { useState } from "react";
import { Play, ArrowRight, Star } from "lucide-react";
import { getVideoCardGradient } from "../style/styleUtils.style";

interface VideoCardProps {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export const VideoCard = ({
  id,
  title,
  duration,
  thumbnail,
  videoUrl,
  index,
  isActive,
  onClick
}: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer group rounded-2xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: isActive ? 1.05 : 1,
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
        scale: 1.03,
        zIndex: 5,
      }}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={`absolute inset-0 p-0.5 rounded-2xl bg-gradient-to-br ${getVideoCardGradient(index)} z-10`}
        animate={{
          opacity: isActive || isHovered ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative overflow-hidden w-full h-full rounded-2xl z-20">
        <div className="relative aspect-video overflow-hidden rounded-t-xl">
          <motion.img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered || isActive ? 1.05 : 1,
              filter: isHovered || isActive ? "brightness(0.8)" : "brightness(0.95)"
            }}
            transition={{ duration: 0.5 }}
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered || isActive ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={28} fill="white" />
            </motion.div>
          </motion.div>

          <div className="absolute bottom-3 right-3 bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-lg">
            <span className="text-white text-sm font-medium">{duration}</span>
          </div>

          {isActive && (
            <motion.div
              className="absolute top-3 left-3 text-yellow-400"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Star size={24} fill="currentColor" />
            </motion.div>
          )}
        </div>

        <div className={`p-5 rounded-b-xl bg-white shadow-sm relative z-10`}>
          <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          <motion.div
            className="flex items-center text-primary text-sm font-medium mt-3"
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: isHovered || isActive ? 1 : 0,
              x: isHovered || isActive ? 0 : -10
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="mr-1">Obejrzyj lekcję</span>
            <motion.div
              animate={{
                x: isHovered || isActive ? [0, 5, 0] : 0
              }}
              transition={{
                repeat: isHovered || isActive ? Infinity : 0,
                repeatDelay: 1,
                duration: 0.5
              }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute -inset-1 rounded-2xl bg-primary/5 blur-md -z-10"
        initial={{ opacity: 0, y: 5 }}
        animate={{
          opacity: isHovered || isActive ? 0.2 : 0.1,
          y: isHovered || isActive ? 10 : 5,
          scale: isHovered || isActive ? 0.98 : 1
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}; 