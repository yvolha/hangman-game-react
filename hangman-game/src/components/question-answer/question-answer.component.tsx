import "./question-answer.css";
import { useEffect, useState } from "react";
import { IQuestionAnswerProps } from "./question-answer.types";


export const QuestionAnswer = ({currentQuestionAnswerPair, correctlyGuessedLetter}: IQuestionAnswerProps) => {
  const [currentQuestionView, setCurrentQuestionView] = useState<string>(currentQuestionAnswerPair.answer.replace(/./gi, "_ "));
  const [guessedLetters, setGuessedLetters] = useState<string>('');
  const [isPopupShown, setIsPopupShown] = useState<boolean>(false);

  useEffect(() => {
    setGuessedLetters(guessedLetters + correctlyGuessedLetter);
  }, [correctlyGuessedLetter])

  useEffect(() => {
    setCurrentQuestionView(currentQuestionAnswerPair.answer.replace(new RegExp(`[^${guessedLetters}]`, "gi"), "_ "))
  }, [guessedLetters])

  useEffect(() => {
    if (currentQuestionView.toUpperCase() === currentQuestionAnswerPair.answer.toUpperCase()) {

    }
  }, [currentQuestionView])

  return(
    <div>
      <div className="answer">{currentQuestionView}</div>
      <div className="question">{currentQuestionAnswerPair.question}</div>
    </div>
  );
};