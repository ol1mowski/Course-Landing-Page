import { motion } from "framer-motion";

type CardProps = {
  text: string;
  type: "excuse" | "target";
  isActive?: boolean;
  customStyle?: string;
};

const Card = ({ text, type, isActive = false, customStyle = "" }: CardProps) => {
  const cardStyles = {
    excuse: `bg-white ${
      isActive 
        ? "shadow-cardBoxExcusesShadowHover border-red-300" 
        : "hover:shadow-cardBoxExcusesShadowHover"
    }`,
    target: `bg-white ${
      isActive 
        ? "shadow-cardBoxTargetShadowHover border-primary" 
        : "hover:shadow-cardBoxTargetShadowHover"
    }`
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`
        ${cardStyles[type]}
        w-full h-[150px]
        flex items-center justify-center
        p-8 rounded-xl shadow-lg
        transition-all duration-300
        cursor-pointer
        ${isActive ? "border-2" : "border border-gray-100"}
        transform transition-transform
        ${customStyle}
      `}
    >
      <span className={`text-center text-xl font-medium ${isActive ? "text-primary" : ""}`}>{text}</span>
    </motion.div>
  );
};

export default Card;