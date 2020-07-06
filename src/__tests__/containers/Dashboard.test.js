import React from "react";
import { render, act, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { INITIAL_STATE } from "store/ducks/starship";
import DashboardContainer from "containers/Dashboard/DashboardContainer";
import starshipsMock from "utils/mocks/starships";

describe("Dashboard page ", () => {
  const mockStore = configureStore();
  let store;

  it("dashboard render and pass value for calculate", async () => {
    store = mockStore({
      starship: INITIAL_STATE,
    });

    store.dispatch = jest.fn();

    const { getByTestId, rerender } = render(
      <Provider store={store}>
        <DashboardContainer />
      </Provider>
    );

    const distanceInput = getByTestId("distance");

    await act(async () => {
      await fireEvent.change(distanceInput, {
        target: { value: "1000000" },
      });
    });

    await act(async () => {
      fireEvent.submit(getByTestId("submit"));
    });

    store = mockStore({
      starship: { starships: starshipsMock, success: true },
    });

    rerender(
      <Provider store={store}>
        <DashboardContainer />
      </Provider>
    );
  });
});
