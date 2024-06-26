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
import { FormStepper, Props } from "./FormStepper";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultParams: Props = {
  direction: "vertical",
  steps: []
};

const createFormStepper = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }

  const queries = render(
    <>
      <FormStepper {...parameters} data-testid="formStepperTestId"></FormStepper>
      <div id="samlConnectionDetail"></div>
    </>
  );
  const formStepper = queries.getByTestId("formStepperTestId");

  return {
    ...queries,
    formStepper
  };
};

describe("<FormStepper />", () => {
  it("should render without crashing", () => {
    const { formStepper } = createFormStepper();

    expect(formStepper).toBeDefined();
  });

  it("should have the correct values and attributes", async () => {
    const onStepHandler = jest.fn();
    const scrollIntoViewMock = jest.fn();

    const { getAllByText, getByText } = createFormStepper(defaultParams => ({
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

    expect(onStepHandler).toHaveBeenCalled();

    const element = document.getElementById("samlConnectionDetail") as HTMLDivElement;
    element.scrollIntoView = scrollIntoViewMock;
    const step2 = getByText("Step 2");
    await userEvent.click(step2);

    expect(scrollIntoViewMock).toHaveBeenCalled();
  });

  it("should render the horizontal form stepper", () => {
    const { formStepper } = createFormStepper(params => ({
      ...params,
      direction: "horizontal"
    }));

    expect(formStepper).toBeDefined();
    expect(formStepper.classList).toContain("horizontal");
  });
});
