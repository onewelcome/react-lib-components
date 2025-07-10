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
import { KeyValuePair } from "../../../interfaces";
import { FormSelector } from "../form.interfaces";
import { FormHelperText, Props as FormHelperTextProps } from "../FormHelperText/FormHelperText";
import classes from "./FormSelectorWrapper.module.scss";
import { useInlineEditing } from "../../../context/InlineEditingContext";

export interface Props extends ComponentPropsWithRef<"div">, FormSelector {
  children?: ReactNode;
  nestedChildren?: ReactNode;
  containerProps?: ComponentPropsWithRef<"div"> & KeyValuePair;
  helperProps?: FormHelperTextProps;
  disabled?: boolean;
  errorId?: string;
  identifier?: string;
  required?: boolean;
}

const FormSelectorWrapperComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    children,
    className,
    nestedChildren,
    containerProps,
    helperProps,
    error,
    success,
    disabled,
    helperText,
    errorMessage,
    parentErrorId,
    errorId,
    identifier,
    required,
    ...rest
  }: Props,
  ref
) => {
  const helperRef = helperProps?.ref ?? createRef();
  const isInlineEditingFromContext = useInlineEditing();

  return (
    <div
      {...rest}
      ref={ref}
      className={`${error ? classes["error"] : ""} ${disabled ? classes["disabled"] : ""} ${
        className ?? ""
      }`}
    >
      <div {...containerProps}>
        {children}
        {isInlineEditingFromContext && required && <span className={classes["required"]}>*</span>}
      </div>
      {!isInlineEditingFromContext && (errorMessage || helperText || helperProps?.children) && (
        <FormHelperText
          {...helperProps}
          ref={helperRef}
          id={`${identifier}`}
          className={`${classes["helper-text"]} ${helperProps?.className ?? ""} ${
            error ? classes["error"] : ""
          }`}
        >
          {error && errorMessage ? (
            <span className={classes["error-message"]} id={errorId}>
              {errorMessage}
            </span>
          ) : (
            helperProps?.children || helperText
          )}
        </FormHelperText>
      )}
      {nestedChildren}
    </div>
  );
};

export const FormSelectorWrapper = React.forwardRef(FormSelectorWrapperComponent);
