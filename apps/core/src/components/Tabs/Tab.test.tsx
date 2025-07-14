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
import { Tab, Props } from "./Tab";
import { render } from "@testing-library/react";

const defaultParams: Props = {
  title: "Title of tab"
};

const createTab = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <Tab {...parameters} data-testid="tab">
      tab content
    </Tab>
  );
  const tab = queries.getByTestId("tab");

  return {
    ...queries,
    tab
  };
};

describe("Tab should render", () => {
  it("renders without crashing", () => {
    const { tab } = createTab();

    expect(tab).toBeTruthy();
  });
});
