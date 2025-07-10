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

import React, { ReactElement } from "react";
import classes from "./DataGridRow.module.scss";
import { HeaderCell } from "../../datagrid.interfaces";

export interface UseNestedRowProps<T> {
  indentationLevels?: { level: number; isLastChild: boolean }[];
  item?: T;
  nestedItemsKey?: keyof T;
  rowTemplate?: ({ item, index }: { item: T; index: number }) => ReactElement;
  isRowExpanded?: boolean;
  indentationLevel: number;
  enableNestedRow?: boolean;
  rowProps: {
    searchValue?: string;
    headers?: HeaderCell[];
    spacing?: React.CSSProperties;
    disableContextMenuColumn?: boolean;
  };
}

export const useNestedRow = <T,>({
  indentationLevels,
  item,
  nestedItemsKey,
  rowTemplate,
  isRowExpanded,
  indentationLevel,
  enableNestedRow,
  rowProps: { searchValue, headers, spacing, disableContextMenuColumn }
}: UseNestedRowProps<T>) => {
  const hasNestedChildren = item && nestedItemsKey && item[nestedItemsKey];

  const getNestedChildSpacing = (spacing: React.CSSProperties | undefined, index: number) => {
    const expandButtonWidth = 46;
    const nestedChildOffset = !hasNestedChildren ? expandButtonWidth : 0;

    const connectorWidth = 68;
    const nestedChildIndentation = `${nestedChildOffset + indentationLevel * connectorWidth}`;

    const gap = 4;
    const notIndentedWithNoChildrenOffset =
      indentationLevel === 0 && !hasNestedChildren ? expandButtonWidth + gap : gap;
    const childIndentation = `${indentationLevel ? nestedChildIndentation : notIndentedWithNoChildrenOffset}px`;

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
          key={level}
          data-testid="dataGridRowConnector"
          className={`${classes["connector"]} ${classes[variant]} ${offsetLeftClass}`}
        />
      );
    } else if (!isLastChild) {
      return (
        <div
          key={level}
          data-testid="dataGridRowConnector"
          className={`${classes["connector"]} ${classes["vertical"]}  ${offsetLeftClass}`}
        />
      );
    }
    return null;
  };

  const renderNestedRow = () => {
    if (rowTemplate && item && nestedItemsKey && item[nestedItemsKey] && isRowExpanded) {
      const nestedItemsArray: T[] = item[nestedItemsKey] as T[];
      const getIndentationLevel = (index: number) => ({
        level: indentationLevel + 1,
        isLastChild: index + 1 === nestedItemsArray.length
      });

      return nestedItemsArray.map((item, index) => {
        return React.cloneElement(rowTemplate({ item, index }), {
          searchValue,
          headers,
          spacing,
          disableContextMenuColumn,
          item,
          nestedRowProps: {
            rowTemplate,
            enableNestedRow,
            nestedItemsKey,
            indentationLevel: indentationLevel + 1,
            indentationLevels:
              indentationLevels && nestedItemsArray
                ? [...indentationLevels, getIndentationLevel(index)]
                : [getIndentationLevel(index)]
          }
        });
      });
    }
  };

  return {
    renderNestedRow,
    renderNestedRowConnectors,
    getNestedChildSpacing,
    hasNestedChildren
  };
};
