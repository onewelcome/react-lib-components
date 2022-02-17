import React, { useContext, useEffect } from "react";
import { Step } from "./BaseWizardSteps/BaseWizardSteps";
import { WizardStateContext, WizardStateProvider } from "./WizardStateProvider";
import { changeCurrentStepNo, setWizardState } from "./wizardStateReducer";

export type WizardMode = "add" | "edit";

export interface BaseProps {
  steps: Step[];
  mode: WizardMode;
  stepScreenReaderLabel: string;
  onCancel: () => void;
  onNext: () => boolean; //maybe think about better name? Like onBeforeNext, onNextInterception
  onPrevious?: () => void; //maybe not necessary?
  onSaveAndClose: () => boolean; //maybe think about better name?
}

export interface Props extends BaseProps {
  initialStepNo: number;
  onStepChange: (stepNo: number) => void;
  children: React.ReactNode;
}

const useSetWizardState = (wizardStateProps: BaseProps) => {
  const { dispatch } = useContext(WizardStateContext);

  useEffect(() => {
    dispatch(setWizardState(wizardStateProps));
  }, [wizardStateProps.steps, wizardStateProps.mode]);
};

const useStepChanging = (initialStepNo: number, onStepChange: (stepNo: number) => void) => {
  const {
    state: { currentStepNo },
    dispatch,
  } = useContext(WizardStateContext);

  useEffect(() => {
    dispatch(changeCurrentStepNo(initialStepNo));
  }, []);
  useEffect(() => {
    currentStepNo !== undefined && onStepChange(currentStepNo);
  }, [currentStepNo]);
};

const WizardContent = ({ initialStepNo, onStepChange, children, ...restProps }: Props) => {
  useSetWizardState(restProps);
  useStepChanging(initialStepNo, onStepChange);

  return <>{children}</>;
};

export const Wizard = (props: Props) => {
  return (
    <WizardStateProvider>
      <WizardContent {...props} />
    </WizardStateProvider>
  );
};
