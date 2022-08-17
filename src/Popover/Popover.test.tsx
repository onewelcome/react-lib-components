import React, { Fragment, useRef } from "react";
import { Popover, Props } from "./Popover";
import { render } from "@testing-library/react";
import { usePosition } from "../hooks/usePosition";

const createPopover = (params?: (defaultParams: Props) => Props) => {
  const Component = () => {
    const relativeElement = useRef<HTMLButtonElement>(null);
    const elementToBePositioned = useRef<HTMLDivElement>(null);

    const defaultParams: Props = {
      children: (
        <ul>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
      ),
      show: false,
      placement: { vertical: "top", horizontal: "left" }
    };
    let parameters: Props = defaultParams;

    if (params) {
      parameters = params(defaultParams);
    }

    const { top, left, bottom, right, calculatePosition } = usePosition({
      elementToBePositioned: elementToBePositioned,
      relativeElement: relativeElement,
      ...parameters
    });

    return (
      <Fragment>
        <button data-testid="button" onClick={calculatePosition} ref={relativeElement}>
          Test
        </button>
        <Popover
          {...defaultParams}
          data-testid="popover"
          style={{ top: top, left: left, bottom: bottom, right: right }}
          ref={elementToBePositioned}
        >
          Test
        </Popover>
      </Fragment>
    );
  };

  const queries = render(<Component />);
  const button = queries.getByTestId("button");
  const popover = queries.getByTestId("popover");

  /** Let the hacking begin */
  Object.defineProperty(button, "offsetHeight", { configurable: true, value: 500 });
  Object.defineProperty(button, "offsetWidth", { configurable: true, value: 500 });

  Object.defineProperty(window, "innerHeight", {
    configurable: true,
    value: 1000
  });
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    value: 1000
  });

  Object.defineProperty(popover, "offsetHeight", { configurable: true, value: 100 });
  Object.defineProperty(popover, "offsetWidth", { configurable: true, value: 100 });

  return {
    ...queries,
    popover,
    button
  };
};

describe("Popover should render", () => {
  it("renders without crashing and has default left and top attributes", () => {
    const { popover } = createPopover();

    expect(popover).toBeTruthy();
  });
});
