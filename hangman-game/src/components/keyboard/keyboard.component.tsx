import './keyboard.css';
import { keyboardKeys } from "../../constants/keyboard-keys"

export const Keyboard = () => {
    const handleKeyClick = (key: string) => {
        console.log('keyClicked', key);
    }

    return(
        <div className="keyboard">
            <div className="row">
                {keyboardKeys.upperRow.map((key, i) => <div onClick={() => handleKeyClick(key)} className='key' key={i}>{key}</div>)}
            </div>
            <div className="row">
                {keyboardKeys.middleRow.map((key, i) => <div className='key' key={i}>{key}</div>)}
            </div>
            <div className="row">
                {keyboardKeys.lowerRow.map((key, i) => <div className='key' key={i}>{key}</div>)}
            </div>
        </div>
    )
}