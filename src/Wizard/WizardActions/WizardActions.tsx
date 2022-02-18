import React, { useContext, useMemo } from "react";
import { Button } from "../../Button/Button";
import { WizardStateContext } from "../WizardStateProvider";
import { changeCurrentStepNo } from "../wizardStateReducer";

export interface Props extends React.HTMLProps<HTMLDivElement> {
  cancelButtonLabel: string;
  previousButtonLabel: string;
  nextButtonLabel: string;
  saveAndCloseButtonLabel: string;
  onCancel: () => void;
  onNext: (stepNo: number) => boolean; //maybe think about better name? Like onBeforeNext, onNextInterception
  onPrevious?: () => void; //maybe not necessary?
  onSaveAndClose: (stepNo: number) => void; //maybe think about better name?
}

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

  const nextStepNo = useMemo(
    () => steps.findIndex((step, stepNo) => stepNo > currentStepNo && !step.disabled),
    [mode, currentStepNo, steps]
  );
  const hasNextStep = nextStepNo !== -1;

  const previousStepNo = useMemo(() => {
    const reversedCurrentStepNo = steps.length - 1 - currentStepNo;
    const reversedPrevStepNo = [...steps].reverse().findIndex((step, stepNo) => stepNo > reversedCurrentStepNo && !step.disabled);
    if (reversedPrevStepNo > 0) {
      return steps.length - 1 - reversedPrevStepNo;
    }
    return -1;
  }, [mode, currentStepNo, steps]);
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
    const result = onNext && onNext(currentStepNo);
    result && changeStepNo("forward");
  };
  const onPreviousWrapper = () => {
    onPrevious && onPrevious();
    changeStepNo("backward");
  };
  const onSaveAndCloseWrapper = () => {
    onSaveAndClose && onSaveAndClose(currentStepNo);
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
      {isLastStepOrEditMode && <Button onClick={onSaveAndCloseWrapper}>{saveAndCloseButtonLabel}</Button>}
    </>
  );
};
