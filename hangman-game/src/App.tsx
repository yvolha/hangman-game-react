import "./App.css";
import { IncorrectGuessCounter } from "./components/incorrect-guess-counter/incorrect-guess-counter.component";
import { Gallows } from "./components/gallows/gallows.component";

function App() {
  const errorNumber = 5;
  return (
    <>
      <Gallows />
      <div>
        <IncorrectGuessCounter incorrectGuessNumber={errorNumber} />
      </div>
    </>
  );
}

export default App;
