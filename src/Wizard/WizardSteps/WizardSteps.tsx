import React, { useContext } from 'react';
import { WizardStateContext } from '../WizardStateProvider';
import { BaseWizardSteps } from '../BaseWizardSteps/BaseWizardSteps';
import { changeCurrentStepNo } from '../wizardStateReducer';

export interface Props extends Omit<React.HTMLProps<HTMLDivElement>, 'onClick'> {
  onStepClick: (currentStepNo: number, selectedStepNo: number) => boolean;
}

export const WizardSteps = ({ onStepClick, ...restProps }: Props) => {
  const {
    state: { currentStepNo, mode, stepScreenReaderLabel, steps },
    dispatch,
  } = useContext(WizardStateContext);

  const onClick = (selectedStepNo: number) => {
    onStepClick(currentStepNo, selectedStepNo) && dispatch(changeCurrentStepNo(selectedStepNo));
  };

  return (
    <BaseWizardSteps
      {...restProps}
      onClick={onClick}
      steps={steps}
      currentStepNo={currentStepNo}
      stepScreenReaderLabel={stepScreenReaderLabel}
      futureStepsClickable={mode === 'edit'}
    />
  );
};
