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
  ReactElement,
  ReactNode,
  useEffect
} from "react";
import { Icon, Icons } from "../../Icon/Icon";
import { Props as FormHelperTextProps } from "../FormHelperText/FormHelperText";
import classes from "./Checkbox.module.scss";
import { useFormSelector } from "../../../hooks/useFormSelector";
import {
  FormSelectorWrapper,
  Props as FormSelectorWrapperProps
} from "../FormSelectorWrapper/FormSelectorWrapper";
import { FormSelector } from "../form.interfaces";
import { withReadOnly } from "../../withReadOnly";

const isToggle = (children: ReactNode) => !!(children as ReactElement)?.props?.["data-toggle"];

export interface Props extends ComponentPropsWithRef<"input">, Omit<FormSelector, "success"> {
  label?: string | React.ReactElement;
  indeterminate?: boolean;
  helperProps?: FormHelperTextProps;
  formSelectorWrapperProps?: FormSelectorWrapperProps;
  inlineEditing?: boolean;
  required?: boolean;
  success?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxComponent: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {
    children,
    name,
    helperText,
    helperProps,
    indeterminate,
    parentErrorId,
    errorMessage,
    disabled,
    label,
    parentHelperId,
    className,
    error,
    success,
    checked = false,
    formSelectorWrapperProps,
    inlineEditing,
    required,
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

  useEffect(() => {
    if (!name) {
      throw new Error("Please pass a 'name' prop to your <Checkbox> component.");
    }

    if (typeof children === "object" && !isToggle(children) && indeterminate === undefined) {
      throw new Error(
        "If you have nested checkboxes you have to manage the indeterminate state by passing a boolean to the `indeterminate` prop."
      );
    }
  }, []);

  const determineLabel = () => {
    // this should be temporary, for backwards compatibility;
    // once the components implementing checkboxes in microfrontends are updated, only label should be returned
    if (label) {
      return label;
    } else if (typeof children === "string") {
      return children;
    }
  };

  const renderNestedCheckboxes = () => (
    <ul className={classes["checkbox-list"]}>
      {React.Children.map(children as ReactElement[], child => {
        return (
          <li>
            <Checkbox
              {...child.props}
              parentHelperId={parentHelperId}
              parentErrorId={parentErrorId}
              error={error}
              success={success}
              disabled={child.props.disabled ? child.props.disabled : disabled}
            >
              {child.props.children}
            </Checkbox>
          </li>
        );
      })}
    </ul>
  );

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }
    onChange?.(event);
  };

  const renderToggle = () => React.Children.toArray(children).filter(isToggle);

  const iconClasses = [classes["input"]];
  const nativeInputClasses = [classes["native-input"]];
  const wrapperClasses = [classes["checkbox-wrapper"]];
  error && nativeInputClasses.push(classes["error"]);
  disabled && nativeInputClasses.push(classes["disabled"]) && iconClasses.push(classes["disabled"]);
  className && wrapperClasses.push(className);

  return (
    <FormSelectorWrapper
      {...formSelectorWrapperProps}
      className={wrapperClasses.join(" ")}
      containerProps={{ className: classes["checkbox-container"] }}
      helperText={helperText}
      helperProps={helperProps}
      parentErrorId={parentErrorId}
      errorId={errorId}
      errorMessage={errorMessage}
      error={error}
      success={success}
      disabled={disabled}
      identifier={identifier}
      inlineEditing={inlineEditing}
      required={required}
      nestedChildren={
        typeof children === "object" && !isToggle(children) && renderNestedCheckboxes()
      }
    >
      <input
        {...rest}
        ref={ref}
        disabled={disabled}
        className={nativeInputClasses.join(" ")}
        checked={checked}
        onChange={onChangeHandler}
        aria-invalid={error as boolean}
        aria-checked={indeterminate ? "mixed" : checked}
        aria-describedby={describedBy}
        id={`${identifier}-checkbox`}
        name={name}
        type="checkbox"
      />
      {renderToggle()}

      {indeterminate && (
        <Icon
          className={`${iconClasses.join(" ")} ${classes["indeterminate"]}`}
          icon={Icons.MinusSquare}
        />
      )}
      {checked && !indeterminate && (
        <Icon
          className={`${iconClasses.join(" ")} ${classes["checkmark"]}`}
          icon={Icons.CheckmarkSquare}
        />
      )}
      {!checked && !indeterminate && (
        <Icon className={`${iconClasses.join(" ")} ${classes["square"]}`} icon={Icons.Square} />
      )}
      <label htmlFor={`${identifier}-checkbox`}>{determineLabel()}</label>
    </FormSelectorWrapper>
  );
};

export const Checkbox = withReadOnly(React.forwardRef(CheckboxComponent));
