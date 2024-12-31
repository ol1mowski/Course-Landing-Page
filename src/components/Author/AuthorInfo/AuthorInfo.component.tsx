import { motion } from "framer-motion";

import type { AuthorInfoProps } from "../types/Author.types";

const AuthorInfo = ({ name, role, experience }: AuthorInfoProps) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
      }
    }}
    className="flex flex-col gap-2"
  >
    <h3 className="text-2xl font-bold">{name}</h3>
    <p className="text-xl text-primary">{role}</p>
    <p className="text-gray-600">{experience}</p>
  </motion.div>
);

export default AuthorInfo; 