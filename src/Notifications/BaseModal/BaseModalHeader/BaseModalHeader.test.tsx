import React, { useEffect, useRef } from "react";
import { BaseModalHeader, Props } from "./BaseModalHeader";
import { render, getByRole, getByTestId, getByText } from "@testing-library/react";
import { labelId } from "../BaseModalContext";
import userEvent from "@testing-library/user-event";

const additionalContent = "Additional content";
const initParams: Props = {
  id: labelId("modal"),
  title: "Example title",
  onClose: jest.fn(),
  children: <div data-testid="additional-content">{additionalContent}</div>
};

describe("BaseModalHeader", () => {
  it("renders without crashing", () => {
    const { container } = render(<BaseModalHeader {...initParams} />);
    const closeBtn = getByRole(container, "button");
    expect(initParams.onClose).toBeCalledTimes(0);

    userEvent.click(closeBtn);

    const dialogContentContainer = container.children[0];
    const titleContainer = getByText(container, initParams.title);
    expect(dialogContentContainer).toHaveClass("header");
    expect(titleContainer).toHaveAttribute("id", "modal-label");
    expect(getByTestId(container, "additional-content")).toHaveTextContent(additionalContent);
    expect(initParams.onClose).toBeCalledTimes(1);
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

      return (
        <BaseModalHeader id="test" title="test" onClose={jest.fn()} data-ref="testing" ref={ref} />
      );
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
