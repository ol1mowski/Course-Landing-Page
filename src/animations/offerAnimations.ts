import { containerVariants, headerVariants } from './commonAnimations';

export { containerVariants, headerVariants };

// Unikalny wariant dla benefitów
export const benefitVariants = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: { 
      delay: delay * 0.1 
    }
  })
}; 