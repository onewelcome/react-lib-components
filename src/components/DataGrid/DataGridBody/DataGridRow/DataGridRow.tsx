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

const DataGridRowComponent = <T extends unknown>(
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
    enableNestedRow = true,
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
    : classNames.push(classes[`border-${indentationLevel}`]);
  isLoading && classNames.push(classes["loading"]);

  const renderNestedRowConnectors = () => {
    if (indentationLevels) {
      return indentationLevels.map(({ level, isLastChild }) =>
        renderNestedRowConnector(level, isLastChild, indentationLevels.length)
      );
    }

    return null;
  };

  // if (item && (item as any).id === "3") {
  //   console.log(indentationLevels);
  // }

  const renderNestedRowConnector = (level: number, isLastChild: boolean, levelsLength: number) => {
    // const variant =
    if (level === levelsLength) {
      // console.log("here - ostatni poziom");
      // if (item && (item as any).id === "3") {
      //   console.log(level, isLastChild);
      // }
      const variant = isLastChild ? "line" : "t-shape";

      // console.log("variant", variant);

      return (
        <div
          className={`${classes["connector"]} ${classes[variant]} ${classes[`offset-left-${level - 1}`]}`}
        />
      );
    } else {
      // console.log("here - nie ostatni");
      if (!isLastChild) {
        return (
          <div
            className={`${classes["connector"]} ${classes["vertical"]} ${classes[`offset-left-${level - 1}`]}`}
          />
        );
      }
    }
    // console.log("nic");
    return null;
  };

  const renderRecurrentRow = () => {
    if (rowTemplate && item && nestedItemsKey && item[nestedItemsKey]) {
      // console.log(indentationLevel, item, indentationLevels);

      const nestedItemsArray: T[] = item[nestedItemsKey] as T[];
      return nestedItemsArray.map((item, index) => {
        // console.log(item, index, nestedItemsArray.length, index + 1 === nestedItemsArray.length);
        return React.cloneElement(rowTemplate({ item, index }), {
          searchValue: searchValue,
          headers,
          spacing,
          disableContextMenuColumn,
          nestedItemsKey,
          indentationLevel: indentationLevel + 1,
          indentationLevels:
            indentationLevels && nestedItemsArray
              ? [
                  ...indentationLevels,
                  {
                    level: indentationLevel + 1,
                    isLastChild: index + 1 === nestedItemsArray.length
                  }
                ]
              : [
                  {
                    level: indentationLevel + 1,
                    isLastChild: index + 1 === nestedItemsArray.length
                  }
                ],
          item,
          rowTemplate,
          isLastChild: nestedItemsArray ? index + 1 === nestedItemsArray.length : false
        });
      });
    }
  };

  return (
    <Fragment>
      <tr {...rest} ref={ref} className={classNames.join(" ")}>
        {indentationLevel > 0 && <td>{renderNestedRowConnectors()}</td>}
        {(enableExpandableRow || enableNestedRow) && (
          <DataGridCell
            className={classes["expand-button-cell"]}
            onClick={() => setIsRowExpanded(!isRowExpanded)}
            style={{
              width: "1px",
              paddingLeft: `${indentationLevel ? `${indentationLevel * 1}` : 1}rem`
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

      {/* {enableNestedRow &&
        rowTemplate &&
        item &&
        nestedItemsKey &&
        item[nestedItemsKey] &&
        (item[nestedItemsKey] as T[]).map((item, index) => {
          return React.cloneElement(rowTemplate({ item, index }), {
            searchValue: searchValue,
            headers,
            spacing,
            disableContextMenuColumn,
            nestedItemsKey,
            indentationLevel: indentationLevel + 1,
            indentationLevels:
              indentationLevels && (item[nestedItemsKey] as T[])
                ? [
                    ...indentationLevels,
                    {
                      level: indentationLevel + 1,
                      isLastChild: index + 1 === (item[nestedItemsKey] as T[]).length
                    }
                  ]
                : [{ level: indentationLevel + 1 }],
            item,
            rowTemplate,
            isLastChild: (item[nestedItemsKey] as T[])
              ? index + 1 === (item[nestedItemsKey] as T[]).length
              : false
          });
        })} */}
    </Fragment>
  );
};

export const DataGridRow = React.forwardRef(DataGridRowComponent) as <T extends {}>(
  p: Props<T> & { ref?: Ref<HTMLTableRowElement> }
) => ReactElement;
