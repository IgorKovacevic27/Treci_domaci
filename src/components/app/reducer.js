import { combineReducers } from "redux";

import { reducer as gameReducer } from "components/game";
import { reducer as modeReducer } from "components/stripe";

export default combineReducers({
  mode: modeReducer,
  game: gameReducer
});
