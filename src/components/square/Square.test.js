import React from "react";
import renderer from "react-test-renderer";
import each from "jest-each";

import { Provider } from "react-redux";
import { configureTestStore } from "utils/test-tools";

import Square from "./Square";
import reducer, { InitialState } from "./reducer";
import * as Actions from "./actions";

describe("Component", () => {
  each([true, false]).test("renders without crashing", isGuessed => {
    renderer.create(
      <Provider store={configureTestStore()}>
        <Square colour={{ string: "rgb(255, 255, 255)", isGuessed }} />
      </Provider>
    );
  });
});

describe("Reducer", () => {
  each([true, false]).test(
    "Set state to guessed when a GuessSquare action matches the square's colour",
    isCorrect => {
      expect(
        reducer(
          InitialState,
          Actions.guessSquare(InitialState.colourString, isCorrect)
        )
      ).toEqual({ ...InitialState, isGuessed: true });
    }
  );

  each([true, false]).test(
    "Do nothing if the GuessSquare action does not match the squares colours",
    isCorrect => {
      expect(
        reducer(
          InitialState,
          Actions.guessSquare("Some other colour", isCorrect)
        )
      ).toEqual(InitialState);
    }
  );
});
