import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AUTHOR_DATA } from "../../data/Author.data";

import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import AuthorImage from "./AuthorImage/AuthorImage.component";
import AuthorHeader from "./AuthorHeader/AuthorHeader.component";
import AuthorAchievements from "./AuthorAchievements/AuthorAchievements.component";
import AuthorInfo from "./AuthorInfo/AuthorInfo.component";

const Author = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px"
  });

  return (
    <SectionWrapper>
      <motion.div
        ref={containerRef}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col lg:flex-row gap-12 items-center justify-between"
      >
        <AuthorImage 
          image={AUTHOR_DATA.image} 
          name={AUTHOR_DATA.name} 
        />

        <div className="flex flex-col gap-8 lg:w-1/2">
          <AuthorHeader />
          <AuthorInfo
            name={AUTHOR_DATA.name}
            role={AUTHOR_DATA.role}
            experience={AUTHOR_DATA.experience}
          />
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" }
              }
            }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            {AUTHOR_DATA.description}
          </motion.p>
          <AuthorAchievements achievements={AUTHOR_DATA.achievements} />
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Author; 