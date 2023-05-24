/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import React, { ForwardRefRenderFunction, ComponentPropsWithRef, Fragment } from "react";
import classes from "./BaseWizardSteps.module.scss";
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
}

const BaseWizardStepsComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { steps, currentStepNo, onClick, futureStepsClickable = false, ...rest }: Props,
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
      return <Fragment>{stepNumberString}</Fragment>;
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
        onClick={() => onClick?.(index)}
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
};

export const BaseWizardSteps = React.forwardRef(BaseWizardStepsComponent);
