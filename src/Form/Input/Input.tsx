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
  useState
} from "react";
import classes from "./Input.module.scss";
import readyclasses from "../../readyclasses.module.scss";
import { Icon, Icons } from "../../Icon/Icon";
import { FormElement } from "../form.interfaces";

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
  | typeof dateTypes[number];

export interface Props extends ComponentPropsWithRef<"input">, FormElement {
  wrapperProps?: ComponentPropsWithRef<"div">;
  labeledBy?: string;
  type: Type;
  suffix?: string;
  prefix?: string;
}

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {
    error = false,
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
    spellcheck = false,
    ...rest
  }: Props,
  ref: Ref<HTMLInputElement>
) => {
  const [focus, setFocus] = useState(false);
  const inputWrapperRef = useRef<HTMLDivElement>(null);
  const errorIconRef = useRef<HTMLDivElement>(null);
  const suffixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (name === undefined) {
      throw new Error("Please give your <Input /> component a 'name' attribute");
    }
  }, []);

  const inputClassNames = [classes["input"]];

  (dateTypes as ReadonlyArray<string>).includes(type) &&
    inputClassNames.push(classes["shrink-width-for-date-icon"]);
  className && inputClassNames.push(className);

  const iconClassNames = [classes["warning"]];
  const wrapperClasses = [classes["input-wrapper"]];
  const outlineClasses = [classes["outline"]];

  wrapperProps?.className && wrapperClasses.push(wrapperProps.className);
  type === "hidden" && wrapperClasses.push(readyclasses["hidden"]);
  prefix && wrapperClasses.push(classes["prefix"]);
  suffix && wrapperClasses.push(classes["suffix"]);
  disabled && wrapperClasses.push(classes["disabled"]) && outlineClasses.push(classes["disabled"]);
  error && wrapperClasses.push(classes["error"]) && outlineClasses.push(classes["error"]);
  focus && wrapperClasses.push(classes["focus"]) && outlineClasses.push(classes["focus"]);

  return (
    <div
      ref={inputWrapperRef}
      {...wrapperProps}
      style={{ ...style }}
      className={`${classes["input-wrapper"]} ${wrapperClasses.join(" ")}`}
    >
      {prefix && (
        <div data-prefix className={classes["prefix"]}>
          <span>{prefix}</span>
        </div>
      )}
      <input
        {...rest}
        ref={ref}
        onFocus={event => {
          setFocus(true);
          onFocus && onFocus(event);
        }}
        onBlur={event => {
          setFocus(false);
          onBlur && onBlur(event);
        }}
        aria-labelledby={labeledBy}
        type={type}
        name={name}
        disabled={disabled}
        className={inputClassNames.join(" ")}
        spellCheck={spellcheck}
      />
      {suffix && (
        <div ref={suffixRef} data-suffix className={classes["suffix"]}>
          <span>{suffix}</span>
        </div>
      )}
      {error && <Icon ref={errorIconRef} className={iconClassNames.join(" ")} icon={Icons.Error} />}
      <span className={outlineClasses.join(" ")}></span>
    </div>
  );
};

export const Input = React.forwardRef(InputComponent);
