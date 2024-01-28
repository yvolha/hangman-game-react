import "./gallows.css";
import { IGallowsProps } from "./gallows.types";

export const Gallows = ({incorrectGuessNumber}: IGallowsProps) => {

  const getIsBodyPartShown = (bodyPartIndex: number) => {
    return incorrectGuessNumber >= bodyPartIndex + 1;
  }

  return (
    <div className="gallows-wrapper">
      <img src="./gallows.png" alt="Gallows image." className="gallows"/>
      {getIsBodyPartShown(0) && <img src="./head.png" alt="Head." className="head"/>}
      {getIsBodyPartShown(1) && <img src="./body.png" alt="Body." className="body"/>}
      {getIsBodyPartShown(2) && <img src="./extremity-one.png" alt="Left hand." className="left-hand" />}
      {getIsBodyPartShown(3) && <img src="./extremity-two.png" alt="Right hand." className="right-hand" />}
      {getIsBodyPartShown(4) && <img src="./extremity-one.png" alt="Left leg." className="left-leg" />}
      {getIsBodyPartShown(5) && <img src="./extremity-two.png" alt="Right leg." className="right-leg" />}
    </div>
  );
};