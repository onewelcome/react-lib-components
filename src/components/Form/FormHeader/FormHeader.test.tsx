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
import { FormHeader, Props } from "./FormHeader";
import { render } from "@testing-library/react";
import { Button } from "../../Button/Button";

const defaultParams: Props = {
  children: <p data-testid="formHeaderChildren">Form Header sample description</p>,
  title: "Form Header sample Title",
  buttons: [
    <Button id="cancelButton" key="1" data-testid="button1">
      Cancel Button
    </Button>,
    <Button id="saveButton" key="2" data-testid="button2">
      Save Button
    </Button>
  ]
};

const createFormHeader = (params?: Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params;
  }

  const queries = render(<FormHeader {...parameters} data-testid="formHeaderTestId"></FormHeader>);
  const formHeader = queries.getByTestId("formHeaderTestId");

  return {
    ...queries,
    formHeader
  };
};

describe("<FormHeader />", () => {
  it("should render without crashing", () => {
    const { formHeader } = createFormHeader();
    expect(formHeader).toBeDefined();
  });

  it("should have the correct values and attributes", () => {
    const { getByTestId, getByText } = createFormHeader();

    expect(getByTestId("formHeaderChildren")).toHaveTextContent("Form Header sample description");
    expect(getByText(defaultParams.title)).toBeInTheDocument();

    const button1 = getByTestId("button1");

    expect(button1).toHaveAttribute("id", "cancelButton");
    expect(button1).toHaveTextContent("Cancel Button");

    const button2 = getByTestId("button2");

    expect(button2).toHaveAttribute("id", "saveButton");
    expect(button2).toHaveTextContent("Save Button");
  });

  it("should have the correct classes", () => {
    const { formHeader } = createFormHeader({
      ...defaultParams,
      className: "form-header-custom-class"
    });

    expect(formHeader).toHaveClass("form-header-custom-class");
  });

  it("should render collapsed header when collapsed property is true", () => {
    const paramForCollpsed = { ...defaultParams };
    paramForCollpsed.collapsed = true;
    const { formHeader, getByTestId } = createFormHeader(paramForCollpsed);

    expect(formHeader.querySelector(".hide-description p")).toHaveTextContent(
      "Form Header sample description"
    );
  });
});
