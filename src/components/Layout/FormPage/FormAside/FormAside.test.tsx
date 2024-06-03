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
import { FormAside, Props } from "./FormAside";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultParams: Props = {
  direction: "vertical",
  steps: []
};

const createFormAside = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }

  const queries = render(
    <>
      <FormAside {...parameters} data-testid="formAsideTestId"></FormAside>
      <div id="samlConnectionDetail"></div>
    </>
  );
  const formAside = queries.getByTestId("formAsideTestId");

  return {
    ...queries,
    formAside
  };
};

describe("<FormAside />", () => {
  it("should render without crashing", () => {
    const { formAside } = createFormAside();

    expect(formAside).toBeDefined();
  });

  it("should have the correct values and attributes", async () => {
    const onStepHandler = jest.fn();
    const scrollIntoViewMock = jest.fn();

    const { getAllByText, getByText } = createFormAside(defaultParams => ({
      ...defaultParams,
      steps: [
        {
          status: "done",
          label: "Step 1",
          targetScrollViewId: "samlBaseInfo",
          onClick: onStepHandler
        },
        {
          status: "done",
          label: "Step 2",
          targetScrollViewId: "samlConnectionDetail"
        }
      ]
    }));

    expect(getAllByText(/Step/i)).toHaveLength(2);
    const step1 = getByText("Step 1");
    await userEvent.click(step1);
    expect(onStepHandler).toBeCalled();

    const element = (await document.getElementById("samlConnectionDetail")) as HTMLDivElement;
    element.scrollIntoView = scrollIntoViewMock;
    const step2 = getByText("Step 2");
    await userEvent.click(step2);
    expect(scrollIntoViewMock).toBeCalled();
  });

  it("should render the horizontal form stepper", () => {
    const { formAside } = createFormAside(params => ({
      ...params,
      direction: "horizontal"
    }));

    expect(formAside).toBeDefined();
    expect(formAside.classList).toContain("horizontal");
  });
});
