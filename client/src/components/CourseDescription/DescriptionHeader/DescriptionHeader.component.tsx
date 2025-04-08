import { motion } from "framer-motion";
import { COURSE_DESCRIPTION_DATA } from "../../../data/CourseDescription.data";
import Heading from "../../UI/Heading/Heading.component";

const DescriptionHeader = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  
  const textRevealVariants = {
    hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
    visible: { 
      opacity: 1, 
      clipPath: "inset(0 0% 0 0)",
      transition: { 
        duration: 1,
        ease: [0.17, 0.67, 0.83, 0.67],
        delay: 0.3
      }
    }
  };
  
  const decorationVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.8,
        ease: "easeOut" 
      }
    }
  };
  
  return (
    <div className="relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div 
          variants={headingVariants}
          className="mb-6"
        >
          <Heading>
            W tym <motion.span
              initial={{ color: "#1F2937" }}
              animate={{ color: "#007ACC" }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
              className="relative inline-block"
            >
              kursie
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-1 bg-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </motion.span> nauczysz się:
          </Heading>
        </motion.div>
        
        <motion.div 
          className="relative"
          variants={textRevealVariants}
        >
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {COURSE_DESCRIPTION_DATA.mainDescription}
          </p>
          
          <motion.div 
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full origin-center"
            variants={decorationVariants}
          />
        </motion.div>
      </motion.div>
      
      {/* Dekoracyjne elementy */}
      <motion.div 
        className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-blue-100 opacity-30 blur-xl"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      
      <motion.div 
        className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-primary/10 opacity-40 blur-xl"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </div>
  );
};

export default DescriptionHeader; 