import React, { Fragment, useContext, useEffect } from "react";
import { Step } from "./BaseWizardSteps/BaseWizardSteps";
import { WizardStateContext, WizardStateProvider } from "./WizardStateProvider";
import { setWizardState } from "./wizardStateReducer";

export type WizardMode = "add" | "edit";

export interface Props {
  steps: Step[];
  mode: WizardMode;
  initialStepNo?: number;
  onStepChange: (stepNo: number) => void;
  children: React.ReactNode;
}

const useSetWizardState = (steps: Step[], mode: WizardMode) => {
  const { dispatch } = useContext(WizardStateContext);

  useEffect(() => {
    dispatch(setWizardState(steps, mode));
  }, [steps, mode]);
};

const useStepChanging = (onStepChange: (stepNo: number) => void) => {
  const {
    state: { currentStepNo }
  } = useContext(WizardStateContext);

  useEffect(() => {
    onStepChange(currentStepNo);
  }, [currentStepNo]);
};

const WizardContent = ({ steps, mode, onStepChange, children }: Props) => {
  useSetWizardState(steps, mode);
  useStepChanging(onStepChange);

  return <Fragment>{children}</Fragment>;
};

export const Wizard = (props: Props) => {
  const { steps, initialStepNo: currentStepNo = 0, mode } = props;
  return (
    <WizardStateProvider initialState={{ steps, currentStepNo, mode }}>
      <WizardContent {...props} />
    </WizardStateProvider>
  );
};
