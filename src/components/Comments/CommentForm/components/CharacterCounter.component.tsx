import { memo } from "react";

type CharacterCounterProps = {
  current: number;
  max: number;
};

export const CharacterCounter = memo(({ current, max }: CharacterCounterProps) => (
  <div className="absolute bottom-2 right-2 text-sm text-gray-500">
    {current}/{max}
  </div>
)); 