import { motion } from 'framer-motion';
import Card from '../../UI/Card/Card.component';
import { memo } from 'react';

interface TimelineItemProps {
  excuse: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export const TimelineItem = memo(({ excuse, index, isActive, onClick }: TimelineItemProps) => {
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
    <motion.div
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
          onClick={onClick}
        >
          <Card 
            text={excuse} 
            type="excuse" 
            isActive={isActive}
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
  );
}); 