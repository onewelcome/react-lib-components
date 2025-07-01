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
import { render, screen } from "@testing-library/react";
import { FormErrorText, FormErrorTextProps as Props } from "./FormErrorText";
import { Icons } from "../../Icon/Icon";

const defaultParams: Props = {
  error: true
};

const createFormErrorText = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <FormErrorText
      {...parameters}
      errorMessageProps={{ ...parameters.errorMessageProps, "data-testid": "formhelpertext" }}
    />
  );
  const formhelpertext = queries.queryByTestId("formhelpertext");

  return {
    ...queries,
    formhelpertext
  };
};

describe("FormErrorText", () => {
  it("should render nothing when error is false", () => {
    const { container } = render(<FormErrorText error={false} errorMessage="Not shown" />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should render nothing when error is true but no message or children", () => {
    const { container } = render(<FormErrorText error />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should render custom errorMessageProps.children if provided", () => {
    const { getByText } = createFormErrorText(() => ({
      error: true,
      errorMessage: "Ignored",
      errorMessageProps: { children: <span>Custom error</span> }
    }));

    expect(getByText("Custom error")).toBeInTheDocument();
    expect(screen.queryByText("Ignored")).not.toBeInTheDocument();
  });

  it("should render default error message when no custom children", () => {
    const { formhelpertext, getByText } = createFormErrorText(() => ({
      error: true,
      errorMessage: "Default error"
    }));
    expect(getByText("Default error")).toBeInTheDocument();
    expect(formhelpertext).toBeInTheDocument();
  });

  it("should render icon before text when specified", () => {
    const { getByText } = createFormErrorText(() => ({
      error: true,
      errorMessage: "Error with icon",
      errorMessageIcon: Icons.Error,
      errorMessageIconPosition: "before"
    }));

    const errorSpan = getByText("Error with icon");
    expect(errorSpan).toBeInTheDocument();
    expect(errorSpan.firstChild).toHaveAttribute("data-icon");
  });

  it("should render icon after text when specified", () => {
    const { formhelpertext, getByText } = createFormErrorText(() => ({
      error: true,
      errorMessage: "Error after",
      errorMessageIcon: Icons.Warning,
      errorMessageIconPosition: "after"
    }));

    const errorSpan = getByText("Error after");
    expect(errorSpan).toBeInTheDocument();
    expect(errorSpan.lastChild).toHaveAttribute("data-icon");
  });

  it("should add errorId to inner span", () => {
    const { formhelpertext, getByText } = createFormErrorText(() => ({
      error: true,
      errorMessage: "With ID",
      errorId: "error123"
    }));

    const innerSpan = getByText("With ID");
    expect(innerSpan).toHaveAttribute("id", "error123");
    expect(formhelpertext).toBeInTheDocument();
  });

  it("should apply additional className from errorMessageProps", () => {
    const { formhelpertext } = createFormErrorText(() => ({
      error: true,
      errorMessage: "Styled",
      errorMessageProps: { className: "custom-class" }
    }));
    // formhelpertext is the outer span with classes
    expect(formhelpertext).toHaveClass("custom-class");
  });
});
