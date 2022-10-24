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
import { SnackbarContainer, Props } from "./SnackbarContainer";
import { render } from "@testing-library/react";

const defaultParams: Props = {
  placement: { vertical: "top", horizontal: "center" },
  children: <span>children</span>
};

const createSnackbarContainer = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<SnackbarContainer {...parameters} data-testid="snackbarcontainer" />);
  const snackbarcontainer = queries.getByTestId("snackbarcontainer");
  return { ...queries, snackbarcontainer };
};

describe("SnackbarContainer should render", () => {
  it("renders without crashing", () => {
    const { snackbarcontainer, getByText } = createSnackbarContainer();
    expect(snackbarcontainer).toHaveClass("top");
    expect(snackbarcontainer).toHaveClass("center");
    expect(snackbarcontainer).toHaveStyle({ zIndex: "" });
    expect(getByText("children")).toBeDefined();
    expect(snackbarcontainer).toBeDefined();
  });

  it("renders with zIndex", () => {
    const { snackbarcontainer } = createSnackbarContainer(defaultParams => ({
      ...defaultParams,
      zIndex: 1
    }));
    expect(snackbarcontainer).toHaveStyle({ zIndex: "1" });
  });
});
