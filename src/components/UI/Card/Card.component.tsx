import { motion } from "framer-motion";

type CardProps = {
  text: string;
  type: "excuse" | "target";
};

const Card = ({ text, type }: CardProps) => {
  const cardStyles = {
    excuse: "bg-white hover:shadow-cardBoxExcusesShadowHover",
    target: "bg-white hover:shadow-cardBoxTargetShadowHover"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`
        ${cardStyles[type]}
        w-[300px] h-[150px]
        flex items-center justify-center
        p-8 rounded-xl shadow-lg
        transition-all duration-300
        cursor-pointer
      `}
    >
      <span className="text-center text-xl font-medium">{text}</span>
    </motion.div>
  );
};

export default Card;