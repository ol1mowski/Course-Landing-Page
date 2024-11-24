import { HERO_FEATURES } from "../../../data/CourseFeature.data";
import HeroFeature from "../HeroFeature/HeroFeature.component";

const HeroFeatures = () => (
  <section className="flex w-full flex-row flex-wrap gap-5 lg:w-2/3">
    {HERO_FEATURES.map(({ id, text }) => (
      <HeroFeature key={id} text={text} />
    ))}
  </section>
);

export default HeroFeatures; 