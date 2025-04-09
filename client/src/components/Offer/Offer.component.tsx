import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import OfferHeader from "./OfferHeader/OfferHeader.component";
import OfferBenefits from "./OfferBenefits/OfferBenefits.component";
import OfferCard from "./OfferCard/OfferCard.component";

// Komponent meteoru dla efektu w tle
const Meteor = ({ number = 20 }: { number?: number }) => {
  const meteors = new Array(number).fill(null);
  
  return (
    <>
      {meteors.map((_, idx) => (
        <motion.span
          key={`meteor-${idx}`}
          className="absolute h-0.5 w-0.5 rotate-[215deg] rounded-[9999px] bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)]
                    before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:translate-y-[-50%] 
                    before:bg-gradient-to-r before:from-white before:to-transparent before:content-['']"
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
          animate={{
            top: ["0vh", "100vh"],
            opacity: [1, 0.2],
          }}
          transition={{
            duration: Math.random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
};

// Komponent gwiazdek w tle
const Stars = ({ count = 50 }: { count?: number }) => {
  const stars = Array(count).fill(0);
  
  return (
    <>
      {stars.map((_, index) => {
        const size = Math.random() * 2 + 1;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        
        return (
          <motion.div
            key={`star-${index}`}
            className="absolute rounded-full bg-white"
            style={{
              width: size,
              height: size,
              top: `${top}%`,
              left: `${left}%`,
              boxShadow: "0 0 3px rgba(255, 255, 255, 0.5)"
            }}
            animate={{ 
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              delay,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        );
      })}
    </>
  );
};

const Offer = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Efekt scrollowania dla paralaksy
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transformacje dla efektu paralaksy
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative py-36 overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900 text-white w-screen" 
      id="oferta"
      style={{ 
        margin: "0 calc(50% - 50vw)",
        width: "100vw",
        maxWidth: "100vw"
      }}
    >
      {/* Tło kosmiczne */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <Stars count={100} />
        <Meteor number={15} />
      </div>
      
      {/* Dekoracyjne kręgi */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full border border-white/5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full border border-white/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Główna zawartość */}
      <SectionWrapper>
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-14"
        >
          <div className="w-full lg:w-1/2 space-y-10">
            <OfferHeader />
            <OfferBenefits />
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center lg:pl-8">
            <OfferCard />
          </div>
        </motion.div>
      </SectionWrapper>
      
      {/* Falista końcówka sekcji dla płynnego przejścia */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative w-full h-12 md:h-16 lg:h-20 text-gray-100" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-gray-100 dark:fill-gray-900"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Offer; 