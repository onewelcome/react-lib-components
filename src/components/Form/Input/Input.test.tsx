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

import React, { useEffect, useRef, useState, Fragment, act } from "react";
import { Input, Props, Type } from "./Input";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Label } from "../Label/Label";

const defaultParams: Props = {
  name: "input",
  type: "text"
};

const createInput = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Input {...parameters} data-testid="input" />);
  const input = queries.getByTestId("input");

  return {
    ...queries,
    input
  };
};

const CreateInputComponent = ({
  onValueChange,
  type
}: {
  onValueChange: (value: string) => void;
  type: Type;
}) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue !== "") {
      onValueChange(inputValue);
    }
  }, [inputValue]);

  return (
    <Fragment>
      <Label htmlFor="sample-input">Test</Label>
      <Input
        name="sample_input"
        type={type}
        id="sample-input"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </Fragment>
  );
};

describe("Input should render", () => {
  it("renders without crashing and has a name and type", () => {
    const { input } = createInput();
    expect(input).toBeTruthy();
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

      return <Input {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe("Should have the appropriate attributes", () => {
  it("is disabled and has a class", () => {
    const { input } = createInput(defaultParams => ({
      ...defaultParams,
      disabled: true,
      className: "classname"
    }));

    expect(input).toHaveAttribute("disabled");
    expect(input).toHaveClass("classname");
  });

  it("should render an input with spellcheck enabled", () => {
    const { input } = createInput(defaultParams => ({ ...defaultParams, spellCheck: true }));

    expect(input).toHaveAttribute("spellcheck", "true");
  });

  it("should render an input with spellcheck disabled by default", () => {
    const { input } = createInput(defaultParams => ({ ...defaultParams }));

    expect(input).toHaveAttribute("spellcheck", "false");
  });
});

describe("Should render all different types of inputs", () => {
  it.each([
    ["text", "testing", "testing"],
    ["email", "testing@testing.com", "testing@testing.com"],
    ["tel", "06123456789", "06123456789"],
    ["number", "1234567890", "1234567890"],
    ["search", "example", "example"],
    ["time", "1234", "12:34"],
    ["url", "https://www.onewelcome.com", "https://www.onewelcome.com"]
  ])(
    "renders a %p input with %p as a value",
    async (type: string, value: string, result: string) => {
      let changedValue = "";

      const { findByLabelText } = render(
        <CreateInputComponent type={type as Type} onValueChange={value => (changedValue = value)} />
      );

      const input = await findByLabelText(/Test/);

      await act(() => {
        input.focus();
      });

      await userEvent.keyboard(value);

      expect(changedValue).toBe(result);
    }
  );

  it("should render a password input", () => {
    const { input } = createInput(defaultParams => ({ ...defaultParams, type: "password" }));

    expect(input).toHaveAttribute("type", "password");
  });

  it("should render a datetime input", async () => {
    let changedValue = "";

    const { findByLabelText } = render(
      <CreateInputComponent type="datetime-local" onValueChange={value => (changedValue = value)} />
    );

    const input = await findByLabelText(/Test/);

    const testValue = "2019-03-29T12:34";
    fireEvent.change(input, { target: { value: testValue } });

    expect(changedValue).toBe(testValue);
  });

  it("should be hidden", () => {
    const { input } = createInput(defaultParams => ({ ...defaultParams, type: "hidden" }));

    expect(input.parentElement).toHaveClass("hidden");
    expect(input).toHaveAttribute("type", "hidden");
  });
});

describe("It should execute the listeners", () => {
  it("fires event handlers", async () => {
    const onChangeHandler = jest.fn();
    const onKeyUpHandler = jest.fn();
    const onKeyDownHandler = jest.fn();

    const { input } = createInput(defaultParams => ({
      ...defaultParams,
      type: "text",
      onKeyUp: onKeyUpHandler,
      onKeyDown: onKeyDownHandler,
      onChange: onChangeHandler
    }));

    await act(() => {
      input.focus();
    });

    expect(input).toHaveFocus();

    await userEvent.keyboard("test");

    expect(onKeyUpHandler).toHaveBeenCalled();
    expect(onKeyDownHandler).toHaveBeenCalled();
    expect(onChangeHandler).toHaveBeenCalled();
  });
});

describe("It should render prefix and suffix ", () => {
  it("renders prefix and suffix", () => {
    const prefix = "http://";
    const suffix = ".com";
    const { getByText } = createInput(defaultParams => ({
      ...defaultParams,
      prefix,
      suffix
    }));

    expect(getByText(prefix)).toBeDefined();
    expect(getByText(suffix)).toBeDefined();
  });

  it("renders prefix and suffix when they are elements", () => {
    const prefix = <span data-testid="prefix">http://</span>;
    const suffix = <span data-testid="suffix">.com</span>;
    const { getByTestId } = createInput(defaultParams => ({
      ...defaultParams,
      prefix,
      suffix
    }));

    const prefixElement = getByTestId("prefix");
    const suffixElement = getByTestId("suffix");

    expect(prefixElement).toBeInTheDocument();
    expect(suffixElement).toBeInTheDocument();
  });

  it("error icon should be visible with suffix", () => {
    const suffix = ".com";
    const { input, getByText } = createInput(defaultParams => ({
      ...defaultParams,
      error: true,
      suffix
    }));

    expect(input.querySelector("icon-warning")).toBeDefined();
    expect(getByText(suffix)).toBeDefined();
  });

  it("success icon should be visible", () => {
    const { input } = createInput(defaultParams => ({
      ...defaultParams,
      success: true
    }));
    const icon = input.querySelector(".icon-checkmark-circle-alt");
    expect(input.querySelector(".success")).toBeDefined();
    expect(icon).toBeDefined();
  });
});
