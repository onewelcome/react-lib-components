import React from "react";
import { BaseWizardSteps, Props } from "./BaseWizardSteps";
import { getAllByRole, getByText, queryByText, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const initParams: Props = {
  steps: [
    {
      label: "Step 1"
    },
    {
      label: "Step 2"
    },
    {
      label: "Step 3",
      disabled: true
    },
    {
      label: "Step 4"
    }
  ],
  currentStepNo: 1,
  onClick: jest.fn()
};

const getStepButtons = (container: HTMLElement) => getAllByRole(container, "button");

describe("BaseWizardSteps", () => {
  it("renders without crashing", async () => {
    const { container } = render(<BaseWizardSteps {...initParams} />);
    const buttons = getStepButtons(container);
    expect(initParams.onClick).toHaveBeenCalledTimes(0);

    expect(buttons).toHaveLength(4);
    expect(buttons[0]).not.toHaveAttribute("aria-current");
    expect(buttons[0].querySelector(".checkmark")).toBeDefined();
    expect(buttons[1]).toHaveAttribute("aria-current", "step");
    expect(getByText(buttons[1], "2")).toBeDefined();
    expect(buttons[2]).not.toHaveAttribute("aria-current");
    expect(getByText(buttons[2], "3")).toBeDefined();
    expect(buttons[3]).not.toHaveAttribute("aria-current");
    expect(getByText(buttons[3], "4")).toBeDefined();

    await userEvent.click(buttons[0]);
    expect(initParams.onClick).toHaveBeenCalledTimes(1);

    await userEvent.click(buttons[1]);
    await userEvent.click(buttons[2]);
    await userEvent.click(buttons[3]);
    expect(initParams.onClick).toHaveBeenCalledTimes(1);
  });

  it("should allow to click on future and prev steps but not on current and disabled steps when futureStepsClickable is enabled", async () => {
    const { container } = render(<BaseWizardSteps {...initParams} futureStepsClickable />);
    const buttons = getStepButtons(container);
    expect(initParams.onClick).toHaveBeenCalledTimes(0);

    await userEvent.click(buttons[3]);
    expect(initParams.onClick).toHaveBeenCalledTimes(1);
    await userEvent.click(buttons[0]);
    expect(initParams.onClick).toHaveBeenCalledTimes(2);

    await userEvent.click(buttons[1]);
    await userEvent.click(buttons[2]);
    expect(initParams.onClick).toHaveBeenCalledTimes(2);
  });

  it("should not render checkmark or number when prev steps is disabled", () => {
    const { container } = render(<BaseWizardSteps {...initParams} currentStepNo={3} />);
    const buttons = getStepButtons(container);

    expect(queryByText(buttons[2], "3")).toBeNull();
  });
});
