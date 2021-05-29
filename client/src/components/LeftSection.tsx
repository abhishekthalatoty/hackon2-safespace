import React from "react";
import { QuestionCard } from "./QuestionCard";

const QuestionList = ({ questions }) => {
  return (
    <div>
      {questions.map((question) => {
        return <QuestionCard key={question.id} question={question} />;
      })}
    </div>
  );
};

export default QuestionList;
