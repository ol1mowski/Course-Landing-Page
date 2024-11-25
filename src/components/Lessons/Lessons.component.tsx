import { COURSE_SECTIONS } from "../../data/Lessons.data";

import Heading from "../UI/Heading/Heading.component";
import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import SectionItem from "./SectionItem/SectionItem.component";

const Lessons = () => {
  return (
    <section className="mt-96 relative top-96 pb-96">
      <SectionWrapper>
        <Heading>Spis lekcji zawartych w <span className="text-primary">kursie</span></Heading>
        <div className="flex flex-col gap-4 w-full max-w-4xl">
          {COURSE_SECTIONS.map((section) => (
            <SectionItem
              key={section.id}
              title={section.title}
              duration={section.duration}
              lessons={section.lessons}
            />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Lessons;
