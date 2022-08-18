import React, { useEffect, useRef } from "react";
import { DialogTitle, Props } from "./DialogTitle";
import { render, getByText } from "@testing-library/react";

const initParams: Props = {
  id: "dialog-label",
  title: "Example title"
};

describe("DialogTitle", () => {
  it("renders without crashing", () => {
    const { container } = render(<DialogTitle {...initParams} />);

    const dialogTitleContainer = container.children[0];
    expect(dialogTitleContainer).toHaveClass("header");
    expect(getByText(container, initParams.title));
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

      return <DialogTitle title="test" id="test" data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
