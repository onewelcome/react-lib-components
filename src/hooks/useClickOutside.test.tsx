/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import React, { Fragment, useState } from "react";
import { useClickOutside } from "./useClickOutside";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("function should be executed", () => {
  it("should execute", async () => {
    const clickHandler = jest.fn();
    const validateFunction = jest.fn(() => true);

    const Component = () => {
      const [variable, setVariable] = useState(true);
      const [variable2, setvariable2] = useState(true);
      // TODO useClickOutside(validateFunction, clickHandler, [variable, variable2]);

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
