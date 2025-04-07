import { containerVariants, headerVariants } from './commonAnimations';

export { containerVariants, headerVariants };

export const tableVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0 
  }
};

export const rowVariants = {
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