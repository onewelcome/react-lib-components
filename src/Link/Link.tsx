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
  ForwardRefExoticComponent,
  ReactNode
} from "react";
import classes from "./Link.module.scss";

export type AnchorType = "external" | "internal" | "download";

export interface Props extends ComponentPropsWithRef<"a"> {
  children?: ReactNode;
  color?: "primary" | "secondary" | "tertiary";
  display?: "link" | "button";
  buttonVariant?: "outline" | "text" | "fill";
  type?: AnchorType;
  to: string;
  disabled?: boolean;
  component?: ForwardRefExoticComponent<any>;
}

const LinkComponent: ForwardRefRenderFunction<HTMLAnchorElement, Props> = (
  {
    children,
    className,
    disabled = false,
    to,
    color = "primary",
    type = "internal",
    display = "link",
    buttonVariant = "fill",
    component,
    ...rest
  }: Props,
  ref
) => {
  const determineTarget = () => {
    if (rest.target) {
      return rest.target;
    }

    if (type === "external") {
      return "_blank";
    }

    return "";
  };

  const classNames = [classes[color]];
  display === "link" && classNames.push(classes["link"]);
  display === "button" && classNames.push(classes["button"], classes[buttonVariant]);
  disabled && classNames.push(classes["disabled"]);
  className && classNames.push(className);

  if (component) {
    return React.createElement(component, {
      ...rest,
      ref: ref,
      to: to,
      className: classNames.join(" "),
      "aria-disabled": disabled,
      style: {
        ...rest.style
      },
      children: children
    });
  }

  return (
    <a
      {...rest}
      ref={ref}
      download={type === "download"}
      rel={type === "external" ? "noopener noreferer" : undefined}
      href={!disabled ? to : undefined}
      className={classNames.join(" ")}
      aria-disabled={disabled}
      target={determineTarget()}
      style={{
        ...rest.style
      }}
    >
      {children}
    </a>
  );
};

export const Link = React.forwardRef(LinkComponent);
