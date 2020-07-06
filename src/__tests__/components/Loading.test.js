import React from "react";
import { render } from "@testing-library/react";

import Loading from "components/core/Loading";

describe("Loading component", () => {
  it("render loading", () => {
    const loading = render(<Loading isLoading={true} />);
    expect(loading).toMatchSnapshot();
  });
});
