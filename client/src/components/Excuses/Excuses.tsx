import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { EXCUSES } from "../../data/Excuses.data";
import { useAnimationInView } from "../../hooks/useAnimationInView";

import Card from "../UI/Card/Card.component";
import Heading from "../UI/Heading/Heading.component";
import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";

const Excuses = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const timelineScroll = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  const timelineHeight = useTransform(
    timelineScroll.scrollYProgress, 
    [0, 1], 
    ["0%", "100%"]
  );
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // Animacja kart po najechaniu
  const cardHoverAnimation = {
    scale: 1.05,
    boxShadow: "0px 15px 30px rgba(255, 0, 0, 0.25)",
    borderColor: "#f56565",
    rotate: [0, -1, 1, 0],
    transition: { 
      duration: 0.3,
      rotate: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.5
      } 
    }
  };
  
  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity, y, scale }}
      className="relative py-40 overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Ozdobne elementy tła */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-50 rounded-full opacity-40 blur-3xl -z-10 transform -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl -z-10 transform translate-y-1/3"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heading>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Myślisz, że
              </motion.span>{" "}
              <motion.span 
                className="text-red-500 relative inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                nie dostaniesz
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-1 bg-red-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                pracy w IT gdyż:
              </motion.span>
            </Heading>
          </motion.div>
        </div>

        {/* Timeline z wymówkami */}
        <div className="relative mx-auto" ref={timelineRef}>
          {/* Linia osi czasu */}
          <div className="absolute left-1/2 h-full w-1 bg-gray-200 transform -translate-x-1/2"></div>
          
          {/* Pasek postępu scrollowania */}
          <motion.div 
            className="absolute left-1/2 w-1 bg-red-500 transform -translate-x-1/2 origin-top"
            style={{ height: timelineHeight }}
          />
          
          <div className="space-y-28">
            {EXCUSES.map((excuse, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 50
                }}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={cardHoverAnimation}
                    className="perspective-1000"
                    onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                  >
                    <Card 
                      text={excuse} 
                      type="excuse" 
                      isActive={index === activeIndex}
                      customStyle="border-2 border-red-300 hover:border-red-500"
                    />
                  </motion.div>
                </div>
                
                <motion.div 
                  className="absolute left-1/2 -ml-3 w-6 h-6 rounded-full bg-white border-4 border-red-500 transform -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.5, type: "spring" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-24 max-w-2xl mx-auto"
        >
          <p className="text-2xl font-medium text-gray-700">
            Te wymówki nie określają Twojej przyszłości!
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Z naszym kursem zyskasz umiejętności i pewność siebie
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "180px" }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="h-1 bg-primary mx-auto mt-6 rounded-full"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Excuses;
