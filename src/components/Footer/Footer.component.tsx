import { motion } from "framer-motion";
import { containerVariants } from "../../animations/footerAnimations";
import { FOOTER_SECTIONS } from "../../data/Footer.data";
import { useAnimationInView } from "../../hooks/useAnimationInView";

import FooterBrand from "./FooterBrand/FooterBrand.component";
import FooterSection from "./FooterSection/FooterSection.component";
import FooterCopyright from "./FooterCopyright/FooterCopyright.component";

const Footer = () => {
  const { ref, isInView } = useAnimationInView();

  return (
    <footer className="bg-[#007acc] mt-96 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          <FooterBrand />
          {FOOTER_SECTIONS.map((section, index) => (
            <FooterSection
              key={section.id}
              {...section}
              index={index}
            />
          ))}
        </motion.div>

        <div className="h-px bg-[#fefefe]/20 my-8" />
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
