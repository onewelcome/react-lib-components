/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import React, { useState } from "react";
import { Wizard, Props } from "./Wizard";
import {
  getAllByRole,
  getByText,
  render,
  getByTestId,
  queryByRole,
  findByText
} from "@testing-library/react";
import { WizardActions, Props as WizardActionProps } from "./WizardActions/WizardActions";
import { WizardSteps } from "./WizardSteps/WizardSteps";
import userEvent from "@testing-library/user-event";

type initWizardPropsType = Omit<Omit<Props, "onStepChange">, "children">;

const initWizardParams: initWizardPropsType = {
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
  initialStepNo: 0,
  mode: "add"
};

const initWizardStepsProps = {
  onStepClick: jest.fn()
};

const initWizardActionsProps: WizardActionProps = {
  actions: {
    cancel: {
      label: "Cancel",
      onClick: jest.fn()
    },
    next: {
      label: "Next",
      onClick: jest.fn()
    },
    previous: {
      label: "Previous",
      onClick: jest.fn()
    },
    saveAndClose: {
      label: "Save and close",
      onClick: jest.fn()
    }
  }
};

const renderWizard = (wizardProps?: initWizardPropsType) => {
  const customWizardProps = wizardProps ? wizardProps : initWizardParams;

  const Content = () => {
    const [step, setStep] = useState(customWizardProps.initialStepNo || 0);

    return (
      <Wizard {...customWizardProps} onStepChange={(stepNo: number) => setStep(stepNo)}>
        <WizardSteps data-testid="wizard-steps" {...initWizardStepsProps} />
        <div data-testid="wizard-content">Step {step + 1}</div>
        <div data-testid="wizard-actions">
          <WizardActions {...initWizardActionsProps} />
        </div>
      </Wizard>
    );
  };

  return render(<Content />);
};

const getWizardContent = (container: HTMLElement) => getByTestId(container, "wizard-content");

const getStepButtons = (container: HTMLElement) =>
  getAllByRole(getByTestId(container, "wizard-steps"), "button");

const getActionsButtons = (container: HTMLElement) => {
  const actionsContainer = getByTestId(container, "wizard-actions");
  const cancel = queryByRole(actionsContainer, "button", {
    name: initWizardActionsProps.actions.cancel.label
  });
  const next = queryByRole(actionsContainer, "button", {
    name: initWizardActionsProps.actions.next.label
  });
  const prev = queryByRole(actionsContainer, "button", {
    name: initWizardActionsProps.actions.previous.label
  });
  const save = queryByRole(actionsContainer, "button", {
    name: initWizardActionsProps.actions.saveAndClose.label
  });
  return { cancel, next, prev, save };
};

describe("Wizard", () => {
  it("renders without crashing", () => {
    const { container } = renderWizard();
    const { cancel, prev, next, save } = getActionsButtons(container);
    const stepButtons = getStepButtons(container);
    const wizardContent = getWizardContent(container);

    expect(stepButtons).toHaveLength(4);
    expect(getByText(stepButtons[0], "1")).toBeDefined();
    expect(getByText(stepButtons[1], "2")).toBeDefined();
    expect(getByText(stepButtons[2], "3")).toBeDefined();
    expect(getByText(stepButtons[3], "4")).toBeDefined();
    expect(wizardContent).toHaveTextContent("Step 1");
    expect(cancel).toBeDefined();
    expect(next).toBeDefined();
    expect(prev).toBeNull();
    expect(save).toBeNull();
  });

  it("should be able to click over whole wizard via action buttons", async () => {
    const { container } = renderWizard();
    const { next } = getActionsButtons(container);
    const wizardContent = getWizardContent(container);
    (
      initWizardActionsProps.actions.next.onClick as jest.MockedFunction<
        typeof initWizardActionsProps.actions.next.onClick
      >
    ).mockReturnValue(true);

    await findByText(wizardContent, "Step 1");
    next && (await userEvent.click(next));
    await findByText(wizardContent, "Step 2");
    next && (await userEvent.click(next));
    await findByText(wizardContent, "Step 4");
    const { save, prev, cancel } = getActionsButtons(container);
    save && (await userEvent.click(save));
    expect(initWizardActionsProps.actions.saveAndClose.onClick).toBeCalledWith(3);
    prev && (await userEvent.click(prev));
    await findByText(wizardContent, "Step 2");
    prev && (await userEvent.click(prev));
    await findByText(wizardContent, "Step 1");
    cancel && (await userEvent.click(cancel));
    expect(initWizardActionsProps.actions.cancel.onClick).toBeCalledTimes(1);
  });

  it("should not be able to click over whole wizard via steps buttons in add mode", async () => {
    const { container } = renderWizard();
    const { next } = getActionsButtons(container);
    const stepsButtons = getStepButtons(container);
    const wizardContent = getWizardContent(container);
    (
      initWizardActionsProps.actions.next.onClick as jest.MockedFunction<
        typeof initWizardActionsProps.actions.next.onClick
      >
    ).mockReturnValue(true);
    (
      initWizardStepsProps.onStepClick as jest.MockedFunction<
        typeof initWizardStepsProps.onStepClick
      >
    ).mockReturnValue(true);

    await userEvent.click(stepsButtons[1]);
    await userEvent.click(stepsButtons[2]);
    await userEvent.click(stepsButtons[3]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(0);
    await findByText(wizardContent, "Step 1");

    next && (await userEvent.click(next));
    next && (await userEvent.click(next));
    await findByText(wizardContent, "Step 4");
    await userEvent.click(stepsButtons[2]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(0);
    await userEvent.click(stepsButtons[1]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(1);
    await findByText(wizardContent, "Step 2");
    await userEvent.click(stepsButtons[0]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(2);
    await findByText(wizardContent, "Step 1");
  });

  it("should be able to click over whole wizard via steps buttons in edit mode", async () => {
    const { container } = renderWizard({ ...initWizardParams, mode: "edit" });
    const stepsButtons = getStepButtons(container);
    const wizardContent = getWizardContent(container);
    (
      initWizardStepsProps.onStepClick as jest.MockedFunction<
        typeof initWizardStepsProps.onStepClick
      >
    ).mockReturnValue(true);

    await userEvent.click(stepsButtons[1]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(1);
    await findByText(wizardContent, "Step 2");
    await userEvent.click(stepsButtons[2]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(1);
    await userEvent.click(stepsButtons[3]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(2);
    await findByText(wizardContent, "Step 4");

    await userEvent.click(stepsButtons[2]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(2);
    await userEvent.click(stepsButtons[1]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(3);
    await findByText(wizardContent, "Step 2");
    await userEvent.click(stepsButtons[0]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(4);
    await findByText(wizardContent, "Step 1");
  });
});
