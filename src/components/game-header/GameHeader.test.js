import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import GameHeader from "./GameHeader";
import { configureTestStore } from "utils/test-tools";

describe("Component", () => {
  test("renders without crashing", () => {
    renderer.create(
      <Provider store={configureTestStore()}>
        <GameHeader />
      </Provider>
    );
  });
});
