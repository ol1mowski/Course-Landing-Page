import Description from "../../UI/Description/Description.component";

type QuestionItemProps = {
  question: string;
  answer: string;
}

const QuestionItem = ({ question, answer }: QuestionItemProps) => (
  <div className="flex flex-col gap-2 py-2 px-4 cursor-pointer hover:bg-gray-50 transition-colors duration-300">
    <Description>{question}</Description>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default QuestionItem; 