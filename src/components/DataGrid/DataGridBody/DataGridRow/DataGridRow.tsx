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

export interface Props<T> extends ComponentPropsWithRef<"tr"> {
  item?: T;
  indentationLevel?: number;
  indentationLevels?: { level: number; isLastChild: boolean }[];
  rowTemplate?: ({ item, index }: { item: T; index: number }) => ReactElement;
  headers?: HeaderCell[];
  isLoading?: boolean;
  spacing?: React.CSSProperties;
  searchValue?: string;
  disableContextMenuColumn?: boolean;
  enableNestedRow?: boolean;
  isLastRootAncestor?: boolean;
  isLastChild?: boolean;
  nestedItemsKey?: keyof T;
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
    rowTemplate,
    headers,
    searchValue,
    isLoading,
    spacing,
    expandableRowProps,
    disableContextMenuColumn,
    enableNestedRow,
    indentationLevel = 0,
    indentationLevels,
    isLastChild,
    nestedItemsKey,
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
  const [isRowExpanded, setIsRowExpanded] = useState(false);

  const classNames = [classes["row"]];
  const rowBorderClass = enableNestedRow
    ? classes[`border-${indentationLevel}`]
    : classes[`border`];

  className && classNames.push(className);
  enableExpandableRow
    ? !isRowExpanded && classNames.push(classes["border-drawer"])
    : classNames.push(rowBorderClass);
  isLoading && classNames.push(classes["loading"]);

  const renderNestedRowConnectors = () => {
    if (indentationLevels) {
      return indentationLevels.map(({ level, isLastChild }) =>
        renderNestedRowConnector(level, isLastChild, indentationLevels.length)
      );
    }

    return null;
  };

  const renderNestedRowConnector = (level: number, isLastChild: boolean, levelsLength: number) => {
    const offsetLeftClass = classes[`offset-left-${level - 1}`];

    if (level === levelsLength) {
      const variant = isLastChild ? "line" : "t-shape";

      return (
        <div
          data-testid="dataGridRowConnector"
          className={`${classes["connector"]} ${classes[variant]} ${offsetLeftClass}`}
        />
      );
    } else if (!isLastChild) {
      return (
        <div
          data-testid="dataGridRowConnector"
          className={`${classes["connector"]} ${classes["vertical"]}  ${offsetLeftClass}`}
        />
      );
    }
    return null;
  };

  const renderRecurrentRow = () => {
    if (rowTemplate && item && nestedItemsKey && item[nestedItemsKey] && isRowExpanded) {
      const nestedItemsArray: T[] = item[nestedItemsKey] as T[];
      const getIndentationLevel = (index: number) => ({
        level: indentationLevel + 1,
        isLastChild: index + 1 === nestedItemsArray.length
      });

      return nestedItemsArray.map((item, index) => {
        return React.cloneElement(rowTemplate({ item, index }), {
          searchValue: searchValue,
          headers,
          spacing,
          disableContextMenuColumn,
          enableNestedRow,
          nestedItemsKey,
          indentationLevel: indentationLevel + 1,
          indentationLevels:
            indentationLevels && nestedItemsArray
              ? [...indentationLevels, getIndentationLevel(index)]
              : [getIndentationLevel(index)],
          item,
          rowTemplate,
          isLastChild: nestedItemsArray ? index + 1 === nestedItemsArray.length : false
        });
      });
    }
  };

  const visibleCells = React.Children.map(children as React.ReactElement[], (child, index) => {
    const hasNestedChildren = item && nestedItemsKey && item[nestedItemsKey];
    const nestedChildOffset = !hasNestedChildren ? 46 : 0;
    const nestedChildIndentation = `${nestedChildOffset + indentationLevel * 68}`;
    const notIndentedWithNoChildrenOffset = indentationLevel === 0 && !hasNestedChildren ? 50 : 4;
    const childIndentation = `${indentationLevel ? nestedChildIndentation : notIndentedWithNoChildrenOffset}px`;

    const getNestedChildSpacing = (spacing: React.CSSProperties | undefined) => {
      if (spacing) {
        return {
          ...spacing,
          paddingLeft: index === 0 ? childIndentation : spacing.paddingLeft
        };
      }
      return {
        paddingLeft: index === 0 ? childIndentation : ""
      };
    };

    const childSpacing = enableNestedRow ? getNestedChildSpacing(spacing) : spacing;

    const prefixButton = hasNestedChildren ? (
      <IconButton
        id={expandButtonId}
        title={expandButtonTitle}
        aria-expanded={isRowExpanded}
        onClick={() => setIsRowExpanded(!isRowExpanded)}
      >
        <Icon size="0.75rem" icon={isRowExpanded ? Icons.ChevronUp : Icons.ChevronDown} />
      </IconButton>
    ) : null;

    const prefixElement =
      enableNestedRow && index === 0 ? (
        <>
          {prefixButton}
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
      {enableNestedRow && renderRecurrentRow()}
    </Fragment>
  );
};

export const DataGridRow = React.forwardRef(DataGridRowComponent) as <T extends {}>(
  p: Props<T> & { ref?: Ref<HTMLTableRowElement> }
) => ReactElement;
