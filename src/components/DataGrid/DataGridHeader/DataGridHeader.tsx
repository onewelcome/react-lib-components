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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef, useEffect, useState } from "react";
import { Direction, HeaderCell, OnSortFunction, Sort } from "../datagrid.interfaces";
import { DataGridHeaderCell } from "./DataGridHeaderCell";
import classes from "./DataGridHeader.module.scss";

export interface Props extends ComponentPropsWithRef<"thead"> {
  headers: HeaderCell[];
  initialSort?: Sort;
  onSort?: OnSortFunction;
  enableExpandableRow?: boolean;
  enableNestedRows?: boolean;
  disableContextMenuColumn?: boolean;
  enableMultiSorting?: boolean;
  spacing?: React.CSSProperties;
}

const sortingStates = [undefined, "ASC", "DESC"] as (Direction | undefined)[];

const DataGridHeaderComponent: ForwardRefRenderFunction<HTMLTableSectionElement, Props> = (
  {
    initialSort,
    onSort,
    headers,
    disableContextMenuColumn,
    enableExpandableRow,
    enableNestedRows,
    enableMultiSorting,
    spacing,
    ...rest
  }: Props,
  ref
) => {
  const [sortList, setSortList] = useState(initialSort ?? []);

  useEffect(() => {
    setSortList(initialSort ?? []);
  }, [initialSort]);

  const calculateNextSortState = (direction?: Direction) => {
    const currentDirectionIdx = sortingStates.findIndex(item => item === direction);
    return sortingStates[currentDirectionIdx + (1 % sortingStates.length)];
  };

  /**
   * The sortList contains sorting columns objects. The order of those objects determines priorities of sorting.
   * Last modified sorting column has the highest priority.
   */
  const updateSortList = (name: string): Sort => {
    const current = sortList.find(item => item.name === name);
    const restSortList = enableMultiSorting ? sortList.filter(item => item.name !== name) : [];
    const newSortDirection = calculateNextSortState(current?.direction);
    return newSortDirection
      ? [{ name, direction: newSortDirection }, ...restSortList]
      : restSortList;
  };

  const wrapOnSort = (name: string) => {
    const newSort = updateSortList(name);
    onSort?.(newSort);
    setSortList(newSort);
  };

  const headerCells = headers.map((header, index) => {
    if (header.hidden) {
      return null;
    }

    let headerStyle: React.CSSProperties = {
      textAlign: header.align ?? "left"
    };

    if (index === 0) {
      headerStyle.paddingLeft = spacing?.paddingLeft;
    }
    if (index === headers.length - 1 && disableContextMenuColumn) {
      headerStyle.paddingRight = spacing?.paddingRight;
    }

    const sort = sortList.find(item => item.name === header.name);
    return (
      <DataGridHeaderCell
        key={header.name}
        name={header.name}
        headline={header.headline}
        disableSorting={header.disableSorting ?? !onSort}
        onSort={wrapOnSort}
        activeSortDirection={sort?.direction}
        style={headerStyle}
      />
    );
  });

  return (
    <thead {...rest} ref={ref}>
      <tr className={classes["row"]}>
        {enableExpandableRow && (
          <td style={{ paddingRight: spacing?.paddingRight }} aria-label="expandable row"></td>
        )}
        {headerCells}
        {!disableContextMenuColumn && (
          <td
            style={{ paddingRight: spacing?.paddingRight }}
            aria-label="context menu"
            className={classes["context-menu"]}
          ></td>
        )}
      </tr>
    </thead>
  );
};

export const DataGridHeader = React.forwardRef(DataGridHeaderComponent);
