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
import classes from "./Textarea.module.scss";
import { FormElement } from "../form.interfaces";
import { useDetermineStatusIcon } from "../../../hooks/useDetermineStatusIcon";
import { withReadOnly } from "../../withReadOnly";

export interface Props extends ComponentPropsWithRef<"textarea">, FormElement {
  wrapperProps?: ComponentPropsWithRef<"div">;
  readOnlyView?: boolean;
}

const TextareaComponent: ForwardRefRenderFunction<HTMLTextAreaElement, Props> = (
  {
    error = false,
    success = false,
    disabled = false,
    className,
    rows = 4,
    wrapperProps,
    onFocus,
    onBlur,
    value,
    ...rest
  }: Props,
  ref
) => {
  const [focus, setFocus] = useState(false);

  const wrapperClasses = [classes["textarea-wrapper"]];
  const outlineClasses = [classes["outline"]];

  wrapperProps?.className && wrapperClasses.push(wrapperProps.className);
  disabled && wrapperClasses.push(classes["disabled"]) && outlineClasses.push(classes["disabled"]);
  error && wrapperClasses.push(classes["error"]) && outlineClasses.push(classes["error"]);
  focus && wrapperClasses.push(classes["focus"]) && outlineClasses.push(classes["focus"]);
  success && wrapperClasses.push("success");

  const icon = useDetermineStatusIcon({ success, error });

  const getChildren = () => {
    if (rest["data-readonlyview"]) {
      return (
        <div
          data-readonlyview={true}
          tabIndex={0}
          className={`${error ? "error" : ""} ${success ? "success" : ""}`}
        >
          {value}
        </div>
      );
    }
    return (
      <textarea
        {...rest}
        ref={ref}
        rows={rows}
        className={`${error ? classes["error"] : ""} ${classes["textarea"]} ${className ?? ""}`}
        disabled={disabled}
        onFocus={event => {
          setFocus(true);
          onFocus?.(event);
        }}
        onBlur={event => {
          setFocus(false);
          onBlur?.(event);
        }}
        value={value}
      />
    );
  };

  return (
    <div {...wrapperProps} className={wrapperClasses.join(" ")}>
      {getChildren()}
      {icon}
      <span className={outlineClasses.join(" ")}></span>
    </div>
  );
};

export const Textarea = withReadOnly(React.forwardRef(TextareaComponent));
