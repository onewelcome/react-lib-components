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
import classes from "./BaseButton.module.scss";

export interface Props extends ComponentPropsWithRef<"button"> {
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  color?: "primary" | "secondary" | "tertiary" | "default";
}

const BaseButtonComponent: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  { children, type = "button", className, ...rest },
  ref
) => {
  const validTypes = ["submit", "button", "reset"];

  if (!validTypes.includes(type))
    throw new Error(
      `You have entered an invalid button type. Expected 'submit', 'button' or 'reset' got ${type}`
    );

  return (
    <button
      {...rest}
      ref={ref}
      type={type}
      className={`${classes.button} ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};

export const BaseButton = React.forwardRef(BaseButtonComponent);
