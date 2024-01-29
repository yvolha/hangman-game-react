import "./App.css";
import { IncorrectGuessCounter } from "./components/incorrect-guess-counter/incorrect-guess-counter.component";
import { Gallows } from "./components/gallows/gallows.component";
import { QuestionAnswer } from "./components/question-answer/question-answer.component";
import { useEffect, useRef, useState } from "react";
import { Keyboard } from "./components/keyboard/keyboard.component";
import questions, { IQuestion } from "./constants/questions";

function App() {
  const [currentLetter, setCurrentLetter] = useState('');
  const [incorrectGuessNumber, setIncorrectGuessNumber] = useState(0);
  const [correctlyGuessedLetter, setCorrectlyGuessedLetter] = useState("");
  const [currentQuestionAnswerPair, setCurrentQuestionAnswerPair] = useState(getRandomQuestionAnswerPair());

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
    console.log(currentLetter);
    isLetterCorrect ? setCorrectlyGuessedLetter(currentLetter) : setIncorrectGuessNumber(incorrectGuessNumber + 1);
  }, [currentLetter])
 
  function getRandomQuestionAnswerPair (): IQuestion {
    const questionAnswerPairNumber = questions.length;
    const questionAnswerPairIndex = Math.floor(Math.random() * questionAnswerPairNumber);
    return questions[questionAnswerPairIndex];
  }

  function getIsLetterCorrect (letter: string) {
    return currentQuestionAnswerPair.answer.toLowerCase().includes(letter.toLowerCase()) ? true : false;
  }

  return (
    <>
      <Gallows incorrectGuessNumber={incorrectGuessNumber}/>
      <div>
        <QuestionAnswer 
          currentQuestionAnswerPair={currentQuestionAnswerPair}
          correctlyGuessedLetter={correctlyGuessedLetter}
        />
        <IncorrectGuessCounter incorrectGuessNumber={incorrectGuessNumber} />
        <Keyboard handleKeyClick={setCurrentLetter} />
      </div>
    </>
  );
}

export default App;
