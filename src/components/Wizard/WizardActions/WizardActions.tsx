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

import React, { Fragment, useContext, useMemo } from "react";
import { Button, Props as ButtonProps } from "../../Button/Button";
import { Step } from "../BaseWizardSteps/BaseWizardSteps";
import { WizardMode } from "../Wizard";
import { WizardStateContext } from "../WizardStateProvider";
import { changeCurrentStepNo } from "../wizardStateReducer";

export interface Props extends React.HTMLProps<HTMLDivElement> {
  actions: {
    previous: {
      label: string;
      onClick: () => void;
      previousButtonProps?: ButtonProps;
    };
    next: {
      label: string;
      onClick: (currentStepNo: number) => boolean;
      nextButtonProps?: ButtonProps;
    };
    saveAndClose: {
      label: string;
      onClick: (currentStepNo: number) => void;
      saveAndCloseButtonProps?: ButtonProps;
    };
  };
}

const calculateNextStepNo = (steps: Step[], currentStepNo: number) => () =>
  steps.findIndex((step, stepNo) => stepNo > currentStepNo && !step.disabled);

const calculatePrevStepNo = (steps: Step[], currentStepNo: number) => () => {
  const reversedCurrentStepNo = steps.length - 1 - currentStepNo;
  const reversedPrevStepNo = [...steps]
    .reverse()
    .findIndex((step, stepNo) => stepNo > reversedCurrentStepNo && !step.disabled);
  if (reversedPrevStepNo > 0) {
    return steps.length - 1 - reversedPrevStepNo;
  }
  return -1;
};

const useNextStepNo = (mode: WizardMode, currentStepNo: number, steps: Step[]) =>
  useMemo(calculateNextStepNo(steps, currentStepNo), [mode, currentStepNo, steps]);

const usePreviousStepNo = (mode: WizardMode, currentStepNo: number, steps: Step[]) =>
  useMemo(calculatePrevStepNo(steps, currentStepNo), [mode, currentStepNo, steps]);

export const WizardActions = ({ actions }: Props) => {
  const {
    state: { mode, steps, currentStepNo },
    dispatch
  } = useContext(WizardStateContext);
  const nextStepNo = useNextStepNo(mode, currentStepNo, steps);
  const hasNextStep = nextStepNo !== -1;
  const previousStepNo = usePreviousStepNo(mode, currentStepNo, steps);
  const hasPreviousStep = previousStepNo !== -1;
  const isLastStepOrEditMode = !hasNextStep || mode === "edit";

  const changeStepNo = (direction: "forward" | "backward") => {
    if (direction === "forward") {
      hasNextStep && dispatch(changeCurrentStepNo(nextStepNo));
    } else {
      hasPreviousStep && dispatch(changeCurrentStepNo(previousStepNo));
    }
  };

  const onNextWrapper = () => {
    actions.next.onClick(currentStepNo) && changeStepNo("forward");
  };

  const onPreviousWrapper = () => {
    actions.previous.onClick?.();
    changeStepNo("backward");
  };

  const onSaveAndCloseWrapper = () => {
    actions.saveAndClose.onClick(currentStepNo);
  };

  return (
    <Fragment>
      {hasPreviousStep && (
        <Button variant="outline" onClick={onPreviousWrapper}>
          {actions.previous.label}
        </Button>
      )}
      {hasNextStep && (
        <Button variant={mode === "edit" ? "outline" : "fill"} onClick={onNextWrapper}>
          {actions.next.label}
        </Button>
      )}
      {isLastStepOrEditMode && (
        <Button onClick={onSaveAndCloseWrapper}>{actions.saveAndClose.label}</Button>
      )}
    </Fragment>
  );
};
