import React, { Ref } from "react";
import { render } from "@testing-library/react";
import { withReadOnly } from "./withReadOnly";

const TestComponent = React.forwardRef((props, ref) => <input type="text" {...props} />);

describe("withReadOnly", () => {
  it("should render the wrapped component with readOnlyView attribute", () => {
    const WrappedComponent = withReadOnly(TestComponent);
    const { getByRole } = render(<WrappedComponent readOnlyView={true} />);

    const inputElement = getByRole("textbox");
    expect(inputElement).toHaveAttribute("data-readonlyview", "true");
  });

  it("should not require the input when readOnlyView is true", () => {
    const WrappedComponent = withReadOnly(TestComponent);
    const { getByRole } = render(<WrappedComponent readOnlyView={true} />);

    const inputElement = getByRole("textbox");
    expect(inputElement).not.toBeRequired();
  });

  it("should require the input when readOnlyView is false", () => {
    const WrappedComponent = withReadOnly(TestComponent);
    const { getByRole } = render(<WrappedComponent readOnlyView={false} required={true} />);

    const inputElement = getByRole("textbox");
    expect(inputElement).toBeRequired();
  });

  it("should return props with style and empty helperText when readOnlyView is true", () => {
    const WrappedComponent = withReadOnly(TestComponent);
    const { getByRole } = render(<WrappedComponent readOnlyView={true} helperText="random text" />);
    const inputElement = getByRole("textbox");

    expect(inputElement).toHaveStyle("pointer-events: none");
    expect(inputElement).toHaveStyle("user-select: text");
    expect(inputElement).toHaveAttribute("helperText", "");
  });

  it("should return props with component type when type is defined", () => {
    const WrappedComponent = withReadOnly(TestComponent);
    const { getByRole } = render(<WrappedComponent readOnlyView={true} type="text" />);
    const inputElement = getByRole("textbox");

    expect(inputElement).toHaveAttribute("type", "text");
  });
});
