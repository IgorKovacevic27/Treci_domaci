import { createSelector } from "reselect";
import { selectors as squareSelectors } from "components/square";
import * as appSelectors from "components/app/selectors";

export const getColourStrings = createSelector(
  appSelectors.getGame,
  game => game.squares
);

export const getAnswerIndex = createSelector(
  appSelectors.getGame,
  game => game.answerIndex
);

export const getAnswer = createSelector(
  [getAnswerIndex, getColourStrings],
  (index, colours) => colours[index]
);

export const getGameOver = createSelector(
  getAnswer,
  answer => squareSelectors.getIsGuessed(answer)
);

export const getUserHasGuessed = createSelector(
  getColourStrings,
  colours => colours.some(squareSelectors.getIsGuessed)
);
