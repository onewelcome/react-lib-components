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

  it("should disable the input when readOnlyView is true", () => {
    const WrappedComponent = withReadOnly(TestComponent);
    const { getByRole } = render(<WrappedComponent readOnlyView={true} disabled={false} />);

    const inputElement = getByRole("textbox");
    expect(inputElement).toBeDisabled();
  });

  it("should not disable the input when readOnlyView is false", () => {
    const WrappedComponent = withReadOnly(TestComponent);
    const { getByRole } = render(<WrappedComponent readOnlyView={false} disabled={false} />);

    const inputElement = getByRole("textbox");
    expect(inputElement).not.toBeDisabled();
  });

  it("should not require the input when readOnlyView is true", () => {
    const WrappedComponent = withReadOnly(TestComponent);
    const { getByRole } = render(<WrappedComponent readOnlyView={true} required={true} />);

    const inputElement = getByRole("textbox");
    expect(inputElement).not.toBeRequired();
  });

  it("should require the input when readOnlyView is false", () => {
    const WrappedComponent = withReadOnly(TestComponent);
    const { getByRole } = render(<WrappedComponent readOnlyView={false} required={true} />);

    const inputElement = getByRole("textbox");
    expect(inputElement).toBeRequired();
  });
});
