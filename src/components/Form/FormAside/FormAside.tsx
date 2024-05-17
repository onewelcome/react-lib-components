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

import React from "react";
import classes from "./FormAside.module.scss";
import { Stepper, Props as StepperProps } from "../../Stepper/Stepper";
import { Props as StepProps } from "../../Stepper/Step";

export interface FormStepProps extends StepProps {
  targetScrollViewId?: string;
}

export interface Props extends StepperProps {
  steps: FormStepProps[];
}

export const FormAside = ({ steps, direction, textPosition, ...rest }: Props) => {
  const stepper = steps.map(step => {
    if (step.targetScrollViewId && !step.onClick) {
      return {
        ...step,
        onClick: () => {
          try {
            document.getElementById(step.targetScrollViewId!)?.scrollIntoView();
          } catch (e) {
            throw new Error("Target element not found in the DOM.");
          }
        }
      };
    }
    return step;
  });

  return (
    <div className={classes["stepper"]}>
      <Stepper {...rest} steps={stepper} direction={direction} textPosition={textPosition} />
    </div>
  );
};
