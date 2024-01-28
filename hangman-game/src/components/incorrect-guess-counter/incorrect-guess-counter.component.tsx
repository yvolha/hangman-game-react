import incorrectGuessNumberAllowed from "../../constants/incorrect-guess-number-allowed";
import "./incorrect-guess-counter.css";
import { IIncorrectGuessCounterProps } from "./incorrect-guess-counter.types";

export const IncorrectGuessCounter = ({incorrectGuessNumber}: IIncorrectGuessCounterProps) => {
  return (
    <div>Times letter guessed wrong: {incorrectGuessNumber} / {incorrectGuessNumberAllowed}</div>
  );
};