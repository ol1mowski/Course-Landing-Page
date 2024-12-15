import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BONUSES } from "../../data/Bonuses.data";

import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import Heading from "../UI/Heading/Heading.component";
import BonusItem from "./BonusItem/BonusItem.component";

const Bonuses = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px"
  });

  return (
    <SectionWrapper>
      <motion.div
        ref={containerRef}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
        id="bonus"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center gap-16"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-center"
        >
          <Heading>
            Co otrzymasz <span className="text-primary">gratis?</span>
          </Heading>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Dołączając do kursu otrzymasz dodatkowe bonusy, które pomogą Ci w nauce
          </p>
        </motion.div>

        <div className="w-full max-w-7xl">
          {BONUSES.map((bonus, index) => (
            <BonusItem
              key={bonus.id}
              {...bonus}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Bonuses; 