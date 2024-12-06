import { memo } from 'react';

type HeroFeatureProps = {
  text: string;
};

const HeroFeature = ({ text }: HeroFeatureProps) => (
  <div className="flex gap-3 items-center">
    <img
      src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732119121/Course-site/check_xddkrs.svg"
      alt="check icon"
      className="w-7 h-7"
    />
    <span className="text-md">{text}</span>
  </div>
);

export default memo(HeroFeature); 