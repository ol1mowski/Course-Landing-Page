import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Button from "../../UI/Button/Button.component";
import { OFFER_DETAILS } from "../../../data/Offer.data";
import { Link } from "react-router-dom";
import { ArrowRight, CornerDownRight, CheckCircle2, Sparkles } from "lucide-react";

// Komponent latających gwiazdek
const FloatingStars = () => {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 rounded-full bg-yellow-300"
          initial={{ 
            x: 0, 
            y: 0, 
            scale: 0.2, 
            opacity: 0 
          }}
          animate={{ 
            x: [0, (Math.random() - 0.5) * 80], 
            y: [0, (Math.random() - 0.5) * 80], 
            scale: [0.2, 1.2, 0.2], 
            opacity: [0, 1, 0] 
          }}
          transition={{ 
            duration: 2 + Math.random() * 3, 
            repeat: Infinity, 
            delay: i * 0.4, 
            ease: "easeInOut" 
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 4px 1px rgba(250, 204, 21, 0.4)",
          }}
        />
      ))}
    </>
  );
};

const OfferCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Wartości dla efektu 3D
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [7, -7]);
  const rotateY = useTransform(x, [-100, 100], [-7, 7]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div 
      className="relative perspective-1000 mx-auto max-w-md w-full pt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
    >
      {/* Ozdobne elementy wokół karty */}
      <motion.div
        className="absolute -top-10 -right-8 w-24 h-24 border border-blue-300/20 rounded-full"
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, repeatType: "reverse" },
        }}
      />
      
      <motion.div
        className="absolute -bottom-5 -left-5 w-16 h-16 border border-purple-300/20 rounded-full"
        animate={{ 
          rotate: -360,
          scale: [1, 1.08, 1],
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, repeatType: "reverse" },
        }}
      />
      
      {/* Główna karta */}
      <motion.div
        ref={cardRef}
        className="relative overflow-hidden bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-lg 
                   rounded-2xl border border-gray-700 shadow-[0_0_50px_rgba(59,130,246,0.3)]"
        style={{ 
          transformStyle: "preserve-3d",
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {/* Efekt blasku przy hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent"
          animate={{ opacity: isHovered ? 0.5 : 0.2 }}
        />
        
        {/* Wzorki tła */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-56 h-56 bg-primary/20 rounded-full filter blur-3xl transform translate-x-20 -translate-y-20" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-700/20 rounded-full filter blur-3xl transform -translate-x-16 translate-y-16" />
        </div>
        
        {/* Zawartość karty */}
        <div className="relative p-8 flex flex-col items-center text-center z-10">
          {/* Logo z efektem blasku */}
          <motion.div 
            className="relative mb-8"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            <motion.div 
              className="absolute -inset-1 rounded-full bg-primary/40 blur-lg"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <img
              src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732100151/Course-site/site-logo_oyzuwi.svg"
              alt="Logo"
              className="relative h-16"
            />
            
            <FloatingStars />
          </motion.div>

          {/* Sekcja ceny */}
          <motion.section 
            className="space-y-6 mb-10 relative"
            style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
          >
            {/* Rabat */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gray-400 text-2xl line-through">
                {OFFER_DETAILS.regularPrice} {OFFER_DETAILS.currency}
              </span>
              
              <motion.div 
                className="absolute -right-12 -top-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm px-3 py-1 rounded-full transform rotate-12"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [12, 14, 12], 
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <motion.span className="inline-flex items-center">
                  -25%
                  <Sparkles className="ml-1 h-3 w-3" />
                </motion.span>
              </motion.div>
            </motion.div>
            
            {/* Aktualna cena */}
            <motion.div 
              className="text-4xl font-bold bg-gradient-to-r from-primary via-blue-400 to-primary text-transparent bg-clip-text"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              {OFFER_DETAILS.promoPrice} {OFFER_DETAILS.currency}
            </motion.div>
            
            {/* Darmowe aktualizacje */}
            <motion.div 
              className="flex items-center justify-center gap-1 text-sm text-gray-400 mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <CheckCircle2 className="text-green-500 h-4 w-4" />
              <span>Darmowe aktualizacje w przyszłości</span>
            </motion.div>
          </motion.section>

          {/* Przyciski akcji */}
          <motion.div 
            className="space-y-4 w-full"
            whileHover={{ scale: 1.01 }}
          >
            <Link to="/platnosc" className="block w-full">
              <Button className="w-full py-3 text-lg group">
                <span>Dołącz do kursu</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0.5 }}
                  className="ml-2"
                >
                  <ArrowRight className="inline h-5 w-5" />
                </motion.div>
              </Button>
            </Link>
            
            <motion.div 
              className="flex items-center justify-center gap-2 text-sm text-gray-400/90 mt-6"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <CornerDownRight className="h-4 w-4" />
              <span>Jednorazowa płatność, dożywotni dostęp</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OfferCard;
