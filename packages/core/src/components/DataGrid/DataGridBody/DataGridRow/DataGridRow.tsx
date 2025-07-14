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

import React, { ComponentPropsWithRef, useState, Fragment, Ref, ReactElement } from "react";
import { HeaderCell } from "../../datagrid.interfaces";
import classes from "./DataGridRow.module.scss";
import { IconButton } from "../../../Button/IconButton";
import { Icon, Icons } from "../../../Icon/Icon";
import { DataGridCell } from "../DataGridCell/DataGridCell";
import { DataGridDrawer } from "../DataGridDrawer/DataGridDrawer";
import { generateID } from "../../../../util/helper";
import { useNestedRow } from "./useNestedRow";

export interface Props<T> extends ComponentPropsWithRef<"tr"> {
  item?: T;
  headers?: HeaderCell[];
  isLoading?: boolean;
  spacing?: React.CSSProperties;
  searchValue?: string;
  disableContextMenuColumn?: boolean;
  nestedRowProps?: {
    rowTemplate?: ({ item, index }: { item: T; index: number }) => ReactElement;
    indentationLevel?: number;
    indentationLevels?: { level: number; isLastChild: boolean }[];
    enableNestedRow?: boolean;
    nestedItemsKey?: keyof T;
  };
  expandableRowProps?: {
    enableExpandableRow: boolean;
    expandableRowContent: React.ReactNode;
    expandButtonTitle?: string;
    expandButtonId?: string;
    drawerId?: string;
  };
}

const DataGridRowComponent = <T,>(
  {
    item,
    children,
    className,
    headers,
    searchValue,
    isLoading,
    spacing,
    expandableRowProps,
    disableContextMenuColumn,
    nestedRowProps,
    ...rest
  }: Props<T>,
  ref: Ref<HTMLTableRowElement>
) => {
  const {
    enableExpandableRow = false,
    expandButtonId = `ID-${generateID()}`,
    expandButtonTitle = "Expand row",
    drawerId = `ID-${generateID()}`,
    expandableRowContent
  } = expandableRowProps || {};
  const {
    indentationLevels,
    indentationLevel = 0,
    nestedItemsKey,
    enableNestedRow,
    rowTemplate
  } = nestedRowProps || {};
  const [isRowExpanded, setIsRowExpanded] = useState(false);
  const { renderNestedRowConnectors, renderNestedRow, getNestedChildSpacing, hasNestedChildren } =
    useNestedRow({
      indentationLevels,
      indentationLevel,
      item,
      nestedItemsKey,
      rowTemplate,
      isRowExpanded,
      enableNestedRow,
      rowProps: {
        searchValue,
        headers,
        spacing,
        disableContextMenuColumn
      }
    });

  const classNames = [classes["row"]];
  const rowBorderClass = enableNestedRow
    ? classes[`border-${indentationLevel}`]
    : classes[`border`];

  className && classNames.push(className);
  enableExpandableRow
    ? !isRowExpanded && classNames.push(classes["border-drawer"])
    : classNames.push(rowBorderClass);
  isLoading && classNames.push(classes["loading"]);

  const getPrefixButton = (hasNestedChildren: boolean) =>
    hasNestedChildren ? (
      <IconButton
        id={expandButtonId}
        title={expandButtonTitle}
        aria-expanded={isRowExpanded}
        onClick={() => setIsRowExpanded(!isRowExpanded)}
      >
        <Icon size="0.75rem" icon={isRowExpanded ? Icons.ChevronUp : Icons.ChevronDown} />
      </IconButton>
    ) : null;

  const visibleCells = React.Children.map(children as React.ReactElement[], (child, index) => {
    const childSpacing = enableNestedRow ? getNestedChildSpacing(spacing, index) : spacing;

    const prefixElement =
      enableNestedRow && index === 0 ? (
        <>
          {getPrefixButton(!!hasNestedChildren)}
          {renderNestedRowConnectors()}
        </>
      ) : null;

    if (child) {
      const cellWithSpacing = React.cloneElement(child, {
        searchValue,
        spacing: childSpacing,
        cellIndex: index,
        columnLength: headers?.length,
        disableContextMenuColumn,
        prefixElement
      });

      const visible = headers && headers.length > index ? !headers[index].hidden : true;
      return visible && cellWithSpacing;
    }
    return null;
  });

  return (
    <Fragment>
      <tr {...rest} ref={ref} className={classNames.join(" ")}>
        {enableExpandableRow && (
          <DataGridCell
            className={classes["expand-button-cell"]}
            onClick={() => setIsRowExpanded(!isRowExpanded)}
            style={{
              width: "1px"
            }}
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
      {enableNestedRow && renderNestedRow()}
    </Fragment>
  );
};

export const DataGridRow = React.forwardRef(DataGridRowComponent) as <T extends object>(
  p: Props<T> & { ref?: Ref<HTMLTableRowElement> }
) => ReactElement;
