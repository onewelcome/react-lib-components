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

/** The empty className property on FormHelperText is on purpose! We want to basically "filter" out the className from helperProps because we're adding this to the surrounding div. This makes it so also the errormessage receives this styling. */

import React, { ComponentPropsWithRef, ReactChild } from "react";
import classes from "./FormGroup.module.scss";
import { FormHelperText, Props as HelperProps } from "../FormHelperText/FormHelperText";
import { Icon, Icons } from "../../Icon/Icon";

export interface Props extends ComponentPropsWithRef<"div"> {
  children: ReactChild[] | ReactChild;
  error?: boolean;
  errorMessageIcon?: Icons;
  errorMessageIconPosition?: "before" | "after";
  errorMessage?: string;
  errorId?: string;
  helperIndent?: number;
  helperText?: string;
  helperId?: string;
  helperProps?: HelperProps;
  disabled?: boolean;
}

export const FormGroup = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      className,
      error,
      errorMessage,
      errorId,
      errorMessageIcon,
      errorMessageIconPosition = "before",
      helperText,
      helperId,
      helperProps,
      helperIndent,
      ...rest
    }: Props,
    ref
  ) => {
    return (
      <div
        {...rest}
        ref={ref}
        className={`${classes["form-group"]} ${error ? classes.error : ""} ${className ?? ""}`}
      >
        {children}

        {(helperText || (errorMessage && error)) && (
          <div
            style={{ marginLeft: `${helperIndent}px` }}
            className={`${classes["default-helper"]} ${
              helperProps?.className ? helperProps.className : ""
            }`}
          >
            {((helperText && !error) || (helperText && error && !errorMessage)) && (
              <FormHelperText {...helperProps} className={""} id={helperId}>
                {(helperProps && helperProps.children) || helperText}
              </FormHelperText>
            )}
            {error && errorMessage && (
              <span className={classes["error-message"]}>
                <span className={classes.message} id={errorId}>
                  {errorMessageIcon && errorMessageIconPosition === "before" && (
                    <Icon
                      className={`${classes["error-icon"]} ${classes["error-icon-before"]}`}
                      icon={errorMessageIcon}
                    />
                  )}
                  {errorMessage}
                  {errorMessageIcon && errorMessageIconPosition === "after" && (
                    <Icon
                      className={`${classes["error-icon"]} ${classes["error-icon-after"]}`}
                      icon={errorMessageIcon}
                    />
                  )}
                </span>
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);
