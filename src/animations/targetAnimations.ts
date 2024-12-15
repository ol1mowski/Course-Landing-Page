export const containerVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.2 
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

export const cardsContainerVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1 
  }
};

export const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: delay * 0.1 
    }
  })
}; 