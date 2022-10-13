import React, { Fragment, useState } from "react";
import { useBodyClick } from "./useBodyClick";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("function should be executed", () => {
  it("should execute", async () => {
    const clickHandler = jest.fn();
    const validateFunction = jest.fn(() => true);

    const Component = () => {
      const [variable, setVariable] = useState(true);
      const [variable2, setvariable2] = useState(true);
      useBodyClick(validateFunction, clickHandler, [variable, variable2]);

      return (
        <Fragment>
          <button data-testid="button1" onClick={() => setVariable(!variable)}>
            Test
          </button>
          <button data-testid="button2" onClick={() => setvariable2(!variable2)}>
            Test
          </button>
        </Fragment>
      );
    };

    const { getByTestId } = render(<Component></Component>);

    const button1 = getByTestId("button1");
    const button2 = getByTestId("button2");

    await userEvent.click(button1);
    await userEvent.click(button2);

    expect(clickHandler).toHaveBeenCalledTimes(2);
    expect(validateFunction).toHaveBeenCalledTimes(2);
  });
});
