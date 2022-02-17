import React, { useContext, useMemo } from "react";
import { Button } from "../../Button/Button";
import { WizardStateContext } from "../WizardStateProvider";
import { changeCurrentStepNo } from "../wizardStateReducer";

export interface Props extends React.HTMLProps<HTMLDivElement> {
  cancelButtonLabel: string;
  previousButtonLabel: string;
  nextButtonLabel: string;
  saveAndCloseButtonLabel: string;
}

export const WizardActions = ({ cancelButtonLabel, previousButtonLabel, nextButtonLabel, saveAndCloseButtonLabel }: Props) => {
  const {
    state: { steps, currentStepNo, onCancel, onNext, onPrevious, onSaveAndClose },
    dispatch,
  } = useContext(WizardStateContext);

  if (currentStepNo === undefined || steps === undefined) {
    return null;
  }

  /** Return -1 if there is no next step or next steps are disabled */
  const nextStepNo = steps.findIndex((step, stepNo) => stepNo > currentStepNo && !step.disabled);

  /** Return -1 if there is no prev step or prev steps are disabled */
  const previousStepNo = useMemo(() => {
    const reversedCurrentStepNo = steps.length - 1 - currentStepNo;
    const reversedPrevStepNo = [...steps].reverse().findIndex((step, stepNo) => stepNo > reversedCurrentStepNo && !step.disabled);
    if (reversedPrevStepNo > 0) {
      return steps.length - 1 - reversedPrevStepNo;
    }
    return -1;
  }, [currentStepNo]);

  const changeStepNo = (direction: "forward" | "backward") => {
    if (direction === "forward") {
      nextStepNo !== -1 && dispatch(changeCurrentStepNo(nextStepNo));
    } else {
      previousStepNo !== -1 && dispatch(changeCurrentStepNo(previousStepNo));
    }
  };

  //useCallbacks + make state not null!
  const onNextWrapper = () => {
    console.log("onNext");
    const result = onNext && onNext(currentStepNo); //@TODO: remove currentStepNo !== undefined
    result && changeStepNo("forward");
  };
  const onPreviousWrapper = () => {
    console.log("onPrev");
    onPrevious && onPrevious();
    changeStepNo("backward");
  };
  const onSaveAndCloseWrapper = () => {
    console.log("onSaveAndClose");
    onSaveAndClose && onSaveAndClose(currentStepNo);
  };

  return (
    <>
      <Button variant="text" onClick={onCancel}>
        {cancelButtonLabel}
      </Button>
      {previousStepNo !== -1 && (
        <Button variant="outline" onClick={onPreviousWrapper}>
          {previousButtonLabel}
        </Button>
      )}
      {nextStepNo !== -1 && (
        <Button variant="outline" onClick={onNextWrapper}>
          {nextButtonLabel}
        </Button>
      )}
      <Button onClick={onSaveAndCloseWrapper}>{saveAndCloseButtonLabel}</Button>
    </>
  );
};
