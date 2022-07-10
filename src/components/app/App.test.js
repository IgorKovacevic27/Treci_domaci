import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import App from "./App";
import { configureTestStore } from "utils/test-tools";

test("renders without crashing", () => {
  renderer.create(
    <Provider store={configureTestStore()}>
      <App />
    </Provider>
  );
});
