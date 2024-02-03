import "./popup.css";
import { IPopupProps } from "./popup.types";

export const Popup = ({hasWon, answer, restartGame }: IPopupProps) => {
  return (
    <div onClick={restartGame} className="popup-container">
      <div className="popup-wrapper">
        <div onClick={restartGame} className="popup-cross">x</div>
        <div className="popup">
          <div className="popup__result">
            {hasWon ? "You have won!" : "You have lost..."}
          </div>
          <div className="popup__words">
            The answer is:
            <div className="popup__answer">
              {answer}
            </div>
          </div>
          <div onClick={restartGame} className="popup__restart">
            Play again?
          </div>
        </div>
      </div>
    </div>
  ); 
};