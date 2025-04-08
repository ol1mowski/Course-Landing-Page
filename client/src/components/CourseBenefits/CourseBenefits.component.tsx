import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import BenefitsHeader from "./BenefitsHeader/BenefitsHeader.component";
import BenefitsList from "./BenefitsList/BenefitsList.component";
import BenefitsCTA from "./BenefitsCTA/BenefitsCTA.component";

const CourseBenefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const headerY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  const gradientX = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const gradientY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const gradientScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 0.7, 0.7, 0.3]);
  
  const handleCardActive = (index: number | null) => {
    setActiveCardIndex(index);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
      id="benefits"
    >
      <div className="absolute inset-0 -z-10 bg-[#fafbff] overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full" 
          style={{
            x: gradientX,
            y: gradientY,
            scale: gradientScale,
            opacity: gradientOpacity
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/20 via-transparent to-transparent opacity-80" />
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-blue-50/30 via-primary/5 to-transparent opacity-80" />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-gradient-to-r from-blue-100/20 to-primary/10 blur-3xl"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
          }} 
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-[25vw] h-[25vw] rounded-full bg-gradient-to-r from-primary/10 to-blue-50/20 blur-3xl"
          animate={{ 
            x: [0, -20, 0], 
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }} 
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut",
            delay: 2 
          }}
        />
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,122,204,0.08)_1px,transparent_1px)] [background-size:20px_20px] -z-10 opacity-40" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div 
          style={{ y: headerY, opacity: headerOpacity }}
          className="mb-20 relative z-10"
        >
          <BenefitsHeader />
        </motion.div>
        
        <div className="relative z-10">
          <BenefitsList 
            activeCardIndex={activeCardIndex}
            onCardActive={handleCardActive}
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] 
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 flex justify-center"
          >
            <BenefitsCTA />
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute -bottom-20 right-0 w-72 h-72 border border-primary/10 rounded-full opacity-30"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      
      <motion.div
        className="absolute top-32 -left-10 w-32 h-32 border border-primary/10 rounded-full opacity-30"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </section>
  );
};

export default CourseBenefits; 