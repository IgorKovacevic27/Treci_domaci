import * as Types from './types';

export const guessSquare = (colour, isCorrect) => ({
  type: Types.GuessSquare,
  colour,
  isCorrect
});