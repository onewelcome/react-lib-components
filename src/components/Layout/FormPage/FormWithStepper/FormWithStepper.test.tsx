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
import { FormWithStepper, Props } from "./FormWithStepper";
import { render } from "@testing-library/react";
import { FormStepper, Props as FormAsideProps } from "./FormStepper/FormStepper";

const defaultParams: Props = {};

const createFormWithStepper = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }

  const queries = render(
    <FormWithStepper {...parameters} data-testid="formWithStepperId"></FormWithStepper>
  );
  const formWithStepper = queries.getByTestId("formWithStepperId");

  return {
    ...queries,
    formWithStepper
  };
};

describe("<FormWithStepper />", () => {
  it("should render without crashing", () => {
    const { formWithStepper } = createFormWithStepper();

    expect(formWithStepper).toBeDefined();
  });

  it("should have the correct values and attributes", async () => {
    const { formWithStepper } = createFormWithStepper(defaultParams => ({
      ...defaultParams,
      className: "form-with-stepper-class"
    }));

    expect(formWithStepper.className).toContain("form-with-stepper-class");
  });

  it("should have the correct classes", () => {
    const { formWithStepper } = createFormWithStepper(defaultParams => ({
      ...defaultParams,
      className: "form-with-stepper-custom-class"
    }));

    expect(formWithStepper).toHaveClass("form-with-stepper-custom-class");
  });

  it("should have correct data render for FormAside", () => {
    const formAsideProp: FormAsideProps = {
      direction: "horizontal",
      steps: [],
      className: "form-aside-custom-class"
    };

    const { getByTestId } = createFormWithStepper(defaultParams => ({
      ...defaultParams,
      stepper: <FormStepper {...formAsideProp} data-testid="formAside"></FormStepper>
    }));

    const formAside = getByTestId("formAside");
    expect(formAside).toBeDefined();
    expect(formAside.className).toContain("form-aside-custom-class");
    expect(formAside.classList).toContain("horizontal");
  });
});
