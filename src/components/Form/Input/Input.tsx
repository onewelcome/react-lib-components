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
  Ref,
  useEffect,
  useRef,
  useState,
  ReactNode
} from "react";
import classes from "./Input.module.scss";
import readyclasses from "../../../readyclasses.module.scss";
import { FormElement } from "../form.interfaces";
import { useDetermineStatusIcon } from "../../../hooks/useDetermineStatusIcon";
import { MergeElementProps } from "../../../interfaces";
import { withReadOnly } from "../../withReadOnly";

export const dateTypes = ["date", "time", "datetime-local"] as const;

export type Type =
  | "text"
  | "email"
  | "file"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "url"
  | "hidden"
  | (typeof dateTypes)[number];

export type Props = MergeElementProps<
  "input",
  FormElement & {
    wrapperProps?: ComponentPropsWithRef<"div">;
    labeledBy?: string;
    type: Type;
    suffix?: ReactNode;
    prefix?: ReactNode;
    readOnlyView?: boolean;
  }
>;

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {
    error = false,
    success = false,
    className,
    name,
    style,
    wrapperProps,
    type,
    labeledBy,
    prefix,
    suffix,
    disabled,
    onFocus,
    onBlur,
    readOnlyView,
    ...rest
  }: Props,
  ref: Ref<HTMLInputElement>
) => {
  const [focus, setFocus] = useState(false);
  const inputWrapperRef = useRef<HTMLDivElement>(null);
  const suffixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (name === undefined) {
      throw new Error("Please give your <Input /> component a 'name' attribute");
    }
  }, []);

  const inputClassNames = [classes["input"]];

  const renderElement = (el: ReactNode) => {
    return typeof el === "string" ? <span>{el}</span> : el;
  };

  (dateTypes as ReadonlyArray<string>).includes(type) &&
    inputClassNames.push(classes["shrink-width-for-date-icon"]);
  className && inputClassNames.push(className);

  const wrapperClasses = [classes["input-wrapper"]];
  const outlineClasses = [classes["outline"]];

  wrapperProps?.className && wrapperClasses.push(wrapperProps.className);
  type === "hidden" && wrapperClasses.push(readyclasses["hidden"]);
  prefix && wrapperClasses.push(classes["prefix"]);
  suffix && wrapperClasses.push(classes["suffix"]);
  disabled && wrapperClasses.push(classes["disabled"]) && outlineClasses.push(classes["disabled"]);
  error && wrapperClasses.push(classes["error"]) && outlineClasses.push(classes["error"]);
  focus && wrapperClasses.push(classes["focus"]) && outlineClasses.push(classes["focus"]);
  success && wrapperClasses.push(classes["success"]);

  const icon = useDetermineStatusIcon({ success, error });
  const readOnlyMode = rest["data-readonlyview"] as boolean;

  return (
    <div
      ref={inputWrapperRef}
      {...wrapperProps}
      style={{ ...style }}
      data-readonlyview={readOnlyMode}
      className={`${classes["input-wrapper"]} ${wrapperClasses.join(" ")}`}
      tabIndex={readOnlyMode ? 0 : -1}
    >
      {prefix && (
        <div data-prefix className={classes["prefix"]}>
          {renderElement(prefix)}
        </div>
      )}
      <input
        {...rest}
        ref={ref}
        aria-readonly={readOnlyMode}
        readOnly={readOnlyMode}
        onFocus={event => {
          setFocus(true);
          onFocus?.(event);
        }}
        onBlur={event => {
          setFocus(false);
          onBlur?.(event);
        }}
        aria-labelledby={labeledBy}
        type={type}
        name={name}
        disabled={disabled}
        className={inputClassNames.join(" ")}
        spellCheck={rest.spellCheck ?? false}
        tabIndex={readOnlyMode ? -1 : 0}
      />
      {icon}
      {suffix && (
        <div ref={suffixRef} data-suffix className={classes["suffix"]}>
          {renderElement(suffix)}
        </div>
      )}

      <span className={outlineClasses.join(" ")}></span>
    </div>
  );
};

export const Input = withReadOnly(React.forwardRef(InputComponent));
