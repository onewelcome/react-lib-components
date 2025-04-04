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

import React, { HTMLProps } from "react";
import classes from "./Tab.module.scss";

export interface Props extends Omit<HTMLProps<HTMLDivElement>, "children"> {
  title: string;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  children?: any;
  tabActive?: boolean;
  icon?: React.ReactNode;
}

export const Tab = ({ children, tabActive, ...rest }: Props) => {
  return (
    <div
      {...rest}
      aria-hidden={!tabActive}
      role="tabpanel"
      className={`${classes["tab"]} ${tabActive ? classes["selected"] : ""} ${
        rest.className ?? ""
      }`}
    >
      {children}
    </div>
  );
};
