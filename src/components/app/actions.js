import { Actions } from "components/reset";
import { GameModes } from "utils/const";

export const initialiseGame = () => Actions.resetGame(GameModes.Normal);
