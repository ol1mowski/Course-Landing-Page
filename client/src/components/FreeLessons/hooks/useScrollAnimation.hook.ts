import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export const useScrollAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return {
    containerRef,
    y,
    opacity
  };
}; 