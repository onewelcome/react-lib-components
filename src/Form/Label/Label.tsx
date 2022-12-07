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
import classes from "./Label.module.scss";
import readyclasses from "../../readyclasses.module.scss";

export interface Props extends ComponentPropsWithRef<"label"> {
  children?: ReactNode;
}

const LabelComponent: ForwardRefRenderFunction<HTMLLabelElement, Props> = (
  { children, className, hidden = false, ...rest }: Props,
  ref
) => {
  return (
    <label
      {...rest}
      ref={ref}
      className={`${hidden ? readyclasses["sr-only"] : ""} ${classes["label"]} ${className ?? ""}`}
    >
      {children}
    </label>
  );
};

export const Label = React.forwardRef(LabelComponent);
