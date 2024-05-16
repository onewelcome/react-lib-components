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
import { FormTemplate, Props } from "./FormTemplate";
import { getByText, render } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import { FormHeader, Props as FormHeaderProps } from "../../Form/FormHeader/FormHeader";
import { FormAside, Props as FormAsideProps } from "../../Form/FormAside/FormAside";
import { Button } from "../../Button/Button";

const defaultParams: Props = {};

const createFormTemplate = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }

  const queries = render(
    <FormTemplate {...parameters} data-testid="formTemplateId"></FormTemplate>
  );
  const formTemplate = queries.getByTestId("formTemplateId");

  return {
    ...queries,
    formTemplate
  };
};

describe("<FormTemplate />", () => {
  it("should render without crashing", () => {
    const { formTemplate } = createFormTemplate();
    expect(formTemplate).toBeDefined();
  });

  it("should have the correct values and attributes", async () => {
    const { formTemplate } = createFormTemplate(defaultParams => ({
      ...defaultParams,
      className: "form-template-class"
    }));
    expect(formTemplate.className).toContain("form-template-class");
  });

  it("should have the correct classes", () => {
    const { formTemplate } = createFormTemplate(defaultParams => ({
      ...defaultParams,
      className: "form-template-custom-class"
    }));

    expect(formTemplate).toHaveClass("form-template-custom-class");
  });

  it("should have correct data render for FormHeader", () => {
    const formHeadProp: FormHeaderProps = {
      children: <p data-testid="formHeaderChildren">Form Header sample description</p>,
      title: "Form Header sample Title",
      buttons: [
        <Button id="cancelButton" key="1" data-testid="button1">
          Cancel Button
        </Button>
      ],
      className: "form-header-custom-class"
    };

    const { getByText, getByTestId } = createFormTemplate(defaultParams => ({
      ...defaultParams,
      formHeader: <FormHeader {...formHeadProp} data-testid="formHeader"></FormHeader>
    }));
    var formHeader = getByTestId("formHeader");
    expect(formHeader).toBeDefined();
    expect(formHeader.className).toContain("form-header-custom-class");
    expect(getByText(formHeadProp.title)).toBeInTheDocument();
  });

  it("should have correct data render for FormAside", () => {
    const formAsideProp: FormAsideProps = {
      direction: "horizontal",
      steps: [],
      className: "form-aside-custom-class"
    };

    const { getByTestId } = createFormTemplate(defaultParams => ({
      ...defaultParams,
      formAside: <FormAside {...formAsideProp} data-testid="formAside"></FormAside>
    }));
    var formAside = getByTestId("formAside");
    expect(formAside).toBeDefined();
    expect(formAside.className).toContain("form-aside-custom-class");
    expect(formAside.classList).toContain("horizontal");
  });
});
