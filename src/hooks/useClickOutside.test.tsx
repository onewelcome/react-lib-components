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

import React, { Fragment, useRef, useState } from "react";
import { useClickOutside } from "./useClickOutside";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("function should be executed", () => {
  it("should execute", async () => {
    //given
    const button1Clicked = jest.fn();
    const button2Clicked = jest.fn();
    const outsideClicked = jest.fn();

    const Component = () => {
      const myElementRef = useRef<HTMLButtonElement>(null);

      useClickOutside(myElementRef, outsideClicked, []);

      return (
        <div data-testid="container">
          <button ref={myElementRef} data-testid="button1" onClick={() => button1Clicked()}>
            button1
          </button>
          <button data-testid="button2" onClick={() => button2Clicked()}>
            button2
          </button>
        </div>
      );
    };

    const { getByTestId } = render(<Component></Component>);

    const button1 = getByTestId("button1");
    const button2 = getByTestId("button2");
    const container = getByTestId("container");

    //when
    await userEvent.click(button1);

    //then
    expect(button1Clicked).toHaveBeenCalledTimes(1);
    expect(button2Clicked).toHaveBeenCalledTimes(0);
    expect(outsideClicked).toHaveBeenCalledTimes(0);

    //when
    await userEvent.click(container);

    //then
    expect(button1Clicked).toHaveBeenCalledTimes(1);
    expect(button2Clicked).toHaveBeenCalledTimes(0);
    expect(outsideClicked).toHaveBeenCalledTimes(1);

    //when
    await userEvent.click(button2);

    //then
    expect(button1Clicked).toHaveBeenCalledTimes(1);
    expect(button2Clicked).toHaveBeenCalledTimes(1);
    expect(outsideClicked).toHaveBeenCalledTimes(2);
  });
});
