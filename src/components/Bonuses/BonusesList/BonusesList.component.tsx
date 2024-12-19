import { motion } from "framer-motion";
import { BONUSES } from "../../../data/Bonuses.data";
import BonusItem from "../BonusItem/BonusItem.component";

const BonusesList = () => (
  <div className="w-full max-w-7xl">
    {BONUSES.map((bonus, index) => (
      <BonusItem
        key={bonus.id}
        {...bonus}
        isReversed={index % 2 !== 0}
      />
    ))}
  </div>
);

export default BonusesList; 