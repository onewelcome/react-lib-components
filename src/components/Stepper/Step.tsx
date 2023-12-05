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

import React, { CSSProperties, ComponentPropsWithRef, ForwardRefRenderFunction } from "react";
import { Icon, Icons } from "../Icon/Icon";
import classes from "./Step.module.scss";
import { gapBetweenStepsInRem } from "./Stepper";

export type StepStatus = "waiting" | "current" | "done" | "error";

export interface Props extends Omit<ComponentPropsWithRef<"div">, "onClick"> {
  status: StepStatus;
  label: string;
  caption?: string;
  index?: number;
  lastStep?: boolean;
  disabled?: boolean;
  direction?: "horizontal" | "vertical";
  textPosition?: "bottom" | "right";
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
}

const getStepContent = (index: number, status: StepStatus) => {
  switch (status) {
    case "waiting":
      return String(index + 1);
    case "current":
      return String(index + 1);
    case "done":
      return <Icon icon={Icons.Checkmark} />;
    case "error":
      return "!";
  }
};

const getStepMaxWidth = (isHorizontal: boolean, lastStep: boolean, index: number) => {
  if (isHorizontal && lastStep) {
    const percentage = 100 / (index + 1);
    const gapSize = index * gapBetweenStepsInRem;
    return `calc(${percentage}% - ${gapSize}rem)`;
  }
};

export const StepComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    label,
    caption,
    status,
    index,
    direction,
    disabled,
    lastStep,
    onClick,
    textPosition,
    ...rest
  }: Props,
  ref
) => {
  const stepIndex = index ?? 0;
  const additionalClasses = [classes[status]];
  const additionalStyles: CSSProperties = {};
  const isHorizontal = direction === "horizontal";
  const isTextBottom = textPosition === "bottom";
  const hasCaption = !!caption;

  additionalClasses.push(isHorizontal ? classes["horizontal"] : classes["vertical"]);
  disabled && additionalClasses.push(classes["disabled"]);
  isTextBottom && additionalClasses.push(classes["text-bottom"]);
  lastStep && additionalClasses.push(classes["last-step"]);
  hasCaption && additionalClasses.push(classes["has-caption"]);

  additionalStyles["maxWidth"] = getStepMaxWidth(isHorizontal, !!lastStep, index!);

  return (
    <div
      style={additionalStyles}
      className={`${classes["step-wrapper"]} ${additionalClasses.join(" ")}`}
      {...rest}
    >
      <div aria-hidden className={classes["step"]} onClick={onClick}>
        {getStepContent(stepIndex, status)}
      </div>
      <button
        aria-current={status === "current" ? "step" : undefined}
        className={classes["label"]}
        disabled={disabled}
        onClick={onClick}
      >
        <span className={classes["label-inner-wrapper"]}>
          {label}{" "}
          {!lastStep && isHorizontal && !isTextBottom && (
            <div className={`${classes["stepper-line"]} ${classes["stepper-line-extender"]}`}></div>
          )}
        </span>
        <span className={classes["caption"]}>{caption}</span>
      </button>
      {!lastStep && <div className={classes["stepper-line"]}></div>}
    </div>
  );
};

export const Step = React.forwardRef(StepComponent);
