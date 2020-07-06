import React from "react";
import { render } from "@testing-library/react";

import Header from "components/core/Header";

describe("Header component", () => {
  it("render header", () => {
    const header = render(<Header />);
    expect(header).toMatchSnapshot();
  });
});
