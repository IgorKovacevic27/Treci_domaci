import * as Types from "./types";
import { selectors as modeSelectors } from "components/game-mode";
import { newGame } from "utils/lib";

export const resetGame = mode => ({
  type: Types.ResetGame,
  ...newGame(modeSelectors.getBoardSize(mode))
});
