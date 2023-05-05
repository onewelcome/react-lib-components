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
  useEffect,
  useRef,
  useState
} from "react";
import { Input, Type, Props as InputProps } from "../../Input/Input";
import classes from "./InputWrapper.module.scss";
import { Wrapper, WrapperProps } from "../Wrapper/Wrapper";
import { useWrapper } from "../../../../hooks/useWrapper";
import { remToPx } from "../../../../util/helper";

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
}

const useLabelOffset = (
  input: React.RefObject<HTMLInputElement>,
  floatingLabelActive: boolean,
  prefix?: string
) => {
  const [labelOffset, setLabelOffset] = useState({});

  const resetLabelOffset = () => setLabelOffset({ left: undefined });

  useEffect(() => {
    if (input.current && prefix) {
      if (floatingLabelActive) {
        resetLabelOffset();
      } else {
        const spacingBetweenPrefixAndInput = 4;
        const prefixDifference =
          getComputedStyle(input.current).paddingLeft + spacingBetweenPrefixAndInput;
        setLabelOffset({ left: `${prefixDifference}px` });
      }
    }
  }, [input.current, prefix, floatingLabelActive]);

  return { labelOffset };
};

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
  const {
    errorId,
    floatingLabelActive,
    setFloatingLabelActive,
    hasFocus,
    setHasFocus,
    helperId,
    labelId
  } = useWrapper(value, inputProps?.placeholder, type);
  const { prefix, suffix } = inputProps || {};
  const input = useRef<HTMLInputElement>(null);
  const hasValueOrActiveFloatingLabel = !!value || floatingLabelActive;
  const helperIndent = window.innerWidth >= remToPx(30) ? remToPx(1.25) : remToPx(1);
  const { labelOffset } = useLabelOffset(
    (inputProps && (inputProps.ref as React.RefObject<HTMLInputElement>)) || input,
    floatingLabelActive,
    prefix
  );

  const labelClasses = [classes["input-label"]];
  hasFocus && labelClasses.push(classes["focus"]);

  const inputWrapperClasses = [];
  floatingLabelActive && inputWrapperClasses.push(classes["floating-label-active"]);
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
        className: labelClasses.join(" "),
        style: { ...labelOffset }
      }}
      floatingLabelActive={floatingLabelActive}
      errorId={errorId}
      error={error}
      helperId={helperId}
      helperText={helperText}
      helperProps={{
        ...helperProps,
        className: `${classes["input-wrapper-helper"]} ${helperProps?.className ?? ""} `
      }}
      helperIndent={helperIndent}
      disabled={disabled}
    >
      <Input
        {...inputProps}
        prefix={hasValueOrActiveFloatingLabel ? prefix : ""}
        suffix={hasValueOrActiveFloatingLabel ? suffix : ""}
        wrapperProps={{
          className: inputWrapperClasses.join(" ")
        }}
        ref={inputProps?.ref || input}
        aria-labelledby={labelId}
        aria-describedby={error ? errorId : helperId}
        onChange={onChange}
        onFocus={e => {
          onFocus?.(e);
          setHasFocus(true);
          setFloatingLabelActive(true);
        }}
        onBlur={e => {
          onBlur?.(e);
          setHasFocus(false);
          e.target.value ||
          e.target.placeholder ||
          inputProps?.placeholder?.length ||
          type === "datetime-local" ||
          type === "time" ||
          type === "date"
            ? setFloatingLabelActive(true)
            : setFloatingLabelActive(false);
        }}
        className={`${floatingLabelActive ? classes["floating-label"] : ""} ${
          inputProps?.className ?? ""
        }`}
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
