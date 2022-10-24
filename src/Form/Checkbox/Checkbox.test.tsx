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
import { Checkbox, Props } from "./Checkbox";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Toggle } from "../Toggle/Toggle";

const onChangeHandler = jest.fn();

const defaultParams: Props = {
  name: "Testing",
  children: "checkbox content",
  helperText: "example helper",
  onChange: onChangeHandler
};

const createCheckbox = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Checkbox {...parameters} data-testid="checkbox" />);
  const checkbox = queries.getByTestId("checkbox");

  return {
    ...queries,
    checkbox
  };
};

describe("Checkbox should render", () => {
  it("renders without crashing", () => {
    const { checkbox } = createCheckbox();
    expect(checkbox).toBeTruthy();
  });
});

describe("ref should work", () => {
  it("should give back the proper data prop, this also checks if the component propagates ...rest properly", () => {
    const ExampleComponent = ({
      propagateRef
    }: {
      propagateRef?: (ref: React.RefObject<HTMLElement>) => void;
    }) => {
      const ref = useRef(null);

      useEffect(() => {
        if (ref.current) {
          propagateRef && propagateRef(ref);
        }
      }, [ref]);

      return <Checkbox {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe("Checkbox should have proper attributes", () => {
  it("should be unchecked", () => {
    const { checkbox } = createCheckbox();

    expect(checkbox).toHaveAttribute("aria-checked", "false");
  });

  it("should be checked", () => {
    const { checkbox } = createCheckbox(defaultParams => ({ ...defaultParams, checked: true }));

    expect(checkbox).toHaveAttribute("aria-checked", "true");
  });

  it("should call the onChange function", async () => {
    const onChangeHandler = jest.fn();
    const { checkbox } = createCheckbox(defaultParams => ({
      ...defaultParams,
      onChange: onChangeHandler
    }));
    await userEvent.click(checkbox);
    expect(onChangeHandler).toHaveBeenCalled();
  });

  it("should be disabled", async () => {
    const onChangeHandler = jest.fn();
    const { checkbox } = createCheckbox(defaultParams => ({
      ...defaultParams,
      onChange: onChangeHandler,
      disabled: true
    }));

    expect(checkbox).toBeDisabled();

    await userEvent.click(checkbox);

    expect(onChangeHandler).not.toHaveBeenCalled();
  });

  it("nested checkbox should be disabled", () => {
    const { getByTestId } = createCheckbox(defaultParams => ({
      ...defaultParams,
      indeterminate: false,
      label: "test",
      children: (
        <Checkbox data-testid="nested-checkbox" name="test" disabled={true}>
          test
        </Checkbox>
      )
    }));

    const nestedCheckbox = getByTestId("nested-checkbox");

    expect(nestedCheckbox).toBeDisabled();
  });

  it("should have helpertext rendered", () => {
    const { getByText } = createCheckbox();

    const helperText = getByText("example helper");

    expect(helperText).toBeTruthy();
  });

  it("should have the error state enabled", () => {
    const { checkbox, container, getByTestId } = createCheckbox(defaultParams => ({
      ...defaultParams,
      error: true,
      errorMessage: "This is an error",
      formSelectorWrapperProps: { "data-testid": "checkbox-wrapper" }
    }));

    expect(checkbox).toHaveAttribute(
      "aria-describedby",
      container.querySelector(".error-message span:last-of-type")!.id
    );

    expect(checkbox).toHaveAttribute("aria-invalid", "true");
    expect(getByTestId("checkbox-wrapper")).toHaveClass("error");
  });

  it("should have a correctly linked label element", () => {
    const { checkbox, container } = createCheckbox(defaultParams => ({
      ...defaultParams,
      children: "Label"
    }));

    const id = checkbox.getAttribute("id");
    const label = container.querySelector(`label[for=${id}]`);

    expect(label).toBeTruthy();
    expect(label).toHaveTextContent("Label");
  });
});

describe("Checkbox should be interactive", () => {
  it("should call onChange when clicked", async () => {
    const { checkbox } = createCheckbox();

    expect(onChangeHandler).not.toBeCalled();
    await userEvent.click(checkbox);
    expect(onChangeHandler).toBeCalledTimes(1);
  });

  it("should not call onChange when disabled", () => {
    const { checkbox } = createCheckbox(defaultParams => ({ ...defaultParams, disabled: true }));

    userEvent.click(checkbox);
    expect(onChangeHandler).not.toBeCalled();
  });
});

describe("toggle version", () => {
  it("should turn into a toggle", () => {
    const { container } = render(<Toggle name="toggle">Test</Toggle>);

    expect(container.querySelector("[data-toggle]")).toBeInTheDocument();
  });
});

describe("missing attributes gets us errors", () => {
  it("throws an error for missing label prop", () => {
    // Prevent throwing an error in the console when this test is executed. We fix this and the end of this test.
    const err = console.error;
    console.error = jest.fn();

    let actual;

    try {
      // @ts-ignore: mandatory props (test for non-typescript react projects)
      createCheckbox(defaultParams => ({
        ...defaultParams,
        name: "testing",
        children: <Checkbox name="test">Test</Checkbox>
      }));
    } catch (e: any) {
      actual = e.message;
    }

    const expected =
      "If you pass Checkboxes as a child component (to create nested checkbox tree) you need to pass a label to the parent checkbox.";

    expect(actual).toEqual(expected);

    console.error = err;
  });

  it("throws an error for indeterminate prop", () => {
    // Prevent throwing an error in the console when this test is executed. We fix this and the end of this test.
    const err = console.error;
    console.error = jest.fn();

    let actual;

    try {
      // @ts-ignore: mandatory props (test for non-typescript react projects)
      createCheckbox(defaultParams => ({
        ...defaultParams,
        label: "testing",
        children: <Checkbox name="test">Test</Checkbox>
      }));
    } catch (e: any) {
      actual = e.message;
    }

    const expected =
      "If you have nested checkboxes you have to manage the indeterminate state by passing a boolean to the `indeterminate` prop.";

    expect(actual).toEqual(expected);

    console.error = err;
  });

  it("throws an error for incorrect children prop", () => {
    // Prevent throwing an error in the console when this test is executed. We fix this and the end of this test.
    const err = console.error;
    console.error = jest.fn();

    let actual;

    try {
      // @ts-ignore: mandatory props (test for non-typescript react projects)
      createCheckbox(defaultParams => ({
        name: undefined
      }));
    } catch (e: any) {
      actual = e.message;
    }

    const expected =
      "Please make sure to pass either a string or more Checkbox components as a child of your Checkbox component.";

    expect(actual).toEqual(expected);

    console.error = err;
  });

  it("throws an error for missing name prop", () => {
    // Prevent throwing an error in the console when this test is executed. We fix this and the end of this test.
    const err = console.error;
    console.error = jest.fn();

    let actual;

    try {
      // @ts-ignore: mandatory props (test for non-typescript react projects)
      createCheckbox(defaultParams => ({
        children: "test"
      }));
    } catch (e: any) {
      actual = e.message;
    }

    const expected = "Please pass a 'name' prop to your <Checkbox> component.";

    expect(actual).toEqual(expected);

    console.error = err;
  });
});
