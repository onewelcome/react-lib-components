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
import { useFormSelector } from "../../hooks/useFormSelector";
import {
  FormSelectorWrapper,
  Props as FormSelectorWrapperProps
} from "../FormSelectorWrapper/FormSelectorWrapper";
import { FormSelector } from "../form.interfaces";

const isToggle = (children: ReactNode) => (children as ReactElement)?.props?.["data-toggle"];

export interface Props extends ComponentPropsWithRef<"input">, FormSelector {
  children: ReactNode;
  label?: string;
  indeterminate?: boolean;
  helperProps?: FormHelperTextProps;
  formSelectorWrapperProps?: FormSelectorWrapperProps;
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
    checked = false,
    formSelectorWrapperProps,
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
    if (label) {
      return label;
    } else if (children === undefined) {
      throw new Error(
        "Please make sure to pass either a string or more Checkbox components as a child of your Checkbox component."
      );
    }

    if (
      typeof children === "string" ||
      (typeof children === "object" && (children as ReactElement).type === "span")
    ) {
      return children;
    }

    throw new Error(
      "If you pass Checkboxes as a child component (to create nested checkbox tree) you need to pass a label to the parent checkbox."
    );
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
    onChange && onChange(event);
  };

  const renderToggle = () => React.Children.toArray(children).filter(isToggle);

  const iconClasses = [classes["input"], disabled ? classes["disabled"] : ""];

  /** Default return value is the default checkbox */
  return (
    <FormSelectorWrapper
      {...formSelectorWrapperProps}
      className={`${classes["checkbox-wrapper"]} ${className ? className : ""}`}
      containerProps={{ className: classes["checkbox-container"] }}
      helperText={helperText}
      helperProps={helperProps}
      parentErrorId={parentErrorId}
      errorId={errorId}
      errorMessage={errorMessage}
      error={error}
      disabled={disabled}
      identifier={identifier}
      nestedChildren={
        typeof children === "object" && !isToggle(children) && renderNestedCheckboxes()
      }
    >
      <input
        {...rest}
        ref={ref}
        disabled={disabled}
        className={`${classes["native-input"]} ${error ? classes["error"] : ""}`}
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

      {indeterminate && <Icon className={iconClasses.join(" ")} icon={Icons.MinusSquare} />}
      {checked && !indeterminate && (
        <Icon className={iconClasses.join(" ")} icon={Icons.CheckmarkSquare} />
      )}
      {!checked && !indeterminate && <Icon className={iconClasses.join(" ")} icon={Icons.Square} />}
      <label htmlFor={`${identifier}-checkbox`}>{determineLabel()}</label>
    </FormSelectorWrapper>
  );
};

export const Checkbox = React.forwardRef(CheckboxComponent);
