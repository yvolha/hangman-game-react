import "./question-answer.css";
import { useState } from "react";
import questions, { IQuestion } from "../../constants/questions";
import { IQuestionAnswerProps } from "./question-answer.types";


export const QuestionAnswer = ({correctlyGuessedLetter}: IQuestionAnswerProps) => {
  const [currentQuestionAnswerPair, setCurrentQuestionAnswerPair] = useState(getRandomQuestionAnswerPair());
  const [currentQuestionView, setCurrentQuestionView] = useState(currentQuestionAnswerPair.answer.replace(/./g, "_ "));

  function getRandomQuestionAnswerPair (): IQuestion {
    const questionAnswerPairNumber = questions.length;
    const questionAnswerPairIndex = Math.floor(Math.random() * questionAnswerPairNumber);
    console.log(questionAnswerPairIndex);
    return questions[questionAnswerPairIndex];
  }

  return(
    <div>
      <div className="answer">{currentQuestionView}</div>
      <div className="question">{currentQuestionAnswerPair.question}</div>
    </div>
  );
};