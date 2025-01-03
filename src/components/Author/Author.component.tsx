import { motion } from "framer-motion";

import { AUTHOR_DATA } from "../../data/Author.data";
import { useAnimationInView } from "../../hooks/useAnimationInView";
import { containerVariants } from "../../animations/authorAnimations";

import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import AuthorImage from "./AuthorImage/AuthorImage.component";
import AuthorHeader from "./AuthorHeader/AuthorHeader.component";
import AuthorAchievements from "./AuthorAchievements/AuthorAchievements.component";
import AuthorInfo from "./AuthorInfo/AuthorInfo.component";
import AuthorDescription from "./AuthorDescription/AuthorDescription.component";

const Author = () => {

  const { ref, isInView } = useAnimationInView();

  const { image, name, role, experience, description, achievements } = AUTHOR_DATA;

  return (
    <SectionWrapper>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col lg:flex-row gap-12 items-center justify-between"
      >
        <AuthorImage 
          image={image} 
          name={name} 
        />

        <div className="flex flex-col gap-8 lg:w-1/2">
          <AuthorHeader />
          <AuthorInfo
            name={name}
            role={role}
            experience={experience}
          />
          <AuthorDescription description={description} />
          <AuthorAchievements achievements={achievements} />
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Author; 