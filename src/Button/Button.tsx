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

import React, { ForwardRefRenderFunction } from "react";
import { BaseButton, Props as BaseButtonProps } from "./BaseButton";
import classes from "./Button.module.scss";

export interface Props extends BaseButtonProps {
  startIcon?: React.ReactNode | false;
  endIcon?: React.ReactNode | false;
  children?: React.ReactNode;
  variant?: "text" | "fill" | "outline";
}

const ButtonComponent: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  {
    children,
    variant = "fill",
    color = "primary",
    startIcon = false,
    endIcon = false,
    className,
    ...rest
  },
  ref
) => {
  const additionalClasses = [];

  if (startIcon || endIcon) {
    additionalClasses.push(classes["has-icon"]);
  }

  if (startIcon) {
    additionalClasses.push(classes["start-icon"]);
  }

  if (endIcon) {
    additionalClasses.push(classes["end-icon"]);
  }

  if (className) {
    additionalClasses.push(className);
  }

  return (
    <BaseButton
      {...rest}
      ref={ref}
      className={`${classes[color]} ${classes[variant]} ${additionalClasses.join(" ")}`}
    >
      {startIcon && <i>{startIcon}</i>}
      <span>{children}</span>
      {endIcon && <i>&nbsp;{endIcon}</i>}
    </BaseButton>
  );
};

export const Button = React.forwardRef(ButtonComponent);
