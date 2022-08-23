import React, { useEffect, useRef, useState, Fragment } from "react";
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
});

describe("Should render all different types of inputs", () => {
  it("should render a text input and can bind values", async () => {
    let changedValue = "";

    const { findByLabelText } = render(
      <CreateInputComponent type="text" onValueChange={value => (changedValue = value)} />
    );

    const input = await findByLabelText(/Test/);

    input.focus();

    userEvent.keyboard("testing");

    expect(changedValue).toBe("testing");
  });

  it("should render a email input", async () => {
    let changedValue = "";

    const { findByLabelText } = render(
      <CreateInputComponent type="email" onValueChange={value => (changedValue = value)} />
    );

    const input = await findByLabelText(/Test/);

    input.focus();

    userEvent.keyboard("testing@testing.com");

    expect(changedValue).toBe("testing@testing.com");
  });

  it("should render a tel input", async () => {
    let changedValue = "";

    const { findByLabelText } = render(
      <CreateInputComponent type="tel" onValueChange={value => (changedValue = value)} />
    );

    const input = await findByLabelText(/Test/);

    input.focus();

    userEvent.keyboard("06123456789");

    expect(changedValue).toBe("06123456789");
  });

  it("should render a number input", async () => {
    let changedValue = "";

    const { findByLabelText } = render(
      <CreateInputComponent type="number" onValueChange={value => (changedValue = value)} />
    );

    const input = await findByLabelText(/Test/);

    input.focus();

    userEvent.keyboard("1234567890");

    expect(changedValue).toBe("1234567890");
  });

  it("should render a password input", () => {
    const { input } = createInput(defaultParams => ({ ...defaultParams, type: "password" }));

    expect(input).toHaveAttribute("type", "password");
  });

  it("should render a search input", async () => {
    let changedValue = "";

    const { findByLabelText } = render(
      <CreateInputComponent type="search" onValueChange={value => (changedValue = value)} />
    );

    const input = await findByLabelText(/Test/);

    input.focus();

    userEvent.keyboard("example");

    expect(changedValue).toBe("example");
  });

  it("should render a time input", async () => {
    let changedValue = "";

    const { findByLabelText } = render(
      <CreateInputComponent type="time" onValueChange={value => (changedValue = value)} />
    );

    const input = await findByLabelText(/Test/);

    input.focus();

    userEvent.keyboard("1234");

    expect(changedValue).toBe("12:34");
  });

  it("should render a url input", async () => {
    let changedValue = "";

    const { findByLabelText } = render(
      <CreateInputComponent type="url" onValueChange={value => (changedValue = value)} />
    );

    const input = await findByLabelText(/Test/);

    input.focus();

    userEvent.keyboard("https://www.onewelcome.com");

    expect(changedValue).toBe("https://www.onewelcome.com");
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
  it("fires event handlers", () => {
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

    input.focus();

    expect(input).toHaveFocus();

    userEvent.keyboard("test");

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
});
