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
import { HeaderCell } from "../datagrid.interfaces";
import classes from "./DataGridRow.module.scss";

export interface Props extends ComponentPropsWithRef<"tr"> {
  headers?: HeaderCell[];
  isLoading?: boolean;
  spacing?: React.CSSProperties;
  disableContextMenuColumn?: boolean;
}

export const DataGridRow = React.forwardRef<HTMLTableRowElement, Props>(
  (
    { children, className, headers, isLoading, spacing, disableContextMenuColumn, ...rest }: Props,
    ref
  ) => {
    const visibleCells = React.Children.map(children as React.ReactElement[], (child, index) => {
      if (child) {
        const cellWithSpacing = React.cloneElement(child, {
          spacing: spacing,
          cellIndex: index,
          columnLength: headers?.length,
          disableContextMenuColumn
        });

        const visible = headers && headers.length > index ? !headers[index].hidden : true;
        return visible && cellWithSpacing;
      }
      return null;
    });

    const classNames = [classes["row"]];
    className && classNames.push(className);
    isLoading && classNames.push(classes["loading"]);

    return (
      <tr {...rest} ref={ref} className={classNames.join(" ")}>
        {visibleCells}
      </tr>
    );
  }
);
