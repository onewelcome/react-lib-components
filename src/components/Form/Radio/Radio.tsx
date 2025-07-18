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
import { useFormSelector } from "../../../hooks/useFormSelector";
import { FormSelector } from "../form.interfaces";
import {
  FormSelectorWrapper,
  Props as FormSelectorWrapperProps
} from "../FormSelectorWrapper/FormSelectorWrapper";
import { withReadOnly } from "../../withReadOnly";

export interface Props extends ComponentPropsWithRef<"input">, Omit<FormSelector, "success"> {
  children: string | React.ReactNode;
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
    errorMessageProps,
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

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent | React.KeyboardEvent
  ) => {
    if (disabled) {
      return;
    }
    /** We have to clone the native event we got here and change the "target" property to the value. Otherwise, this regular event has "on" as it's event.target.value, which is useless. */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const nativeEvent: any = event.nativeEvent || event;
    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);

    Object.defineProperty(clonedEvent, "target", {
      writable: true,
      value: { value: value }
    });

    onChange?.(clonedEvent);
  };

  const customLabel = typeof children !== "string";

  const nativeInputClasses = [classes["native-input"]];
  const checkedRadioClasses = [classes["input"], classes["radio"]];
  const uncheckedRadioClasses = [classes["input"], classes["circle"]];
  error && nativeInputClasses.push(classes["error"]);
  disabled &&
    checkedRadioClasses.push(classes["disabled"]) &&
    uncheckedRadioClasses.push(classes["disabled"]);
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
      errorMessageProps={{
        ...errorMessageProps,
        className: `${errorMessageProps?.className} ${classes["error-message"]}`
      }}
      error={error}
      disabled={disabled}
      identifier={identifier}
    >
      <input
        {...rest}
        ref={ref}
        disabled={disabled}
        tabIndex={0}
        className={nativeInputClasses.join(" ")}
        onChange={onChangeHandler}
        checked={checked}
        aria-checked={checked}
        aria-describedby={describedBy}
        name={name}
        value={value}
        id={`${identifier}-radio`}
        type="radio"
      />

      {checked ? <Icon className={checkedRadioClasses.join(" ")} icon={Icons.Radio} /> : <></>}
      {!checked ? <Icon className={uncheckedRadioClasses.join(" ")} icon={Icons.Circle} /> : <></>}

      <label
        className={customLabel ? classes["no-margin-top"] : ""}
        onClick={onChangeHandler}
        htmlFor={`${identifier}-radio`}
      >
        {children}
      </label>
    </FormSelectorWrapper>
  );
};

export const Radio = withReadOnly(React.forwardRef(RadioComponent));
