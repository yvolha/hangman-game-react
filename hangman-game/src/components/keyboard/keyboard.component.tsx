import "./keyboard.css";
import { keyboardKeys } from "../../constants/keyboard-keys";
import { IKeyboardProps } from "./keyboard.types";

export const Keyboard = ({handleKeyClick}: IKeyboardProps) => {

  return(
    <div className="keyboard">
      <div className="row">
        {keyboardKeys.upperRow.map((key, i) => <div onClick={() => handleKeyClick(key)} className="key" key={i}>{key}</div>)}
      </div>
      <div className="row">
        {keyboardKeys.middleRow.map((key, i) => <div onClick={() => handleKeyClick(key)} className="key" key={i}>{key}</div>)}
      </div>
      <div className="row">
        {keyboardKeys.lowerRow.map((key, i) => <div onClick={() => handleKeyClick(key)} className="key" key={i}>{key}</div>)}
      </div>
    </div>
  );
};