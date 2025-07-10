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
import { BaseStyling } from "./BaseStyling";
import { Button } from "../Button/Button";
import { render } from "@testing-library/react";

describe("BaseStyling should render", () => {
  it("renders without crashing", async () => {
    const { container, findByTestId } = render(
      <Fragment>
        <BaseStyling>
          <Button data-testid="button">Test</Button>
        </BaseStyling>
      </Fragment>
    );

    const button = await findByTestId("button");
    expect(button).toHaveStyle({ backgroundColor: "rgb(158, 0, 107);" });
    expect(container.querySelector("#child")).toBeDefined();
  });
});

describe("Should override default color", () => {
  it("overrides primary color", async () => {
    const { findByTestId } = render(
      <Fragment>
        <BaseStyling
          properties={{
            colorPrimary: "rgb(255, 255, 255);"
          }}
        >
          <Button data-testid="button">Test</Button>
        </BaseStyling>
      </Fragment>
    );

    const button = await findByTestId("button");
    expect(button).toHaveStyle({ backgroundColor: "rgb(255, 255, 255);" });
  });
});
