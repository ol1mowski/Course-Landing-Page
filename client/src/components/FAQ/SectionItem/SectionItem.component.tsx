import { useState } from "react";

import QuestionItem from "../QuestionItem/QuestionItem.component";

type SectionItemProps = {
  title: string;
  questions: Array<{
    id: number;
    question: string;
    answer: string;
  }>;
}

const SectionItem = ({ title, questions }: SectionItemProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="border rounded-lg shadow-blueShadow overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors duration-300"
      >
        <h3 className="text-xl font-semibold text-left">{title}</h3>
        <img
          src={`https://res.cloudinary.com/dbbuav0rj/image/upload/v1732119121/Course-site/${isExpanded ? 'slide-down_vafohn' : 'slide-up_vhn7cx'}.svg`}
          alt={isExpanded ? "Zwiń" : "Rozwiń"}
          className="w-12 sm:w-5 transition-transform duration-300 transform-gpu"
        />
      </button>
      {isExpanded && (
        <div className="border-t">
          {questions.map((question) => (
            <QuestionItem
              key={question.id}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionItem; 