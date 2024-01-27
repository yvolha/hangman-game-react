import './error-counter.css';
import { IErrorCounterProps } from './error-counter.types';

export const ErrorCounter = ({errorNumber}: IErrorCounterProps) => {
    return (
        <div>Times quessed wrong: {errorNumber}</div>
    )
}