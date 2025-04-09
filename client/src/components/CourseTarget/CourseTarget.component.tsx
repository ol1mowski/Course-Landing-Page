import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { COURSE_TARGET } from "../../data/CourseTarget.data";
import TargetHeader from "./TargetHeader/TargetHeader.component";

// Komponent karty celu - nowy design z interaktywnym UI
const TargetCard = ({ 
  text, 
  index, 
  angle, 
  isActive, 
  onSelect 
}: { 
  text: string; 
  index: number; 
  angle: number;
  isActive: boolean;
  onSelect: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Kolory tła gradientowego
  const getGradient = () => {
    const gradients = [
      "from-blue-500/90 to-indigo-600/90",
      "from-teal-500/90 to-emerald-600/90",
      "from-amber-500/90 to-orange-600/90",
      "from-rose-500/90 to-pink-600/90",
      "from-purple-500/90 to-violet-600/90",
      "from-cyan-500/90 to-blue-600/90",
    ];
    return gradients[index % gradients.length];
  };
  
  // Ikony dla każdej karty
  const getIcon = () => {
    const icons = [
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
        <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
        <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
      </svg>,
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
      </svg>,
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
        <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
        <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
      </svg>,
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
        <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
      </svg>,
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z" clipRule="evenodd" />
      </svg>,
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clipRule="evenodd" />
      </svg>
    ];
    return icons[index % icons.length];
  };

  // Stan aktywnej karty wpływa na wygląd
  const cardState = isActive 
    ? "z-20 scale-110 shadow-xl" 
    : `shadow-lg ${isHovered ? "z-10 scale-105" : ""}`;

  return (
    <motion.div
      className={`absolute transform transition-all duration-300 ${cardState}`}
      style={{
        transformOrigin: "center center",
        rotate: `${angle}deg`,
        translate: isActive ? "0 -100px" : "0 0",
      }}
      initial={{ 
        opacity: 0,
        rotate: angle - 20,
      }}
      animate={{ 
        opacity: 1,
        rotate: angle,
        transition: { duration: 0.7, delay: index * 0.1 }
      }}
      whileHover={{ scale: isActive ? 1.1 : 1.05 }}
      onClick={onSelect}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className={`w-64 h-auto p-0.5 rounded-2xl bg-gradient-to-br ${getGradient()}`}
        animate={{ 
          boxShadow: isActive || isHovered
            ? "0 20px 40px rgba(0, 0, 0, 0.2)" 
            : "0 10px 20px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div className="h-full px-5 py-7 bg-white rounded-[12px] transform transition-all duration-300 relative overflow-hidden flex flex-col items-center justify-between">
          {/* Ikona */}
          <div className={`mb-3 p-3 rounded-lg text-white bg-gradient-to-br ${getGradient()}`}>
            {getIcon()}
          </div>
          
          {/* Tekst */}
          <p className="text-center text-base font-medium mb-2">{text}</p>
          
          {/* Podkreślenie */}
          <motion.div 
            className="h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: isActive || isHovered ? "80%" : "40%" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Komponent planety centralnej
const CentralPlanet = () => {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      <motion.div 
        className="absolute w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-blue-600/20"
        animate={{ 
          boxShadow: [
            "0 0 20px rgba(0, 122, 204, 0.3)",
            "0 0 30px rgba(0, 122, 204, 0.5)",
            "0 0 20px rgba(0, 122, 204, 0.3)"
          ]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute w-[70%] h-[70%] rounded-full bg-gradient-to-br from-primary/40 to-blue-500/30"
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      
      <motion.div 
        className="absolute w-[40%] h-[40%] rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
          <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
      </motion.div>
    </div>
  );
};

// Komponent gwiazd w tle
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

const CourseTarget = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  
  // Efekt scrollowania dla paralaksy
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transformacje dla efektu paralaksy
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Obliczanie kątów dla kart w orbitacji
  const calculateAngles = (count: number) => {
    const baseAngle = 360 / count;
    return Array(count).fill(0).map((_, i) => baseAngle * i);
  };
  
  const angles = calculateAngles(COURSE_TARGET.length);
  
  return (
    <section 
      ref={containerRef} 
      className="relative py-32 md:py-48 overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900 text-white" 
      id="dla-kogo"
    >
      {/* Tło kosmiczne */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <Stars count={100} />
      </div>
      
      {/* Główna zawartość */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          style={{ y, opacity }}
          className="flex flex-col items-center justify-center"
        >
          {/* Nagłówek */}
          <div className="text-center relative mb-24">
            <TargetHeader />
            
            {/* Podkreślenie nagłówka */}
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-primary/30 via-primary to-primary/30 rounded-full mx-auto mt-6"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "5rem", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>
          
          {/* Układ orbitalny */}
          <div className="hidden md:flex relative h-[600px] w-full items-center justify-center mt-10">
            {/* Orbity */}
            <motion.div 
              className="absolute w-[500px] h-[500px] rounded-full border border-white/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute w-[380px] h-[380px] rounded-full border border-white/5"
              animate={{ rotate: -360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Centralna planeta */}
            <div className="absolute z-20">
              <CentralPlanet />
            </div>
            
            {/* Karty w orbitacji */}
            {COURSE_TARGET.map((target, index) => (
              <TargetCard 
                key={`orbital-${target}`}
                text={target}
                index={index}
                angle={angles[index]}
                isActive={activeCardIndex === index}
                onSelect={() => setActiveCardIndex(activeCardIndex === index ? null : index)}
              />
            ))}
          </div>
          
          {/* Układ mobilny (widoczny tylko na małych ekranach) */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
            {COURSE_TARGET.map((target, index) => (
              <motion.div 
                key={`mobile-${target}`}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className={`p-0.5 rounded-xl bg-gradient-to-br ${
                  index % 2 === 0 ? "from-blue-500/80 to-indigo-600/80" : "from-purple-500/80 to-pink-600/80"
                }`}>
                  <div className="px-5 py-6 bg-gray-800/90 backdrop-blur-sm rounded-[10px] relative overflow-hidden flex flex-col items-center justify-center">
                    <div className={`mb-3 p-3 rounded-lg text-white bg-gradient-to-br ${
                      index % 2 === 0 ? "from-blue-500 to-indigo-600" : "from-purple-500 to-pink-600"
                    }`}>
                      {index % 2 === 0 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                        </svg>
                      )}
                    </div>
                    
                    <p className="text-center text-base font-medium mb-2 text-white">{target}</p>
                    
                    <div className="h-0.5 w-2/5 bg-gradient-to-r from-transparent via-white/60 to-transparent mt-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseTarget; 