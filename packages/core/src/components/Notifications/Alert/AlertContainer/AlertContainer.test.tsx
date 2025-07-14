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

import React from "react";
import { AlertContainer, Props } from "./AlertContainer";
import { render } from "@testing-library/react";

const defaultParams: Props = {
  placement: { vertical: "top", horizontal: "center" },
  children: <span>children</span>
};

const createAlertContainer = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<AlertContainer {...parameters} data-testid="alertcontainer" />);
  const alertcontainer = queries.getByTestId("alertcontainer");
  return { ...queries, alertcontainer };
};

describe("AlertContainer should render", () => {
  it("renders without crashing", () => {
    const { alertcontainer, getByText } = createAlertContainer();
    expect(alertcontainer).toHaveClass("top");
    expect(alertcontainer).toHaveClass("center");
    expect(alertcontainer).toHaveStyle({ zIndex: "" });
    expect(getByText("children")).toBeDefined();
    expect(alertcontainer).toBeDefined();
  });

  it("renders with zIndex", () => {
    const { alertcontainer } = createAlertContainer(defaultParams => ({
      ...defaultParams,
      zIndex: 1
    }));
    expect(alertcontainer).toHaveStyle({ zIndex: "1" });
  });
});
