import { motion } from "framer-motion";
import Heading from "../../UI/Heading/Heading.component";

const BenefitsHeader = () => {
  const titleWords = ["Ten", "kurs", "to:"];
  
  const highlightGradient = "bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent";
  
  return (
    <div className="flex flex-col items-center relative overflow-hidden px-4">
      <div className="absolute inset-0 -z-10 opacity-10">
        <motion.div 
          className="absolute w-[400px] h-[400px] rounded-full border-2 border-primary/30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-[300px] h-[300px] rounded-full border border-primary/20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1.1, 1, 1.1], rotate: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-[200px] h-[200px] rounded-full border border-primary/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="text-center max-w-3xl mx-auto relative z-10 mb-3">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Heading>
            <div className="inline-flex flex-wrap items-center justify-center text-center gap-x-3 leading-tight">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ 
                    delay: i * 0.1, 
                    duration: 0.5,
                    ease: [0.23, 1, 0.32, 1] 
                  }}
                  viewport={{ once: true }}
                  className={i === 1 ? highlightGradient : "relative"}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </Heading>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Odkryj wyjątkowe korzyści, które przyspieszą Twoją karierę w branży IT
            i dadzą Ci przewagę nad konkurencją
          </p>
          
          <motion.div 
            className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent w-40"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "160px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 0.6
        }}
        viewport={{ once: true }}
        className="mt-10 mb-3 relative"
      >
        <div className="flex items-center justify-center gap-x-10 sm:gap-x-16 gap-y-5 flex-wrap">
          <div className="text-center">
            <span className={`block text-4xl font-bold ${highlightGradient}`}>4+</span>
            <span className="text-gray-600 text-sm">Kluczowe korzyści</span>
          </div>
          
          <div className="h-10 w-px bg-gray-200 hidden sm:block" />
          
          <div className="text-center">
            <span className={`block text-4xl font-bold ${highlightGradient}`}>100%</span>
            <span className="text-gray-600 text-sm">Praktyczna wiedza</span>
          </div>
          
          <div className="h-10 w-px bg-gray-200 hidden sm:block" />
          
          <div className="text-center">
            <span className={`block text-4xl font-bold ${highlightGradient}`}>24/7</span>
            <span className="text-gray-600 text-sm">Wsparcie mentora</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BenefitsHeader; 