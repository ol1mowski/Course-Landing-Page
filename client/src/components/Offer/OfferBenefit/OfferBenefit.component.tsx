import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

type OfferBenefitProps = {
  icon: string;
  text: string;
  index: number;
};

const OfferBenefit = ({ icon, text, index }: OfferBenefitProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Efekt 3D przy najechaniu
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [7, -7]);
  const rotateY = useTransform(x, [-100, 100], [-7, 7]);
  
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

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      {/* Efekt blasku przy hover - delikatny niebieski */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-blue-100 opacity-0 blur-md -z-10"
        animate={{ opacity: isHovered ? 0.2 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Główny kontener korzyści */}
      <motion.div
        className="relative flex items-center gap-4 p-5 rounded-xl backdrop-blur-sm 
                  border border-gray-200/50 shadow-sm
                  bg-white hover:bg-blue-50/50
                  hover:border-blue-200 transition-all cursor-pointer overflow-hidden"
        style={{ 
          transformStyle: "preserve-3d",
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          z: isHovered ? 10 : 0,
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Tło z efektem głębi - delikatny niebieski gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-white rounded-xl"
          animate={{ opacity: isHovered ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Ikona Check w kółku */}
        <motion.div
          className="relative flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 border border-blue-100"
          style={{ transformStyle: "preserve-3d", z: 20 }}
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <motion.div
            animate={{ 
              scale: isHovered ? [1, 1.1, 1] : 1,
            }}
            transition={{ 
              duration: 0.8, 
              repeat: isHovered ? 1 : 0,
              repeatType: "reverse",
            }}
          >
            <CheckCircle size={22} className="text-blue-500" />
          </motion.div>
          
          {/* Subtelna orbita wokół ikony */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-full border border-dashed border-blue-200"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1.1, 
                opacity: 0.4,
                rotate: 360
              }}
              transition={{ 
                scale: { duration: 0.3 },
                opacity: { duration: 0.3 },
                rotate: { duration: 10, repeat: Infinity, ease: "linear" }
              }}
            />
          )}
        </motion.div>
        
        {/* Ikonka domyślna jako dodatkowy element */}
        <div className="flex items-center gap-3 flex-1">
          <span className="text-2xl text-blue-500 opacity-80">{icon}</span>
          
          {/* Tekst korzyści */}
          <motion.span 
            className="relative text-lg text-gray-700 font-medium"
            style={{ transformStyle: "preserve-3d", z: 10 }}
            animate={{ 
              x: isHovered ? 3 : 0 
            }}
            transition={{ duration: 0.3 }}
          >
            {text}
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OfferBenefit; 