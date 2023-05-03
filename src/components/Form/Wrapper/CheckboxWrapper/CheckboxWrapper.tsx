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
import classes from "./CheckboxWrapper.module.scss";
import { useWrapper } from "../../../../hooks/useWrapper";
import { Wrapper, WrapperProps } from "../Wrapper/Wrapper";
import { Icons } from "../../../Icon/Icon";
import { Fieldset, Props as FieldsetProps } from "../../../Form/Fieldset/Fieldset";

export interface Props extends ComponentPropsWithRef<"div">, WrapperProps {
  children: ReactElement[] | ReactElement;
  fieldsetProps: FieldsetProps;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxWrapperComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { children, error = false, helperText, helperProps, fieldsetProps, ...rest }: Props,
  ref
) => {
  const { errorId, helperId } = useWrapper();

  useEffect(() => {
    if (fieldsetProps.legend === undefined) {
      console.error(
        `You should give your Fieldset component a legend prop so a legend element is rendered. This error was thrown in CheckboxWrapper. You can add this legend prop through the fieldsetProps prop by passing an object (fieldsetProps={{ legend: "legend here" }})`
      );
    }
  }, []);

  const renderChildren = () =>
    React.Children.map(children, child =>
      React.cloneElement(child, {
        parentErrorId: errorId,
        error: error,
        parentHelperId: helperText ? helperId : false,
        disabled: rest.disabled
      })
    );

  return (
    <Fieldset {...fieldsetProps} error={error} required={rest.required}>
      <Wrapper
        {...rest}
        ref={ref}
        label=""
        helperId={helperId}
        helperText={helperText}
        helperProps={{
          ...helperProps,
          className: `${classes["checkbox-wrapper-helper"]} ${
            error ? classes["checkbox-wrapper-error"] : ""
          } ${helperProps?.className ?? ""}`
        }}
        error={error}
        errorMessageIcon={Icons.Error}
        errorId={errorId}
      >
        {renderChildren()}
      </Wrapper>
    </Fieldset>
  );
};

export const CheckboxWrapper = React.forwardRef(CheckboxWrapperComponent);
