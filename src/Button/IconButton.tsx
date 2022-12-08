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

import React, { ForwardRefRenderFunction, Fragment } from "react";
import { BaseButton, Props as BaseButtonProps } from "./BaseButton";
import classes from "./IconButton.module.scss";
import readyclasses from "../readyclasses.module.scss";

export interface Props extends BaseButtonProps {
  children?: React.ReactNode;
  iconSize?: "s" | "m" | "l";
  variant?: "text" | "fill" | "outline";
  className?: string;
  title?: string;
}

export const IconButtonComponent: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  { children, color = "primary", variant = "text", iconSize = "m", title, className, ...rest },
  ref
) => {
  if (!title) {
    console.error("Please make sure to specify a 'title' prop to your IconButton component! ");
  }

  const iconButtonClasses = [
    classes["icon-button"],
    classes[variant],
    classes[color],
    classes["button-" + iconSize]
  ];

  if (className) {
    iconButtonClasses.push(className);
  }

  return (
    <BaseButton {...rest} ref={ref} className={iconButtonClasses.join(" ")}>
      <Fragment>
        {children}
        <span className={readyclasses["sr-only"]}>{title}</span>
      </Fragment>
    </BaseButton>
  );
};

export const IconButton = React.forwardRef(IconButtonComponent);
