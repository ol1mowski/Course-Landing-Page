import { motion } from "framer-motion";
import { tableVariants } from "../../../animations/comparisonAnimations";
import { COURSE_COMPARISON_DATA } from "../../../data/CourseComparison.data";

import ComparisonRow from "./ComparisonRow.component";

const ComparisonTable = () => (
  <motion.div
    variants={tableVariants}
    className="w-full max-w-4xl overflow-x-auto"
  >
    <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
      <thead>
        <tr className="bg-gray-50">
          <th className="p-6 text-left border-b">Cechy</th>
          <th className="p-6 text-center border-b">
            <div className="flex flex-col items-center gap-2">
              <img
                src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732100151/Course-site/site-logo_oyzuwi.svg"
                alt="Kariera W IT Logo"
                className="h-8"
              />
            </div>
          </th>
          <th className="p-6 text-center border-b">
            <span className="text-gray-600 font-bold">Inne kursy</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {COURSE_COMPARISON_DATA.features.map((feature, index) => (
          <ComparisonRow
            key={feature.id}
            {...feature}
            index={index}
          />
        ))}
      </tbody>
    </table>
  </motion.div>
);

export default ComparisonTable; 