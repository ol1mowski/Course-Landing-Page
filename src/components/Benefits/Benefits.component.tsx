import { BENEFITS } from "../../data/Benefits.data";

import Card from "../UI/Card/Card.component";
import Heading from "../UI/Heading/Heading.component";
import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
const Benefits = () => {
  return (
    <section className="relative top-96">
      <SectionWrapper>
        <Heading>
          Dlatego To jest kurs, który <br /> da Ci{" "}
          <span className="text-primary">przewagę !</span>
        </Heading>
        <section className="flex w-fit h-fit items-center justify-center flex-wrap gap-16">
          {BENEFITS.map((benefit) => (
            <Card key={benefit} text={benefit} type="benefit" />
          ))}
        </section>
        <section className="mt-16">
          <Heading>I wiele wiele więcej !</Heading>
        </section>
      </SectionWrapper>
    </section>
  );
};

export default Benefits;
