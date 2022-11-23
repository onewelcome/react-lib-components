import React, { useEffect, useRef } from "react";
import { ProgressBar, Props } from "./ProgressBar";
import { render } from "@testing-library/react";

const defaultParams: Props = {
  placeholderText: "Loading"
};

const createProgressBar = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<ProgressBar {...parameters} data-testid="ProgressBar" />);
  const ProgressBarComponent = queries.getByTestId("ProgressBar");

  return {
    ...queries,
    ProgressBarComponent
  };
};

describe("ProgressBar should render", () => {
  it("renders without crashing", () => {
    const { ProgressBarComponent } = createProgressBar(defaultParams => ({
      ...defaultParams,
      className: "test"
    }));

    expect(ProgressBarComponent).toBeDefined();
    expect(ProgressBarComponent).toHaveClass(`test`, { exact: true });
  });
});

describe("ref should work", () => {
  it("should give back the proper data prop, this also checks if the component propagates ...rest properly", () => {
    const ExampleComponent = ({
      propagateRef
    }: {
      propagateRef: (ref: React.RefObject<HTMLElement>) => void;
    }) => {
      const ref = useRef(null);

      useEffect(() => {
        propagateRef(ref);
      }, [ref]);

      return <ProgressBar {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    const container = document.createElement("div");
    render(<ExampleComponent propagateRef={refCheck} />, { container });
  });
});
