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

export const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      delay: delay * 0.1 
    }
  })
}; 