import "./question-answer.css";
import { useState } from "react";
import { IQuestionAnswerProps } from "./question-answer.types";


export const QuestionAnswer = ({currentQuestionAnswerPair, correctlyGuessedLetter}: IQuestionAnswerProps) => {
  const [currentQuestionView, setCurrentQuestionView] = useState(currentQuestionAnswerPair.answer.replace(/./g, "_ "));



  return(
    <div>
      <div className="answer">{currentQuestionView}</div>
      <div className="question">{currentQuestionAnswerPair.question}</div>
    </div>
  );
};