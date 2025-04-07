import { motion } from "framer-motion";
import { itemVariants } from "../../../animations/authorAnimations";
import type { AuthorDescriptionProps } from "../types/Author.types";

const AuthorDescription = ({ description }: AuthorDescriptionProps) => (
  <motion.p 
    variants={itemVariants}
    className="text-gray-600 text-lg leading-relaxed"
  >
    {description}
  </motion.p>
);

export default AuthorDescription; 