import { MouseEvent } from "react";

export interface IPopupProps {
    hasWon: boolean;
    answer: string;
    closePopup?: (e: MouseEvent) => void;
    restartGame?: () => void;
}