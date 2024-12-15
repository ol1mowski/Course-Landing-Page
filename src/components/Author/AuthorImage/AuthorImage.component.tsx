import { motion } from "framer-motion";
import { itemVariants } from "../../../animations/authorAnimations";

type AuthorImageProps = {
  image: string;
  name: string;
};

const AuthorImage = ({ image, name }: AuthorImageProps) => (
  <motion.div 
    variants={itemVariants}
    className="relative w-72 h-72 lg:w-96 lg:h-96"
  >
    <div className="absolute inset-0 bg-primary/10 rounded-full -z-10 translate-x-4 translate-y-4" />
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover rounded-full shadow-2xl"
    />
  </motion.div>
);

export default AuthorImage; 