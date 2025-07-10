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
  createRef,
  RefObject,
  useEffect
} from "react";
import classes from "./TabButton.module.scss";

export interface Props extends ComponentPropsWithRef<"button"> {
  tabActive?: boolean;
  focused?: boolean;
  fluid?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right" | "top" | "bottom";
}

const TabButtonComponent: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  { children, tabActive, focused, title, fluid, icon, iconPosition, className, ...rest }: Props,
  ref
) => {
  const buttonRef = (ref as RefObject<HTMLButtonElement>) || createRef<HTMLButtonElement>();

  useEffect(() => {
    if (focused && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [buttonRef.current, focused]);

  const tabButtonClasses = [classes["tabbutton"]];
  tabActive && tabButtonClasses.push(classes["selected"]);
  fluid && tabButtonClasses.push(classes["fluid"]);
  className && tabButtonClasses.push(className);
  icon && tabButtonClasses.push(classes["has-icon"], classes[`${iconPosition}-icon`]);

  return (
    <button
      {...rest}
      className={tabButtonClasses.join(" ")}
      ref={buttonRef}
      role="tab"
      type="button"
    >
      {children}
      {icon && <i>{icon}</i>}
    </button>
  );
};

export const TabButton = React.forwardRef(TabButtonComponent);
