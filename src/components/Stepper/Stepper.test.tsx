import React from "react";
import { Stepper, Props } from "./Stepper";
import { render } from "@testing-library/react";

const defaultParams: Props = {
  steps: [],
  direction: "horizontal"
};

const createStepper = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Stepper {...parameters} data-testid="Stepper" />);
  const StepperComponent = queries.getByTestId("Stepper");

  return {
    ...queries,
    StepperComponent
  };
};

describe("<Stepper/> should render", () => {
  it("should render without crashing", () => {
    const { StepperComponent } = createStepper();

    expect(StepperComponent).toBeDefined();
  });

  it("should render given steps", () => {
    const { StepperComponent, getAllByText } = createStepper(params => ({
      ...params,
      steps: [
        {
          label: "Step 1",
          status: "waiting",
          caption: "Caption"
        },
        {
          label: "Step 2",
          status: "current",
          caption: "Caption"
        },
        {
          label: "Step 3",
          status: "done",
          caption: "Caption"
        },
        {
          label: "Step 4",
          status: "error",
          caption: "Caption"
        }
      ]
    }));

    expect(StepperComponent).toBeDefined();

    expect(getAllByText(/Step/i)).toHaveLength(4);
    expect(getAllByText(/Caption/i)).toHaveLength(4);
  });

  it("should render the horizontal stepper", () => {
    const { StepperComponent, getAllByText } = createStepper(params => ({
      ...params,
      direction: "horizontal"
    }));

    expect(StepperComponent).toBeDefined();
    expect(StepperComponent.classList.contains("horizontal")).toBe(true);
  });

  it("should render the vertical stepper", () => {
    const { StepperComponent } = createStepper(params => ({
      ...params,
      direction: "vertical"
    }));

    expect(StepperComponent).toBeDefined();
    expect(StepperComponent.classList.contains("vertical")).toBe(true);
  });
});
