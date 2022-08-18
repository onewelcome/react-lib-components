import React, { ComponentPropsWithRef, Fragment } from "react";
import classes from "./BaseWizardSteps.module.scss";
import readyclasses from "../../readyclasses.module.scss";
import { Icon, Icons } from "../../Icon/Icon";

type StepState = "finished" | "current" | "future";

export interface Step {
  label: string;
  disabled?: boolean;
}

export interface Props extends Omit<ComponentPropsWithRef<"div">, "onClick"> {
  steps: Step[];
  currentStepNo: number;
  onClick?: (stepNo: number) => void;
  futureStepsClickable?: boolean;
  stepScreenReaderLabel: string;
}

export const BaseWizardSteps = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      steps,
      currentStepNo,
      onClick,
      futureStepsClickable = false,
      stepScreenReaderLabel,
      ...rest
    }: Props,
    ref
  ) => {
    const getStepState = (stepNo: number): StepState => {
      if (currentStepNo === stepNo) {
        return "current";
      } else if (stepNo < currentStepNo) {
        return "finished";
      }
      return "future";
    };

    const getStepContent = (stepState: StepState, index: number, disabled?: boolean) => {
      const stepNumberString = String(index + 1);
      if (stepState === "finished") {
        return disabled ? null : <Icon className={classes["checkmark"]} icon={Icons.Checkmark} />;
      } else {
        return (
          <Fragment>
            <span className={readyclasses["sr-only"]}>{stepScreenReaderLabel} </span>
            {stepNumberString}
          </Fragment>
        );
      }
    };

    const generatedSteps = steps.map((step, index) => {
      const stepState = getStepState(index);
      const disabledStyleClassName = step.disabled ? classes["disabled"] : "";
      const clickableClassName = futureStepsClickable ? classes["clickable"] : "";

      return (
        <button
          key={step.label.toLowerCase().replace(/\s/, "-")}
          disabled={
            step.disabled ||
            (stepState === "future" && !futureStepsClickable) ||
            stepState === "current"
          }
          aria-current={stepState === "current" ? "step" : undefined}
          onClick={() => onClick && onClick(index)}
          className={`${classes["wizard-element"]} ${classes[stepState]} ${clickableClassName} ${disabledStyleClassName}`}
        >
          <div className={classes["number-wrapper"]}>
            <span className={classes["number"]}>
              {getStepContent(stepState, index, step.disabled)}
            </span>
          </div>
          <div className={classes["two-line-text-overflow"]}>
            <span className={classes["label"]}>{step.label}</span>
          </div>
        </button>
      );
    });

    return (
      <div {...rest} ref={ref} className={classes["wizard"]}>
        {generatedSteps}
      </div>
    );
  }
);
