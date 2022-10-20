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

import React, { ComponentPropsWithRef, useEffect } from "react";
import classes from "./TabButton.module.scss";

export interface Props extends ComponentPropsWithRef<"button"> {
  children?: string;
  selected?: boolean;
  focussed?: boolean;
  tabId?: string;
  tabPanelId?: string;
  onTabButtonClick?: () => void;
}

export const TabButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      selected = false,
      focussed = false,
      tabId,
      tabPanelId,
      className,
      onTabButtonClick,
      ...rest
    }: Props,
    ref
  ) => {
    useEffect(() => {
      if (focussed && ref) {
        (ref as React.MutableRefObject<HTMLButtonElement>).current.focus();
      }
    }, [focussed]);

    const classNames = [classes["tabbutton"]];

    selected && classNames.push(classes["selected"]);
    focussed && !selected && classNames.push(classes["focussed"]);
    className && classNames.push(className);

    return (
      <button
        {...rest}
        aria-selected={selected}
        key={tabId}
        className={classNames.join(" ")}
        ref={ref}
        role="tab"
        tabIndex={selected ? 0 : -1}
        type="button"
        aria-controls={tabPanelId}
        id={tabId}
        onClick={onTabButtonClick}
      >
        <span aria-hidden="true">{children}</span>
        {children}
      </button>
    );
  }
);
