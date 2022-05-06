import React, { Fragment, useContext, useEffect } from 'react';
import { Step } from './BaseWizardSteps/BaseWizardSteps';
import { WizardStateContext, WizardStateProvider } from './WizardStateProvider';
import { setWizardState } from './wizardStateReducer';

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

const useStepChanging = (onStepChange: (stepNo: number) => void) => {
  const {
    state: { currentStepNo },
  } = useContext(WizardStateContext);

  useEffect(() => {
    onStepChange(currentStepNo);
  }, [currentStepNo]);
};

const WizardContent = ({ steps, mode, stepScreenReaderLabel, onStepChange, children }: Props) => {
  useSetWizardState(steps, mode, stepScreenReaderLabel);
  useStepChanging(onStepChange);

  return <Fragment>{children}</Fragment>;
};

export const Wizard = (props: Props) => {
  const { steps, initialStepNo: currentStepNo = 0, mode, stepScreenReaderLabel } = props;
  return (
    <WizardStateProvider initialState={{ steps, currentStepNo, mode, stepScreenReaderLabel }}>
      <WizardContent {...props} />
    </WizardStateProvider>
  );
};
