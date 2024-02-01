import { MouseEvent } from "react";

export interface IPopupProps {
    hasWon: boolean;
    answer: string;
    closePupup: (e: MouseEvent) => void;
    restartGame?: () => void;
}