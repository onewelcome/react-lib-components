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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef, ReactNode } from "react";
import classes from "./FormHelperText.module.scss";
import { Typography } from "../../Typography/Typography";
import { FormElement } from "../form.interfaces";

export interface Props extends ComponentPropsWithRef<"div">, FormElement {
  children?: ReactNode;
  disabled?: boolean;
}

const FormHelperTextComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { children, error, disabled, className, ...rest }: Props,
  ref
) => {
  const classNames = [classes["form-helper-text"]];
  error && classNames.push(classes["error"]);
  disabled && classNames.push(classes["disabled"]);
  className && classNames.push(className);

  return (
    <Typography {...rest} ref={ref} variant="sub-text" tag="div" className={classNames.join(" ")}>
      {children}
    </Typography>
  );
};

export const FormHelperText = React.forwardRef(FormHelperTextComponent);
