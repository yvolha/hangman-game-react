import "./App.css";
import { IncorrectGuessCounter } from "./components/incorrect-guess-counter/incorrect-guess-counter.component";
import { Gallows } from "./components/gallows/gallows.component";
import { QuestionAnswer } from "./components/question-answer/question-answer.component";
import { useEffect, useState } from "react";
import { Keyboard } from "./components/keyboard/keyboard.component";
import questions, { IQuestion } from "./constants/questions";

function App() {
  const [incorrectGuessNumber, setIncorrectGuessNumber] = useState(0);
  const [correctlyGuessedLetter, setCorrectlyGuessedLetter] = useState("");
  const [currentQuestionAnswerPair, setCurrentQuestionAnswerPair] = useState(getRandomQuestionAnswerPair());

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      handleChosenLetter(event.key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleChosenLetter(letter: string) {
    console.log(letter);
  }
 
  function getRandomQuestionAnswerPair (): IQuestion {
    const questionAnswerPairNumber = questions.length;
    const questionAnswerPairIndex = Math.floor(Math.random() * questionAnswerPairNumber);
    console.log(questionAnswerPairIndex);
    return questions[questionAnswerPairIndex];
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
        <Keyboard handleKeyClick={handleChosenLetter} />
      </div>
    </>
  );
}

export default App;
