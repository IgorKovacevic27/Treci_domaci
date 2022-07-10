import React from "react";
import renderer from "react-test-renderer";
import each from "jest-each";
import { Provider } from "react-redux";

import Game from "./Game";
import reducer, { InitialState } from "./reducer";
import { Actions as gameModeActions } from "components/game-mode";
import { Actions as resetActions } from "components/reset";

import { configureTestStore } from "utils/test-tools";
import { GameModes } from "utils/const";

describe("Component", () => {
  each(Object.values(GameModes)).test("renders without crashing", mode => {
    renderer.create(
      <Provider store={configureTestStore()}>
        <Game mode={mode} />
      </Provider>
    );
  });
});

describe("Reducer", () => {
  each(Object.values(GameModes)).test(
    "ChangeGameMode should reset the game squares and the correct answer",
    mode => {
      const action = gameModeActions.changeGameMode(mode);
      expect(reducer(InitialState, action)).toEqual({
        ...InitialState,
        squares: action.squares,
        answerIndex: action.answer
      });
    }
  );

  each(Object.values(GameModes)).test(
    "ResetGame should reset the game squares and the correct answer",
    mode => {
      const action = resetActions.resetGame(mode);
      expect(reducer(InitialState, action)).toEqual({
        ...InitialState,
        squares: action.squares,
        answerIndex: action.answer
      });
    }
  );
});
