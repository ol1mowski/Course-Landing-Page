import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { OFFER_BENEFITS } from "../../data/Offer.data";
import SectionWrapper from "../UI/SectionWrapper/SectionWrapper.component";
import Heading from "../UI/Heading/Heading.component";
import OfferCard from "./OfferCard/OfferCard.component";
import OfferBenefit from "./OfferBenefit/OfferBenefit.component";

const Offer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px"
  });

  return (
    <section className="relative py-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 -z-10" />
      
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
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Benefits column */}
          <div className="flex-1 space-y-4">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Heading>
                Dołącz do <span className="text-primary">kursu</span>
              </Heading>
              <p className="mt-6 text-xl text-gray-600">
                Zainwestuj w swoją przyszłość i rozpocznij karierę w IT
              </p>
            </motion.div>

            <div className="space-y-4 mt-8">
              {OFFER_BENEFITS.map((benefit, index) => (
                <OfferBenefit
                  key={benefit.id}
                  {...benefit}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Offer card */}
          <div className="flex-1 flex justify-center">
            <OfferCard />
          </div>
        </motion.div>
      </SectionWrapper>
    </section>
  );
};

export default Offer; 