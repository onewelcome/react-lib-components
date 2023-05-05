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

import React, {
  ForwardRefRenderFunction,
  ComponentPropsWithRef,
  createRef,
  ReactNode
} from "react";
import { Icon, Icons } from "../../Icon/Icon";
import { KeyValuePair } from "../../../interfaces";
import { FormSelector } from "../form.interfaces";
import { FormHelperText, Props as FormHelperTextProps } from "../FormHelperText/FormHelperText";
import classes from "./FormSelectorWrapper.module.scss";

export interface Props extends ComponentPropsWithRef<"div">, FormSelector {
  children?: ReactNode;
  nestedChildren?: ReactNode;
  containerProps?: ComponentPropsWithRef<"div"> & KeyValuePair;
  helperProps?: FormHelperTextProps;
  disabled?: boolean;
  errorId?: string;
  identifier?: string;
}

const FormSelectorWrapperComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    children,
    className,
    nestedChildren,
    containerProps,
    helperProps,
    error,
    disabled,
    helperText,
    errorMessage,
    parentErrorId,
    errorId,
    identifier,
    ...rest
  }: Props,
  ref
) => {
  const helperRef = helperProps?.ref || createRef();

  return (
    <div
      {...rest}
      ref={ref}
      className={`${error ? classes["error"] : ""} ${disabled ? classes["disabled"] : ""} ${
        className ?? ""
      }`}
    >
      <div {...containerProps}>{children}</div>
      {(helperText || helperProps?.children) && (!error || parentErrorId || !errorMessage) && (
        <FormHelperText
          {...helperProps}
          ref={helperRef}
          id={`${identifier}`}
          className={`${classes["helper-text"]} ${helperProps?.className ?? ""} ${
            error ? classes["error"] : ""
          }`}
        >
          {helperProps?.children || helperText}
        </FormHelperText>
      )}
      {errorMessage && !parentErrorId && error && (
        <span className={classes["error-message"]}>
          <Icon className={classes["error-icon"]} icon={Icons.Error} />
          <span id={errorId}>{errorMessage}</span>
        </span>
      )}
      {nestedChildren}
    </div>
  );
};

export const FormSelectorWrapper = React.forwardRef(FormSelectorWrapperComponent);
