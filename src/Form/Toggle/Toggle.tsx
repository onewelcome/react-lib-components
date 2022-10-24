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
import { Checkbox, Props as CheckboxProps } from "../Checkbox/Checkbox";
import classes from "./Toggle.module.scss";

export interface Props
  extends ComponentPropsWithRef<"input">,
    Omit<CheckboxProps, "indeterminate" | "errorMessage" | "error" | "children" | "label"> {
  children: string;
}

export const Toggle = React.forwardRef<HTMLInputElement, Props>(
  ({ children, checked, disabled, helperProps, ...rest }: Props, ref) => (
    <div className={classes["toggle-wrapper"]}>
      <Checkbox
        {...rest}
        ref={ref}
        checked={checked}
        className={classes["checkbox"]}
        helperProps={{ className: classes["toggle-helper"], ...helperProps }}
        disabled={disabled}
        label={children}
      >
        <span
          data-toggle
          aria-hidden="true"
          className={`${classes["toggle"]} ${checked ? classes["checked"] : ""} ${
            disabled ? classes["disabled"] : ""
          } `}
        ></span>
      </Checkbox>
    </div>
  )
);
