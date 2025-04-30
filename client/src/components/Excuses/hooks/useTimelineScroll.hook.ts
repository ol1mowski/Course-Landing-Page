import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export const useTimelineScroll = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const timelineScroll = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  
  const timelineHeight = useTransform(
    timelineScroll.scrollYProgress, 
    [0, 1], 
    ["0%", "100%"]
  );
  
  return { timelineRef, timelineHeight };
}; 