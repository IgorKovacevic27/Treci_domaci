import * as Types from "./types";

export const InitialState = { colourString: "rgb(255,255,255)", isGuessed: false };

export default (
  state = InitialState,
  action
) => {
  switch (action.type) {
    case Types.GuessSquare:
      return state.colourString === action.colour
        ? { ...state, isGuessed: true }
        : state;
    default:
      return state;
  }
};
