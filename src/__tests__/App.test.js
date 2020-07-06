import React from "react";
import { Provider } from "react-redux";
import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { store } from "store/store";
import App from "App";

describe("App test", () => {
  it("renders without crashing", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });
  });
});
