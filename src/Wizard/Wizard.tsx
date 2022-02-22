import React, { useContext, useEffect } from 'react';
import { Step } from './BaseWizardSteps/BaseWizardSteps';
import { WizardStateContext, WizardStateProvider } from './WizardStateProvider';
import { changeCurrentStepNo, setWizardState } from './wizardStateReducer';

export type WizardMode = 'add' | 'edit';

export interface Props {
  steps: Step[];
  mode: WizardMode;
  initialStepNo?: number;
  onStepChange: (stepNo: number) => void;
  stepScreenReaderLabel: string;
  children: React.ReactNode;
}

const useSetWizardState = (steps: Step[], mode: WizardMode, stepScreenReaderLabel: string) => {
  const { dispatch } = useContext(WizardStateContext);

  useEffect(() => {
    dispatch(setWizardState(steps, mode, stepScreenReaderLabel));
  }, [steps, mode, stepScreenReaderLabel]);
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
    onStepChange(currentStepNo);
  }, [currentStepNo]);
};

const WizardContent = ({
  initialStepNo = 0,
  onStepChange,
  children,
  steps,
  mode,
  stepScreenReaderLabel,
}: Props) => {
  useSetWizardState(steps, mode, stepScreenReaderLabel);
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
