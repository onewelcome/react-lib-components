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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef, useState, Fragment } from "react";
import { HeaderCell } from "../datagrid.interfaces";
import classes from "./DataGridRow.module.scss";
import { IconButton } from "../../Button/IconButton";
import { Icon, Icons } from "../../Icon/Icon";
import { DataGridCell } from "./DataGridCell";

export interface Props extends ComponentPropsWithRef<"tr"> {
  headers?: HeaderCell[];
  isLoading?: boolean;
  spacing?: React.CSSProperties;
  disableContextMenuColumn?: boolean;
  disableExpandableRow?: boolean;
  rowExpanded?: boolean;
  onExpandRowButtonClick?: boolean;
}

const DataGridRowComponent: ForwardRefRenderFunction<HTMLTableRowElement, Props> = (
  {
    children,
    className,
    headers,
    isLoading,
    spacing,
    disableContextMenuColumn,
    disableExpandableRow,
    ...rest
  }: Props,
  ref
) => {
  const [isRowExpanded, setIsRowExpanded] = useState(false);
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
  !isRowExpanded && classNames.push(classes["border"]);
  isLoading && classNames.push(classes["loading"]);

  return (
    <Fragment>
      <tr {...rest} ref={ref} className={classNames.join(" ")}>
        {!disableExpandableRow && (
          <DataGridCell onClick={() => setIsRowExpanded(!isRowExpanded)} style={{ width: "1px" }}>
            <IconButton>
              <Icon icon={isRowExpanded ? Icons.ChevronUp : Icons.ChevronDown} />
            </IconButton>
          </DataGridCell>
        )}
        {visibleCells}
      </tr>
      {isRowExpanded && (
        <tr className={`${classes["row"]} ${classes["border"]}`}>
          <td colSpan={7}>
            <div className={classes["drawer"]}>
              <div>test</div>
              <div>test</div>
            </div>
          </td>
        </tr>
      )}
    </Fragment>
  );
};

export const DataGridRow = React.forwardRef(DataGridRowComponent);
