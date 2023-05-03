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
import { Props, TabButton } from "./TabButton";
import { render } from "@testing-library/react";

const defaultParams: Props = {};

const createTabButton = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <TabButton {...parameters} data-testid="tabbutton">
      tab content
    </TabButton>
  );
  const tabButton = queries.getByTestId("tabbutton");

  return {
    ...queries,
    tabButton
  };
};

describe("Tab should render", () => {
  it("renders without crashing", () => {
    const { tabButton } = createTabButton();

    expect(tabButton).toBeTruthy();
  });

  it("should be focussed when prop focused is passed", () => {
    const { tabButton } = createTabButton(defaultParams => ({
      ...defaultParams,
      focused: true
    }));

    expect(tabButton).toHaveFocus();
  });

  it("should set class when prop className is passed", () => {
    const { tabButton } = createTabButton(defaultParams => ({
      ...defaultParams,
      className: "customclass"
    }));

    expect(tabButton).toHaveClass("customclass");
  });
});
