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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef, useRef } from "react";
import { Input, Type, Props as InputProps } from "../../Input/Input";
import classes from "./InputWrapper.module.scss";
import { Wrapper, WrapperProps } from "../Wrapper/Wrapper";
import { useWrapper } from "../../../../hooks/useWrapper";

interface PartialInputProps extends Partial<InputProps> {}

export interface Props extends ComponentPropsWithRef<"div">, WrapperProps {
  label: string;
  type: Type;
  name: string;
  inputProps?: PartialInputProps;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  success?: boolean;
}

const InputWrapperComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    type,
    name,
    inputProps,
    helperText,
    helperProps,
    value,
    className,
    error,
    success,
    onChange,
    onBlur,
    onFocus,
    disabled,
    ...rest
  }: Props,
  ref
) => {
  const { errorId, hasFocus, setHasFocus, helperId, labelId } = useWrapper();
  const { prefix, suffix } = inputProps ?? {};
  const input = useRef<HTMLInputElement>(null);
  const labelClasses = [classes["input-label"]];
  hasFocus && labelClasses.push(classes["focus"]);

  const inputWrapperClasses = [];
  inputProps?.wrapperProps?.className &&
    inputWrapperClasses.push(inputProps?.wrapperProps?.className);
  disabled && inputWrapperClasses.push(classes["disabled"]);

  return (
    <Wrapper
      {...rest}
      ref={ref}
      name={name}
      className={`${classes["input-wrapper"]} ${className ?? ""}`}
      labelProps={{
        id: labelId,
        className: labelClasses.join(" ")
      }}
      errorId={errorId}
      error={error}
      helperId={helperId}
      helperText={helperText}
      helperProps={{
        ...helperProps,
        className: `${classes["input-wrapper-helper"]} ${helperProps?.className ?? ""} `
      }}
      disabled={disabled}
    >
      <Input
        {...inputProps}
        prefix={prefix}
        suffix={suffix}
        wrapperProps={{
          className: inputWrapperClasses.join(" ")
        }}
        ref={inputProps?.ref || input}
        aria-labelledby={labelId}
        aria-describedby={error ? errorId : helperText ? helperId : undefined}
        onChange={onChange}
        onFocus={e => {
          onFocus?.(e);
          setHasFocus(true);
        }}
        onBlur={e => {
          onBlur?.(e);
          setHasFocus(false);
        }}
        className={`
         ${inputProps?.className ?? ""}`}
        name={name}
        success={success}
        error={error}
        id={name}
        value={value}
        type={type}
      />
    </Wrapper>
  );
};

export const InputWrapper = React.forwardRef(InputWrapperComponent);
