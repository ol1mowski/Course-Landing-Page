import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { COURSE_BENEFITS_DATA } from "../../../data/CourseBenefits.data";

import BenefitCard from "../BenefitCard/BenefitCard.component";

interface BenefitsListProps {
  activeCardIndex: number | null;
  onCardActive: (index: number | null) => void;
}

const BenefitsList = ({ activeCardIndex, onCardActive }: BenefitsListProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -20]);
  const y2 = useTransform(scrollYProgress, [0, 0.5, 1], [80, 20, -30]);
  const y3 = useTransform(scrollYProgress, [0, 0.5, 1], [30, -10, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  
  const yTransforms = [y1, y2, y3, y1, y2, y3];
  
  const handleCardClick = (index: number) => {
    onCardActive(activeCardIndex === index ? null : index);
  };
  
  const getCardScale = (index: number) => {
    if (index % 2 === 0) {
      return "lg:scale-105";
    }
    return "";
  };

  return (
    <div className="relative min-h-[800px] lg:min-h-[1000px] w-full" ref={containerRef}>
      {activeCardIndex === null && (
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative w-[500px] h-[500px]"
          >
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow"
            />
            <motion.div 
              className="absolute inset-8 rounded-full border border-primary/10 animate-spin-slow-reverse"
            />
            <motion.div 
              className="absolute inset-16 rounded-full border border-primary/5"
              animate={{ rotate: [0, 180, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div 
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            >
              <motion.div
                className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"
                animate={{ rotate: [0, 180, 0] }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
              </motion.div>
            </motion.div>
            
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const x = 220 * Math.cos(angle);
              const y = 220 * Math.sin(angle);
              
              return (
                <motion.div
                  key={`dot-${i}`}
                  className="absolute w-2 h-2 bg-primary/30 rounded-full"
                  style={{ 
                    left: `calc(50% + ${x}px)`, 
                    top: `calc(50% + ${y}px)` 
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                />
              );
            })}
          </motion.div>
        </div>
      )}
      
      {activeCardIndex === null && (
        <>
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block z-0" />
          
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <motion.div 
              key={`connector-${index}`}
              className={`absolute hidden lg:block bg-gradient-to-r 
                ${index % 2 === 0 ? 'from-primary/20 to-transparent right-1/2' : 'from-transparent to-primary/20 left-1/2'} 
                h-0.5 w-32 
                ${hoveredIndex === index ? 'opacity-100' : 'opacity-40'}`}
              style={{
                top: `${120 + index * 100}px`,
                transform: `translateX(${index % 2 === 0 ? '-8px' : '8px'})`,
                zIndex: 1,
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
            />
          ))}
          
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <motion.div 
              key={`node-${index}`}
              className={`absolute hidden lg:block left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary 
                ${hoveredIndex === index ? 'opacity-100 scale-150' : 'opacity-50'}`}
              style={{
                top: `${120 + index * 100}px`,
                zIndex: 2,
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.5 + index * 0.1, 
                duration: 0.5, 
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
            />
          ))}
        </>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto relative">
        <div className="relative lg:col-span-2 flex flex-col lg:flex-row justify-center z-10">
          <div className="flex flex-col gap-6 lg:gap-16 lg:w-1/2 lg:pr-12">
            {COURSE_BENEFITS_DATA.benefits.filter((_, i) => i % 2 === 0).map((benefit, idx) => {
              const index = idx * 2; // 0, 2, 4
              return (
                <motion.div 
                  key={benefit.id}
                  style={{ 
                    y: yTransforms[index % yTransforms.length],
                    opacity
                  }}
                  layoutId={`benefit-card-${benefit.id}`}
                  className={`transition-all duration-500 ${getCardScale(index)}
                    ${activeCardIndex !== null && activeCardIndex !== index
                      ? 'opacity-30 scale-95'
                      : 'opacity-100 scale-100'
                    }
                  `}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: 0.1 * index,
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <BenefitCard
                    {...benefit}
                    index={index}
                    isActive={activeCardIndex === index}
                    onClick={() => handleCardClick(index)}
                  />
                  
                  {activeCardIndex === index && (
                    <motion.div 
                      layoutId="active-benefit-indicator"
                      className="h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full mt-2 mx-auto w-16"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-col gap-6 lg:gap-16 lg:w-1/2 lg:pl-12 lg:mt-16">
            {COURSE_BENEFITS_DATA.benefits.filter((_, i) => i % 2 === 1).map((benefit, idx) => {
              const index = idx * 2 + 1; // 1, 3, 5
              return (
                <motion.div 
                  key={benefit.id}
                  style={{ 
                    y: yTransforms[index % yTransforms.length],
                    opacity
                  }}
                  layoutId={`benefit-card-${benefit.id}`}
                  className={`transition-all duration-500 ${getCardScale(index)}
                    ${activeCardIndex !== null && activeCardIndex !== index
                      ? 'opacity-30 scale-95'
                      : 'opacity-100 scale-100'
                    }
                  `}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: 0.1 * index,
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <BenefitCard
                    {...benefit}
                    index={index}
                    isActive={activeCardIndex === index}
                    onClick={() => handleCardClick(index)}
                  />
                  
                  {activeCardIndex === index && (
                    <motion.div 
                      layoutId="active-benefit-indicator"
                      className="h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full mt-2 mx-auto w-16"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default BenefitsList; 