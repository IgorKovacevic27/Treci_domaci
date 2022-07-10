import React from "react";
import renderer from "react-test-renderer";
import each from "jest-each";
import { Provider } from "react-redux";

import GameModeBtn from "./GameModeBtn";
import { GameModes } from "utils/const";
import { configureTestStore } from "utils/test-tools";

each(Object.values(GameModes)).test("renders without crashing", mode => {
  renderer.create(
    <Provider store={configureTestStore()}>
      <GameModeBtn gameMode={mode} />
    </Provider>
  );
});
