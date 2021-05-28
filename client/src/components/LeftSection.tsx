import React from "react";
import { QuestionCard } from "./QuestionCard";

const questions = [
  {
    body: "what is ur age 10 years back, plz tell me",
    questionId: "1",
    date: "12/05/21",
    displayName: "prateek",
  },
  {
    body: "Is mental health really required?",
    questionId: "2",
    date: "20/05/21",
    displayName: "Sanjay",
  },
  {
    body: "what is the necesity of having religion?",
    questionId: "3",
    date: "28/05/21",
    ndisplayNameame: "Abhishek",
  },
  {
    body: "what is ur age 10 years back, plz tell me",
    questionId: "1",
    date: "12/05/21",
    displayName: "prateek",
  },
  {
    body: "Is mental health really required?",
    questionId: "2",
    date: "20/05/21",
    displayName: "Sanjay",
  },
  {
    body: "what is the necesity of having religion?",
    questionId: "3",
    date: "28/05/21",
    displayName: "Abhishek",
  },
];

const LeftSection = () => {
  return (
    <div>
      {questions.map((question) => {
        return <QuestionCard question={question} />;
      })}
    </div>
  );
};

export default LeftSection;
