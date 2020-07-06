import React from "react";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";

import Input from "components/core/Input";

describe("Input component", () => {
  it("render input", async () => {
    const { getByText, getByLabelText } = render(
      <Input name="InputTest" label="InputTest" type="test" mask="number" />
    );

    const inputForm = getByLabelText("InputTest");
    const labelInputForm = getByText("InputTest");

    user.type(inputForm, "1000000");

    expect(inputForm).not.toBe(null);
    expect(inputForm.name).toBe("InputTest");
    expect(inputForm.id).toBe("InputTest");
    expect(labelInputForm).not.toBe(null);
    expect(labelInputForm.textContent).toContain("InputTest");
  });
});
