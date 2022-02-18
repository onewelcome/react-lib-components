import React, { useContext } from "react";
import { WizardStateContext } from "../WizardStateProvider";
import { BaseWizardSteps } from "../BaseWizardSteps/BaseWizardSteps";
import { changeCurrentStepNo } from "../wizardStateReducer";

export interface Props {
  onStepClick: (stepNo: number) => boolean;
}

export const WizardSteps = ({ onStepClick }: Props) => {
  const {
    state: { currentStepNo, mode, stepScreenReaderLabel, steps },
    dispatch,
  } = useContext(WizardStateContext);

  const onClick = (stepNo: number) => {
    onStepClick(stepNo) && dispatch(changeCurrentStepNo(stepNo));
  };

  if (currentStepNo !== undefined && mode && stepScreenReaderLabel && steps) {
    return (
      <BaseWizardSteps
        onClick={onClick}
        steps={steps}
        currentStepNo={currentStepNo}
        stepScreenReaderLabel={stepScreenReaderLabel}
        futureStepsClickable={mode === "edit"}
      />
    );
  }
  return null;
};
