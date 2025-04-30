import { motion } from "framer-motion";
import { rowVariants } from "../../../animations/comparisonAnimations";

type ComparisonRowProps = {
  name: string;
  hasFeature: boolean;
  otherCourses: boolean;
  index: number;
};

const ComparisonRow = ({ name, hasFeature, otherCourses, index }: ComparisonRowProps) => (
  <motion.tr
    custom={index}
    variants={rowVariants}
    className="border-b last:border-b-0 hover:bg-gray-50 transition-colors"
  >
    <td className="p-6 font-medium">{name}</td>
    <td className="p-6 text-center">
      {hasFeature ? (
        <span className="text-green-500 text-2xl">✓</span>
      ) : (
        <span className="text-red-500 text-2xl">✕</span>
      )}
    </td>
    <td className="p-6 text-center">
      {otherCourses ? (
        <span className="text-green-500 text-2xl">✓</span>
      ) : (
        <span className="text-red-500 text-2xl">✕</span>
      )}
    </td>
  </motion.tr>
);

export default ComparisonRow; 