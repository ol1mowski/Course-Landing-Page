import { Stars } from "./Stars.component";
import { DecorativeCircles } from "./DecorativeCircles.component";

export const BackgroundEffects = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 opacity-30">
        <Stars count={100} />
      </div>
      <DecorativeCircles />
    </>
  );
}; 