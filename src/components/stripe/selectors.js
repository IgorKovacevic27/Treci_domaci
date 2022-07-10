import { createSelector } from 'reselect';

import { GameModes } from 'utils/const';

export const getMode = state => state.mode || GameModes.Normal;
export const getModeString = createSelector(getMode, mode => mode.modeString);