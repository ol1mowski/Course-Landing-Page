export const containerVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.3 
    }
  }
};

export const headerVariants = {
  hidden: { 
    opacity: 0, 
    y: -20 
  },
  visible: { 
    opacity: 1, 
    y: 0 
  }
};

export const descriptionVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      delay: 0.2 
    }
  }
};

export const featureVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      delay: delay * 0.2 
    }
  })
}; 