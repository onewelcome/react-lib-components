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
import { FormGroup, Props as FormGroupProps } from "../../FormGroup/FormGroup";
import { Label, Props as LabelProps } from "../../Label/Label";
import classes from "./Wrapper.module.scss";
import { Props as HelperProps } from "../../FormHelperText/FormHelperText";
import { FormElement } from "../../form.interfaces";

export interface Props extends ComponentPropsWithRef<"div">, FormGroupProps {
  children: ReactElement | ReactElement[];
  helperIndent?: number;
  label?: string;
  labelProps?: LabelProps;
  name: string;
  /** This does NOT add validation! It simply adds an asterix on the Label! */
  required?: boolean;
  innerClassName?: string;
}

/** For components that extend this component we create an interface (InputWrapper, SelectWrapper, etc.) */
export interface WrapperProps extends Omit<FormElement, "success"> {
  errorMessage?: string;
  helperText?: string;
  helperProps?: HelperProps;
  errorMessageProps?: ComponentPropsWithRef<"span">;
  label?: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
}

const WrapperComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    children,
    className,
    error,
    errorMessage,
    errorId,
    errorMessageIcon,
    errorMessageIconPosition,
    errorMessageProps,
    helperText,
    helperId,
    required,
    helperProps,
    helperIndent,
    labelProps,
    label,
    disabled,
    name,
    innerClassName,
    ...rest
  }: Props,
  ref
) => {
  const renderChildren = () =>
    React.Children.map(children, child =>
      React.cloneElement(child, {
        disabled
      })
    );

  const labelClasses = [classes["form-input-label"]];

  labelProps?.className && labelClasses.push(labelProps.className);
  required && labelClasses.push(classes["required"]);
  error && labelClasses.push(classes["error"]);
  disabled && labelClasses.push(classes["disabled"]);

  return (
    <div {...rest} ref={ref} className={`${classes.wrapper} ${className ?? ""}`}>
      <FormGroup
        disabled={disabled}
        error={error}
        errorMessage={errorMessage}
        errorId={errorId}
        errorMessageIcon={errorMessageIcon}
        errorMessageIconPosition={errorMessageIconPosition}
        errorMessageProps={errorMessageProps}
        helperText={helperText}
        helperId={helperId}
        helperProps={helperProps}
      >
        <div className={` ${innerClassName ? innerClassName : ""}`}>
          {label && (
            <Label
              {...labelProps}
              className={`${classes.label} ${labelClasses.join(" ")}`}
              htmlFor={name}
            >
              {label}
            </Label>
          )}
          {renderChildren()}
        </div>
      </FormGroup>
    </div>
  );
};

export const Wrapper = React.forwardRef(WrapperComponent);
