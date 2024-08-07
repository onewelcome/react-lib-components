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

import React, { ComponentPropsWithRef, useState, Fragment, ForwardRefRenderFunction } from "react";
import { HeaderCell } from "../../datagrid.interfaces";
import classes from "./DataGridRow.module.scss";
import { IconButton } from "../../../Button/IconButton";
import { Icon, Icons } from "../../../Icon/Icon";
import { DataGridCell } from "../DataGridCell/DataGridCell";
import { DataGridDrawer } from "../DataGridDrawer/DataGridDrawer";
import { generateID } from "../../../../util/helper";

export interface Props extends ComponentPropsWithRef<"tr"> {
  headers?: HeaderCell[];
  isLoading?: boolean;
  spacing?: React.CSSProperties;
  searchValue?: string;
  disableContextMenuColumn?: boolean;
  expandableRowProps?: {
    enableExpandableRow: boolean;
    expandableRowContent: React.ReactNode;
    expandButtonTitle?: string;
    expandButtonId?: string;
    drawerId?: string;
  };
}

const DataGridRowComponent: ForwardRefRenderFunction<HTMLTableRowElement, Props> = (
  {
    children,
    className,
    headers,
    searchValue,
    isLoading,
    spacing,
    expandableRowProps,
    disableContextMenuColumn,
    ...rest
  },
  ref
) => {
  const {
    enableExpandableRow = false,
    expandButtonId = `ID-${generateID()}`,
    expandButtonTitle = "Expand row",
    drawerId = `ID-${generateID()}`,
    expandableRowContent
  } = expandableRowProps || {};
  const [isRowExpanded, setIsRowExpanded] = useState(false);
  const visibleCells = React.Children.map(children as React.ReactElement[], (child, index) => {
    if (child) {
      const cellWithSpacing = React.cloneElement(child, {
        searchValue,
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
  enableExpandableRow
    ? !isRowExpanded && classNames.push(classes["border-drawer"])
    : classNames.push(classes["border"]);
  isLoading && classNames.push(classes["loading"]);

  return (
    <Fragment>
      <tr {...rest} ref={ref} className={classNames.join(" ")}>
        {enableExpandableRow && (
          <DataGridCell
            className={classes["expand-button-cell"]}
            onClick={() => setIsRowExpanded(!isRowExpanded)}
            style={{ width: "1px" }}
          >
            <IconButton
              id={expandButtonId}
              title={expandButtonTitle}
              aria-expanded={isRowExpanded}
              aria-controls={drawerId}
            >
              <Icon size="0.75rem" icon={isRowExpanded ? Icons.ChevronUp : Icons.ChevronDown} />
            </IconButton>
          </DataGridCell>
        )}
        {visibleCells}
      </tr>
      {enableExpandableRow && (
        <tr className={`${classes["row"]} ${isRowExpanded ? classes["border-drawer"] : ""}`}>
          <td colSpan={visibleCells.length + 1}>
            <DataGridDrawer
              id={drawerId}
              role="region"
              aria-labelledby={expandButtonId}
              isExpanded={isRowExpanded}
            >
              {expandableRowContent}
            </DataGridDrawer>
          </td>
        </tr>
      )}
    </Fragment>
  );
};

export const DataGridRow = React.forwardRef(DataGridRowComponent);
