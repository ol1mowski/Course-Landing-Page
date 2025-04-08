import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useAnimationInView } from "../../hooks/useAnimationInView";

import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import DescriptionHeader from "./DescriptionHeader/DescriptionHeader.component";
import FeaturesList from "./FeaturesList/FeaturesList.component";

const CourseDescription = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const cardScale = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.8, 1, 1, 0.9]);
  
  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30 -z-10"></div>
      
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl -z-10"></div>
      
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            style={{ y: headerY, opacity: headerOpacity }}
            className="mb-20"
            id="co-otrzymasz"
          >
            <DescriptionHeader />
          </motion.div>
          
          <motion.div
            style={{ scale: cardScale }}
            className="relative z-10 perspective-1000"
          >
            <FeaturesList />
          </motion.div>
          
          <motion.div 
            className="mt-16 w-24 h-1 bg-primary/50 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </SectionWrapper>
    </section>
  );
};

export default CourseDescription;
