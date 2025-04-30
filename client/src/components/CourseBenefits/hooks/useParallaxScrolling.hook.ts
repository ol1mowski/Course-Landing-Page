import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollTransforms {
  sectionRef: React.RefObject<HTMLDivElement>;
  headerY: MotionValue<number>;
  headerOpacity: MotionValue<number>;
  gradientX: MotionValue<string>;
  gradientY: MotionValue<string>;
  gradientScale: MotionValue<number>;
  gradientOpacity: MotionValue<number>;
}

export const useParallaxScrolling = (): ScrollTransforms => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
  
  return {
    sectionRef,
    headerY,
    headerOpacity,
    gradientX,
    gradientY,
    gradientScale,
    gradientOpacity
  };
}; 