import { motion } from 'framer-motion';
import { useState, memo } from 'react';
import { EXCUSES } from '../../../data/Excuses.data';
import { useTimelineScroll } from '../hooks/useTimelineScroll.hook';
import { TimelineItem } from './TimelineItem.component';

export const Timeline = memo(() => {
  const { timelineRef, timelineHeight } = useTimelineScroll();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const handleItemClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  
  return (
    <div className="relative mx-auto" ref={timelineRef}>
      <div className="absolute left-1/2 h-full w-1 bg-gray-200 transform -translate-x-1/2"></div>
      
      <motion.div 
        className="absolute left-1/2 w-1 bg-red-500 transform -translate-x-1/2 origin-top"
        style={{ height: timelineHeight }}
      />
      
      <div className="space-y-28">
        {EXCUSES.map((excuse, index) => (
          <TimelineItem 
            key={index}
            excuse={excuse}
            index={index}
            isActive={index === activeIndex}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
}); 