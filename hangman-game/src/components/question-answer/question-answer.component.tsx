import "./question-answer.css";
import { useEffect, useLayoutEffect, useState } from "react";
import { IQuestionAnswerProps } from "./question-answer.types";


export const QuestionAnswer = ({currentQuestionAnswerPair, correctlyGuessedLetter}: IQuestionAnswerProps) => {
  const [currentQuestionView, setCurrentQuestionView] = useState(currentQuestionAnswerPair.answer.replace(/./gi, "_ "));
  const [guessedLetters, setGuessedLetters] = useState('');

  useLayoutEffect(() => {
    setGuessedLetters(guessedLetters => guessedLetters + correctlyGuessedLetter);
    
    setCurrentQuestionView(currentQuestionAnswerPair.answer.replace(new RegExp("[^" + guessedLetters + "]", "gi"), "_ "))
  }, [correctlyGuessedLetter])

  return(
    <div>
      <div className="answer">{currentQuestionView}</div>
      <div className="question">{currentQuestionAnswerPair.question}</div>
    </div>
  );
};