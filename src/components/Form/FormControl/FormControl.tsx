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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef, ReactElement } from "react";
import classes from "./FormControl.module.scss";

export interface Props extends ComponentPropsWithRef<"div"> {
  children?: ReactElement | ReactElement[] | null;
  grid?: 1 | 2 | 3;
  align?: "top" | "start" | "middle" | "center" | "bottom" | "end" | "stretch";
  disabled?: boolean;
}

const FormControlComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { children, disabled, className, grid, align = "center", ...rest }: Props,
  ref
) => {
  const renderChildren = () =>
    React.Children.map(children, child => {
      if (!child) {
        return null;
      }

      const childElement = React.cloneElement(child, {
        disabled: child.props.disabled !== undefined ? child.props.disabled : disabled
      });

      if (grid && grid > 1) {
        return <div className={`${classes["col-" + grid]} ${classes.column}`}>{childElement}</div>;
      }

      return childElement;
    });

  return (
    <div
      {...rest}
      ref={ref}
      data-formcontrol
      className={`${classes["form-control"]} ${className ? className : ""} ${
        grid && grid > 1 ? `${classes.grid} ${classes["grid-" + grid]}` : ""
      } ${classes[align]}`}
    >
      {renderChildren()}
    </div>
  );
};

export const FormControl = React.forwardRef(FormControlComponent);
