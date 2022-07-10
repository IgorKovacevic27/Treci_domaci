import * as Types from "./types";
import { selectors as modeSelectors } from "components/game-mode";
import { newGame } from "utils/lib";

export const changeGameMode = mode => ({
  type: Types.ChangeGameMode,
  mode,
  ...newGame(modeSelectors.getBoardSize(mode))
});
