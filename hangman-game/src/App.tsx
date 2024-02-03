import "./App.css";
import { useEffect, useRef, useState } from "react";
import { MouseEvent } from "react";
import { IncorrectGuessCounter } from "./components/incorrect-guess-counter/incorrect-guess-counter.component";
import { Gallows } from "./components/gallows/gallows.component";
import { QuestionAnswer } from "./components/question-answer/question-answer.component";
import { Keyboard } from "./components/keyboard/keyboard.component";
import questions, { IQuestion } from "./constants/questions";
import incorrectGuessNumberAllowed from "./constants/incorrect-guess-number-allowed";
import { Popup } from "./components/popup/popup.component";

function App() {
  const [currentLetter, setCurrentLetter] = useState("");
  const [incorrectGuessNumber, setIncorrectGuessNumber] = useState(0);
  const [correctlyGuessedLetter, setCorrectlyGuessedLetter] = useState("");
  const [currentQuestionAnswerPair, setCurrentQuestionAnswerPair] = useState(getRandomQuestionAnswerPair());
  const [isPopupShown, setIsPopupShown] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setCurrentLetter(event.key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    
    const isLetterCorrect = getIsLetterCorrect(currentLetter);
    if (isLetterCorrect) {
      setCorrectlyGuessedLetter(currentLetter);
    } else {
      setIncorrectGuessNumber(incorrectGuessNumber + 1);
    } 
  }, [currentLetter]);

  useEffect(() => {
    if (incorrectGuessNumber >= incorrectGuessNumberAllowed){
      setIsPopupShown(true);
    }
  }, [incorrectGuessNumber]);
 
  function getRandomQuestionAnswerPair (): IQuestion {
    const questionAnswerPairNumber = questions.length;
    const questionAnswerPairIndex = Math.floor(Math.random() * questionAnswerPairNumber);
    return questions[questionAnswerPairIndex];
  }

  function getIsLetterCorrect (letter: string) {
    return currentQuestionAnswerPair.answer.toLowerCase().includes(letter.toLowerCase()) ? true : false;
  }

  function updateCurrentQuestionAnswerPair() {
    setCurrentQuestionAnswerPair(getRandomQuestionAnswerPair());
  }

  function closePopup(e: MouseEvent){
    if (e.target === e.currentTarget) {
      setIsPopupShown(false);
    }
  }

  function restartGame(){
    console.log("restarting");
    setIncorrectGuessNumber(0);
    setCorrectlyGuessedLetter('');
    setIsPopupShown(false);
    updateCurrentQuestionAnswerPair();
  }

  return (
    <>
      {isPopupShown && <Popup 
        hasWon={false} 
        answer={currentQuestionAnswerPair.answer} 
        closePopup={closePopup} 
        restartGame={restartGame}/>}
      <Gallows incorrectGuessNumber={incorrectGuessNumber}/>
      <div>
        <QuestionAnswer 
          currentQuestionAnswerPair={currentQuestionAnswerPair}
          correctlyGuessedLetter={correctlyGuessedLetter}
          func={restartGame}
        />
        <IncorrectGuessCounter incorrectGuessNumber={incorrectGuessNumber} />
        <Keyboard handleKeyClick={setCurrentLetter} />
      </div>
    </>
  );
}

export default App;
