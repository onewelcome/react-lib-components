import React, { ComponentPropsWithRef, useContext } from "react";
import { WizardStateContext } from "../WizardStateProvider";
import { BaseWizardSteps } from "../BaseWizardSteps/BaseWizardSteps";
import { changeCurrentStepNo } from "../wizardStateReducer";

export interface Props extends ComponentPropsWithRef<"div"> {
  onStepClick: (currentStepNo: number, selectedStepNo: number) => boolean;
}

export const WizardSteps = React.forwardRef<HTMLDivElement, Props>(
  ({ onStepClick, ...rest }: Props, ref) => {
    const {
      state: { currentStepNo, mode, steps },
      dispatch
    } = useContext(WizardStateContext);

    const onClick = (selectedStepNo: number) => {
      onStepClick(currentStepNo, selectedStepNo) && dispatch(changeCurrentStepNo(selectedStepNo));
    };

    return (
      <BaseWizardSteps
        {...rest}
        ref={ref}
        onClick={onClick}
        steps={steps}
        currentStepNo={currentStepNo}
        futureStepsClickable={mode === "edit"}
      />
    );
  }
);
