import { FAQ_SECTIONS } from "../../data/FAQ.data";

import Heading from "../UI/Heading/Heading.component";
import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import SectionItem from "./SectionItem/SectionItem.component";

const FAQ = () => {
  return (
    <section id="faq">
      <SectionWrapper>
        <Heading>
          Często zadawane <span className="text-primary">pytania</span>
        </Heading>
        <div className="flex flex-col gap-4 w-full max-w-4xl">
          {FAQ_SECTIONS.map((section) => (
            <SectionItem
              key={section.id}
              title={section.title}
              questions={section.questions}
            />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default FAQ;
