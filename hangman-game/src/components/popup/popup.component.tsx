import './popup.css';
import { IPopupProps } from './popup.types';

export const Popup = ({hasWon, answer, restartGame }: IPopupProps) => {
    return (
    <div className='popup-container'>
      <div className="popup-wrapper">
        <div className="popup-cross">X</div>
        <div className="popup">
          <div className="popup__result">
            {hasWon ? 'You have won!' : 'You have lost...'}
          </div>
          <div className="popup__answer">
            The answe is <br /> "{answer}".
          </div>
          <div onClick={restartGame} className="popup__restart">
            Play again!
          </div>
        </div>
      </div>
    </div>
    ) 
}