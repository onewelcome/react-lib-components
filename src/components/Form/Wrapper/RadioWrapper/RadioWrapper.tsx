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
  useEffect
} from "react";
import classes from "./RadioWrapper.module.scss";
import { Wrapper, WrapperProps } from "../Wrapper/Wrapper";
import { useWrapper } from "../../../../hooks/useWrapper";
import { Icons } from "../../../Icon/Icon";
import { Fieldset, Props as FieldsetProps } from "../../../Form/Fieldset/Fieldset";

export interface Props extends ComponentPropsWithRef<"div">, WrapperProps {
  children: ReactElement | ReactElement[];
  fieldsetProps: FieldsetProps;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioWrapperComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    children,
    error,
    name,
    helperText,
    helperProps,
    fieldsetProps,
    value,
    onChange,
    disabled,
    ...rest
  }: Props,
  ref
) => {
  const { errorId, helperId } = useWrapper();

  useEffect(() => {
    if (fieldsetProps.legend === undefined) {
      console.error(
        `You should give your Fieldset component a legend prop so a legend element is rendered. This error was thrown in RadioWrapper. You can add this legend prop through the fieldsetProps prop by passing an object (fieldsetProps={{ legend: "legend here" }})`
      );
    }
  }, []);

  const renderChildren = () =>
    React.Children.map(children, child =>
      React.cloneElement(child, {
        parentErrorId: errorId,
        error: error,
        checked: child.props.value === value,
        name: name,
        parentHelperId: helperText ? helperId : false,
        onChange: onChange,
        disabled: child.props.disabled !== undefined ? child.props.disabled : disabled
      })
    );

  return (
    <Fieldset {...fieldsetProps} error={error} disabled={disabled}>
      <Wrapper
        {...rest}
        ref={ref}
        disabled={disabled}
        name={name}
        helperId={helperId}
        helperText={helperText}
        helperProps={{
          ...helperProps,
          className: `${classes["radio-wrapper-helper"]} ${
            error ? classes["radio-wrapper-error"] : ""
          } ${helperProps?.className ?? ""}`
        }}
        error={error}
        errorId={errorId}
        errorMessageIcon={Icons.Error}
      >
        {renderChildren()}
      </Wrapper>
    </Fieldset>
  );
};

export const RadioWrapper = React.forwardRef(RadioWrapperComponent);
