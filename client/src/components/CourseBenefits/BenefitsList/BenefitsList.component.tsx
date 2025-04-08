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
  
  // Efekt przewijania dla zawartości
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transformacje dla efektu paralaksy
  const y1 = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -20]);
  const y2 = useTransform(scrollYProgress, [0, 0.5, 1], [80, 20, -30]);
  const y3 = useTransform(scrollYProgress, [0, 0.5, 1], [30, -10, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  
  // Tablica transformacji Y dla każdej karty
  const yTransforms = [y1, y2, y3, y1, y2, y3];
  
  // Obsługa kliknięcia w kartę
  const handleCardClick = (index: number) => {
    onCardActive(activeCardIndex === index ? null : index);
  };
  
  // Pozycje kart w układzie heksagonalnym/organicznym
  const cardPositions = [
    "col-span-1 md:col-span-2 md:row-span-1 z-20", // Pierwsza karta - duża na górze po lewej
    "col-span-1 md:col-span-1 row-span-1 md:translate-y-16 z-10", // Druga karta - po prawej od pierwszej
    "col-span-1 md:col-span-1 row-span-1 md:-translate-y-8 z-30", // Trzecia karta - po prawej
    "col-span-1 md:col-span-1 row-span-1 md:translate-y-12 z-10", // Czwarta karta - po lewej na dole
    "col-span-1 md:col-span-2 md:row-span-1 md:-translate-y-4 z-20", // Piąta karta - duża na dole po prawej
    "col-span-1 md:col-span-1 row-span-1 md:translate-y-24 z-30", // Szósta karta - po prawej na dole
  ];
  
  // Skala dla kart zajmujących więcej miejsca
  const getCardScale = (index: number) => {
    // Karty 0 i 4 będą większe
    if (index === 0 || index === 4) {
      return "md:scale-110";
    }
    return "";
  };

  return (
    <div className="relative min-h-[800px] md:min-h-[900px] w-full" ref={containerRef}>
      {/* Linie łączące karty - wyświetlane tylko gdy aktywna karta nie jest wybrana */}
      {activeCardIndex === null && (
        <>
          {/* Linie do połączenia kart */}
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.div 
              key={`line-${index}`}
              className={`absolute hidden md:block bg-gradient-to-r from-primary/10 to-primary/30 h-0.5 
                ${hoveredIndex === index || hoveredIndex === index + 1 ? 'opacity-100' : 'opacity-30'}`}
              style={{
                left: `${index % 2 === 0 ? 25 : 40}%`,
                top: `${100 + index * 140}px`,
                width: '35%',
                transform: `rotate(${index % 2 === 0 ? 30 : -20}deg)`,
                transformOrigin: index % 2 === 0 ? 'left center' : 'right center',
                zIndex: 5,
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
            />
          ))}
          
          {/* Węzły na połączeniach */}
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <motion.div 
              key={`node-${index}`}
              className={`absolute hidden md:block w-3 h-3 rounded-full bg-primary 
                ${hoveredIndex === index ? 'opacity-100 scale-150' : 'opacity-40'}`}
              style={{
                left: index % 3 === 0 ? '28%' : index % 3 === 1 ? '72%' : '50%',
                top: `${90 + index * 140}px`,
                zIndex: 5,
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
      
      {/* Karty korzyści */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 md:gap-y-10 relative md:px-8 mx-auto">
        {COURSE_BENEFITS_DATA.benefits.map((benefit, index) => (
          <motion.div 
            key={benefit.id}
            style={{ 
              y: yTransforms[index % yTransforms.length],
              opacity
            }}
            layoutId={`benefit-card-${benefit.id}`}
            className={`transition-all duration-500 ${cardPositions[index % cardPositions.length]} ${getCardScale(index)}
              ${activeCardIndex !== null && activeCardIndex !== index
                ? 'opacity-30 scale-95'
                : 'opacity-100 scale-100'
              }
            `}
            initial={{ opacity: 0, y: 50 + index * 10 }}
            whileInView={{ opacity: 1, y: 0 }}
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
            
            {/* Wskaźnik dla aktywnej karty */}
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
        ))}
      </div>
      
      {/* Centralny element dekoracyjny - pojawia się gdy żadna karta nie jest aktywna */}
      {activeCardIndex === null && (
        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-20 hidden md:block"
          initial={{ scale: 0, opacity: 0, rotate: -20 }}
          whileInView={{ scale: 1, opacity: 0.2, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Centralny wzór */}
            <div className="w-[400px] h-[400px] rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
            <div className="w-[300px] h-[300px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/20 animate-spin-slow-reverse" />
            <div className="w-[200px] h-[200px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 animate-pulse" />
            
            {/* Środkowe logo/ikona */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L12 20" stroke="#007ACC" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4 12L20 12" stroke="#007ACC" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Płynne przejście - efekt gradientu na dole */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default BenefitsList; 