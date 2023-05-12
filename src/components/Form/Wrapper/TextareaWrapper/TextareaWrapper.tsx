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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef, useState } from "react";
import classes from "./TextareaWrapper.module.scss";
import { Wrapper, WrapperProps } from "../Wrapper/Wrapper";
import { Textarea, Props as TextareaProps } from "../../Textarea/Textarea";
import { useWrapper } from "../../../../hooks/useWrapper";

export interface Props
  extends Omit<
      ComponentPropsWithRef<"div">,
      "onFocus" | "onChange" | "onBlur" | "onMouseEnter" | "onMouseLeave"
    >,
    Omit<WrapperProps, "onFocus" | "onChange" | "onBlur" | "onMouseEnter" | "onMouseLeave"> {
  placeholder?: string;
  textareaProps?: TextareaProps;
  value: string;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
}

const TextareaWrapperComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    name,
    error,
    success,
    value,
    label,
    placeholder,
    textareaProps,
    helperProps,
    onChange,
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    disabled,
    ...rest
  }: Props,
  ref
) => {
  const { errorId, hasFocus, setHasFocus, helperId, labelId } = useWrapper();
  const [hover, setHover] = useState(false);

  const wrapperClasses: string[] = [];

  hasFocus && wrapperClasses.push(classes["focus"]);
  hover && wrapperClasses.push(classes["hover"]);
  disabled && wrapperClasses.push(classes["disabled"]);
  error && wrapperClasses.push(classes["error"]);

  return (
    <Wrapper
      {...rest}
      ref={ref}
      disabled={disabled}
      labelProps={{
        id: labelId,
        className: `${classes["textarea-label"]} ${wrapperClasses.join(" ")}`
      }}
      name={name}
      label={label}
      helperId={helperId}
      helperProps={{
        ...helperProps,
        className: classes["textarea-helper-text"]
      }}
      error={error}
      errorId={errorId}
    >
      <Textarea
        {...textareaProps}
        error={error}
        aria-labelledby={label && labelId}
        aria-describedby={error ? errorId : helperId}
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        success={success}
        onChange={onChange}
        onFocus={e => {
          onFocus?.(e);
          setHasFocus(true);
        }}
        onBlur={e => {
          onBlur?.(e);
          setHasFocus(false);
        }}
        onMouseEnter={e => {
          onMouseEnter?.(e);
          setHover(true);
        }}
        onMouseLeave={e => {
          onMouseLeave?.(e);
          setHover(false);
        }}
        className={`${classes["textarea"]} ${error ? classes["error"] : ""}`}
        wrapperProps={{
          className: `${wrapperClasses.join(" ")} ${classes["textarea-wrapper"]}`
        }}
      />
    </Wrapper>
  );
};

export const TextareaWrapper = React.forwardRef(TextareaWrapperComponent);
