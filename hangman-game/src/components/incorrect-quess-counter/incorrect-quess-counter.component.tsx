import incorrectGuessNumberAllowed from '../../constants/incorrect-quess-number-allowed';
import './incorrect-quess-counter.css';
import { IIncorrectGuessCounterProps } from './incorrect-quess-counter.types';

export const IncorrectGuessCounter = ({incorrectGuessNumber}: IIncorrectGuessCounterProps) => {
    return (
        <div>Times quessed wrong: {incorrectGuessNumber} / {incorrectGuessNumberAllowed}</div>
    )
}