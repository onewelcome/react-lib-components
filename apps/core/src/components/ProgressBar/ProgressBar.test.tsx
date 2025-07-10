import React, { useEffect, useRef } from "react";
import { ProgressBar, Props } from "./ProgressBar";
import { render } from "@testing-library/react";

const defaultParams: Props = {
  label: "Loading...",
  percentage: 0,
  accessibilityTitle: "Progress bar",
  caption: "One moment please..."
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
    const { ProgressBarComponent, getByText } = createProgressBar(defaultParams => ({
      ...defaultParams,
      className: "test"
    }));

    expect(ProgressBarComponent).toBeDefined();
    expect(ProgressBarComponent).toHaveClass(`test`, { exact: true });
    expect(ProgressBarComponent).toHaveAttribute("role", "progressbar");
    expect(ProgressBarComponent).toHaveAttribute("aria-valuemin", "0");
    expect(ProgressBarComponent).toHaveAttribute("aria-valuemax", "100");
    expect(ProgressBarComponent).toHaveAttribute("aria-valuenow", "0");
    expect(ProgressBarComponent).toHaveAttribute("title", "Progress bar");
    expect(getByText("Loading...")).toBeDefined();
    expect(getByText("Loading...")).toHaveClass("label");
    expect(getByText("One moment please...")).toBeDefined();
    expect(getByText("One moment please...")).toHaveClass("caption");
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

describe("ProgressBar should change styles depending on props", () => {
  it("should show a progress when 'completed' prop is provided", () => {
    const { ProgressBarComponent } = createProgressBar(defaultParams => ({
      ...defaultParams,
      completed: 40
    }));

    const bar = ProgressBarComponent.querySelector(".bar");
    expect(bar).toHaveStyle("width: 40%");
  });

  it("should show a loading effect when 'completed' prop is not provided", () => {
    const { ProgressBarComponent } = createProgressBar(defaultParams => ({
      ...defaultParams
    }));

    const bar = ProgressBarComponent.querySelector(".bar");
    expect(bar).toHaveClass("loading-state");
  });
});
