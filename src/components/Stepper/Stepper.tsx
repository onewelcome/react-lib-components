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

import React, { ComponentPropsWithRef } from "react";
import { Step, Props as StepProps } from "./Step";
import classes from "./Stepper.module.scss";

export interface Props extends ComponentPropsWithRef<"div"> {
  steps: StepProps[];
  direction: "horizontal" | "vertical";
  textPosition?: "bottom" | "right";
}

export const gapBetweenStepsInRem = 0.5;

export const Stepper = ({
  steps,
  direction = "horizontal",
  textPosition,
  className,
  ...rest
}: Props) => {
  const additionalClasses = [];
  direction === "horizontal" && additionalClasses.push(classes["horizontal"]);
  textPosition === "bottom" && additionalClasses.push(classes["text-bottom"]);
  className && additionalClasses.push(className);

  return (
    <div {...rest} className={`${classes["stepper"]} ${additionalClasses.join(" ")}`}>
      {steps.map((step, index) => (
        <Step
          {...step}
          key={step.label.toLowerCase().replace(/\s/, "-")}
          index={index}
          direction={direction}
          lastStep={index + 1 === steps.length}
          textPosition={textPosition}
        />
      ))}
    </div>
  );
};
