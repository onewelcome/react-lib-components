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

import React, { ComponentPropsWithRef, ForwardRefRenderFunction } from "react";
import { Icon, Icons } from "../Icon/Icon";
import classes from "./Step.module.scss";

export type StepStatus = "waiting" | "current" | "done" | "error";

export interface Props extends ComponentPropsWithRef<"button"> {
  status: StepStatus;
  label: string;
  caption?: string;
  index: number;
  disabled?: boolean;
  direction: "horizontal" | "vertical";
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

export const StepComponent: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  { label, caption, status, index, direction, disabled, ...rest }: Props,
  ref
) => {
  const additionalClasses = [];

  status === "waiting" && additionalClasses.push(classes["waiting"]);
  status === "current" && additionalClasses.push(classes["current"]);
  status === "done" && additionalClasses.push(classes["done"]);
  status === "error" && additionalClasses.push(classes["error"]);
  direction === "vertical" && additionalClasses.push(classes["vertical"]);
  return (
    <button
      {...rest}
      ref={ref}
      disabled={disabled}
      aria-current={status === "current" ? "step" : undefined}
      className={`${classes["step-wrapper"]} ${additionalClasses.join(" ")}`}
    >
      <div className={classes["step-content"]}>
        <div className={classes["step"]}>{getStepContent(index, status)}</div>
        <span className={classes["label"]}>
          {label}
          <span className={classes["caption"]}>{caption}</span>
        </span>
      </div>
    </button>
  );
};

export const Step = React.forwardRef(StepComponent);
