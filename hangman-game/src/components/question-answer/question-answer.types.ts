import { IQuestion } from "../../constants/questions";

export interface IQuestionAnswerProps {
    currentQuestionAnswerPair: IQuestion;
    correctlyGuessedLetter: string;
    func?: () => void;
}