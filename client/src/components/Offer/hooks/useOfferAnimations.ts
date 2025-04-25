import { TargetAndTransition, Variant } from "framer-motion";

export const useOfferAnimations = () => {
  const mainContainerAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2 }
  };

  const leftColumnAnimation = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5, delay: 0.3 }
  };

  const rightColumnAnimation = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5, delay: 0.5 },
    whileHover: { scale: 1.02 }
  };

  const wavePathVariants: Record<string, Variant> = {
    initial: {
      d: "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
    },
    animate: {
      d: "M1000,90C925,70,850,30,775,15c-85-15-170-15-255,0C450,25,400,45,350,55,200,75,100,65,0,30V120H1200V95C1150,115,1075,110,1000,90Z"
    }
  };
  
  const getRingAnimation = (isFirstRing: boolean): { animate: TargetAndTransition, transition: any } => {
    if (isFirstRing) {
      return {
        animate: { 
          rotate: 360,
          scale: [1, 1.05, 1],
          borderColor: ["rgba(0,122,204,0.05)", "rgba(0,122,204,0.1)", "rgba(0,122,204,0.05)"]
        },
        transition: { 
          rotate: { duration: 120, repeat: Infinity, ease: "linear" },
          scale: { duration: 20, repeat: Infinity, repeatType: "reverse" },
          borderColor: { duration: 8, repeat: Infinity, repeatType: "reverse" }
        }
      };
    } else {
      return {
        animate: { 
          rotate: -360,
          scale: [1, 0.95, 1],
          borderColor: ["rgba(0,122,204,0.1)", "rgba(0,122,204,0.15)", "rgba(0,122,204,0.1)"]
        },
        transition: { 
          rotate: { duration: 100, repeat: Infinity, ease: "linear" },
          scale: { duration: 15, repeat: Infinity, repeatType: "reverse" },
          borderColor: { duration: 6, repeat: Infinity, repeatType: "reverse" }
        }
      };
    }
  };

  return {
    mainContainerAnimation,
    leftColumnAnimation,
    rightColumnAnimation,
    wavePathVariants,
    getRingAnimation
  };
}; 