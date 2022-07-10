import { GameModes } from "utils/const";
import { Types as GameModeTypes } from "components/game-mode";

export const InitialState = GameModes.Normal;

export default (state = InitialState, action) => {
  switch (action.type) {
    case GameModeTypes.ChangeGameMode:
      return action.mode;
    default:
      return state;
  }
};
