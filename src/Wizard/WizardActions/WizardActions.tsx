import React, { useContext, useMemo } from 'react';
import { Button } from '../../Button/Button';
import { Step } from '../BaseWizardSteps/BaseWizardSteps';
import { WizardMode } from '../Wizard';
import { WizardStateContext } from '../WizardStateProvider';
import { changeCurrentStepNo } from '../wizardStateReducer';

export interface Props extends React.HTMLProps<HTMLDivElement> {
  cancelButtonLabel: string;
  previousButtonLabel: string;
  nextButtonLabel: string;
  saveAndCloseButtonLabel: string;
  onCancel: () => void;
  onNext: (currentStepNo: number) => boolean;
  onPrevious?: () => void;
  onSaveAndClose: (currentStepNo: number) => void;
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

export const WizardActions = ({
  onCancel,
  onNext,
  onPrevious,
  onSaveAndClose,
  cancelButtonLabel,
  previousButtonLabel,
  nextButtonLabel,
  saveAndCloseButtonLabel,
}: Props) => {
  const {
    state: { mode, steps, currentStepNo },
    dispatch,
  } = useContext(WizardStateContext);
  const nextStepNo = useNextStepNo(mode, currentStepNo, steps);
  const hasNextStep = nextStepNo !== -1;
  const previousStepNo = usePreviousStepNo(mode, currentStepNo, steps);
  const hasPreviousStep = previousStepNo !== -1;
  const isLastStepOrEditMode = !hasNextStep || mode === 'edit';

  const changeStepNo = (direction: 'forward' | 'backward') => {
    if (direction === 'forward') {
      hasNextStep && dispatch(changeCurrentStepNo(nextStepNo));
    } else {
      hasPreviousStep && dispatch(changeCurrentStepNo(previousStepNo));
    }
  };

  const onNextWrapper = () => {
    onNext(currentStepNo) && changeStepNo('forward');
  };

  const onPreviousWrapper = () => {
    onPrevious && onPrevious();
    changeStepNo('backward');
  };

  const onSaveAndCloseWrapper = () => {
    onSaveAndClose(currentStepNo);
  };

  return (
    <>
      <Button variant="text" onClick={onCancel}>
        {cancelButtonLabel}
      </Button>
      {hasPreviousStep && (
        <Button variant="outline" onClick={onPreviousWrapper}>
          {previousButtonLabel}
        </Button>
      )}
      {hasNextStep && (
        <Button variant="outline" onClick={onNextWrapper}>
          {nextButtonLabel}
        </Button>
      )}
      {isLastStepOrEditMode && (
        <Button onClick={onSaveAndCloseWrapper}>{saveAndCloseButtonLabel}</Button>
      )}
    </>
  );
};
