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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef } from "react";
import { Icon, Icons } from "../../Icon/Icon";
import { Props as HelperProps } from "../FormHelperText/FormHelperText";
import classes from "./Radio.module.scss";
import { useFormSelector } from "../../hooks/useFormSelector";
import { FormSelector } from "../form.interfaces";
import {
  FormSelectorWrapper,
  Props as FormSelectorWrapperProps
} from "../FormSelectorWrapper/FormSelectorWrapper";

export interface Props extends ComponentPropsWithRef<"input">, FormSelector {
  children: string;
  value: string;
  formSelectorWrapperProps?: FormSelectorWrapperProps;
  helperProps?: HelperProps;
}

const RadioComponent: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {
    children,
    disabled,
    className,
    value,
    name,
    helperText,
    parentErrorId,
    parentHelperId,
    error,
    errorMessage,
    checked = false,
    formSelectorWrapperProps,
    helperProps,
    onChange,
    ...rest
  }: Props,
  ref
) => {
  const { errorId, identifier, describedBy } = useFormSelector({
    name,
    helperText,
    parentErrorId,
    errorMessage,
    error,
    parentHelperId
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent) => {
    if (disabled) {
      return;
    }
    /** We have to clone the native event we got here and change the "target" property to the value. Otherwise, this regular event has "on" as it's event.target.value, which is useless. */
    const nativeEvent: any = event.nativeEvent || event;
    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);

    Object.defineProperty(clonedEvent, "target", {
      writable: true,
      value: { value: value }
    });

    onChange && onChange(clonedEvent);
  };

  /** Default return value is the default radio */
  return (
    <FormSelectorWrapper
      {...formSelectorWrapperProps}
      className={`${classes["radio-wrapper"]} ${className ?? ""}`}
      containerProps={{ className: classes["radio-container"] }}
      helperText={helperText}
      helperProps={helperProps}
      parentErrorId={parentErrorId}
      errorId={errorId}
      errorMessage={errorMessage}
      error={error}
      disabled={disabled}
      identifier={identifier}
    >
      <input
        {...rest}
        ref={ref}
        disabled={disabled}
        tabIndex={0}
        className={`${classes["native-input"]} ${error ? classes["error"] : ""}`}
        onChange={onChangeHandler}
        checked={checked}
        aria-invalid={error ? true : false}
        aria-checked={checked}
        aria-describedby={describedBy}
        name={name}
        value={value}
        id={`${identifier}-radio`}
        type="radio"
      />

      {checked && (
        <Icon
          className={`${classes["input"]} ${disabled ? classes["disabled"] : ""}`}
          icon={Icons.Radio}
        />
      )}
      {!checked && (
        <Icon
          className={`${classes["input"]} ${disabled ? classes["disabled"] : ""}`}
          icon={Icons.Circle}
        />
      )}

      <label onClick={onChangeHandler} htmlFor={`${identifier}-radio`}>
        {children}
      </label>
    </FormSelectorWrapper>
  );
};

export const Radio = React.forwardRef(RadioComponent);
