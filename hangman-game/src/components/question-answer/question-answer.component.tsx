import "./question-answer.css";
import { useEffect, useState } from "react";
import { IQuestionAnswerProps } from "./question-answer.types";
import { Popup } from "../popup/popup.component";


export const QuestionAnswer = ({currentQuestionAnswerPair, correctlyGuessedLetter, func}: IQuestionAnswerProps) => {
  const [currentQuestionView, setCurrentQuestionView] = useState<string>(currentQuestionAnswerPair.answer.replace(/./gi, "_ "));
  const [guessedLetters, setGuessedLetters] = useState<string>("");
  const [isPopupShown, setIsPopupShown] = useState<boolean>(false);

  useEffect(() => {
    setGuessedLetters(guessedLetters + correctlyGuessedLetter);
  }, [correctlyGuessedLetter]);

  useEffect(() => {
    setCurrentQuestionView(currentQuestionAnswerPair.answer.replace(new RegExp(`[^${guessedLetters}]`, "gi"), "_ "));
  }, [guessedLetters]);

  useEffect(() => {
    if (currentQuestionView.toUpperCase() === currentQuestionAnswerPair.answer.toUpperCase()) {
      setIsPopupShown(true);
    }
  }, [currentQuestionView]);

  return(
    <>
      {isPopupShown && <Popup 
        hasWon={true} 
        answer={currentQuestionAnswerPair.answer}
        restartGame={func}
      />}
      <div>
        <div className="answer">{currentQuestionView}</div>
        <div className="question">{currentQuestionAnswerPair.question}</div>
      </div>
    </>
  );
};