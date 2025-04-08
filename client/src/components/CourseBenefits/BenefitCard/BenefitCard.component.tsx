import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

  const getVariant = () => {
    const variants = [
      { rotateInitial: 1, rotateHover: -1, translateInitial: [1, -1], translateHover: [-1, 2] },
      { rotateInitial: -1, rotateHover: 1, translateInitial: [-1, 1], translateHover: [2, -1] },
      { rotateInitial: 0.5, rotateHover: -1.5, translateInitial: [0, 2], translateHover: [0, -2] },
      { rotateInitial: -0.5, rotateHover: 1.5, translateInitial: [0, -2], translateHover: [0, 2] },
      { rotateInitial: 0, rotateHover: -1, translateInitial: [1.5, 0], translateHover: [-1.5, 0] },
      { rotateInitial: 0, rotateHover: 1, translateInitial: [-1.5, 0], translateHover: [1.5, 0] },
    ];
    return variants[index % variants.length];
  };

  const variant = getVariant();
  
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
      className={`relative group h-full p-[2px] rounded-2xl bg-gradient-to-br ${getBorderColor()}`}
      whileHover={{ 
        scale: isActive ? 1 : 1.02, 
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
        className={`relative h-full w-full p-6 md:p-7 rounded-[14px] bg-white ${
          isActive ? "benefit-card-shadow-active" : "benefit-card-shadow"
        } transition-all duration-300 overflow-hidden cursor-pointer`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-white rounded-[14px] z-0" />
        
        <div className="absolute top-0 right-0 w-32 h-32 -rotate-12 -mr-16 -mt-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-24 h-24 rotate-12 -ml-12 -mb-12 bg-gradient-to-tr from-primary/5 to-primary/10 rounded-full" />
        
        <div className={`relative mb-4 flex items-center justify-center w-12 h-12 rounded-xl ${getIconColor()} z-10`}>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isActive ? 360 : 0 }}
            transition={{ duration: isActive ? 0.5 : 0 }}
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
        </div>

        <div className="relative z-10">
          <h3 className={`text-base md:text-lg font-bold mb-2 ${isActive ? "text-primary" : "text-gray-800"} transition-colors duration-300`}>
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">{description}</p>
          
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
        
        <div className="absolute top-4 right-4 flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-100 text-gray-500 text-xs font-bold shadow-sm">
          {index + 1}
        </div>
        
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
      </div>
    </motion.div>
  );
};

export default BenefitCard; 