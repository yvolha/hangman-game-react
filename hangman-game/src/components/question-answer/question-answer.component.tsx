import { useState } from "react";
import questions, { IQuestion } from "../../constants/questions";


export const QuestionAnswer = () => {
  const [currentQuestionAnswerPair, setCurrentQuestionAnswerPair] = useState(getRandomQuestionAnswerPair());
  const [currentQuestionView, setCurrentQuestionView] = useState(currentQuestionAnswerPair.answer.replace(/./g, '_ '));

  function getRandomQuestionAnswerPair (): IQuestion {
    const questionAnswerPairNumber = questions.length;
    const questionAnswerPairIndex = Math.floor(Math.random() * questionAnswerPairNumber);
    console.log(questionAnswerPairIndex);
    return questions[questionAnswerPairIndex];
  };

  return(
    <div>
      <div className="answer">{currentQuestionView}</div>
      <div className="question">{currentQuestionAnswerPair.question}</div>
    </div>
  )
};