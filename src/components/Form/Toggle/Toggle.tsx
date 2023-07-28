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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef } from "react";
import { Checkbox, Props as CheckboxProps } from "../Checkbox/Checkbox";
import classes from "./Toggle.module.scss";

export interface Props
  extends ComponentPropsWithRef<"input">,
    Omit<CheckboxProps, "indeterminate" | "errorMessage" | "error" | "label"> {
  label?: string | React.ReactElement;
  labelPosition?: "left" | "right";
  hideLabel?: boolean;
  labelOverflow?: "wrap" | "nowrap";
  version?: "emphasis" | "neutral";
  spacing?: "packed" | "between";
}

const ToggleComponent: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {
    checked,
    disabled,
    helperProps,
    className,
    label,
    labelPosition = "right",
    hideLabel = false,
    labelOverflow = "nowrap",
    version = "emphasis",
    spacing = "packed",
    ...rest
  }: Props,
  ref
) => {
  const classNames = [classes["toggle-wrapper"]];
  className && classNames.push(className);
  classNames.push(classes[`toggle-wrapper--${labelPosition}`]);
  hideLabel && classNames.push(classes["toggle-wrapper--hide-label"]);
  classNames.push(classes[`toggle-wrapper--${labelOverflow}`]);
  classNames.push(classes[`toggle-wrapper--${version}`]);
  classNames.push(classes[`toggle-wrapper--${spacing}`]);
  disabled && classNames.push(classes["toggle-wrapper--disabled"]);

  return (
    <div className={classNames.join(" ")}>
      <Checkbox
        {...rest}
        ref={ref}
        checked={checked}
        className={classes["checkbox"]}
        helperProps={{ className: classes["toggle-helper"], ...helperProps }}
        disabled={disabled}
        label={label}
      >
        <span
          data-toggle="true"
          aria-hidden="true"
          className={`${classes["toggle"]} ${checked ? classes["checked"] : ""} ${
            disabled ? classes["disabled"] : ""
          } `}
        ></span>
      </Checkbox>
    </div>
  );
};

export const Toggle = React.forwardRef(ToggleComponent);
