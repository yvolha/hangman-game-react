import "./App.css";
import { IncorrectGuessCounter } from "./components/incorrect-guess-counter/incorrect-guess-counter.component";
import { Gallows } from "./components/gallows/gallows.component";
import { QuestionAnswer } from "./components/question-answer/question-answer.component";
import { useEffect, useState } from "react";
import { Keyboard } from "./components/keyboard/keyboard.component";

function App() {
  const [incorrectGuessNumber, setIncorrectGuessNumber] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log(event.key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <Gallows />
      <div>
        <QuestionAnswer />
        <IncorrectGuessCounter incorrectGuessNumber={incorrectGuessNumber} />
        <Keyboard />
      </div>
    </>
  );
}

export default App;
