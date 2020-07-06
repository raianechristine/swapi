import React from "react";
import { render } from "@testing-library/react";

import Button from "components/core/Button";

describe("Button component", () => {
  it("render button", () => {
    const button = render(<Button type="submit">Testing button</Button>);
    expect(button).toMatchSnapshot();
  });
});
