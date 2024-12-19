import { containerVariants, headerVariants } from './commonAnimations';

export { containerVariants, headerVariants };


export const progressBarVariants = {
  hidden: { 
    scaleY: 0,
    opacity: 0 
  },
  visible: (progress: number) => ({
    scaleY: progress,
    opacity: 1,
    transition: { 
      duration: 0.5 
    }
  })
};


export const itemVariants = {
  hidden: { 
    opacity: 0, 
    x: -100, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { 
      duration: 0.7,
      ease: "easeOut",
      delay: 0.2 
    }
  }
}; 