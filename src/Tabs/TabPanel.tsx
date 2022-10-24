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

import React, { ComponentPropsWithRef } from "react";
import classes from "./TabPanel.module.scss";

export interface Props extends ComponentPropsWithRef<"div"> {
  children: React.ReactNode;
  tabId: string;
  tabPanelId: string;
  selected?: boolean;
}

export const TabPanel = React.forwardRef<HTMLDivElement, Props>(
  ({ children, tabId, tabPanelId, selected = false, className, ...rest }: Props, ref) => (
    <div
      {...rest}
      ref={ref}
      aria-labelledby={tabId}
      className={`${classes["tabpanel"]} ${selected ? classes["selected"] : ""} ${className ?? ""}`}
      id={tabPanelId}
      role="tabpanel"
      tabIndex={0}
      hidden={!selected || undefined}
      aria-hidden={!selected}
    >
      {children}
    </div>
  )
);
