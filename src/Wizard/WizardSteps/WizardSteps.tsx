import React, { useContext } from "react";
import { WizardStateContext } from "../WizardStateProvider";
import { BaseWizardSteps, Step } from "../BaseWizardSteps/BaseWizardSteps";
import { changeCurrentStepNo } from "../wizardStateReducer";

export const WizardSteps = () => {
  const {
    state: { currentStepNo, mode, stepScreenReaderLabel, steps },
    dispatch,
  } = useContext(WizardStateContext);

  const wrapOnClickActions = (steps: Step[]): Step[] => {
    return [...steps].map((step) => ({
      ...step,
      onClick: (stepNo: number) => {
        dispatch(changeCurrentStepNo(stepNo));
        step.onClick && step.onClick(stepNo, step);
      },
    }));
  }; //@TODO: useMemo

  if (currentStepNo !== undefined && mode && stepScreenReaderLabel && steps) {
    return (
      <BaseWizardSteps
        steps={wrapOnClickActions(steps)}
        currentStepNo={currentStepNo}
        stepScreenReaderLabel={stepScreenReaderLabel}
        futureStepsClickable={mode === "edit"}
      />
    );
  }
  return null;
};
