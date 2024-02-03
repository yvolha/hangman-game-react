export interface IKeyboardProps {
    handleKeyClick: (letter: string) => void;
    isNewGameProp: boolean;
    updateIsNewGame: () => void;
}