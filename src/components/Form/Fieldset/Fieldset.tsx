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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef, ReactElement } from "react";
import readyclasses from "../../../readyclasses.module.scss";
import classes from "./Fieldset.module.scss";
import { Typography, Variant } from "../../Typography/Typography";
import { Input } from "../Input/Input";
import { Select } from "../Select/SingleSelect/Select";
import { MultiSelect } from "../Select/MultiSelect/MultiSelect";
import { Radio } from "../Radio/Radio";
import { Checkbox } from "../Checkbox/Checkbox";
import { Textarea } from "../Textarea/Textarea";
import { Toggle } from "../Toggle/Toggle";
import { Label } from "../Label/Label";
import { FormControl } from "../FormControl/FormControl";
import { FormSelectorWrapper } from "../FormSelectorWrapper/FormSelectorWrapper";
import { FormHelperText } from "../FormHelperText/FormHelperText";
import { InputWrapper } from "../Wrapper/InputWrapper/InputWrapper";
import { SelectWrapper } from "../Wrapper/SelectWrapper/SelectWrapper";
import { TextareaWrapper } from "../Wrapper/TextareaWrapper/TextareaWrapper";
import { withReadOnly } from "../../withReadOnly";

export interface Props extends ComponentPropsWithRef<"fieldset"> {
  children?: ReactElement | ReactElement[];
  legend: string;
  legendStyle?: Variant;
  hideLegend?: boolean;
  background?: string;
  noPadding?: boolean;
  noBackground?: boolean;
  required?: boolean;
  disablePropagation?: boolean;
}

const FieldsetComponent: ForwardRefRenderFunction<HTMLFieldSetElement, Props> = (
  {
    children,
    className,
    legend,
    legendStyle = "body",
    hideLegend = false,
    noBackground,
    background = noBackground ? "" : "#FFF",
    noPadding = false,
    disabled = false,
    required = false,
    disablePropagation = false,
    ...rest
  }: Props,
  ref
) => {
  const renderChildren = () => {
    if (!children) {
      return;
    }

    /* All right, so the issue is that whenever we try to add disabled prop to a component that doesn't accept it,
            React will throw an error. However, it might occur that we want a component inside Fieldset because of aesthetic purposes
            (fieldset applies a sort of container with white background and if we want to display it inside of this container... then yea).
            So instead we supply an array of components that we want to add the disabled prop to and check if child.type equals one of these. */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const allowedComponents: React.ComponentPropsWithRef<any>[] = [
      Input,
      Select,
      MultiSelect,
      Radio,
      Checkbox,
      Textarea,
      Toggle,
      Label,
      FormControl,
      FormSelectorWrapper,
      FormHelperText,
      InputWrapper,
      SelectWrapper,
      TextareaWrapper
    ];

    return React.Children.map(children, (child: ReactElement) => {
      if (allowedComponents.includes(child.type) && !disablePropagation) {
        return React.cloneElement(child, {
          disabled: child.props.disabled ?? disabled
        });
      }

      return child;
    });
  };

  return (
    <fieldset
      {...rest}
      ref={ref}
      disabled={disabled}
      style={{ backgroundColor: background, ...rest.style }}
      className={`${classes.fieldset} ${noPadding ? classes["no-padding"] : ""} ${className ?? ""}`}
    >
      {legend && <legend className={readyclasses["sr-only"]}>{legend}</legend>}
      {legend && !hideLegend && (
        <Typography
          variant={legendStyle}
          tag="span"
          aria-hidden="true"
          className={`${classes["legend"]} ${required ? classes["required"] : ""}`}
        >
          {legend}
        </Typography>
      )}
      {renderChildren()}
    </fieldset>
  );
};

export const Fieldset = withReadOnly(React.forwardRef(FieldsetComponent));
