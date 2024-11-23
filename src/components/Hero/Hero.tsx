import { memo } from "react";
import HeroContent from "./HeroContent/HeroContent.component";
import HeroFeatures from "./HeroFeatures/HeroFeatures.component";

const Hero = () => {
  return (
    <main className="flex h-screen flex-col xl:pl-32 gap-20 items-end justify-self-start mt-20 md:mt-32 md:items-start">
      <img
        src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732108538/Course-site/circle_ml7st7.svg"
        alt="circle icon"
        className="hidden xl:block lg:absolute top-0 right-0 z-[-10]"
      />
      <HeroContent />
      <HeroFeatures />
    </main>
  );
};

export default memo(Hero);
