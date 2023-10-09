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

import React, { useEffect, useRef } from "react";
import { InputWrapper, Props } from "./InputWrapper";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultParams: Props = {
  success: false,
  label: "Example label",
  type: "text",
  name: "Example input",
  helperText: "this is helpertext",
  errorMessage: "This is an error",
  error: false,
  value: "value",
  onChange: jest.fn()
};

const createInputWrapper = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<InputWrapper {...parameters} data-testid="inputwrapper" />);
  const inputwrapper = queries.getByTestId("inputwrapper");

  return {
    ...queries,
    inputwrapper
  };
};

describe("InputWrapper should render", () => {
  it("renders without crashing", () => {
    const { inputwrapper } = createInputWrapper();

    expect(inputwrapper).toBeTruthy();
  });

  it("has helpertext", () => {
    const { getByTestId } = createInputWrapper(defaultParams => ({
      ...defaultParams,
      helperProps: { "data-testid": "helper_text" }
    }));

    const helperText = getByTestId("helper_text");

    expect(helperText).toBeTruthy();
  });

  it("is described by the helpertext", () => {
    const { getByTestId } = createInputWrapper(defaultParams => ({
      ...defaultParams,
      inputProps: { "data-testid": "input" },
      helperProps: { "data-testid": "helper_text" }
    }));

    const input = getByTestId("input");
    const helperId = getByTestId("helper_text").getAttribute("id");

    expect(input).toHaveAttribute("aria-describedby", helperId);
  });

  it("disabled input", () => {
    const { getByLabelText } = createInputWrapper(defaultParams => ({
      ...defaultParams,
      disabled: true
    }));

    const input = getByLabelText("Example label");

    expect(input).toBeDisabled();
  });

  it("consume wrapper props classname", () => {
    const { container } = createInputWrapper(defaultParams => ({
      ...defaultParams,
      inputProps: { wrapperProps: { className: "testClass" } }
    }));

    expect(container.querySelector(".testClass")).toBeDefined();
  });
});

describe("ref should work", () => {
  it("should give back the proper data prop, this also checks if the component propagates ...rest properly", () => {
    const ExampleComponent = ({
      propagateRef
    }: {
      propagateRef?: (
        ref: React.RefObject<HTMLElement>,
        innerRef: React.RefObject<HTMLInputElement>
      ) => void;
    }) => {
      const ref = useRef(null);
      const innerRef = useRef(null);

      useEffect(() => {
        if (ref.current) {
          propagateRef && propagateRef(ref, innerRef);
        }
      }, [ref]);

      return (
        <InputWrapper
          {...defaultParams}
          inputProps={{ ref: innerRef, "data-ref": "inner-testing" }}
          name="test"
          data-ref="testing"
          ref={ref}
        />
      );
    };

    const refCheck = (
      ref: React.RefObject<HTMLElement>,
      innerRef: React.RefObject<HTMLElement>
    ) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
      expect(innerRef.current).toHaveAttribute("data-ref", "inner-testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe("InputWrapper should be interactive", () => {
  it("executes the eventlisteners", async () => {
    const onFocusHandler = jest.fn();
    const onChangeHandler = jest.fn();
    const onBlurHandler = jest.fn();

    const { getByTestId } = createInputWrapper(defaultParams => ({
      ...defaultParams,
      inputProps: {
        "data-testid": "input"
      },
      onChange: onChangeHandler,
      onFocus: onFocusHandler,
      onBlur: onBlurHandler,
      value: ""
    }));

    const input = getByTestId("input");

    await userEvent.tab();
    await userEvent.keyboard("test");

    expect(input).toHaveFocus();
    expect(onChangeHandler).toHaveBeenCalled();
    expect(onFocusHandler).toHaveBeenCalled();

    await userEvent.tab();

    expect(onBlurHandler).toHaveBeenCalled();
  });
});

describe("InputWrapper should support prefix and suffix", () => {
  const prefix = "prefix";
  const suffix = "suffix";

  const hasPrefixAndSuffixDefined = (container: HTMLElement) => {
    expect(container.querySelector("[data-prefix]")).toHaveTextContent(prefix);
    expect(container.querySelector("[data-suffix]")).toHaveTextContent(suffix);
  };

  it("renders prefix and sufix", () => {
    const { container } = createInputWrapper(defaultParams => ({
      ...defaultParams,
      value: "",
      inputProps: { "data-testid": "input", prefix, suffix }
    }));

    hasPrefixAndSuffixDefined(container);
  });

  it("renders prefix and sufix when input has value", async () => {
    const { container, getByTestId } = createInputWrapper(defaultParams => ({
      ...defaultParams,
      inputProps: { "data-testid": "input", prefix, suffix }
    }));

    const input = getByTestId("input");

    hasPrefixAndSuffixDefined(container);

    await userEvent.tab();
    expect(input).toHaveFocus();
    hasPrefixAndSuffixDefined(container);

    await userEvent.tab();
    expect(input).not.toHaveFocus();
    hasPrefixAndSuffixDefined(container);
  });
});
