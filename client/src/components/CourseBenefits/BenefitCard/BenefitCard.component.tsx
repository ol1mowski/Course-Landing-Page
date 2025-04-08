import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BenefitCardProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
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
  // Generowanie koloru tła i obramowania na podstawie indeksu
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

  // Efekty dla różnych kart
  const getVariant = () => {
    const variants = [
      { rotateInitial: 2, rotateHover: -2, translateInitial: [2, -2], translateHover: [-2, 3] },
      { rotateInitial: -2, rotateHover: 2, translateInitial: [-2, 2], translateHover: [3, -2] },
      { rotateInitial: 1, rotateHover: -3, translateInitial: [0, 3], translateHover: [0, -3] },
      { rotateInitial: -1, rotateHover: 3, translateInitial: [0, -3], translateHover: [0, 3] },
      { rotateInitial: 0, rotateHover: -2, translateInitial: [3, 0], translateHover: [-3, 0] },
      { rotateInitial: 0, rotateHover: 2, translateInitial: [-3, 0], translateHover: [3, 0] },
    ];
    return variants[index % variants.length];
  };

  const variant = getVariant();

  return (
    <motion.div
      className={`relative group h-full p-1 rounded-2xl bg-gradient-to-br ${getBorderColor()}`}
      whileHover={{ 
        scale: isActive ? 1 : 1.03, 
        rotate: variant.rotateHover,
        y: variant.translateHover[1],
        x: variant.translateHover[0],
        transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 15 }
      }}
      initial={{ 
        rotate: variant.rotateInitial,
        y: variant.translateInitial[1],
        x: variant.translateInitial[0]
      }}
      animate={{ 
        rotate: isActive ? 0 : variant.rotateInitial,
        y: isActive ? 0 : variant.translateInitial[1],
        x: isActive ? 0 : variant.translateInitial[0],
        scale: isActive ? 1.02 : 1,
        transition: { duration: 0.5 }
      }}
    >
      <div
        onClick={onClick}
        className={`relative h-full w-full p-6 md:p-8 rounded-xl bg-white ${
          isActive ? "shadow-xl" : "shadow-md"
        } transition-shadow duration-300 overflow-hidden cursor-pointer`}
      >
        {/* Kształt tła */}
        <div className="absolute top-0 right-0 w-32 h-32 -rotate-12 -mr-16 -mt-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-24 h-24 rotate-12 -ml-12 -mb-12 bg-gradient-to-tr from-primary/5 to-primary/10 rounded-full" />
        
        {/* Ikona */}
        <div className="relative mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 text-primary">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isActive ? 360 : 0 }}
            transition={{ duration: isActive ? 0.5 : 0 }}
            className="text-2xl"
          >
            {icon}
          </motion.div>
          
          {/* Efekt błysku */}
          <motion.div
            className="absolute inset-0 bg-white opacity-0 rounded-xl"
            initial={{ opacity: 0 }}
            whileHover={{ 
              opacity: 0.3, 
              transition: { duration: 0.2, repeat: 1, repeatType: "reverse" }
            }}
          />
        </div>

        {/* Treść */}
        <div className="relative z-10">
          <h3 className={`text-lg md:text-xl font-bold mb-2 ${isActive ? "text-primary" : "text-gray-800"} transition-colors duration-300`}>
            {title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-6">{description}</p>
          
          {/* Widoczny tylko na hover lub gdy aktywny */}
          <motion.div
            className="flex items-center text-primary text-sm font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              y: isActive ? 0 : 10 
            }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="mr-1">Więcej informacji</span>
            <motion.div
              animate={{ x: isActive ? [0, 5, 0] : 0 }}
              transition={{ repeat: isActive ? Infinity : 0, repeatDelay: 1.5, duration: 0.5 }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Numer kolejności */}
        <div className="absolute top-4 right-4 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100 text-gray-500 text-xs md:text-sm font-bold">
          {index + 1}
        </div>
        
        {/* Świecąca obwódka gdy aktywna */}
        {isActive && (
          <motion.div 
            className="absolute inset-0 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 blur-sm" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default BenefitCard; 