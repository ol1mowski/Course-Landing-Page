import { motion } from "framer-motion";
import { itemWithDelayVariants } from "../../../animations/commonAnimations";

type FooterSectionProps = {
  title: string;
  links: Array<{
    id: number;
    text: string;
    href: string;
  }>;
  index: number;
};

const FooterSection = ({ title, links, index }: FooterSectionProps) => (
  <motion.section 
    variants={itemWithDelayVariants}
    custom={index + 1}
    className="flex flex-col gap-4"
  >
    <h3 className="text-lg font-semibold text-[#fefefe]">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            className="text-[#fefefe]/80 hover:text-[#fefefe] transition-colors duration-300"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </motion.section>
);

export default FooterSection; 