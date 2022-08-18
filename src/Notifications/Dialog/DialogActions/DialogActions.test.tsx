import React, { useEffect, useRef } from "react";
import { DialogActions, Props } from "./DialogActions";
import { render } from "@testing-library/react";

const initParams: Props = {
  align: "right",
  children: "Content"
};

describe("DialogActions", () => {
  it("renders without crashing", () => {
    const { container } = render(<DialogActions {...initParams} />);

    const dialogActionsContainer = container.children[0];
    expect(dialogActionsContainer).toHaveClass("actions");
    expect(dialogActionsContainer).toHaveTextContent(initParams.children as string);
  });

  it("should align items to left", () => {
    const { container } = render(<DialogActions {...initParams} align="left" />);

    const dialogActionsContainer = container.children[0];
    expect(dialogActionsContainer).toHaveClass("actions", "left");
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

      return <DialogActions id="test" children="test" open={true} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
