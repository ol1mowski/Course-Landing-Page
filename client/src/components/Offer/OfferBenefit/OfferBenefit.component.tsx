import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

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
  
  // Dynamiczne kolory w zależności od indeksu
  const getGradient = () => {
    const gradients = [
      "from-blue-500/20 to-indigo-600/20",
      "from-purple-500/20 to-fuchsia-600/20",
      "from-cyan-500/20 to-blue-500/20",
      "from-pink-500/20 to-rose-600/20",
      "from-emerald-500/20 to-teal-600/20",
      "from-amber-500/20 to-orange-600/20",
      "from-violet-500/20 to-purple-600/20",
    ];
    return gradients[index % gradients.length];
  };
  
  const getBorderGradient = () => {
    const gradients = [
      "from-blue-500 to-indigo-600",
      "from-purple-500 to-fuchsia-600",
      "from-cyan-500 to-blue-500",
      "from-pink-500 to-rose-600",
      "from-emerald-500 to-teal-600",
      "from-amber-500 to-orange-600",
      "from-violet-500 to-purple-600",
    ];
    return gradients[index % gradients.length];
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
      {/* Efekt blasku przy hover */}
      <motion.div
        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${getBorderGradient()} opacity-0 blur-md -z-10`}
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Główny kontener korzyści */}
      <motion.div
        className={`relative flex items-center gap-4 p-5 rounded-xl backdrop-blur-sm border border-white/10 
                    bg-gradient-to-r ${getGradient()} 
                    hover:border-white/30 transition-all cursor-pointer overflow-hidden`}
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
        {/* Tło z efektem głębi */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-white/5 rounded-xl"
          animate={{ opacity: isHovered ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Dekoracyjne kropki */}
        <motion.div
          className="absolute top-0 right-0 h-16 w-16 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.2 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`dot-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: 2 + Math.random() * 2,
                height: 2 + Math.random() * 2,
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1], 
              }}
              transition={{ 
                duration: 1 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>
        
        {/* Ikona */}
        <motion.div
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md"
          style={{ transformStyle: "preserve-3d", z: 20 }}
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <motion.span 
            className="text-3xl"
            animate={{ 
              scale: isHovered ? [1, 1.2, 1] : 1,
              rotate: isHovered ? [0, 5, 0, -5, 0] : 0,
            }}
            transition={{ 
              duration: 0.8, 
              repeat: isHovered ? Infinity : 0,
              repeatType: "reverse",
            }}
          >
            {icon}
          </motion.span>
          
          {/* Orbita wokół ikony */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-full border border-dashed border-white/40"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1.2, 
                opacity: 0.6,
                rotate: 360
              }}
              transition={{ 
                scale: { duration: 0.3 },
                opacity: { duration: 0.3 },
                rotate: { duration: 8, repeat: Infinity, ease: "linear" }
              }}
            />
          )}
        </motion.div>
        
        {/* Tekst korzyści */}
        <motion.span 
          className="relative text-lg text-white font-medium"
          style={{ transformStyle: "preserve-3d", z: 10 }}
          animate={{ 
            x: isHovered ? 5 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default OfferBenefit; 