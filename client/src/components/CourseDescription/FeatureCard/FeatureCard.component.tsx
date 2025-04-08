import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  index: number;
};

const FeatureCard = ({ title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [45, -45]);
  const rotateY = useTransform(x, [-100, 100], [-45, 45]);

  const springConfig = { damping: 20, stiffness: 250 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = (e.clientX - centerX) * 1.5;
    const mouseY = (e.clientY - centerY) * 1.5;
    
    x.set(mouseX);
    y.set(mouseY);
  }

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: 25,
      scale: 0.85
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        delay: index * 0.1, 
        ease: [0.22, 1, 0.36, 1]
      }
    },
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.3,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 500
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      }}
      className="relative p-6 rounded-2xl bg-white shadow-lg border border-gray-100 overflow-hidden group transition-all duration-300 hover:shadow-xl"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-50/15 to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          zIndex: -1
        }}
      />

      <div className="relative flex flex-col items-center gap-5 z-10">
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          className="w-16 h-16 rounded-full flex items-center justify-center bg-primary/10"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(50px)",
          }}
        >
          <span className="text-primary text-xl font-bold">
            {String(index + 1).padStart(2, '0')}
          </span>
        </motion.div>

        <h3 
          className="text-xl font-bold text-center text-gray-800"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(35px)",
          }}
        >
          {title}
        </h3>

        <p 
          className="text-gray-600 text-center"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(20px)",
          }}
        >
          {description}
        </p>

      </div>
    </motion.div>
  );
};

export default FeatureCard; 