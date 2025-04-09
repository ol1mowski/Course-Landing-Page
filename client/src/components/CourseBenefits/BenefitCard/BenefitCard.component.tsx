import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

interface BenefitCardProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const BenefitCard = ({
  id,
  title,
  description,
  icon,
  index,
  isActive,
  onClick,
}: BenefitCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transformacje dla efektu 3D
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };
  
  const getBorderColor = () => {
    const colors = [
      "from-blue-400 to-purple-500",
      "from-green-400 to-emerald-500",
      "from-amber-400 to-orange-500",
      "from-pink-400 to-rose-500",
      "from-indigo-400 to-violet-500",
      "from-teal-400 to-cyan-500",
    ];
    return colors[index % colors.length];
  };

  const getIconColor = () => {
    const colors = [
      "bg-blue-500/10 text-blue-600",
      "bg-emerald-500/10 text-emerald-600",
      "bg-amber-500/10 text-amber-600",
      "bg-rose-500/10 text-rose-600",
      "bg-indigo-500/10 text-indigo-600",
      "bg-teal-500/10 text-teal-600",
    ];
    return colors[index % colors.length];
  };

  return (
    <motion.div
      className={`relative group h-full p-[2px] rounded-2xl bg-gradient-to-br ${getBorderColor()} perspective-1000`}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: isActive ? 1.02 : 1,
        transition: { duration: 0.5 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ 
        transformStyle: "preserve-3d" 
      }}
    >
      <motion.div
        onClick={onClick}
        className={`relative h-full w-full p-6 md:p-7 rounded-[14px] bg-white ${
          isActive ? "benefit-card-shadow-active" : "benefit-card-shadow"
        } transition-all duration-300 overflow-hidden cursor-pointer`}
        style={{ 
          transformStyle: "preserve-3d",
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          z: 0
        }}
      >
        {/* Tło z efektem głębi */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-white rounded-[14px] z-0" />
        
        {/* Dekoracyjne kształty w tle */}
        <motion.div 
          className="absolute top-0 right-0 w-32 h-32 -rotate-12 -mr-16 -mt-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-full" 
          animate={{ 
            rotate: isHovered || isActive ? -20 : -12,
            scale: isHovered || isActive ? 1.1 : 1
          }}
          transition={{ duration: 0.4 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-24 h-24 rotate-12 -ml-12 -mb-12 bg-gradient-to-tr from-primary/5 to-primary/10 rounded-full" 
          animate={{ 
            rotate: isHovered || isActive ? 20 : 12,
            scale: isHovered || isActive ? 1.1 : 1
          }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Orbita wokół ikony */}
        {(isHovered || isActive) && (
          <motion.div
            className="absolute h-12 w-12 rounded-xl"
            style={{ top: "24px", left: "24px", zIndex: 5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 border border-dashed rounded-xl border-primary/30"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
          </motion.div>
        )}

        {/* Ikona */}
        <motion.div 
          className={`relative mb-4 flex items-center justify-center w-12 h-12 rounded-xl ${getIconColor()} z-10`}
          style={{ 
            transformStyle: "preserve-3d", 
            transform: "translateZ(20px)" 
          }}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ 
              rotate: isActive ? 360 : isHovered ? 15 : 0,
              scale: isHovered || isActive ? 1.1 : 1
            }}
            transition={{ 
              duration: isActive ? 0.5 : 0.3,
              type: "spring",
              stiffness: 300,
              damping: 15
            }}
            className="w-8 h-8 flex items-center justify-center"
          >
            <img 
              src={icon} 
              alt={title} 
              className="w-full h-full object-contain drop-shadow-sm"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/32x32/blue/white?text=B";
              }}
            />
          </motion.div>
          
          <motion.div
            className="absolute inset-0 bg-white opacity-0 rounded-xl"
            initial={{ opacity: 0 }}
            whileHover={{ 
              opacity: 0.3, 
              transition: { duration: 0.2, repeat: 1, repeatType: "reverse" }
            }}
          />
        </motion.div>

        {/* Zawartość tekstowa */}
        <motion.div 
          className="relative z-10"
          style={{ 
            transformStyle: "preserve-3d", 
            transform: "translateZ(10px)" 
          }}
        >
          <motion.h3 
            className={`text-base md:text-lg font-bold mb-2 ${isActive ? "text-primary" : "text-gray-800"} transition-colors duration-300`}
            animate={{ 
              y: isHovered || isActive ? -2 : 0,
              scale: isHovered || isActive ? 1.02 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            {title}
            {isActive && (
              <motion.span 
                className="inline-block ml-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <Sparkles size={16} className="text-yellow-400" />
              </motion.span>
            )}
          </motion.h3>
          
          <motion.p 
            className="text-sm text-gray-600 mb-6 leading-relaxed"
            animate={{ 
              opacity: isHovered || isActive ? 1 : 0.8 
            }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
          
          <motion.div
            className="flex items-center text-primary text-sm font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: isActive || isHovered ? 1 : 0, 
              y: isActive || isHovered ? 0 : 10 
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="mr-1">Więcej informacji</span>
            <motion.div
              animate={{ 
                x: (isActive || isHovered) ? [0, 5, 0] : 0 
              }}
              transition={{ 
                repeat: (isActive || isHovered) ? Infinity : 0, 
                repeatDelay: 1.5, 
                duration: 0.5 
              }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Numerek karty */}
        <motion.div 
          className="absolute top-4 right-4 flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-100 text-gray-500 text-xs font-bold shadow-sm"
          style={{ 
            transformStyle: "preserve-3d", 
            transform: "translateZ(15px)" 
          }}
          animate={{ 
            scale: isActive ? 1.1 : 1,
            backgroundColor: isActive ? "rgba(var(--color-primary), 0.1)" : "rgb(243, 244, 246)",
            color: isActive ? "rgba(var(--color-primary), 1)" : "rgb(107, 114, 128)"
          }}
          transition={{ duration: 0.3 }}
        >
          {index + 1}
        </motion.div>
        
        {/* Efekt świecenia podczas aktywności */}
        {isActive && (
          <motion.div 
            className="absolute inset-0 rounded-[14px] z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 rounded-[14px] bg-gradient-to-br from-primary/10 to-primary/5 blur-sm" />
          </motion.div>
        )}
        
        {/* Efekt "unoszenia" - cień */}
        <motion.div
          className="absolute -inset-1 rounded-[18px] bg-black/20 blur-md -z-10"
          initial={{ opacity: 0, y: 5 }}
          animate={{ 
            opacity: isHovered || isActive ? 0.4 : 0.2,
            y: isHovered || isActive ? 10 : 5,
            scale: isHovered || isActive ? 0.95 : 0.98
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Konfetti podczas aktywacji */}
        {isActive && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`confetti-${i}`}
                className="absolute w-1.5 h-1.5 rounded-full z-20"
                style={{
                  backgroundColor: `hsla(${(i * 60) % 360}, 100%, 50%, 0.8)`,
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                }}
                initial={{ 
                  scale: 0, 
                  x: 0, 
                  y: 0, 
                  opacity: 0.8 
                }}
                animate={{ 
                  scale: [0, 1, 0.5], 
                  x: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 60], 
                  y: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 60],
                  opacity: [0.8, 1, 0] 
                }}
                transition={{ 
                  duration: 1 + Math.random(), 
                  delay: Math.random() * 0.2,
                  ease: "easeOut"
                }}
              />
            ))}
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default BenefitCard; 