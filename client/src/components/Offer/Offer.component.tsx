import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import OfferHeader from "./OfferHeader/OfferHeader.component";
import OfferBenefits from "./OfferBenefits/OfferBenefits.component";
import OfferCard from "./OfferCard/OfferCard.component";

const BlueParticles = ({ number = 20 }: { number?: number }) => {
  const particles = new Array(number).fill(null);

  return (
    <>
      {particles.map((_, idx) => (
        <motion.span
          key={`particle-${idx}`}
          className="absolute h-0.5 w-0.5 rounded-full bg-primary shadow-[0_0_0_1px_rgba(0,122,204,0.1)]
                    before:absolute before:top-1/2 before:h-[1px] before:w-[30px] before:translate-y-[-50%] 
                    before:bg-gradient-to-r before:from-primary/20 before:to-transparent before:content-['']"
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
            opacity: 0.1
          }}
          animate={{
            top: ["0vh", "100vh"],
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            duration: Math.random() * 2 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
};

const LightDots = ({ count = 50 }: { count?: number }) => {
  const dots = Array(count).fill(0);

  return (
    <>
      {dots.map((_, index) => {
        const size = Math.random() * 3 + 1;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={`dot-${index}`}
            className="absolute rounded-full bg-primary"
            style={{
              width: size,
              height: size,
              top: `${top}%`,
              left: `${left}%`,
              opacity: 0.05,
              boxShadow: "0 0 4px rgba(0, 122, 204, 0.2)"
            }}
            animate={{
              opacity: [0.03, 0.07, 0.03],
              scale: [1, 1.1, 1]
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

const LightBackground = () => (
  <motion.div
    className="absolute inset-0 -z-20 bg-gradient-to-tr from-white via-blue-50 to-white"
    animate={{
      background: [
        "linear-gradient(to top right, #ffffff, #eff6ff, #ffffff)",
        "linear-gradient(to top right, #eff6ff, #ffffff, #e0f2fe)",
        "linear-gradient(to top right, #e0f2fe, #eff6ff, #ffffff)",
        "linear-gradient(to top right, #ffffff, #e0f2fe, #eff6ff)"
      ]
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear"
    }}
  />
);

const Offer = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  const onVisibilityChange = (inView: boolean) => {
    if (inView) {
      setIsVisible(true);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative py-36 overflow-hidden text-gray-800 w-screen"
      id="oferta"
      style={{
        margin: "0 calc(50% - 50vw)",
        width: "100vw",
        maxWidth: "100vw"
      }}
    >
      <LightBackground />

      <div className="absolute inset-0 -z-10 opacity-30">
        <LightDots count={100} />
        <BlueParticles number={15} />
      </div>

      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full border border-primary/5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
          borderColor: ["rgba(0,122,204,0.05)", "rgba(0,122,204,0.1)", "rgba(0,122,204,0.05)"]
        }}
        transition={{
          rotate: { duration: 120, repeat: Infinity, ease: "linear" },
          scale: { duration: 20, repeat: Infinity, repeatType: "reverse" },
          borderColor: { duration: 8, repeat: Infinity, repeatType: "reverse" }
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full border border-primary/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: -360,
          scale: [1, 0.95, 1],
          borderColor: ["rgba(0,122,204,0.1)", "rgba(0,122,204,0.15)", "rgba(0,122,204,0.1)"]
        }}
        transition={{
          rotate: { duration: 100, repeat: Infinity, ease: "linear" },
          scale: { duration: 15, repeat: Infinity, repeatType: "reverse" },
          borderColor: { duration: 6, repeat: Infinity, repeatType: "reverse" }
        }}
      />

      <SectionWrapper>
        <motion.div
          style={{ y, opacity, scale }}
          className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-14"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="w-full lg:w-1/2 space-y-10"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <OfferHeader />
            <OfferBenefits />
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 flex justify-center items-center lg:pl-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <OfferCard />
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <motion.svg
          className="relative w-full h-12 md:h-16 lg:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          initial={{ opacity: 0.5, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
            animate={{
              d: [
                "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",
                "M1000,90C925,70,850,30,775,15c-85-15-170-15-255,0C450,25,400,45,350,55,200,75,100,65,0,30V120H1200V95C1150,115,1075,110,1000,90Z"
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </motion.svg>
      </div>
    </section>
  );
};

export default Offer; 