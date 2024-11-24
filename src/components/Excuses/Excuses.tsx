import { EXCUSES } from "../../data/Excuses.data";
import Card from "../UI/Card/Card.component";
import Heading from "../UI/Heading/Heading.component";
import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
const Excuses = () => {
  return (
    <SectionWrapper>
      <Heading>
        Myślisz, że <span className="text-red-500">nie dostaniesz</span> <br />
        pracy w IT gdyż:
      </Heading>
      <section className="flex w-fit h-fit items-center justify-center flex-wrap gap-16">
        {EXCUSES.map((excuse) => (
          <Card key={excuse} text={excuse} />
        ))}
      </section>
    </SectionWrapper>
  );
};

export default Excuses;
