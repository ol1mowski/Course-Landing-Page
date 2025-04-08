import { motion } from "framer-motion";
import { useState } from "react";

const BenefitsCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative max-w-4xl w-full overflow-visible"
    >
      <motion.div
        className="bg-gradient-to-r from-primary/95 to-primary/85 p-8 md:p-12 rounded-3xl shadow-xl relative z-10 overflow-hidden"
        animate={{
          boxShadow: isHovered 
            ? "0 30px 60px -12px rgba(0, 122, 204, 0.4), 0 10px 20px -5px rgba(0, 122, 204, 0.3)" 
            : "0 20px 40px -12px rgba(0, 122, 204, 0.3), 0 10px 15px -5px rgba(0, 122, 204, 0.2)"
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div 
            className="absolute -inset-[10px] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.15)_20%,rgba(255,255,255,0.3)_60%,transparent_100%)]"
            animate={{
              x: isHovered ? ['-100%', '100%'] : '-100%'
            }}
            transition={{
              duration: isHovered ? 1.5 : 0,
              ease: "easeInOut",
              repeat: isHovered ? Infinity : 0,
              repeatDelay: 1
            }}
          />
        </div>
        
        <motion.div 
          className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 blur-3xl -z-10"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: isHovered ? [1, 1.2, 1] : [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div 
          className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-white/5 blur-3xl -z-10"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        
        <div className="absolute -right-6 top-0 transform rotate-45 w-32 h-32 opacity-30 -z-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              d="M0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50Z" 
              stroke="rgba(255,255,255,0.2)" 
              strokeWidth="1"
              animate={{ 
                rotate: isHovered ? 360 : 0,
                scale: isHovered ? [1, 1.1, 1] : 1
              }}
              transition={{
                rotate: { duration: 20, ease: "linear", repeat: Infinity },
                scale: { duration: 3, repeat: Infinity, repeatType: "reverse" }
              }}
            />
          </svg>
        </div>
        
        <div className="absolute -left-2 bottom-10 transform -rotate-15 w-24 h-24 opacity-40 -z-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.rect 
              x="10" y="10" width="80" height="80" rx="15" 
              stroke="rgba(255,255,255,0.25)" 
              strokeWidth="1"
              animate={{ 
                rotate: isHovered ? -360 : 0,
                scale: isHovered ? [1, 0.9, 1] : 1
              }}
              transition={{
                rotate: { duration: 25, ease: "linear", repeat: Infinity },
                scale: { duration: 4, repeat: Infinity, repeatType: "reverse" }
              }}
            />
          </svg>
        </div>
        
        <div className="relative z-10 text-center max-w-2xl mx-auto space-y-8">
          <motion.h3 
            className="text-3xl font-bold text-white"
            animate={{ 
              scale: isHovered ? 1.05 : 1,
              textShadow: isHovered ? "0 0 8px rgba(255,255,255,0.4)" : "0 0 0px rgba(255,255,255,0)"
            }}
            transition={{ duration: 0.5 }}
          >
            Wszystko czego potrzebujesz, aby rozpocząć karierę w IT!
          </motion.h3>
          
          <motion.p 
            className="text-white/90 text-lg max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Dołącz do setek absolwentów, którzy zmienili swoje życie zawodowe dzięki naszemu kursowi i przekonaj się, jakie możliwości otworzą się przed Tobą!
          </motion.p>
          
          <motion.div
            className="pt-4 flex flex-col sm:flex-row gap-5 justify-center items-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#007ACC",
                boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15)"
              }}
              className="bg-white text-primary font-semibold rounded-full px-8 py-4 min-w-[180px] transition-all duration-300 transform-gpu"
            >
              Zapisz się teraz
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.15)",
                boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15)"
              }}
              className="bg-white/10 backdrop-blur-sm text-white border border-white/30 font-medium rounded-full px-8 py-4 min-w-[180px] transition-all duration-300 transform-gpu"
            >
              Pobierz program
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute top-0 -translate-y-1/2 left-1/4 w-10 h-10 rounded-full bg-primary/40 backdrop-blur-sm flex items-center justify-center text-white text-sm font-semibold z-20 border border-white/20"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ 
          delay: 0.2, 
          type: "spring",
          stiffness: 200,
          damping: 10
        }}
        whileHover={{ y: -5, scale: 1.1 }}
      >
        <span>+24h</span>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-0 translate-y-1/3 right-1/4 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-primary font-semibold z-20"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ 
          delay: 0.4, 
          type: "spring",
          stiffness: 200,
          damping: 10
        }}
        whileHover={{ y: 5, scale: 1.1 }}
      >
        <span className="text-sm">START</span>
      </motion.div>
    </motion.div>
  );
};

export default BenefitsCTA; 