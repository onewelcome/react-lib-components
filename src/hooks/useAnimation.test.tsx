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

import React, { Fragment } from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useAnimation } from "./useAnimation";
import { act } from "react-dom/test-utils";

describe("useAnimation", () => {
  it("should execute", async () => {
    const callback = jest.fn();

    const Component = () => {
      const { ref, animationStarted, startAnimation } = useAnimation<HTMLDivElement>(callback);

      return (
        <Fragment>
          <button data-testid="button" onClick={() => startAnimation()}>
            start animation
          </button>
          <div
            data-testid="animated-div"
            ref={ref}
            className={animationStarted ? "animation-started" : ""}
          >
            animated div
          </div>
        </Fragment>
      );
    };

    const { getByTestId } = render(<Component />);

    const animatedDiv = getByTestId("animated-div");
    const startButton = getByTestId("button");

    expect(animatedDiv).not.toHaveClass("animation-started");
    expect(callback).not.toBeCalled();
    await await userEvent.click(startButton);

    expect(animatedDiv).toHaveClass("animation-started");
    expect(callback).not.toBeCalled();

    act(() => {
      fireEvent.animationEnd(animatedDiv);
    });

    expect(animatedDiv).toHaveClass("animation-started");
    expect(callback).toBeCalled();
  });
});
