import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import ResetBtn from "./ResetBtn";
import { configureTestStore } from "utils/test-tools";

describe("Component", () => {
  test("renders without crashing", () => {
    renderer.create(
      <Provider store={configureTestStore()}>
        <ResetBtn />
      </Provider>
    );
  });
});
