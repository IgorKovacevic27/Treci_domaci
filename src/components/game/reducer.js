import { reducer as squareReducer } from "components/square";
import { Types as ModeTypes } from "components/game-mode";
import { Types as ResetTypes } from "components/reset";

export const InitialState = { squares: [], answerIndex: 0 };

export default (state = InitialState, action) => {
  switch (action.type) {
    case ModeTypes.ChangeGameMode:
    case ResetTypes.ResetGame:
      return {
        ...state,
        squares: action.squares,
        answerIndex: action.answer
      };
    default:
      return {
        ...state,
        squares: state.squares.map(square => squareReducer(square, action))
      };
  }
};
