import "./keyboard.css";
import { keyboardKeys } from "../../constants/keyboard-keys";
import { IKeyboardProps } from "./keyboard.types";
import { useEffect, useState } from "react";

export const Keyboard = ({handleKeyClick, isNewGameProp, updateIsNewGame}: IKeyboardProps) => {
  const [keysPressed, setKeysPressed] = useState(JSON.parse(JSON.stringify(keyboardKeys)));
  const [isNewGame] = useState(isNewGameProp);

  useEffect(() => {
    setKeysPressed(JSON.parse(JSON.stringify(keyboardKeys)))
    updateIsNewGame();
  }, [isNewGame])

  return(
    <div className="keyboard">
      <div className="row">
        {keyboardKeys.upperRow.map((key, i) => <div onClick={() => {
          if(keysPressed.upperRow[i]){
            handleKeyClick(key);
            keysPressed.upperRow[i] = '';
          } 
        }} className={`key ${keysPressed.upperRow[i] ? '' : 'pressed'}`} key={i}>{key}</div>)}
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