import { containerVariants, headerVariants } from './commonAnimations';

export { containerVariants, headerVariants };

export const ctaVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      delay: 0.4 
    }
  }
}; 