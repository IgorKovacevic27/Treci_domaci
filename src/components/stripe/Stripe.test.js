import React from "react";
import { Provider } from "react-redux";
import each from "jest-each";

import Stripe from "./Stripe";
import reducer from "./reducer";
import { Actions as ModeActions } from "components/game-mode";
import { GameModes } from "utils/const";
import { configureTestStore } from "utils/test-tools";

import renderer from "react-test-renderer";

describe("Component", () => {
  test("renders without crashing", () => {
    renderer.create(
      <Provider store={configureTestStore()}>
        <Stripe />
      </Provider>
    );
  });
});

describe("reducer", () => {
  each(Object.values(GameModes)).test(
    "returns the new state matching the action",
    newMode => {
      const action = ModeActions.changeGameMode(newMode);
      expect(reducer(GameModes.Easy, action)).toBe(newMode);
      expect(reducer(GameModes.Normal, action)).toBe(newMode);
      expect(reducer(GameModes.Hard, action)).toBe(newMode);
    }
  );
});
