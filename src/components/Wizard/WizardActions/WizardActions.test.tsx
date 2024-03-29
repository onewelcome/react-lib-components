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

import React, { useReducer } from "react";
import { WizardActions, Props } from "./WizardActions";
import { queryByRole, render } from "@testing-library/react";
import { WizardStateContext, Props as ProviderProps } from "../WizardStateProvider";
import { WizardStateType, reducer, changeCurrentStepNo } from "../wizardStateReducer";
import userEvent from "@testing-library/user-event";

const initWizardState: WizardStateType = {
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
  currentStepNo: 0,
  mode: "add"
};

const initParams: Props = {
  actions: {
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

const renderWizardActions = (initReducerState?: WizardStateType, props?: Props) => {
  const wizardState = initReducerState ? initReducerState : initWizardState;
  const actionsProps = props ? props : initParams;
  const dispatch = jest.fn();

  const Provider = ({ children }: ProviderProps) => {
    const [state] = useReducer(reducer, wizardState);
    return (
      <WizardStateContext.Provider value={{ state, dispatch }}>
        {children}
      </WizardStateContext.Provider>
    );
  };

  const renderObj = render(
    <Provider initialState={initWizardState}>
      <WizardActions {...actionsProps} />
    </Provider>
  );

  return {
    ...renderObj,
    dispatch
  };
};

const getActionsButtons = (container: HTMLElement) => {
  const next = queryByRole(container, "button", { name: initParams.actions.next.label });
  const prev = queryByRole(container, "button", { name: initParams.actions.previous.label });
  const save = queryByRole(container, "button", { name: initParams.actions.saveAndClose.label });
  return { next, prev, save };
};

describe("WizardActions", () => {
  it("renders without crashing", async () => {
    const { container, dispatch } = renderWizardActions();
    const { prev, next, save } = getActionsButtons(container);
    (
      initParams.actions.next.onClick as jest.MockedFunction<typeof initParams.actions.next.onClick>
    ).mockReturnValueOnce(true);

    expect(next).toBeDefined();
    next && (await userEvent.click(next));
    expect(prev).toBeNull();
    expect(save).toBeNull();

    expect(initParams.actions.next.onClick).toHaveBeenCalledWith(0);
    expect(dispatch).toBeCalledWith(changeCurrentStepNo(1));
  });

  it("should allow going prev and forward when there are prev step and next step (next step is disabled but next one can be used)", async () => {
    const { container, dispatch } = renderWizardActions({ ...initWizardState, currentStepNo: 1 });
    const { prev, next, save } = getActionsButtons(container);
    (
      initParams.actions.next.onClick as jest.MockedFunction<typeof initParams.actions.next.onClick>
    ).mockReturnValueOnce(true);

    expect(prev).toBeDefined();
    prev && (await userEvent.click(prev));
    expect(initParams.actions.previous.onClick).toBeCalled();
    expect(dispatch).toBeCalledWith(changeCurrentStepNo(0));

    expect(next).toBeDefined();
    next && (await userEvent.click(next));
    expect(initParams.actions.next.onClick).toHaveBeenCalledWith(1);
    expect(dispatch).toBeCalledWith(changeCurrentStepNo(3));

    expect(save).toBeNull();
  });

  it("should render save button but not next button when current step is the last step", async () => {
    const { container } = renderWizardActions({ ...initWizardState, currentStepNo: 3 });
    const { prev, next, save } = getActionsButtons(container);

    expect(prev).toBeDefined();
    expect(next).toBeNull();
    expect(save).toBeDefined();

    save && (await userEvent.click(save));
    expect(initParams.actions.saveAndClose.onClick).toHaveBeenCalledWith(3);
  });

  it("should show save and close when next steps are disabled", async () => {
    const steps = [
      initWizardState.steps[0],
      { ...initWizardState.steps[1], disabled: true },
      { ...initWizardState.steps[2], disabled: true }
    ];
    const { container } = renderWizardActions({
      ...initWizardState,
      steps: steps,
      currentStepNo: 0
    });
    const { prev, next, save } = getActionsButtons(container);

    expect(prev).toBeNull();
    expect(next).toBeNull();
    expect(save).toBeDefined();

    save && (await userEvent.click(save));
    expect(initParams.actions.saveAndClose.onClick).toHaveBeenCalledWith(0);
  });

  it("should show save button on middle step when mode is `edit`", async () => {
    const { container } = renderWizardActions({ ...initWizardState, mode: "edit" });
    const { prev, next, save } = getActionsButtons(container);

    expect(prev).toBeNull();
    expect(next).toBeDefined();
    expect(save).toBeDefined();

    save && (await userEvent.click(save));
    expect(initParams.actions.saveAndClose.onClick).toHaveBeenCalledWith(0);
  });

  it("should not allow going forward when dev returns false on onNext callback", async () => {
    const { container, dispatch } = renderWizardActions();
    const { next } = getActionsButtons(container);
    (
      initParams.actions.next.onClick as jest.MockedFunction<typeof initParams.actions.next.onClick>
    ).mockReturnValueOnce(false);

    next && (await userEvent.click(next));
    expect(initParams.actions.next.onClick).toHaveBeenCalledWith(0);
    expect(dispatch).not.toBeCalled();
  });
});
