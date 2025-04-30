import { LightAccents } from "./LightAccents.component";
import { DecorativeCircles } from "./DecorativeCircles.component";

export const BackgroundEffects = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 opacity-30">
        <LightAccents count={70} />
      </div>
      <DecorativeCircles />
    </>
  );
}; 